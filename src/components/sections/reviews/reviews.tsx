import Container from "@/components/layout/container";
import ReviewsCard from "./reviews-card";
import { getReviewsSectionData } from "../../../../sanity/schemas/reviews";

const Reviews = async () => {
  const reviewsSectionData = await getReviewsSectionData();

  return (
    <section id="testimonials">
      <Container>
        <h3 className="h3 -tracking-[1%] lg:text-[40px] mb-10 lg:mb-12 text-center">
          {reviewsSectionData[0].title}
        </h3>

        <div className="flex flex-col gap-6 items-center md:flex-row md:flex-wrap justify-center">
          {reviewsSectionData[0].cards.map((item, i) => (
            <ReviewsCard {...item} key={i} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Reviews;
