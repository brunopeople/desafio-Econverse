import { useState } from 'react';
import PropTypes from 'prop-types';
import { IsModalOpenContext } from './context';

export const IsModalOpenProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return <IsModalOpenContext.Provider value={{ isModalOpen, setIsModalOpen }}>{children}</IsModalOpenContext.Provider>;
};

IsModalOpenProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
