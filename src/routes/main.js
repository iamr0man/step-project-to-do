const {
    Note
} = require('../models/note');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    Note.find().sort({name:1})
    .then((notelist) => {
      res.render('index', { title: 'Lists and Notes', notelist });
      
    })
    .catch(() => { res.send('Sorry! Something went wrong.'); });
});
router.delete('/', async (req, res) => {
    Note.deleteMany({},function(err) {
        if(err) { return handleError(res, err); }
        return res.send(204);
      });
});



module.exports = router;
