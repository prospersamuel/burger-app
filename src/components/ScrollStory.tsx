"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./ScrollStory.module.css";

export default function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // We don't use target for useScroll, we just use window scroll since the container is very tall.
  const { scrollYProgress } = useScroll();

  // Sequential, non-overlapping transitions — each section fully
  // fades out before the next fades in, so text never double-exposes.

  // Section 1: active 0 - 0.12, fades out 0.12 - 0.135
  const opacity1 = useTransform(scrollYProgress, [0, 0.12, 0.135], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.135], [0, -40]);

  // Section 2: fades in 0.135 - 0.15, active 0.15 - 0.34, fades out 0.34 - 0.355
  const opacity2 = useTransform(scrollYProgress, [0.135, 0.15, 0.34, 0.355], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.135, 0.15, 0.34, 0.355], [40, 0, 0, -40]);

  // Section 3: fades in 0.355 - 0.37, active 0.37 - 0.59, fades out 0.59 - 0.605
  const opacity3 = useTransform(scrollYProgress, [0.355, 0.37, 0.59, 0.605], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.355, 0.37, 0.59, 0.605], [40, 0, 0, -40]);

  // Section 4: fades in 0.605 - 0.62, active 0.62 - 0.81, fades out 0.81 - 0.825
  const opacity4 = useTransform(scrollYProgress, [0.605, 0.62, 0.81, 0.825], [0, 1, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.605, 0.62, 0.81, 0.825], [40, 0, 0, -40]);

  // Section 5: fades in 0.825 - 0.84, active 0.84 - 1
  const opacity5 = useTransform(scrollYProgress, [0.825, 0.84, 1], [0, 1, 1]);
  const y5 = useTransform(scrollYProgress, [0.825, 0.84, 1], [40, 0, 0]);

  return (
    <div className={styles.scrollContainer} ref={containerRef}>
      
      {/* 0-15% */}
      <motion.div className={styles.fixedSection} style={{ opacity: opacity1, y: y1 }}>
        <div className={styles.contentLeft}>
          <h1 className={styles.headline}>The Signature Burger</h1>
          <h2 className={styles.subheadline}>Crafted layer by layer.</h2>
          <p className={styles.supportingCopy}>
            A premium burger experience designed with precision, flavor, and balance.
          </p>
        </div>
      </motion.div>

      {/* 15-40% */}
      <motion.div className={styles.fixedSection} style={{ opacity: opacity2, y: y2 }}>
        <div className={styles.contentLeft}>
          <h1 className={styles.headline}>Every ingredient has a purpose.</h1>
          <p className={styles.subcopy}>Fresh vegetables.</p>
          <p className={styles.subcopy}>Premium beef.</p>
          <p className={styles.subcopy}>Artisan brioche.</p>
          <p className={styles.subcopy}>Balanced flavor in every layer.</p>
        </div>
      </motion.div>

      {/* 40-65% */}
      <motion.div className={styles.fixedSection} style={{ opacity: opacity3, y: y3 }}>
        <div className={styles.contentRight}>
          <h1 className={styles.headline}>Built with precision.</h1>
          <p className={styles.subcopy}>Hand-selected ingredients.</p>
          <p className={styles.subcopy}>Perfect texture.</p>
          <p className={styles.subcopy}>Perfect balance.</p>
          <p className={styles.subcopy}>Perfect bite.</p>
        </div>
      </motion.div>

      {/* 65-85% */}
      <motion.div className={styles.fixedSection} style={{ opacity: opacity4, y: y4 }}>
        <div className={styles.contentLeft}>
          <h1 className={styles.headline}>Flavor engineered to perfection.</h1>
          <p className={styles.subcopy}>Juicy grilled beef.</p>
          <p className={styles.subcopy}>Rich melted cheese.</p>
          <p className={styles.subcopy}>Fresh ingredients.</p>
          <p className={styles.subcopy}>An unforgettable taste experience.</p>
        </div>
      </motion.div>

      {/* 85-100% */}
      <motion.div className={styles.fixedSection} style={{ opacity: opacity5, y: y5 }}>
        <div className={styles.contentCenterBottom}>
          <h1 className={styles.headline}>More than a burger.</h1>
          <h2 className={styles.subheadline}>A masterpiece of flavor.</h2>
          <div className={styles.ctaContainer}>
            <button className={styles.primaryCta}>Order Now</button>
            <button className={styles.secondaryCta}>View Ingredients</button>
          </div>
        </div>
      </motion.div>

    </div>
  );
}