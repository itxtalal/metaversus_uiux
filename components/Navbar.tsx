'use client';

import { motion } from 'framer-motion';
import styles from '@/styles';
import { navVariants } from '@/utils/motion';
import Image from 'next/image';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01"></div>
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <Image
        src="/search.svg"
        width={24}
        height={24}
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
        METAVERSUS
      </h2>
      <Image
        src="/menu.svg"
        width={24}
        height={24}
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
