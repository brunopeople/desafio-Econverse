import './styles.scss';

import instagramLogo from '../../../public/icons/instagram_icon.svg';
import facebookLogo from '../../../public/icons/facebook_icon.svg';
import twitterLogo from '../../../public/icons/twitter_icon.svg';

export const OptionsFooter = () => {
  return (
    <div className="optionsFooter">
      <div className="firstColumn">
        <div className="instituitional">
          <a className="optionsFooterTitle">
            <span>INSTITUCIONAL</span>
          </a>
          <a className="option">
            <span>QUEM SOMOS</span>
          </a>
          <a className="option">
            <span>NOSSAS LOJAS</span>
          </a>
        </div>
        <div className="attendance">
          <a className="optionsFooterTitle">
            <span>ATENDIMENTO</span>
          </a>
          <a className="option">
            <span>FALE CONOSCO</span>
          </a>
          <a className="option">
            <span>VENDAS@NINJASOM.COM.BR</span>
          </a>
        </div>
      </div>
      <div className="secondColumn">
        <div className="help">
          <a className="optionsFooterTitle">AJUDA E SUPORTE</a>
          <a className="option">POLITICA DE PRIVACIDADE</a>
          <a className="option">POLITICA DE TROCAS</a>
          <a className="option">PRAZOS DE ENTREGA</a>
          <a className="option">TERMOS DE USO</a>
        </div>

        <div className="social">
          <img src={instagramLogo} className="socialLogo" />
          <img src={twitterLogo} className="socialLogo" />
          <img src={facebookLogo} className="socialLogo" />
        </div>
      </div>
    </div>
  );
};
