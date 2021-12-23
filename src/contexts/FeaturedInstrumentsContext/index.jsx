import { FeaturedInstrumentsContext } from './context';
import P from 'prop-types';
import { products } from '../../data/featuredInstruments.json';

export const FeaturedInstrumentsProvider = ({ children }) => {
  return <FeaturedInstrumentsContext.Provider value={{ products }}>{children}</FeaturedInstrumentsContext.Provider>;
};

FeaturedInstrumentsProvider.propTypes = {
  children: P.node.isRequired,
};
