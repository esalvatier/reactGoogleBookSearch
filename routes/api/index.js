const router = require("express").Router();
const googleRoutes = require("./google");
const booksRoutes = require("./books");

router.use("/google", googleRoutes);
router.use("/books", booksRoutes);

module.exports = router;