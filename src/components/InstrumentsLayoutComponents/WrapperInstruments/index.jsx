import './styles.scss';
import { Instrument } from '../Instrument';
import guitarsImage from '../../../public/images/guitars_image.svg';
import microphoneImage from '../../../public/images/microphones_image.svg';
import soundTableImage from '../../../public/images/soundTable_image.svg';
import clavierImage from '../../../public/images/clavier_image.svg';
import guitar1Image from '../../../public/images/guitar1_image.svg';
import drumsImage from '../../../public/images/drums_image.svg';

export const WrapperInstruments = () => {
  return (
    <div className="wrapperInstruments">
      <Instrument image={guitarsImage} name="GUITARRAS" />
      <Instrument image={microphoneImage} name="MICROFONES" />
      <Instrument image={soundTableImage} name="MESAS DE SOM" />
      <Instrument image={clavierImage} name="TECLADOS" />
      <Instrument image={guitar1Image} name="VIOLÕES" />
      <Instrument image={drumsImage} name="BATERIAS" />
    </div>
  );
};
