import './styles.scss';

import akgLogo from '../../../public/logos/akg_logo.svg';
import rolandLogo from '../../../public/logos/roland_logo.svg';
import bossLogo from '../../../public/logos/boss_logo.svg';
import shureLogo from '../../../public/logos/shure_logo.svg';
import rightArrowIcon from '../../../public/icons/bestBrands_rightArrow_icon.svg';
import leftArrowIcon from '../../../public/icons/bestBrands_leftArrow_icon.svg';

export const Brands = () => {
  return (
    <div className="brands">
      <img src={leftArrowIcon} className="arrow" />
      <img src={akgLogo} alt="AKG Logo Marca" />
      <img src={rolandLogo} alt="Roland Logo Marca" />
      <img src={bossLogo} alt="BOSS Logo Marca" />
      <img src={shureLogo} alt="SHURE Logo Marca" />
      <img src={rightArrowIcon} className="arrow" />
    </div>
  );
};
