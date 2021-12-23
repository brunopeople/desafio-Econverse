import './styles.scss';

import visaBadge from '../../../public/badges/visa_badge.svg';
import mastercardBadge from '../../../public/badges/mastercard_badge.svg';
import americanExpressBadge from '../../../public/badges/americanExpress_badge.svg';
import socialClubBadge from '../../../public/badges/socialClub_badge.svg';
import boletoBadge from '../../../public/badges/boleto_badge.svg';
import rapidSSLBadge from '../../../public/badges/rapidSSL_badge.svg';
import vtexBadge from '../../../public/badges/vtex_badge.svg';

export const PaymentSecurityBadges = () => {
  return (
    <div className="paymentSecurityBadges">
      <div className="payment">
        <div className="title">
          <span> FORMAS DE PAGAMENTO </span>
        </div>
        <div className="badgesPayment">
          <img src={visaBadge} alt="Visa" className="paymentBadge" />
          <img src={mastercardBadge} alt="Mastercard" className="paymentBadge" />
          <img src={americanExpressBadge} alt="American Express" className="paymentBadge" />
          <img src={socialClubBadge} alt="SocialClub" className="paymentBadge" />
          <img src={boletoBadge} alt="Boleto" className="paymentBadge" />
        </div>
      </div>
      <div className="security">
        <div className="title">
          <span> SEGURANÇA </span>
        </div>
        <div className="badgesSecurity">
          <img src={rapidSSLBadge} alt="RapidSSL" className="securityBadge" />
          <img src={vtexBadge} alt="Vtex" className="securityBadge" />
        </div>
      </div>
    </div>
  );
};
