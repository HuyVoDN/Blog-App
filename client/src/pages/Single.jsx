import React from 'react';
import Edit from '../img/Edit_Icon.png';
import Delete from '../img/Delete_Icon.png';
import Menu from '../components/Menu';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import moment from 'moment';
import { AuthContext } from '../context/authContext.jsx';

const Single = () => {

  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.pathname.split("/")[2];
  const {currentUser} = useContext(AuthContext);
  
  //console.log(location);

  useEffect( () => {
    const fetchData = async () => {
      try
      {
        const res = await axios.get(`http://localhost:8800/api/posts/${postId}`, {withCredentials: true});
        setPost(res.data);
      } catch (err) 
      {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try 
    {
      await axios.delete(`http://localhost:8800/api/posts/${postId}`, {withCredentials: true});
      navigate("/");
    } catch (err) 
    {
      console.log(err);
    };
  };
  console.log(post); // error checking
 // console.log(currentUser.other.username); // error checking, will break website once logged out
  return (
    <div className='single'>
      <div className="content">
        <img src={post?.img} alt="" />
        <div className="user">
          {
            post.userImg && <img src={post?.userImg} alt="" />
          }
          <div className="info">
            <span>{post?.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          { currentUser.other?.username === post.username && <div className="edit">
            <Link to={`/write?edit=2`}> 
              <img src={Edit} alt="" />
            </Link>
            <img onClick={handleDelete} src={Delete} alt="" />
          </div>
          }
        </div>
        <h1>
          {post?.title}
        </h1>
        <p>
          {post?.desc}
        </p>
        
      </div>
      <Menu/>
    </div>
  )
}

export default Single