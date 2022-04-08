import "./css/Testimonials.css";
import Rating from "./icons/stars.png";

export default function Testimonials() {
  return (
    <div className="testimonials-component">
      <div className="testimonials-title-holder">
        <div className="testimonials-title">
        TESTIMONIALS
        </div>
      </div>
      <div className="testimonials-wrapper">
        <div className="testimonials-div">
          <p>
            Amazing service so much higher than the other tyre shops. Best tyre
            supplier and service I have found so far in NZ.
          </p>
          <img src={Rating} alt="stars" className="testimonials-rating" />
          <br />
          <span>Marc Guillaume</span>
        </div>
        <div className="testimonials-div">
          <p>
            Best quality, outstanding service - Gene & his crew always make sure
            that you are well looked after & I'd highly...
          </p>
          <img src={Rating} alt="stars" className="testimonials-rating" />
          <br />
          <span>Patrick Ah Sue</span>
        </div>
        <div className="testimonials-div">
          <p>
            Gene is very helpful and a nice guy. Good prices and I would
            recommend to use him! Hard to find a guy you can trust...
          </p>
          <img src={Rating} alt="stars" className="testimonials-rating" />
          <br />
          <span>Lawrence Lokeni</span>
        </div>
        <div className="testimonials-div">
          <p>
            Gene provides excellent, awesome, quality service. This is THE tyre
            guy for our families vehicles. Thanks Gene.
          </p>
          <img src={Rating} alt="stars" className="testimonials-rating" />
          <br />
          <span>Nawaz Saheb</span>
        </div>
      </div>
    </div>
  );
}
