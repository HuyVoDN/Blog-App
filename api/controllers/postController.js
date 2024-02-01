import {db} from "../db.js";

export const getPosts = (req, res) => {
    const query = req.query.cat ? "SELECT * FROM posts WHERE cat=?" : "SELECT * FROM posts";

    db.query(query,[req.query.cat], (err, result) => {
        if(err)
            return res.send(err);
        return res.status(200).json(result);
    });

};
export const getPost = (req, res) => {
    res.json("from controller");
};
export const addPost = (req, res) => {
    res.json("from controller");
};
export const deletePost = (req, res) => {
    res.json("from controller");
};
export const updatePost = (req, res) => {
    res.json("from controller");
};
