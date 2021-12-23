import { TopHeaderComponent } from '../TopHeaderComponent';
import './styles.scss';

import lockIcon from '../../../public/icons/lock_icon.svg';
import exchangeIcon from '../../../public/icons/exchange_icon.svg';
import percentageIcon from '../../../public/icons/percentage_icon.svg';
import truckIcon from '../../../public/icons/truck_icon.svg';

export const WrapperTopHeader = () => {
  return (
    <div className="wrapperTopHeader">
      <TopHeaderComponent className="securityBuy" text="COMPRA 100% SEGURA" icon={lockIcon} />
      |
      <TopHeaderComponent className="freeExchange" text="1 TROCA GRÁTIS" icon={exchangeIcon} />
      |
      <TopHeaderComponent className="percentage" text="5X SEM JUROS" icon={percentageIcon} />
      |
      <TopHeaderComponent className="delivery" text="ENTREGAS EM TODO BRASIL" icon={truckIcon} />
    </div>
  );
};
