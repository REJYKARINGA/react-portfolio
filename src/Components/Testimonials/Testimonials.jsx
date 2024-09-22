import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Profile1 from "../../img/profile1.jpg";
import Profile2 from "../../img/profile2.jpg";
import Profile3 from "../../img/profile3.jpg";
import Profile4 from "../../img/profile4.jpg";
import Profile5 from "../../img/profile5.jpg";
import Profile6 from "../../img/profile6.jpg";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

const Testimonials = () => {
  let clients = [
    {
      img: Profile1,
      companyName: "Tech Solutions Inc.",
      review:
        "The service was outstanding, and the final product exceeded expectations. Communication and delivery were seamless throughout the project.",
    },
    {
      img: Profile2,
      companyName: "Digital Wave Co.",
      review:
        "Delivered high-quality work on time with great attention to detail. Highly recommend for anyone needing professional web development.",
    },
    {
      img: Profile3,
      companyName: "InnovateX",
      review:
        "Excellent work! Project management was smooth, and the results were exactly what we needed. Very satisfied with the service.",
    },
    {
      img: Profile4,
      companyName: "NextGen Studios",
      review:
        "Great experience from start to finish. Clear communication, professional output, and everything was completed on schedule as promised.",
    },
    {
      img: Profile5,
      companyName: "Global Ventures",
      review:
        "Impressive work delivered efficiently. The service provided was timely and exceeded our expectations in terms of quality and execution.",
    },
    {
      img: Profile6,
      companyName: "Future Tech Corp.",
      review:
        "Very professional and delivered exactly what was needed. Extremely satisfied with the process and the final result provided.",
    },
  ];

  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work</span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.companyName}</span>
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
