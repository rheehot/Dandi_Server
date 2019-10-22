const tokenMiddleware = require('../../middleware/auth'); //middleware
const adminPageCtrl = require('./adminPage.ctrl');
const router = require('express').Router();

router.get('/', tokenMiddleware, adminPageCtrl.getUserData);
router.get('/await', tokenMiddleware, adminPageCtrl.awaitUser);
router.get('/allow', tokenMiddleware, adminPageCtrl.allowUser);
router.delete('/reject', tokenMiddleware, adminPageCtrl.rejectUser);

module.exports = router;
