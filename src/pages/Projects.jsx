import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Dự Án{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Của Tôi
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        Tôi đã bắt tay vào nhiều dự án trong nhiều năm, nhưng đây là những dự án
        những người tôi giữ chặt nhất trong trái tim mình. Nhiều trong số chúng
        là nguồn mở, vì vậy nếu bạn gặp điều gì đó khơi gợi sự quan tâm của bạn,
        hãy thoải mái khám phá cơ sở mã và đóng góp ý tưởng của bạn để cải tiến
        hơn nữa. Sự hợp tác của bạn được đánh giá cao!
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Liên kết trực tiếp
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
