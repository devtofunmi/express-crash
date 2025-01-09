/* jshint esversion: 6 */
import express from "express";
import path from "path";
import posts from "./routes/posts.js";
const port = process.env.PORT || 8000;

const app = express();

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/posts", posts);




app.get("/", (req, res) => {
  res.send("hello mofos");
});





app.listen(port, () => console.log(`server is running on port ${port}`));
