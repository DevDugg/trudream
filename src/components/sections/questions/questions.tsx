import Container from '@/components/layout/container';
import QuestionClientBlock from '../guide/question-client-block';

const Questions = () => {
  return (
    <section>
      <Container>
        <h3 className="h3 text-center lg:text-[40px] -tracking-[1%] mb-12 sm:mb-10 lg:mb-12">
          Have any questions?
        </h3>

        <QuestionClientBlock />
      </Container>
    </section>
  );
};

export default Questions;
