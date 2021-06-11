import { NavLink } from 'react-router-dom';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import './index.scss';

const Header = ({ isDarkModeOn, setIsDarkModeOn }) => {
  return (
    <div className="Header">
      <div className="dev-name">Ravi Chaudhary</div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="#">About</NavLink>
        <NavLink to="#">Skills</NavLink>
        <NavLink to="#">Services</NavLink>
        <NavLink to="#">Portfolio</NavLink>
        <NavLink to="#">Contact </NavLink>
        <NavLink to="#">
          <div onClick={() => setIsDarkModeOn((pre) => !pre)}>
            {isDarkModeOn ? <HiOutlineSun /> : <HiOutlineMoon />}
          </div>
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
