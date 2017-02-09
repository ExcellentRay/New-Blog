var express = require('express');
var router = express.Router();

// 登录验证
var checkLogin = require('../middlewares/check').checkLogin;

// GET /signout 登出
router.get('/', checkLogin, function(req, res, next) {
  // 清空session中的用户信息
  req.user.session = null;
  console.log('req', req.user.session);
  req.flash('success', '登出成功');
  req.redirect('/posts');
});

module.exports = router;