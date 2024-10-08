"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import ButtonArrow from "@/icons/ButtonArrow";
import RequestButton from "./RequestButton";

const BookConsultation = ({ title, text }) => {
  return (
    <section className="book-consultation">
      <div className="_container">
        <div className="book-consultation__body">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 dangerouslySetInnerHTML={{ __html: title }} />
            <p dangerouslySetInnerHTML={{ __html: text }} />
            <RequestButton />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookConsultation;
