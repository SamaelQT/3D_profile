import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Xin chào, tôi là
        <span className='font-semibold mx-2 text-white'>Quang</span>
        👋
        <br />
        Sinh viên trường đại học công nghệ TP.HCM (HUTECH)
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Đã làm nhiều dự án ở trường <br /> và học được nhiều kỹ năng.
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Tìm hiểu thêm
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Là leader dẫn dắt nhiều dự án thành công trong nhiều năm. <br /> Bí quyết của tôi?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Ghé thăm trang cá nhân của tôi.
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
      Bạn cần hoàn thành một dự án hoặc đang tìm kiếm một nhà phát triển? <br/> Chỉ cần ấn vào.
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Hãy nói về nó
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
