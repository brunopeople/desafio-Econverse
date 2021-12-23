import logo from '../../../public/logos/logo_marca.svg';
import whatsappIcon from '../../../public/icons/whatsapp_icon.svg';
import profileIcon from '../../../public/icons/profile_icon.svg';
import searchIcon from '../../../public/icons/search_icon.svg';
import bagIcon from '../../../public/icons/bag_icon.svg';
import './styles.scss';

export const WrapperCenterHeader = () => {
  return (
    <div className="wrapperCenterHeader">
      <img className="logo" alt="Ninja Som" src={logo} />
      <div className="searchInput">
        <input type="text" placeholder="BUSQUE AQUI..." />
        <img className="searchLogo" src={searchIcon} />
      </div>
      <div className="contact">
        <img className="whatsappLogo" src={whatsappIcon} />
        <span className="whatsappNumber"> (11) 99999-9999</span>
      </div>
      <div className="profileInfo">
        <img className="profileLogo" src={profileIcon} />
        <div className="wrapperNameLogin">
          <span className="profileName"> OLÁ, VISITANTE </span>
          <span className="profileLogin"> MINHA CONTA </span>
        </div>
      </div>
      <div className="cartShop">
        <img src={bagIcon} />
        <span className="yourCart"> SEU CARRINHO </span>
        <span> 0 item (s) </span>
      </div>
    </div>
  );
};
