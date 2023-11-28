
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Star = (
    <path d="M62 25.154H39.082L32 3l-7.082 22.154H2l18.541 13.693L13.459 61L32 47.309L50.541 61l-7.082-22.152L62 25.154z" />
  );

const customStyles = {
    itemShapes: Star,
    activeFillColor: '#84cc16',
    inactiveFillColor: '#bef264',
  };

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const axiosPublic = useAxiosPublic()

  useEffect(() => {
      axiosPublic.get('/reviews')
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.log("Error fetching camp data:", error)
    })
      
  }, [axiosPublic]);

  

  return (
    <div className="my-20">
     <h2 className="text-5xl text-center font-semibold">Our Testimonials</h2>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews?.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-24 my-16 flex flex-col  text-center items-center ">
              <Rating style={{ maxWidth: 180 }} itemStyles={customStyles} value={review.rating} readOnly />
              <p className="py-5 font-semibold text-gray-500">{review?.date}</p>
              <h3 className="text-xl md:text-3xl font-semibold text-lime-600">{review?.campName}</h3>
              <p className="py-5  md:text-lg">{review?.feedback}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


export default Testimonials;
