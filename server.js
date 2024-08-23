const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require('body-parser');
const { ConnectDb } = require("./config/dbconnection");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;

ConnectDb();

app.use(cors({
  origin: 'https://nextjs-signin-and-signup.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,  // Ensure this is set if you are sending cookies or credentials
}));
app.options('*', cors());

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
app.use(express.json());

app.use("/api/user", require("./routes/authenticationRoutes"));

app.get("/", (req, res) => {
  res.send("Welcome to the User Authentication API");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});