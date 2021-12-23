import { WrapperTopHeader } from '../WrapperTopHeader';
import { WrapperCenterHeader } from '../WrapperCenterHeader';
import { WrapperBottomHeader } from '../WrapperBottomHeader';

export const HeaderMenu = () => {
  return (
    <div className="headerMenu">
      <WrapperTopHeader />
      <WrapperCenterHeader />
      <WrapperBottomHeader />
    </div>
  );
};
