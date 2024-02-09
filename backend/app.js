const express = require("express")
const cors = require("cors")
const app = express()
const signupRouter = require("./routers/signup_router")
const bodyParser = require('body-parser');
const loginRouter = require('./routers/login_router')
const mongoose = require("mongoose")

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://elementary-suggested.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/signup', signupRouter);
app.use('/login', loginRouter);


const uri = "mongodb+srv://acelmargallo04:MkfhoIf8tNp0yB7u@cluster0.yw4ydrg.mongodb.net/?retryWrites=true&w=majority";
const port = 5000;

app.listen(port, () => {
    console.log(`Server running on port: ${port}...`);
});

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connection connected"))
    .catch((error) => console.error("MongoDB connection failed:", error));