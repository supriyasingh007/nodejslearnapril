
// const express = require("express") //commonjs-type
import express from "express"; // module-type

const app = express();

const port = 4000;
//server instanse
app.listen(port, () => console.log(`server is listening port ${port}`))




const work = () => {
    //aaaa

    return 1;

}

const work2 = () => 1;