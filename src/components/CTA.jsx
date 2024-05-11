import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Bạn đang suy nghĩ đến 1 dự án <br className='sm:block hidden' />
        Hãy cùng nhau xây dựng nó nào!
      </p>
      <Link to='/contact' className='btn'>
      Liên hệ
      </Link>
    </section>
  );
};

export default CTA;
