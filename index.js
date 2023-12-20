const express = require("express");
const connectDb = require("./db");
const signinRouter = require("./routers/signin");
const loginRouter = require("./routers/login");
const homeRouter = require("./routers/home");
const forgotRouter = require("./routers/forgot");
 

const cors = require("cors");

const app = express();
const PORT =4004;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin:"*"}));
connectDb();


app.get("/",(req,res)=>{
    res.send("hello world");
});

app.use("/signin",signinRouter);
app.use("/login",loginRouter);
app.use("/home",homeRouter);
app.use("/forgot",forgotRouter);
 
 

app.listen(PORT,()=>{
    console.log(`App listening on PORT:${PORT}`);
}) 

