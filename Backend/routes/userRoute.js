const express = require('express');
const {getFeeds, getfeedById,postFeed,feedReply} = require('../controllers/userController')

const router = express.Router();

router.get('/feeds',getFeeds);
router.get('/feeds/:id', getfeedById);
router.post('/feeds/addfeed',postFeed);
router.post('/feeds/:id/reply',feedReply);

module.exports = router;