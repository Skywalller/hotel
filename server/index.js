import express from "express";

const app = express();

function init() {
  app.listen(3000, () => console.log("Example app listening on port 3000!"));
}

init();
