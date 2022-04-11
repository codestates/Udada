const {isAuthorized, checkRefreshToken, findUserData, findSitterData, createAccessToken, createRefreshToken} = require('../modules')

module.exports = {
    petuser :  {
        get : async (req, res) => {
            // console.log(req.cookies.refreshToken)
            // console.log(req.headers)
            const accessTokenData = isAuthorized(req)
            // console.log(accessTokenData)
            const refreshTokenData = checkRefreshToken(req)
            // console.log(refreshTokenData)

            // accessToken도 있고 Refresh도 있는 경우
            if(accessTokenData && refreshTokenData){
                const {email} = accessTokenData

                const petuserData = await findUserData({email})
                // console.log(petuserData)
                if(petuserData){
                    delete petuserData.password
                    return res.status(200).json({data:{petuserData}, messages:"ok"})
                }else{
                    return res.json({data : null, message :'not Authorized'})
                }
            }

            // accessToeken이 없고 Refresh가 있는 경우
            if(!accessTokenData && refreshTokenData){
                const {email} = refreshTokenData

                const petuserData = await findUserData({email})

                if(petuserData){
                    delete petuserData.password
                    let {name, age, email, phoneNumber} = petuserData
                    const accessToken = createAccessToken({name, age, email, phoneNumber})
                    return res.status(200).json({data: {accessToken, petuserData,message:"ok"}})
                }else{
                    return res.json({data : null, message :'invalid refresh token'})
                }
            }
            
            if(accessTokenData && !refreshTokenData){
                return res.json({data : null, message :'invalid access token'})
            }

            if(!accessTokenData && !refreshTokenData){
                return res.json({data : null, message :'not Authorized'})
            }
        },


        post : async (req, res) =>{
            const accessTokenData = isAuthorized(req)
            // console.log(accessTokenData)
            const refreshTokenData = checkRefreshToken(req)

            if(accessTokenData && refreshTokenData || !accessTokenData && refreshTokenData){
                const {email} = accessTokenData
                const petuserData = await findUserData({email})
                // console.log(petuserData)

                if(petuserData){
                    petuserData.update({
                        name : req.body.name,
                        age : req.body.age,
                        phoneNumber : req.body.phoneNumber,
                        content : req.body.content,
                        password : req.body.password
                    },
                    {where : {email : accessTokenData ? accessTokenData.email : refreshTokenData.email}})
                    const {name, age, phoneNumber, email} = petuserData
                    const accessToken = createAccessToken({name, age, phoneNumber, email})
                    const refreshToken = createRefreshToken({name, age, phoneNumber, email})
                    return res.status(200).cookie("refreshToken",refreshToken,{httpOnly: true}).json({data:{accessToken},message:"ok"})
                }else{
                    return res.json({data: null, message:'not Authorized'})
                }
            }

            if(accessTokenData && !refreshTokenData){
                return res.json({data : null, message :'invalid access token'})
            }

            if(!accessTokenData && !refreshTokenData){
                return res.json({data: null, message:'not Authorized'})
            }

        }
    },

    petsitter : {
        get : async (req, res) => {
            // console.log(req.headers)
            const accessTokenData = isAuthorized(req)
            const refreshTokenData = checkRefreshToken(req)

            // accessToken도 있고 Refresh도 있는 경우
            if(accessTokenData && refreshTokenData){
                const {email} = accessTokenData

                const petsitterData = await findSitterData({email})
                if(petsitterData){
                    delete petsitterData.password
                    return res.status(200).json({data:{petsitterData}, messages:"ok"})
                }else{
                    return res.json({data : null, message :'not Authorized'})
                }
            }

            // accessToeken이 없고 Refresh가 있는 경우
            if(!accessTokenData && refreshTokenData){
                const {email} = refreshTokenData

                const petsitterData = await findSitterData({email})

                if(petsitterData){
                    delete petsitterData.password
                    let {name, age, email, phoneNumber} = petsitterData
                    const accessToken = createAccessToken({name, age, email, phoneNumber})
                    return res.status(200).json({data: {accessToken, petsitterData,message:"ok"}})
                }else{
                    return res.json({data : null, message :'invalid refresh token'})
                }
            }
            
            if(accessTokenData && !refreshTokenData){
                return res.json({data : null, message :'invalid access token'})
            }

            if(!accessTokenData && !refreshTokenData){
                return res.json({data : null, message :'not Authorized'})
            }
        },

        post : async (req, res) => {
            const accessTokenData = isAuthorized(req)
            // console.log(accessTokenData)
            const refreshTokenData = checkRefreshToken(req)
            // console.log(refreshTokenData)

            if(accessTokenData && refreshTokenData || !accessTokenData && refreshTokenData){
                const {email} = accessTokenData || refreshTokenData
                // console.log(refreshTokenData.email)
                const petsitterData = await findSitterData({email})

                if(petsitterData){
                    petsitterData.update({
                        name : req.body.name,
                        age : req.body.age,
                        phoneNumber : req.body.phoneNumber,
                        content : req.body.content,
                        password : req.body.password
                    },
                    {where : {email : accessTokenData ? accessTokenData.email : refreshTokenData.email}})
                    const {name, age, phoneNumber, email} = petsitterData
                    const accessToken = createAccessToken({name, age, phoneNumber, email})
                    const refreshToken = createRefreshToken({name, age, phoneNumber, email})
                    return res.status(200).cookie("refreshToken",refreshToken,{httpOnly: true}).json({data:{accessToken},message:"ok"})
                }else{
                    return res.json({data: null, message:'not Authorized'})
                }
            }

            if(accessTokenData && !refreshTokenData){
                return res.json({data : null, message :'invalid access token'})
            }

            if(!accessTokenData && !refreshTokenData){
                return res.json({data: null, message:'not Authorized'})
            }
        }
    }
}




