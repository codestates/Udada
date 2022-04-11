const {isAuthorized, checkRefreshToken, deleteUserData, deleteSitterData} = require('../modules')

module.exports = {
    // 여기는 회원 탈퇴 했을 때의 내용을 적어야함.
    //토큰을 확인하고, 해당 토큰에 대한 아이디 값을 기반으로 delete를 구현하면 되겠다.
    
    petuser : async (req, res) =>{
        const accessTokenData = isAuthorized(req)
        console.log(accessTokenData)
        const refreshTokenData = checkRefreshToken(req)

        if(accessTokenData && refreshTokenData || !accessTokenData && refreshTokenData){
            deleteUserData({ email : accessTokenData ? accessTokenData.email : refreshTokenData.email})
            res.status(200).json({message : "good bye"})
        }else{
            res.status(403).json({message : 'not Authorized'})
        }

        if(accessTokenData && !refreshTokenData){
            return res.json({message :'invalid access token'})
        }

        if(!accessTokenData && !refreshTokenData){
            return res.json({message :'not Authorized'})
        }



    },

    petsitter : (req, res) =>{
        const accessTokenData = isAuthorized(req)
        const refreshTokenData = checkRefreshToken(req)

        if(accessTokenData && refreshTokenData || !accessTokenData && refreshTokenData){
            deleteSitterData({ email : accessTokenData ? accessTokenData.email : refreshTokenData.email})
            res.status(200).json({message : "good bye"})
        }else{
            res.status(403).json({message : 'not Authorized'})
        }

        if(accessTokenData && !refreshTokenData){
            return res.json({message :'invalid access token'})
        }

        if(!accessTokenData && !refreshTokenData){
            return res.json({message :'not Authorized'})
        }
    }
    

    




    
}