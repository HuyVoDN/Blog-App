import express from 'express';
import postRoutes from "./routes/posts.js"; 
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js"; 
import cors from 'cors';
import cookieParser from 'cookie-parser';
import multer from 'multer';
const app = express();

app.use(cors({credentials: true, origin: 'http://localhost:5173'}));
app.use(express.json());
app.use(cookieParser());

// app.get("/test", (req, res) => {
//     res.json("My ass");
// }); //test
const upload = multer({dest: 'uploads/'});
app.post('/upload', upload.single('file'), function (req, res){
    res.status(200).json("Image has been uploaded.");

});

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

app.listen(8800, () => {
    console.log("Connected to server");
});