import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
dotenv.config()


const app=express()
app.use(cookieParser())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
const PORT=3000 || process.env.PORT
app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`);
    

})