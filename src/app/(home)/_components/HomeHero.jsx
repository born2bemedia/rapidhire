"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";
import HomeHeroIcon from "@/icons/HomeHeroIcon";
import Image from "next/image";

const HomeHero = () => {
  return (
    <section className="home-hero">
      <div className="_container">
        <div className="home-hero__body">
          <div className="left">
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Building Workplaces <br />
              <span>Your Team Loves</span>
            </motion.h1>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="button-wrap"
            >
              <Link className="main-button" href="#">
                <span>Book consultation</span>
                <ButtonArrow />
              </Link>
            </motion.div>
          </div>
          <div className="right">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span>
                Consultancy <span>/</span>
              </span>{" "}
              <span>
                Management <span>/</span>
              </span>{" "}
              <span>
                Optimisation <span>/</span>
              </span>{" "}
              Development
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <HomeHeroIcon />
            </motion.div>
          </div>
        </div>
        <Image src="/images/home/homeHero.webp" width={1110} height={400} />
      </div>
    </section>
  );
};

export default HomeHero;
