const express = require('express');


const router = express.Router();

// Standard middleware function
router.get('/', (req, res, next) => {
  console.log('Get Request in Places');
  res.json({message: 'It works!'});
});

module.exports = router;
