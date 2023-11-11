import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from "react";


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( ()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    return (
      <section className="my-20">
        <SectionTitle subHeading="What our clien say" heading="Testimonials"></SectionTitle>

        <Swiper pagination={true} modules={[Navigation]} className="mySwiper">
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
    {
        reviews.map(review => <SwiperSlide key={review._id}>

            <div className="m-24">
                <p>{review.details}</p>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
        </SwiperSlide>)
    }
      </Swiper>
      </section>
    );
};

export default Testimonials;