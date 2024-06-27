import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface IProps {
  person: string;
  email: string;
  subtitle: string;
  stars: number;
}

const ReviewsCard = ({ person, email, subtitle, stars }: IProps) => {
  return (
    <div
      className={clsx(
        "p-4 bg-LIGHT_GRAY rounded-[24px] max-w-full md:max-w-[340px] lg:max-w-[420px]"
      )}
    >
      <div className="flex flex-col gap-1 mb-3">
        <h5 className="text-[18px] leading-none font-bold text-BLACK -tracking-[1%]">
          {person}
        </h5>
        <div className="text-[14px] leading-none text-BLACK">{email}</div>
      </div>

      <div className="flex items-center gap-1 mb-6">
        {[...new Array(stars)].map((_, i) => (
          <Image
            key={i}
            src={"/images/reviews/star.svg"}
            alt="star"
            width={16}
            height={16}
          />
        ))}
      </div>

      <p className="p">{subtitle}</p>
    </div>
  );
};

export default ReviewsCard;
