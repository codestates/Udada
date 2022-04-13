require('dotenv').config();

const clientID = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;
const axios = require('axios');

module.exports = {
  oauth: {
    github: async (req, res) => {
        // req의 body로 authorization code가 들어옵니다. console.log를 통해 서버의 터미널창에서 확인해보세요!
        // console.log(req.body);
        // { authorizationCode: 'fake_auth_code' }
        const code = req.body.authorizationCode
      
        // TODO : 이제 authorization code를 이용해 access token을 발급받기 위한 post 요청을 보냅니다. 다음 링크를 참고하세요.
        // https://docs.github.com/en/free-pro-team@latest/developers/apps/identifying-and-authorizing-users-for-github-apps#2-users-are-redirected-back-to-your-site-by-github
      
        const result = await axios({
          url : 'https://github.com/login/oauth/access_token',
          method : 'post',
          data : {
            client_id : clientID,
            client_secret : clientSecret,
            code : code
          },
          headers : {
            accept : 'application/json'
          } 
        })
        // console.log(result.data)
        const AccessToken =result.data.access_token
        console.log(AccessToken)
        // fake_access_token
        
        res.status(200).json({accessToken: AccessToken})
    }
  }
}