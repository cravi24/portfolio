import { NavLink } from 'react-router-dom';
import { IoMoonOutline } from 'react-icons/io5'
import './index.scss';

const HeaderComponent = () => {
  return (
    <div className="HeaderComponent">
      <div className="dev-name">Ravi</div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="#">About</NavLink>
        <NavLink to="#">Skills</NavLink>
        <NavLink to="#">Services</NavLink>
        <NavLink to="#">Portfolio</NavLink>
        <NavLink to="#">Contact </NavLink>
        <NavLink to="#"><IoMoonOutline /></NavLink>
      </nav>
    </div>
  );
};

export default HeaderComponent;
