import { IconContext } from 'react-icons';

const IconHolder = ({ icon, className }) => {
  return (
    <IconContext.Provider
      value={{ className: className}}
    >{icon}</IconContext.Provider>
  );
};

export default IconHolder;