const jwt = require('jsonwebtoken');
require('dotenv').config();
const {
    petuser, petsitter,
    petuser_registration, petsitter_registration,
    booking_petsitter, booking_petuser } = require('../../models')


module.exports = {


    createAccessToken: (data) => {
        return jwt.sign(data, process.env.ACCESS_SECRET, { expiresIn: '1h' })

    },

    createRefreshToken: (data) => {
        return jwt.sign(data, process.env.REFRESH_SECRET, { expiresIn: '1d' })

    },

    isAuthorized: (req) => {
        const authorization = req.headers["authorization"]
        //console.log(authorization);

        if (!authorization) {
            return null
        } else {
            // ! 여기는 들어오는 값에 따라서 바꾸어야 할 수도 있음.
            const token = authorization.split(' ')[1];

            try {
                return jwt.verify(token, process.env.ACCESS_SECRET)
            } catch (err) {
                return null;
            }
        }
    },


    checkRefreshToken: (req) => {

        const refreshToken = req.cookies.refreshToken;
        // console.log(req)
        // console.log(refreshToken)
        // const token = refreshToken.split('=')[1]

        try {
            return jwt.verify(refreshToken, process.env.REFRESH_SECRET)
        } catch (e) {
            return null;
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
    },

    deleteUserData: async (data) => {
        await petuser.destroy({
            where: data
        })
    },

    deleteSitterData: async (data) => {
        await petsitter.destroy({
            where: data
        })
    },

    reserveUserData: async (data, id) => {

        petuser_registration.create({
            location: data.location,
            payment: data.payment,
            content: data.content,
            startdate: data.startdate,
            enddate: data.enddate,
            days: data.days,
            petuser_id: id
        })
    },

    reserveSitterData: async (data, id) => {

        petsitter_registration.create({
            location: data.location,
            payment: data.payment,
            startdate: data.startdate,
            enddate: data.enddate,
            days: data.days,
            content: data.content,
            date: data.date,
            petsitter_id: id
        })
    },

    findreserveUserlist: async (location) => {

        const userlists = await petuser_registration.findAll({
            where: location,
            include: [petuser]
        })

        return userlists;

    },

    findreserveSitterlist: async (location) => {

        const sitterlists = await petsitter_registration.findAll({
            where: location,
            include: [petsitter]
        })

        // console.log(sitterlists)
        return sitterlists;

    },

    bookingUserData: async (data, id) => {
        booking_petuser.create({
            location: data.location,
            isBooking: false,
            startdate: data.startdate,
            enddate: data.enddate,
            days: data.days,
            payment: data.payment,
            petuser_id: id
        })
    },

    bookingSitterData: async (data, id) => {
        booking_petsitter.create({
            location: data.location,
            isBooking: false,
            startdate: data.startdate,
            enddate: data.enddate,
            days: data.days,
            payment: data.payment,
            petsitter_id: id
        })
    },

    findBookingUserlist: async (id) => {
        const bookingUserlists = await booking_petuser.findAll({
            where: id,
            include: [petuser]
        })

        //console.log(bookingUserlists)

        return bookingUserlists;
    },

    findBookingSitterlist: async (id) => {
        const bookingSitterlists = await booking_petsitter.findAll({
            where: id,
            include: [petsitter]
        })

        // console.log(bookingSitterlists)

        return bookingSitterlists;

    }
}