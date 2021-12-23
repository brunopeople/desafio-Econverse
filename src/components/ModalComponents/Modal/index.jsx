import './styles.scss';
import PropTypes from 'prop-types';

import closeModalIcon from '../../../public/icons/closeModal_icon.svg';
import seeMoreIcon from '../../../public/icons/seeMore_arrow_icon.svg';

export const Modal = ({ instrument, setIsModalOpen }) => {
  return (
    <div className="modal">
      <div className="closeModalIcon">
        <img src={closeModalIcon} onClick={() => setIsModalOpen(false)} />
      </div>
      <div className="instrumentPhotoModal">
        <img alt={instrument.name} src={instrument.photo} />
      </div>
      <div className="instrumentInfoWrapperModal">
        <div className="instrumentInfo">
          <span className="instrumentName"> {instrument.productName}</span>
          <span className="instrumentPrice">
            {instrument.price?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
          <span className="instrumentDescription"> {instrument.descriptionShort}</span>
        </div>
        <span className="seeMoreDetails">
          Veja mais detalhes do produto <img src={seeMoreIcon} />
        </span>
        <hr className="hrDiv" />
        <button className="addToCartButton">Adicionar ao carrinho</button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  instrument: PropTypes.object,
  setIsModalOpen: PropTypes.func.isRequired,
};
