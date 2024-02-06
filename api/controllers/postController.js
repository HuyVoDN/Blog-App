import {db} from "../db.js";
import jwt from "jsonwebtoken";
export const getPosts = (req, res) => {
    const query = req.query.cat ? "SELECT * FROM posts WHERE cat=?" : "SELECT * FROM posts";

    db.query(query,[req.query.cat], (err, result) => {
        if(err)
            return res.status(500).send(err);
        return res.status(200).json(result);
    });

};
export const getPost = (req, res) => {
    const query = "Select `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`, `date` FROM users u JOIN posts p on u.id = p.uid WHERE p.id = ?";
    
    db.query(query, [req.params.id], (err, result) => {
        if(err)
            return res.status(500).json(err);

        return res.status(200).json(result[0]);
    });
    //res.json("u haven't defined a method for getPost yet.");
};
export const addPost = (req, res) => {
    res.json("from controller");
};
export const deletePost = (req, res) => {
    const token = req.cookies.access_token;
    console.log(token);
    if(!token)
        {
            console.log("Cookie was not logged in.");
            return res.status(401).json("Unauthorized");
        }
    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if(err)
            return res.status(403).json("Token is not valid.");

        const postId = req.params.id;
        const query ="DELETE FROM posts WHERE `id` = ? AND `uid` = ?";

        db.query(query, [postId, userInfo.id], (err, result) => {
            if(err)
                return res.status(403).json("You are not authorized to delete this post.");

            return res.json("Post has been deleted.");
        });

    });
};
export const updatePost = (req, res) => {
    res.json("from controller");
};
