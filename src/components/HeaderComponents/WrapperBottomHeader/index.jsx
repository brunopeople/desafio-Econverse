import './styles.scss';
import poligonDownIcon from '../../../public/icons/poligonDown_icon.svg';

export const WrapperBottomHeader = () => {
  return (
    <div className="wrapperBottomHeader">
      <span>TODAS AS CATEGORIAS</span>
      <div className="selectionMenuTop">
        <span>SOM PROFISSIONAL</span>
        <img src={poligonDownIcon} />
      </div>
      <div className="selectionMenuTop">
        <span>INSTRUMENTOS MUSICAIS</span>
        <img src={poligonDownIcon} />
      </div>
      <span>PROMOÇÕES</span>
      <span>CONTATO</span>
    </div>
  );
};
