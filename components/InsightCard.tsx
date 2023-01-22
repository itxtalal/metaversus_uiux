'use client';
import { motion } from 'framer-motion';

import { fadeIn } from '@/utils/motion';

interface InsightCardProps {
  number: number;
  title: string;
  subtitle: string;
  imgUrl: string;
  key: string;
}

const InsightCard = ({ title, number, subtitle, imgUrl }: InsightCardProps) => (
  <motion.div
    variants={fadeIn('up', 'spring', number * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <img
      src={imgUrl}
      alt="planet-01"
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />
    <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
      <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
        {title}
      </h4>
      <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
        {subtitle}
      </p>
    </div>

    <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border border-white">
      <img
        src="arrow.svg"
        alt="arrow"
        className="w-[40%] h-[40%] object-contain"
      />
    </div>
  </motion.div>
);

export default InsightCard;
