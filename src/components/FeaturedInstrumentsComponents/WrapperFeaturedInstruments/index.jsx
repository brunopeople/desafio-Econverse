import { useContext } from 'react';
import { FeaturedInstrumentsContext } from '../../../contexts/FeaturedInstrumentsContext/context';
import { FeaturedInstrument } from '../FeaturedInstrument';
import './styles.scss';

export const WrapperFeaturedInstruments = () => {
  const featuredInstrumentsContext = useContext(FeaturedInstrumentsContext);
  const { products } = featuredInstrumentsContext;

  return (
    <div className="wrapperFeaturedInstruments">
      <div className="featuredInstrumentsTitle">
        <span className="titleFirstLine">
          INSTRUMENTOS <strong>DESTAQUE</strong>
        </span>
        <span className="titleSecondLine">
          it is a long established fact that a reader will be destracted by the readable
        </span>
      </div>
      <div className="wrapperProducts">
        {products.map((instrument) => {
          return (
            <FeaturedInstrument
              key={instrument.productName}
              productName={instrument.productName}
              descriptionShort={instrument.descriptionShort}
              photo={instrument.photo}
              price={instrument.price}
              instrument={instrument}
            />
          );
        })}
      </div>
      <button className="seeMoreButton">VER MAIS</button>
    </div>
  );
};
