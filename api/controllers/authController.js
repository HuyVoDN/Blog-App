import {db} from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const register = (req, res) => {
    
    //Check if user exists
    const query ="SELECT * FROM users WHERE email = ? OR username = ?";
    db.query(query, [req.body.email, req.body.username], (err, result) => {
        if(err)
            return res.json(err);
        if(result.length)
            return res.status(409).json("User already exist.");

        //Hash password and insert user into database
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
 
        //Creating user, inserting into database
        const query = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)";
        const values = [req.body.username, req.body.email, hash];

        db.query(query, [values], (err, result) => {
            if(err)
                return res.json(err);

            return res.status(200).json("User has been registered.");
        });
    });
};

export const login = (req, res) => {

    //Check if user exists in database
    const query = "SELECT * FROM users WHERE username = ?";
    db.query(query, [req.body.username], (err, result) => {
        if(err)
            return res.status(500).json(err);
        if(result.length === 0)
            return res.status(404).json("User not found.");

    //Check if password is valid
    const validPassword = bcrypt.compareSync(req.body.password, result[0].password);

    if(!validPassword)
        return res.status(400).json("Incorrect username or password!");

    const token = jwt.sign({id:result[0].id}, "jwtkey");
    const {password, ...other} = result[0]; // only take in other info, not password
    res.cookie("access_token", token, {
        httpOnly: true,
    }).status(200).json({other});

    console.log(`User token is: ${req.cookies.access_token}`);
    });
  
//Login user in once verified user authentications
};

export const logout = (req, res) => {
    res.clearCookie("access_token", {
        sameSite:"none",
        secure: false,
    }).status(200).json("User has been logged out!");
};