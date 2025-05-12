import * as Common from '@/styles/Common';
import { FiChevronLeft } from 'react-icons/fi';

const DetailHeader = () => {
  return (
    <Common.HeaderContainer>
      <Common.BackButton>
        <FiChevronLeft />
      </Common.BackButton>
      <Common.HeaderTitle>빈티지 단추 모음</Common.HeaderTitle>
    </Common.HeaderContainer>
  );
};

export default DetailHeader;
