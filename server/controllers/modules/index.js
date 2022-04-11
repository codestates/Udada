const jwt = require('jsonwebtoken');
require('dotenv').config();
const { petuser, petsitter } = require('../../models')

module.exports = {

    createAccessToken: (data) => {
        return jwt.sign(data, process.env.ACCESS_SECRET, { expiresIn: '15m' })
    },

    createRefreshToken: (data) => {
        return jwt.sign(data, process.env.REFRESH_SECRET, { expiresIn: '1d' })

    },

    isAuthorized: (req) => {
        const authorization = req.headers["authorization"]

        if (!authorization) {
            return null
        } else {
            // ! 여기는 들어오는 값에 따라서 바꾸어야 할 수도 있음.
            const token = authorization.split('=')[1];

            try {
                return jwt.verify(token, process.env.ACCESS_SECRET)
            } catch (err) {
                return null;
            }
        }
    },

    checkRefreshToken: (req) => {
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
            return null
        } else {
            try {
                return jwt.verify(token, process.env.REFRESH_SECRET)
            } catch (e) {
                return null;
            }
        }

    },

    // TODO 아래의 petuser와 petsitter의 데이터를 찾을 때 따로 구분하여 찾지말고 join을 이용해서 가져오자.
    findUserData: async (data) => {
        // console.log(data)

        const petuserData = await petuser.findOne({
            where: data
        })
        if (petuserData) {
            //console.log(petuserData)
            return petuserData
        }
        return null;


    },

    findSitterData: async (data) => {

        const petsitterData = await petsitter.findOne({
            where: data
        })

        if (petsitterData) {
            // console.log(petsitterData)
            return petsitterData
        }

        return null;


    }
}