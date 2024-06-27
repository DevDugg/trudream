import Container from "@/components/layout/container";
import QuestionClientBlock from "../guide/question-client-block";
import { getQuestionsSectionData } from "../../../../sanity/schemas/questions";

const Questions = async () => {
  const faqSectionData = await getQuestionsSectionData();

  return (
    <section id="faq">
      <Container>
        <h3 className="h3 text-center lg:text-[40px] -tracking-[1%] mb-12 sm:mb-10 lg:mb-12">
          {faqSectionData[0].title}
        </h3>

        <QuestionClientBlock faqCards={faqSectionData[0].cards} />
      </Container>
    </section>
  );
};

export default Questions;
