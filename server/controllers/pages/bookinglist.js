const {
    isAuthorized, checkRefreshToken,
    findBookingUserlist, findBookingSitterlist,
    findUserData, findSitterData,
    bookingUserData, bookingSitterData } = require('../modules')

module.exports = {
    petuser: {
        get: async (req, res) => {
            const accessTokenData = isAuthorized(req)
            const refreshTokenData = checkRefreshToken(req)

            const { location } = req.query

            if (accessTokenData && refreshTokenData || !accessTokenData && refreshTokenData) {

                const { email } = accessTokenData || refreshTokenData
                const userInfo = await findUserData({ email })

                if (location) {
                    const bookingUserlist = await findBookingUserlist({ petuser_id: userInfo.id })

                    if (bookingUserlist.length !== 0) {
                        res.status(200).json({ data: bookingUserlist, message: "ok" })
                    } else {
                        res.json({ message: "not registered yet" })
                    }
                } else {
                    res.status(403).json({ data: null, message: 'no data came in' })
                }
            } else {
                res.status(404).json({ data: null, message: "invalid token" })
            }
        },

        post: async (req, res) => {
            const accessTokenData = isAuthorized(req)
            const refreshTokenData = checkRefreshToken(req)
            const contentData = req.body

            if (accessTokenData && refreshTokenData || !accessTokenData && refreshTokenData) {
                const { email } = accessTokenData || refreshTokenData
                const userInfo = await findUserData({ email })

                if (contentData) {
                    const bookingData = await bookingUserData(contentData, userInfo.id) // 위의 두 변수는 객체로 들어가야함.
                    res.status(200).json({ message: "ok it is done" })
                } else {
                    res.status(403).json({ data: null, message: 'no data came in' })
                }
            } else {
                res.status(404).json({ data: null, message: "invalid token" })
            }
        }

    },

    petsitter: {
        get: async (req, res) => {
            const accessTokenData = isAuthorized(req)
            const refreshTokenData = checkRefreshToken(req)

            const { location } = req.query

            if (accessTokenData && refreshTokenData || !accessTokenData && refreshTokenData) {

                const { email } = accessTokenData || refreshTokenData
                const sitterInfo = await findSitterData({ email })

                if (location) {
                    const bookingSitterlist = await findBookingSitterlist({ petsitter_id: sitterInfo.id })

                    if (bookingSitterlist.length !== 0) {
                        res.status(200).json({ data: bookingSitterlist, message: "ok" })
                    } else {
                        res.json({ message: "not registered yet" })
                    }
                } else {
                    res.status(403).json({ data: null, message: 'no data came in' })
                }
            } else {
                res.status(404).json({ data: null, message: "invalid token" })
            }
        },

        post: async (req, res) => {
            const accessTokenData = isAuthorized(req)
            const refreshTokenData = checkRefreshToken(req)
            const contentData = req.body

            if (accessTokenData && refreshTokenData || !accessTokenData && refreshTokenData) {
                const { email } = accessTokenData || refreshTokenData
                const userInfo = await findSitterData({ email })

                if (contentData) {
                    const bookingData = await bookingSitterData(contentData, userInfo.id) // 위의 두 변수는 객체로 들어가야함.
                    res.status(200).json({ message: "ok it is done" })
                } else {
                    res.status(403).json({ data: null, message: 'no data came in' })
                }
            } else {
                res.status(404).json({ data: null, message: "invalid token" })
            }
        }
    }
}