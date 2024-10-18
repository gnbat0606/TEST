import express from "express";
import cors from "cors"
import { UserModel } from "./database/models/users.model";
import { connectDatabase } from "./database/config";

const app = express();
app.use(express.json())
app.use(cors())
connectDatabase()

app.get('/',async (req,res)=> {
    const result  = await UserModel.find()
    res.send(result)

})

app.post('/register', async (req,res)=> {
    await UserModel.create({
        firstName: "asddd",
        lastName:"asddd",
        email: "asddd"
    })
    
    // await UserModel.findByIdAndUpdate(
    //     {_id: "670c92cb93a09cdf496a74c4"},
    //     {email: "sda"}
    // )
    
    // await UserModel.findByIdAndDelete(
    //     {_id: "670c92cb93a09cdf496a74c4"},
    // )
    
    res.send("success")
})


app.listen(8000, ()=> {
    console.log("http://localhost:8000")
})