'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About  GalaxyTravel" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">GalaxyTravel</span> is a
        space tourism company that offers out-of-this-world experiences to
        adventurous travelers. With trips to other planets and galaxies,
        GalaxyTravel provides customers with a unique and unforgettable way to
        explore the universe.{' '}
        <span className="font-extrabold text-white">GalaxyTravel's</span> target
        audience is made up of adventurous travelers who are looking for a
        once-in-a-lifetime experience. Whether they are interested in exploring
        distant planets or discovering new galaxies,{' '}
        <span className="font-extrabold text-white">GalaxyTravel's</span> trips
        offer customers the opportunity to see the universe in a whole new way.
        Let's <span className="font-extrabold text-white">explore</span> by
        scrolling down!
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
