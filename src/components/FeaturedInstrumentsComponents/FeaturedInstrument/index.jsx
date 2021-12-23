import PropTypes from 'prop-types';
import './styles.scss';
import icon from '../../../public/icons/quickView_icon.svg';
import { useContext } from 'react';
import { SelectedInstrumentContext } from '../../../contexts/SelectedInstrumentContext/context';
import { IsModalOpenContext } from '../../../contexts/IsModalOpenContext/context';

export const FeaturedInstrument = ({ instrument = [] }) => {
  const selectedInstrumentContext = useContext(SelectedInstrumentContext);
  const { setSelectedInstrument } = selectedInstrumentContext;

  const isModalOpenContext = useContext(IsModalOpenContext);
  const { setIsModalOpen } = isModalOpenContext;

  return (
    <div className="featuredInstrument">
      <div className="coverProduct" />
      <img src={instrument.photo} alt={instrument.productName} className="instrumentPhoto" />
      <div
        className="quickView"
        onClick={() => {
          setSelectedInstrument(instrument);
          setIsModalOpen(true);
        }}
      >
        <img src={icon}></img>
        <span>Quick View</span>
      </div>
      <span className="featuredInstrumentTitle">{instrument.productName}</span>
      <span className="featuredInstrumentDescription">{instrument.descriptionShort}</span>
      <span className="featuredInstrumentPrice">
        {instrument.price?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </span>
    </div>
  );
};

FeaturedInstrument.propTypes = {
  instrument: PropTypes.object.isRequired,
};
