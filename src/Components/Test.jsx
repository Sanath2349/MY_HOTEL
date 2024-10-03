import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    date: '2 Mar. 2023',
    content: 'The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particularly impressed with how the hotel staff anticipated our needs.',
    author: 'Anthony Bruff',
    rating: 5,
  },
  {
    date: '25 Mar. 2023',
    content: 'Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff.',
    author: 'Regina Gella',
    rating: 5,
  },
  {
    date: '5 Apr. 2023',
    content: 'I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high!',
    author: 'Jamiyu Aliyu',
    rating: 5,
  },
  {
    date: '15 Apr. 2023',
    content: 'The attention to detail in every aspect of our stay was remarkable. From the room service to the conference facilities, everything was top-notch.',
    author: 'Sarah Johnson',
    rating: 4,
  },
  {
    date: '1 May 2023',
    content: 'As a frequent business traveler, I can confidently say that Hotel Monteleone stands out in terms of service quality and staff professionalism.',
    author: 'Michael Chang',
    rating: 5,
  },
  {
    date: '10 May 2023',
    content: "The historical charm of the hotel combined with modern amenities made for a unique and comfortable stay. I'll definitely be returning.",
    author: 'Emma Thompson',
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonials = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % testimonials.length);
  };

  const prevTestimonials = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonial-carousel">
      <h2>Testimonies</h2>
      <div className="carousel-container">
        <button onClick={prevTestimonials} className="nav-button prev">
          {/* <ChevronLeft size={24} />
           */}
           prev
        </button>
        <div className="testimonials-wrapper">
          {[0, 1, 2].map((offset) => {
            const index = (currentIndex + offset) % testimonials.length;
            const testimonial = testimonials[index];
            return (
              <div key={index} className="testimonial">
                <div className="testimonial-header">
                  <span className="date">{testimonial.date}</span>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < testimonial.rating ? 'star filled' : 'star'}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <blockquote>{testimonial.content}</blockquote>
                <p className="author">- {testimonial.author}</p>
              </div>
            );
          })}
        </div>
        <button onClick={nextTestimonials} className="nav-button next">
          {/* <ChevronRight size={24} /> */}
          next
        </button>
      </div>
      <style jsx>{`
        .testimonial-carousel {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        h2 {
          text-align: center;
          font-size: 24px;
          margin-bottom: 20px;
        }
        .carousel-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .testimonials-wrapper {
          display: flex;
          gap: 20px;
          overflow: hidden;
        }
        .testimonial {
          flex: 0 0 calc(33.333% - 14px);
          background-color: #f8f8f8;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .testimonial-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .date {
          color: #666;
        }
        .rating {
          color: #ffd700;
        }
        .star {
          opacity: 0.3;
        }
        .star.filled {
          opacity: 1;
        }
        blockquote {
          margin: 0 0 10px 0;
          font-style: italic;
        }
        .author {
          text-align: right;
          font-weight: bold;
        }
        .nav-button {
          background: none;
          border: none;
          cursor: pointer;
          color: #007bff;
        }
        .nav-button:hover {
          color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default TestimonialCarousel;