'use client';

import Image from 'next/image';

interface IProps {
  title: string;
  img: string;
  text: string;
}

const AboutCard = (props: IProps) => {
  return (
    <div
      key={props.title}
      className="p-6 bg-LIGHT_GRAY rounded-[16px] hover:-translate-y-3 transition-all duration-500 cursor-default">
      <div className="flex items-center gap-4 mb-3">
        <Image src={`/images/about/${props.img}.svg`} alt="icon" width={32} height={32} />
        <h4 className="text-ACCENT leading-none text-[20px] font-semibold">{props.title}</h4>
      </div>

      <p className="text-BLACK leading-[140%] text-[18px]">{props.text}</p>
    </div>
  );
};

export default AboutCard;
