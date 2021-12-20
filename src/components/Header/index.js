import { NavLink } from 'react-router-dom';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import './index.scss';

const NavigationOptions = [
  { target: '/', text: 'Home' },
  { target: '/about', text: 'About' },
  { target: '/skills', text: 'Skills' },
  { target: '/services', text: 'Services' },
  { target: '/portfolio', text: 'Portfolio' },
  { target: '/contact', text: 'Contact' },
];

const Header = ({ isDarkModeOn, setIsDarkModeOn }) => {
  return (
    <div className="header">
      <div className="header__name">Ravi Chaudhary</div>
      <nav className="header__nav">
        {NavigationOptions.map((navigationOption, index) => (
          <NavLink
            className="header__nav-item"
            key={index}
            to={navigationOption.target}
          >
            {navigationOption.text}
          </NavLink>
        ))}

        <NavLink
          className="header__nav-item -icon"
          to="#"
          onClick={() => setIsDarkModeOn((pre) => !pre)}
        >
          {isDarkModeOn ? <HiOutlineSun /> : <HiOutlineMoon />}
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
