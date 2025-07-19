const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message:
      "Saludos desde el Backend en el front. funcionando correctamente ✅",
  });
});

module.exports = router;
