import './styles.scss';
import PropTypes from 'prop-types';

export const NewItem = ({ image, text1, text2 }) => {
  return (
    <div className="newItem">
      <div
        role="img"
        aria-label={text1 + text2}
        className="cardImage"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(77, 77, 77, 0) 0%, rgba(39, 39, 39, 0.7) 70%), url(${image})`,
        }}
      />
      <div className="cardText">
        <span className="news"> NOVIDADES </span>
        <hr />
        <div className="lines">
          <span className="firstLine">{text1}</span>
          <span className="secondLine">{text2}</span>
        </div>
        <button className="checkButton">
          <p>CONFIRA</p>
        </button>
      </div>
    </div>
  );
};

NewItem.propTypes = {
  image: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};
