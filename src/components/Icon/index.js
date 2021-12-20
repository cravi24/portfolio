import { IconContext } from 'react-icons';

const IconHolder = ({ icon, className, size }) => {
  return (
    <IconContext.Provider value={{ className: className, size }}>
      {icon}
    </IconContext.Provider>
  );
};

export default IconHolder;
