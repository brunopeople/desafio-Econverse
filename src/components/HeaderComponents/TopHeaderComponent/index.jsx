import PropTypes from 'prop-types';
import './styles.scss';

export const TopHeaderComponent = ({ text, icon }) => {
  return (
    <div className="topHeaderComponent">
      <img src={icon} />
      <span> {text} </span>
    </div>
  );
};

TopHeaderComponent.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
