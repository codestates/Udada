const { petuser, petsitter } = require('../../models')
const { createAccessToken, createRefreshToken, findSitterData, findUserData } = require('../modules')
module.exports = {

    petsitter: async (req, res) => {
        // console.log(req.body)
        const { name, age, password, email, phoneNumber, photo, location, license, content } = req.body

        if (!name || !email || !password || !phoneNumber || !age) {
            return res.status(422).send("insufficient parameters supplied")
        }


        if (name && email && password && phoneNumber && age) {
            const [petsitterInfo, created] = await petsitter.findOrCreate({
                where: { email }, // 중복되면 안되는 값은 email로 정함
                defaults: {
                    name, age, password, email, phoneNumber, photo, location, license, content
                }
            })

            if (!created) {
                return res.status(409).send("This is already registered information.")
            } else {
                const accessToken = createAccessToken({ name, age, email, phoneNumber })
                const refreshToken = createRefreshToken({ name, age, email, phoneNumber })
                return res.status(201).cookie("refreshToken", refreshToken, { httpOnly: true }).json({ data: { accessToken }, message: "ok" })
            }
        }
    },

    petuser: async (req, res) => {
        // TODO 토큰에 담아 client에 넘겨줄 값(이름/나이/이메일/폰번호)
        // ? 회원가입에 들어오는 내용
        // location caretype, howmany, age, howbig, content, email, name, date, password, phoneNumber, photo

        console.log(req.body)
        const { name, age, password, email, phoneNumber, photo, location, careType, content, howBig, petAge } = req.body

        if (!name || !email || !password || !phoneNumber || !age) {
            return res.status(422).send("insufficient parameters supplied")
        }

        if (name && email && password && phoneNumber && age) {
            const [petuserInfo, created] = await petuser.findOrCreate({
                where: { email }, // 여기는 찾는 항목.
                defaults: { // 찾고나서 없을 때 추가하는 항목
                    name, password, email, phoneNumber, age, photo, location, careType, content, howBig, petAge
                }
            })

            if (!created) {
                return res.status(409).send("This is already registered information.")
            } else {
                const accessToken = createAccessToken({ name, age, email, phoneNumber })
                const refreshToken = createRefreshToken({ name, age, email, phoneNumber })
                return res.status(201).cookie("refreshToken", refreshToken, { httpOnly: true }).json({ data: { accessToken }, message: "ok" })
            }

        }
    }

}