const {reserveUserData, reserveSitterData,
    isAuthorized, checkRefreshToken,
    findUserData, findSitterData,
    findreserveUserlist, findreserveSitterlist } = require('../modules')

    module.exports = {
        petuser: {
            post: async (req, res) => {
                const accessTokenData = isAuthorized(req)
                const refreshTokenData = checkRefreshToken(req)
                const contentData = req.body
                if (accessTokenData && refreshTokenData || !accessTokenData && refreshTokenData) {
                    const { email } = accessTokenData || refreshTokenData
                    const userInfo = await findUserData({ email })
                    if (contentData) {
                        const reservingData = await reserveUserData(contentData, userInfo.id) // 위의 두 변수는 객체로 들어가야함.
                        res.status(200).json({ message: "ok it is done" })
                    } else {
                        res.status(403).json({ data: null, message: 'no data came in' })
                    }
                } else {
                    res.status(404).json({ data: null, message: "invalid token" })
                }
            },
            get : async (req, res) =>{
                const {location} = req.query
                // console.log(req.query)
                if(location){
                    const reserveUserlist = await findreserveUserlist({location : location})
                    // console.log(reserveUserlist)
                    if(reserveUserlist.length !== 0){
                        res.status(200).json({data : reserveUserlist, message : "ok"})
                    }else{
                        res.json({message : "not registered yet"})
                    }
                }else{
                    res.status(403).json({data : null, message: 'no data came in'})
                }
            }
        },
      
        petsitter: {
            post: async (req, res) => {
                const accessTokenData = isAuthorized(req)
                const refreshTokenData = checkRefreshToken(req)
                const contentData = req.body
                console.log(req.body)
                if (accessTokenData && refreshTokenData || !accessTokenData && refreshTokenData) {
                    const { email } = accessTokenData || refreshTokenData
                    const userInfo = await findSitterData({ email })
                    if (contentData && userInfo) {
                        const reservingData = await reserveSitterData(contentData, userInfo.id) // 위의 두 변수는 객체로 들어가야함.
                        res.status(200).json({ message: "ok it is done" })
                    } else {
                        res.status(403).json({ data: null, message: 'no data came in' })
                    }
                } else {
                    res.status(404).json({ data: null, message: "invalid token" })
                }
            },

            get : async (req, res) => {
                const {location} = req.query
                if(location){
                    const reserveSitterlist = await findreserveSitterlist({location : location})
                    if(reserveSitterlist.length !== 0){
                        res.status(200).json({data : reserveSitterlist, message : "ok"})  
                    }else{
                        res.json({message : "not registered yet"})
                    }
                 
                }else{
                    res.status(403).json({data : null, message: 'no data came in'})
    
                }
            }
        }
    }