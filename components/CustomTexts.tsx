'use client';
import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '@/utils/motion';
interface TypingTextProps {
  title: string;
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

export const TitleText = ({ title, textStyles }: TypingTextProps) => (
  <h2>Title Text</h2>
);
