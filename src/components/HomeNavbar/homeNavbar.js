import './../../Assets/css/homeNavbar.css';
import { FaBars, FaTimes } from "react-icons/fa";

const HomeNavbar = () => {

  const moved = () => {
    const btn = document.querySelector('.btn');
    const btn2 = document.querySelector('.btn2');
    const button = document.querySelector('.navbar-container ul');
    button.classList.add('bar');
    btn2.classList.remove('none');
    button.classList.remove('cross');
    btn.classList.add('none');
  };

  const removed = () => {
    const btn2 = document.querySelector('.btn2');
    const btn = document.querySelector('.btn');
    const button = document.querySelector('.navbar-container ul');
    button.classList.remove('bar');
    button.classList.add('cross');
    btn.classList.remove('none');
    btn2.classList.add('none');
  }
  return (
    <div className="H-navbar">

      <nav className="navbar-container">
        <div className='react-svg'>
          <button onClick={moved} className="btn"><FaBars /></button>
        </div>
        <button onClick={removed} className="btn2 none"><FaTimes /></button>
        <ul>
          <a href='/'><li>home</li></a>
          <a href='editions'><li>editions </li></a>
          <a href='/contributions'><li>contributions</li></a>
          <a href='/team'> <li>our team</li></a>
          <a href='/gallery'> <li>gallery</li></a>
        </ul>
      </nav>
    </div>
  );
}

export default HomeNavbar;