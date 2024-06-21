import Container from "@/components/layout/container";
import ReviewsCard from "./reviews-card";
import { reviewsData } from "@/data/reviews.data";

const Reviews = () => {
  return (
    <section id="testimonials">
      <Container>
        <h3 className="h3 -tracking-[1%] lg:text-[40px] mb-10 lg:mb-12 text-center">What clients say about us</h3>

        {/* <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-6"> */}
        <div className="flex flex-col gap-6 items-center md:flex-row md:flex-wrap justify-center">
          {reviewsData.map((item, i) => (
            <ReviewsCard key={i} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Reviews;
