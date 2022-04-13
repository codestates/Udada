const { createAccessToken, createRefreshToken, findUserData, findSitterData } = require('../modules')

module.exports = {
    // console.log(req.body)

    petsitter: async (req, res) => {
        const { email, password } = req.body
        const petsitterInfo = await findSitterData({ email, password })

        if (!petsitterInfo) {
            return res.status(404).send("invalid user")
        } else {
            delete petsitterInfo.password
            const { name, age, email, phoneNumber } = petsitterInfo


            const accessToken = createAccessToken({ name, age, email, phoneNumber })
            const refreshToken = createRefreshToken({ name, age, email, phoneNumber })
<<<<<<< HEAD
            console.log('-------petsitter login(refreshtoken)----------')
            console.log(refreshToken);
            return res.status(200).cookie("refreshToken", refreshToken, { httpOnly: true, secure: false}).json({ data: { accessToken }, message: "ok" })
=======
            // console.log('-------petsitter login(refreshtoken)----------')
            // console.log(refreshToken);
            return res.status(200).cookie("refreshToken", refreshToken, { httpOnly: true, sameSite: 'none', secure: true }).json({ data: { accessToken }, message: "ok" })
>>>>>>> 7d9575d93d22d87466f24b83f3a6b7629a6bac9e
        }


    },

    petuser: async (req, res) => {
        const { email, password } = req.body
        const petuserInfo = await findUserData({ email, password })

        if (!petuserInfo) {
            return res.status(404).send("invalid user")
        } else {
            delete petuserInfo.password
            const { name, age, email, phoneNumber } = petuserInfo


            const accessToken = createAccessToken({ name, age, email, phoneNumber })
            const refreshToken = createRefreshToken({ name, age, email, phoneNumber })
            // console.log("------serverlogin------")
            // console.log(refreshToken)
            return res.status(200).cookie("refreshToken", refreshToken, { httpOnly: true }).json({ data: { accessToken }, message: "ok" })

        }
    }

}

