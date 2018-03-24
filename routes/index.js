const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api/apiRoutes');
const searchRoute = require('./searchRoute');

router.use('/api', apiRoutes);
router.use('/search', searchRoute);

router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;