import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img: "https://preview.redd.it/since-dmc-5s-release-vergil-has-become-an-iconic-character-v0-8a0wds8pzwmb1.jpg?auto=webp&s=5f74091641c0032621e6bff5d72b7bfbcfa36fbe"
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img: "https://preview.redd.it/since-dmc-5s-release-vergil-has-become-an-iconic-character-v0-8a0wds8pzwmb1.jpg?auto=webp&s=5f74091641c0032621e6bff5d72b7bfbcfa36fbe"
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img: "https://preview.redd.it/since-dmc-5s-release-vergil-has-become-an-iconic-character-v0-8a0wds8pzwmb1.jpg?auto=webp&s=5f74091641c0032621e6bff5d72b7bfbcfa36fbe"
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img: "https://preview.redd.it/since-dmc-5s-release-vergil-has-become-an-iconic-character-v0-8a0wds8pzwmb1.jpg?auto=webp&s=5f74091641c0032621e6bff5d72b7bfbcfa36fbe"
    },
  ];
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