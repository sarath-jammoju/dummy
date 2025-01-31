import React from 'react';
import Slider from 'react-slick';
// Import slick-carousel CSS files (leave this as is)
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import user_1 from '../assets/reviews_profileImage/user_1.jpeg';
import user_2 from '../assets/reviews_profileImage/user_2.jpg';
import user_3 from '../assets/reviews_profileImage/user_3.jpg';
import user_4 from '../assets/reviews_profileImage/user_4.jpg';
import user_5 from '../assets/reviews_profileImage/user_5.jpg';
import user_6 from '../assets/reviews_profileImage/user_6.jpg';
import user_7 from '../assets/reviews_profileImage/user_7.jpg';




export default function Reviews() {
    
const ReviewsData = [
    {
      name: "Rajesh Kumar",
      location: "Hyderabad",
      rating: 5,
      reviewText: "Sree Sai Electronics offers exceptional service! Their customer support team is incredibly helpful, and the product range is vast. I bought a washing machine from them, and the installation was smooth.",
      image: user_1,
    },
    {
      name: "Priya Reddy",
      location: "Bangalore",
      rating: 4,
      reviewText: "Good experience overall. The product I purchased was of high quality, and it was delivered on time. The only issue was with the packaging. It could be improved, but the product itself is great.",
      image: user_2,
    },
    {
      name: "Manoj Sharma",
      location: "Chennai",
      rating: 5,
      reviewText: "I have been a loyal customer of Sree Sai Electronics for years. Their after-sales service is the best. My AC broke down after a year of use, but they quickly resolved the issue without any hassle. Fantastic service!",
      image: user_3,
    },
    {
      name: "Neha Patel",
      location: "Mumbai",
      rating: 4,
      reviewText: "The prices are competitive, and they have a wide range of electronics. My laptop was delivered within a few days, but I had a minor issue with the charger. However, their team handled it very efficiently.",
      image: user_4,
    },
    {
      name: "Sandeep Verma",
      location: "Delhi",
      rating: 5,
      reviewText: "Sree Sai Electronics is the best place to buy electronics. The staff is knowledgeable, and the store atmosphere is friendly. They gave me great advice on selecting a refrigerator. I will continue to shop here!",
      image: user_5,
    },
    {
      name: "Vikram Singh",
      location: "Kolkata",
      rating: 5,
      reviewText: "I recently purchased a microwave, and the experience was fantastic. The product was high-quality, and the delivery was prompt. The staff made sure I understood how to use it. Very satisfied with my purchase!",
      image: user_6,
    },
    {
      name: "Anjali Mehta",
      location: "Pune",
      rating: 4,
      reviewText: "Great store with an excellent variety of products. The delivery was quick, and I received constant updates about my order. One minor issue, the packaging was not as secure as expected, but the product was fine.",
      image: user_7,
    }
  ];
  
   
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 10000,
      autoplaySpeed: 1000,
      cssEase: 'linear',
    };
  
    return (
      <div className="reviews-slider-container">
        <h1 className="reviews-header">Our Trusted Clients Testimonials</h1>
        <Slider {...settings}>
          {ReviewsData.map((review, index) => (
            <div key={index} className="review-item">
              <div className="review-card">
                <img
                  src={review.image}
                  alt={`${review.name}'s profile`}
                  className="review-image"
                />
                <h3 className="review-name">{review.name}</h3>
                <p className="review-location">
                  <strong>Location:</strong> {review.location}
                </p>
                <p className="review-rating">
                  <strong>Rating:</strong> {review.rating} / 5
                </p>
                <p className="review-text">{review.reviewText}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
  


