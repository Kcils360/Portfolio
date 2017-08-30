const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const requestProxy = require('express-request-proxy');

app.use(express.static('./public'));

app.get('/github/*', proxyGithub);

function proxyGithub(req, res){
  (requestProxy({
    url: `https://api.github.com/${req.params[0]}`,
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
  }))(req, res);
}

app.get('/', (req, res) => {
  res.sendFile('index.html')
});



app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
