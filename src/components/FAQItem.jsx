import { useState } from "react";
import styles from "../styles/Homepage.module.css";
/* eslint-disable react/prop-types */
export function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className={styles["faq-item"]}>
        <div
          className={styles["faq-question"]}
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3>{question}</h3>
          <span>{isOpen ? "-" : "+"}</span>
        </div>
        {isOpen && <div className={styles["faq-answer"]}>{answer}</div>}
      </div>
    );
  }