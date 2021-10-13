//TA04 PLACEHOLDER
const express = require('express');
const router = express.Router();
const session = require('express-session');
const app = express();


router.get('/', (req, res, next) => {
    app.use(session{
        
    })



  res.render('pages/ta05', {
    title: 'Team Activity 05',
    path: '/ta04', // For pug, EJS
    activeTA05: true, // For HBS
    contentCSS: true, // For HBS
  });
});

module.exports = router;
