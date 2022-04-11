module.exports = (req, res) =>{
    res.clearCookie('refreshToken').redirect('/')
}