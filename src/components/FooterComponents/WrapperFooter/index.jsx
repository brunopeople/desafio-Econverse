import { FormNewsletter } from '../FormNewsletter';
import { OptionsFooter } from '../OptionsFooter';
import { PaymentSecurityBadges } from '../PaymentSecurityBadges';
import './styles.scss';

export const WrapperFooter = () => {
  return (
    <div className="wrapperFooter">
      <div className="footerContent">
        <OptionsFooter />
        <PaymentSecurityBadges />
        <FormNewsletter />
      </div>
    </div>
  );
};
