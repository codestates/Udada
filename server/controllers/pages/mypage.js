const {isAuthorized, checkRefreshToken, findUserData, findSitterData, createAccessToken, createRefreshToken} = require('../modules')

module.exports = {
    get : (req, res) =>{
        const accessTokenData = isAuthorized(req)
        const refreshTokenData = checkRefreshToken(req)

        // accessToken도 있고 Refresh도 있는 경우
        if(accessTokenData && refreshTokenData){
            const {email} = accessTokenData

            // ! 아래의 petuser와 petsitter의 데이터를 찾을 때 따로 구분하여 찾지말고 join을 이용해서 가져오자.
            const petuserData = findUserData({email})
            const petsitterData = findSitterData({email})

            if(petuserData && !petsitterData){
                delete petuserData.password
                return res.status(200).json({data:{petuserData}, messages:"ok"})
            }
            if(petsitterData && !petuserData){
                delete petsitterData.password
                return res.status(200).json({data:{petsitterData}, messages:"ok"})
            }

        }

        // accessToeken이 없고 Refresh가 있는 경우
        if(!accessTokenData && refreshTokenData){
            const {email} = refreshTokenData

            const petuserData = findUserData({email})
            const petsitterData = findSitterData({email})
            

            if(petuserData && !petsitterData){
                delete petuserData.password
                let {name, age, email, phoneNumber} = petuserData
                const accessToken = createAccessToken({name, age, email, phoneNumber})
                return res.status(200).json({data: {accessToken, petuserData,message:"ok"}})
            }

            if(petsitterData && !petuserData){
                delete petsitterData.password
                let {name, age, email, phoneNumber} = petsitterData
                const accessToken = createAccessToken({name, age, email, phoneNumber})
                return res.status(200).json({data: {accessToken, petsitterData,message:"ok"}})
            }
        }
        
        if(accessTokenData && !refreshTokenData){
            return res.json({data : null, message :'invalid access token'})
        }

        if(!accessTokenData && !refreshTokenData){
            return res.json({data : null, message :'invalid access token'})
        }
    },

    post : (req, res) =>{
        
        const accessTokenData = isAuthorized(req)
        const refreshTokenData = checkRefreshToken(req)

        if(accessTokenData && refreshTokenData){
            const {email} = accessTokenData
            const petuserData = findUserData({email})
            const petsitterData = findSitterData({email})

            if(petuserData && !petsitterData){
                petuserData.update({
                    name : req.body.name,
                    age : req.body.age,
                    phoneNumber : req.body.phoneNumber,
                    content : req.body.content,
                    password : req.body.password
                },
                {where : {email}})
                const {name, age, phoneNumber, email} = petuserData
                const accessToken = createAccessToken({name, age, phoneNumber, email})
                const refreshToken = createRefreshToken({name, age, phoneNumber, email})
                return res.status(200).cookie("refreshToken",refreshToken,{httpOnly: true}).json({data:{accessToken},message:"ok"})

            }

            if(petsitterData && !petuserData){
                petsitterData.update({
                    name, age, phoneNumber, content, password
                },
                {where : {email}})
                const {name, age, phoneNumber, email} = petsitterData
                const accessToken = createAccessToken({name, age, phoneNumber, email})
                const refreshToken = createRefreshToken({name, age, phoneNumber, email})
                return res.status(200).cookie("refreshToken",refreshToken,{httpOnly: true}).json({data:{accessToken},message:"ok"})

            }
        }
        
        if(!accessTokenData && refreshTokenData){
            const {email} = refreshTokenData
            const petuserData = findUserData({email})
            const petsitterData = findSitterData({email})

            if(petuserData && !petsitterData){
                petuserData.update({
                    name : req.body.name,
                    age : req.body.age,
                    phoneNumber : req.body.phoneNumber,
                    content : req.body.content,
                    password : req.body.password
                },
                {where : {email}})
                const {name, age, phoneNumber, email} = petuserData
                const accessToken = createAccessToken({name, age, phoneNumber, email})
                const refreshToken = createRefreshToken({name, age, phoneNumber, email})
                return res.status(200).cookie("refreshToken",refreshToken,{httpOnly: true}).json({data:{accessToken},message:"ok"})
            }

            if(petsitterData && !petuserData){
                petsitterData.update({
                    name, age, phoneNumber, content, password
                },
                {where : {email}})
                const {name, age, phoneNumber, email} = petsitterData
                const accessToken = createAccessToken({name, age, phoneNumber, email})
                const refreshToken = createRefreshToken({name, age, phoneNumber, email})
                return res.status(200).cookie("refreshToken",refreshToken,{httpOnly: true}).json({data:{accessToken},message:"ok"})

            }
        }

        if(accessTokenData && !refreshTokenData){
            return res.json({data : null, message :'invalid access token'})
        }

        if(!accessTokenData && !refreshTokenData){
            return res.json({data : null, message :'invalid access token'})
        }

    }
    
}




