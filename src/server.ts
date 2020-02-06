import express from "express";

const app = express();

app.get("/hi", (req, res) => {
  res.json({
    hello: "world"
  });
});

app.get("/bye", (req, res) => {
  res.json({
    bye: "world"
  });
});

app.listen(3010, "0.0.0.0", () => {
  console.log("listening");
});
