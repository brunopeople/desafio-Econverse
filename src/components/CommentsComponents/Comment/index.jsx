import PropTypes from 'prop-types';
import './styles.scss';
import commentBalloonIcon from '../../../public/icons/commentBalloon_icon.svg';

export const Comment = ({ image, name, profession, text }) => {
  return (
    <div className="comment">
      <img src={image} className="profileImage" />
      <div className="nameProfessionDiv">
        <span className="name"> {name} </span>
        <span className="profession"> {profession} </span>
      </div>
      <div className="commentContent">
        <img src={commentBalloonIcon} className="commentBalloonIcon" />
        <div className="commentText">
          <span> {text} </span>
        </div>
      </div>
    </div>
  );
};

Comment.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
