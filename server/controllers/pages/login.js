const {createAccessToken, createRefreshToken, findUserData, findSitterData} = require('../modules')

module.exports = async (req, res) =>{
    
    const {email, password} = req.body
    const petuserInfo = findUserData({email, password})
    const petsitterInfo = findSitterData({email, password})

    // TODO 토큰에 담아 client에 넘겨줄 값(이름/나이/이메일/폰번호)

    if(!petuserInfo && !petsitterInfo){
        res.status(404).send("invalid user")
    }
    if(petuserInfo && !petsitterInfo) {
        
        delete petuserInfo.password
        const {name, age, email, phoneNumber} = petuserInfo

        // TODO 아래의 petuser와 petsitter의 데이터를 찾을 때 따로 구분하여 찾지말고 join을 이용해서 가져오자.
        const accessToken = createAccessToken({name, age, email, phoneNumber})
        const refreshToken = createRefreshToken({name, age, email, phoneNumber})

        return res.status(200).cookie("refreshToken" , refreshToken, {httpOnly: true}).json({data : {accessToken}, message : "ok"})
    }
    if(petsitterInfo && !petuserInfo) {

        delete petsitterInfo.password
        const {name, age, email, phoneNumber} = petsitterInfo

        // TODO 아래의 petuser와 petsitter의 데이터를 찾을 때 따로 구분하여 찾지말고 join을 이용해서 가져오자.
        const accessToken = createAccessToken({name, age, email, phoneNumber})
        const refreshToken = createRefreshToken({name, age, email, phoneNumber})

        return res.status(200).cookie("refreshToken" , refreshToken, {httpOnly: true}).json({data:{accessToken},message : "ok"})
    }
}

// access와 refresh를 모아두는 폴더를 따로 만들자.
// refresh 토큰이 쿠키에 있는 상태로 홈페이지의 요청이 들어오게 되면 accessToken을 발급하여 login 상태로 만들어보자.
// accessToken과 refreshToken은 데이터 요청시에 확인해야하는 부분. -> myPage에서 확인해야함. (두가지를 합쳐서 생각해야하는 부분.)
