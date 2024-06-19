interface IProps {
  title: string;
  text: string;
}

const GuideCard = (props: IProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-ACCENT text-[18px] lg:text-[24px] font-bold leading-none">{props.title}</h4>
      <p className="p">{props.text}</p>
    </div>
  );
};

export default GuideCard;
