import React from 'react';
import {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
const Menu = ({cat}) => {

    const [posts, setPosts] = useState([]);
    console.log(cat);
    useEffect( () => {
    const fetchData = async () => {
        try
        {
            const res = await axios.get(`http://localhost:8800/api/posts/?cat=${cat}`);
            setPosts(res.data);
        } catch (err) 
        {
            console.log(err);
        }
        };
        fetchData();
    }, [cat]);
    // const posts = [
    //     {
    //         id: 1,
    //         title: "chibi chibi chaba chaba dubi dubi daba daba",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //         img: "https://media1.tenor.com/m/mJ_Og97j5WwAAAAC/chipi-chapa.gif"
    //     },
    //     {
    //         id: 2,
    //         title: "chibi chibi chaba chaba dubi dubi daba daba",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //         img: "https://media1.tenor.com/m/mJ_Og97j5WwAAAAC/chipi-chapa.gif"
    //     },
    //     {
    //         id: 3,
    //         title: "chibi chibi chaba chaba dubi dubi daba daba",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //         img: "https://media1.tenor.com/m/mJ_Og97j5WwAAAAC/chipi-chapa.gif"
    //     },
    //     {
    //         id: 4,
    //         title: "chibi chibi chaba chaba dubi dubi daba daba",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //         img: "https://media1.tenor.com/m/mJ_Og97j5WwAAAAC/chipi-chapa.gif"
    //     },
    // ];

    return (
        <div className="menu">
            <h1>Other posts you might want to read</h1>
            {
                posts.map((post) => (
                    <div className='post' key={post.id}>
                        <img src={post.img} alt="" />
                        <h2>{post.title}</h2>
                        <a className='link' href={`/post/${post.id}`}>
                            <button>Read More</button>
                        </a>
                    </div>
                ))
            }
        </div>
    );
};

export default Menu;
