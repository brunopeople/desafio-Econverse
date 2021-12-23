import './styles.scss';
import { useContext, useEffect, useRef } from 'react';
import { SelectedInstrumentContext } from '../../../contexts/SelectedInstrumentContext/context';

import { IsModalOpenContext } from '../../../contexts/IsModalOpenContext/context';
import { Modal } from '../Modal';

export const WrapperModal = () => {
  const selectedInstrumentContext = useContext(SelectedInstrumentContext);
  const { selectedInstrument } = selectedInstrumentContext;

  const isModalOpenContext = useContext(IsModalOpenContext);
  const { isModalOpen, setIsModalOpen } = isModalOpenContext;

  const divModal = useRef();

  useEffect(() => {
    isModalOpen ? divModal.current.classList.add('active') : divModal.current.classList.remove('active');
  }, [isModalOpen]);

  return (
    <div ref={divModal} className="wrapperModal">
      <div className="modalBackground" />
      <Modal instrument={selectedInstrument} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};
