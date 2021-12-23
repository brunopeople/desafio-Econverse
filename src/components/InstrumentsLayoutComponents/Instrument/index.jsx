import PropTypes from 'prop-types';
import './styles.scss';

export const Instrument = ({ image, name }) => {
  return (
    <div className="instrument">
      <img src={image} alt={name} />
      <span className="instrumentName">{name}</span>
    </div>
  );
};

Instrument.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
