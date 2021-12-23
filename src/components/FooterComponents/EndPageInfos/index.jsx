import './styles.scss';

import econverseLogo from '../../../public/logos/econverse_logo.svg';
import vtexLogo from '../../../public/logos/vtex_logo.svg';

export const EndPageInfos = () => {
  return (
    <div className="endPageInfos">
      <div className="enterpriseInfos">
        <span>
          NINJA SOM COMÉRCIO DE ELETRÔNICOS LTDA - 2012 - 2019, todos os direitos reservados. Rua Santa Ifigênia, 556
          560/562/564 - Santa Efigênia - CEP: 01.207-000 - São Paulo / SP - CNPJ 07.282.516/0001-15
        </span>
      </div>

      <div className="partnersLogos">
        <img src={econverseLogo} alt="econverse Logo" />
        <img src={vtexLogo} alt="vtex Logo" />
      </div>
    </div>
  );
};
