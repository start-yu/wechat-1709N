const EXPRESS = require('express');
const WEICHAT = require('wechat');

let config = {
    appid: 'wxd29115390c39d130',
    token: 'weixin',
    encodingAESKey: 'cbqIt86C0vd14ArjfOSDionCsPuTCMB702D23XYW13U',
};

let app = new EXPRESS();

app.use(EXPRESS.query());

app.get('/', WEICHAT(config, (req, res, next) => {
    let message = req.weixin;
    console.log(message);
}));

app.listen(3000);