import { useState } from 'react';
import { SelectedInstrumentContext } from './context';
import PropTypes from 'prop-types';

export const SelectedInstrumentProvider = ({ children }) => {
  const [selectedInstrument, setSelectedInstrument] = useState({});

  return (
    <SelectedInstrumentContext.Provider value={{ selectedInstrument, setSelectedInstrument }}>
      {children}
    </SelectedInstrumentContext.Provider>
  );
};

SelectedInstrumentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
