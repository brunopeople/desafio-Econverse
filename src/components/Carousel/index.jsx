import carouselImage from '../../public/images/carousel_image.svg';
import rightArrowIcon from '../../public/icons/right_arrow_icon.svg';
import leftArrowIcon from '../../public/icons/left_arrow_icon.svg';
import './styles.scss';

export const Carousel = () => {
  return (
    <div className="carousel">
      <div>
        <img src={carouselImage} className="carouselImage" />
      </div>
      <img src={rightArrowIcon} className="rightArrow" />
      <img src={leftArrowIcon} className="leftArrow" />
      <div className="wrapperCarouselText">
        <span className="announcement"> NOVOS PRODUTOS </span>
        <div className="carouselText">
          <span className="strongText"> INSTRUMENTOS </span>
          <span className="normalText"> PROFISSIONAIS </span>
        </div>
        <div className="imperative">
          <span className="imperativeText"> CONFIRA </span>
          <hr className="underline" />
        </div>
      </div>
    </div>
  );
};
