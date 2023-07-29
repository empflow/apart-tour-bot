import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => console.log(`Web server started on port ${PORT}`));
