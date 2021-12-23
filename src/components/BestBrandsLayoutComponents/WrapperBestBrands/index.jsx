import './styles.scss';

import { Brands } from '../Brands';

export const WrapperBestBrands = () => {
  return (
    <div className="wrapperBestBrands">
      <div className="bestBrandsTitle">
        <span>
          AS <strong>MELHORES</strong> MARCAS
        </span>
        <span className="descriptionBestBrands">
          it is a long established fact that a reader will be destracted by the readable
        </span>
      </div>
      <Brands />
    </div>
  );
};
