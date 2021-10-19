const express = require("express");
const cors = require("cors");
const path = require("./config/paths");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`running on the PORT: ${PORT}`);
});
