import React from 'react';
import Edit from '../img/Edit_Icon.png';
import Delete from '../img/Delete_Icon.png';
import Menu from '../components/Menu';
import { Link } from 'react-router-dom';
const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://media1.tenor.com/m/mJ_Og97j5WwAAAAC/chipi-chapa.gif" alt="" />
        <div className="user">
          <img src="https://pbs.twimg.com/media/Fac-k5DUYAMIA3C?format=jpg&name=4096x4096" alt="" />
          <div className="info">
            <span>HuyVo0812</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quae similique odio quis at illum, id ut.
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ut earum quia eius quisquam minus omnis quas, tempora ipsum quam labore illo dolor sapiente, non neque enim. Velit, consequuntur explicabo.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ut earum quia eius quisquam minus omnis quas, tempora ipsum quam labore illo dolor sapiente, non neque enim. Velit, consequuntur explicabo.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ut earum quia eius quisquam minus omnis quas, tempora ipsum quam labore illo dolor sapiente, non neque enim. Velit, consequuntur explicabo.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ut earum quia eius quisquam minus omnis quas, tempora ipsum quam labore illo dolor sapiente, non neque enim. Velit, consequuntur explicabo.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ut earum quia eius quisquam minus omnis quas, tempora ipsum quam labore illo dolor sapiente, non neque enim. Velit, consequuntur explicabo.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ut earum quia eius quisquam minus omnis quas, tempora ipsum quam labore illo dolor sapiente, non neque enim. Velit, consequuntur explicabo.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ut earum quia eius quisquam minus omnis quas, tempora ipsum quam labore illo dolor sapiente, non neque enim. Velit, consequuntur explicabo.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ut earum quia eius quisquam minus omnis quas, tempora ipsum quam labore illo dolor sapiente, non neque enim. Velit, consequuntur explicabo.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ut earum quia eius quisquam minus omnis quas, tempora ipsum quam labore illo dolor sapiente, non neque enim. Velit, consequuntur explicabo.
        </p>
        
      </div>
      <Menu/>
    </div>
  )
}

export default Single