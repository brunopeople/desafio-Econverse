import './styles.scss';
import { HeaderMenu } from '../../components/HeaderComponents/HeaderMenu';
import { Carousel } from '../../components/Carousel';
import { WrapperInstruments } from '../../components/InstrumentsLayoutComponents/WrapperInstruments';
import { WrapperNewsMenu } from '../../components/NewsMenuComponents/WrapperNewsMenu';
import { WrapperFeaturedInstruments } from '../../components/FeaturedInstrumentsComponents/WrapperFeaturedInstruments';
import { WrapperModal } from '../../components/ModalComponents/WrapperModal';
import { IsModalOpenProvider } from '../../contexts/IsModalOpenContext';
import { WrapperBestBrands } from '../../components/BestBrandsLayoutComponents/WrapperBestBrands';
import { AboutUs } from '../../components/AboutUs';
import { WrapperComments } from '../../components/CommentsComponents/WrapperComments';
import { WrapperFooter } from '../../components/FooterComponents/WrapperFooter';
import { EndPageInfos } from '../../components/FooterComponents/EndPageInfos';

export const Home = () => {
  return (
    <div className="homeContent">
      <IsModalOpenProvider>
        <WrapperModal />
        <HeaderMenu />
        <Carousel />
        <WrapperInstruments />
        <WrapperNewsMenu />
        <WrapperFeaturedInstruments />
      </IsModalOpenProvider>
      <WrapperBestBrands />
      <AboutUs />
      <WrapperComments />
      <WrapperFooter />
      <EndPageInfos />
    </div>
  );
};

export default Home;
