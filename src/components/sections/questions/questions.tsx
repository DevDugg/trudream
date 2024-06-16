import Container from '@/components/layout/container';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { questionsData } from '@/data/questions.data';
import Image from 'next/image';

const Questions = () => {
  return (
    <section>
      <Container>
        <h3 className="h3 text-center -tracking-[1%] mb-12">Have any questions?</h3>
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-LIGHT_GRAY rounded-[16px] px-6 py-4">
            <div className="flex items-center gap-6 mb-6">
              <h4 className="text-[18px] leading-[120%] text-ACCENT font-semibold text-left">
                What types of businesses does TruDream help?
              </h4>
              <Image src={'/images/plus.svg'} alt="plus" width={24} height={24} />
            </div>

            <div className="flex flex-col gap-6 text-left p">
              <p>
                We can tailor our services to your specific needs and goals. During your free
                consultation, we'll discuss your vision, financial situation, and aspirations to
                ensure we provide the most effective support for your unique journey.
              </p>
              <p>
                This answer broadens the scope of who TruDream can help and emphasizes the
                personalized approach to cater to different business types and goals. It also
                highlights the fact that TruDream isn't just for startups, but can be a valuable
                partner for businesses at various stages of growth. tuneshare
              </p>
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="flex flex-col gap-6 bg-transparent border-0 shadow-none">
            {questionsData.map((item) => (
              <DropdownMenuItem
                key={item.title}
                className="flex items-center gap-6 justify-between rounded-[16px] bg-LIGHT_GRAY">
                <h4>{item.title}</h4>
                <Image src={'/images/plus.svg'} alt="plus" width={24} height={24} />
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </Container>
    </section>
  );
};

export default Questions;
