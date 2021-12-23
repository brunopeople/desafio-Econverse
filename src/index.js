import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './templates/Home/index';
import { FeaturedInstrumentsProvider } from '../src/contexts/FeaturedInstrumentsContext';
import { SelectedInstrumentProvider } from './contexts/SelectedInstrumentContext';

ReactDOM.render(
  <FeaturedInstrumentsProvider>
    <SelectedInstrumentProvider>
      <Home />
    </SelectedInstrumentProvider>
  </FeaturedInstrumentsProvider>,
  document.getElementById('root'),
);
