module.exports = (req, res) =>{
    res.cookie('refreshToken',null,{ httpOnly: true, sameSite: 'none', secure: true, maxAge : 0 }).redirect('/')
}