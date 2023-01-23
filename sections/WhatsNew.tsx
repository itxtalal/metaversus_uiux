'use client';

import { motion } from 'framer-motion';
import styles from '@/styles';
import {
  fadeIn,
  navVariants,
  planetVariants,
  staggerContainer,
} from '@/utils/motion';
import { NewFeatures, TitleText, TypingText } from '@/components';
import { newFeatures } from '@/constants';
import Image from 'next/image';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| What's New" />
        <TitleText title={<>What's new about Metaversus?</>} />
        <div className="flex flex-wrap mt-[48px] justify-between gap-[24px]">
          {newFeatures.map((feature, index) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`${styles.flexCenter} flex-1`}
      >
        <Image
          width={500}
          height={500}
          src="/whats-new.webp"
          alt="whats new"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
