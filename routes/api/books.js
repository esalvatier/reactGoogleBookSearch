const router = require("express").Router();
const db = require("../../models");

router.get("/books", (req, res) => {
  db.Book.findAll({}).then(dbBooks => res.json(dbBooks)).catch(err => res.status(422).json(err));
})

router.post("/books", (req, res) => {
  db.Book.create(req.body).then(dbBook => res.json(dbBook)).catch(err => res.status(422).json(err));
})

router.delete("/book/:id", (req, res) => {
  db.Book.findByIdAndDelete({_id: req.params.id})
    .then(dbBook => {
      console.log("success")
      res.json(dbBook)})
    .catch(err => res.status(422).json(err))
})

module.exports = router;