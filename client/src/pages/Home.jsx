import React from 'react';
import {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const Home = () => {

  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;
  //console.log(cat);

  useEffect( () => {
    const fetchData = async () => {
      try
      {
        const res = await axios.get(`http://localhost:8800/api/posts${cat}`);
        setPosts(res.data);
      } catch (err) 
      {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  // const posts = [
  //   {
  //     id: 1,
  //     title: "chibi chibi chaba chaba dubi dubi daba daba",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     img: "https://media1.tenor.com/m/mJ_Og97j5WwAAAAC/chipi-chapa.gif"
  //   },
  //   {
  //     id: 2,
  //     title: "chibi chibi chaba chaba dubi dubi daba daba",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     img: "https://media1.tenor.com/m/mJ_Og97j5WwAAAAC/chipi-chapa.gif"
  //   },
  //   {
  //     id: 3,
  //     title: "chibi chibi chaba chaba dubi dubi daba daba",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     img: "https://media1.tenor.com/m/mJ_Og97j5WwAAAAC/chipi-chapa.gif"
  //   },
  //   {
  //     id: 4,
  //     title: "chibi chibi chaba chaba dubi dubi daba daba",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     img: "https://media1.tenor.com/m/mJ_Og97j5WwAAAAC/chipi-chapa.gif"
  //   },
  // ];
  return (
    <div className='home'>
      <div className='posts'>
        {
          posts.map((post) => (
            <div className='post' key={post.id}>
              <div className='img'>
                <img src={post.img} alt="" />
              </div>
              <div className='content'>
                <Link className='link' to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
                <p>{post.desc}</p>
                <button>Read More</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home