'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '@/utils/motion';

interface TypingTextProps {
  title: string;
  textStyles?: string;
}
interface TitleTextProps {
  title: string | React.ReactNode;
  textStyles?: string;
}

export const TypingText = ({ title, textStyles }: TypingTextProps) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((char, index) => (
      <motion.span key={index} variants={textVariant2}>
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }: TitleTextProps) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[62px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);

TypingText.defaultProps = {
  textStyles: '',
};
TitleText.defaultProps = {
  textStyles: '',
};
