import db from "../db.js";
import bcrypt from "bcryptjs";
export const register = (req, res) => {
    
    //Check if user exists
    const query ="SELECT * FROM users WHERE email = ? OR username = ?";
    db.query(query, [req.body.email, req.body.username], (err, result) => {
        if(err)
            return res.json(err);
        if(result.length > 0)
            return res.status(409).json("User already exists.");

        //Hash password and insert user into database
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const query = "INSERT INTO users (username, email, password) VALUES (?,?,?)";
        const values = [req.body.username, req.body.email, hash];

        db.query(query, [values], (err, result) => {
            if(err)
                return res.json(err);
            return res.status(200).json("User has been registered.");
        });
    });
};

export const login = (req, res) => {

};

export const logout = (req, res) => {

};