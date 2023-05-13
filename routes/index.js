const express = require('express');
const router = express.Router();

//Routes
router.get('', (req, res) => {
  const locals = {
    title: 'Blog App MEN stack',
    description: "simple blog create with NodeJS, Express"
  }

  res.render('index', {locals});
});

router.get('/about', (req, res) => {
  res.render('about');
})

module.exports = router;