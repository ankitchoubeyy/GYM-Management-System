import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Heading from "./Heading";

const faqs = [
  {
    id: 1,
    question: "What are your opening hours?",
    answer: "UFC GYM is open 24/7 to accommodate all schedules.",
  },
  {
    id: 2,
    question: "Do I need to be a member to use the facilities?",
    answer:
      "Yes, we offer various membership plans to suit different needs. You can also purchase a day pass if you want to try out our facilities first.",
  },
  {
    id: 3,
    question: "What types of memberships do you offer?",
    answer:
      "We offer monthly, quarterly, and annual memberships. Each plan includes access to all gym facilities, group classes, and personal training sessions at discounted rates.",
  },
  {
    id: 4,
    question: "Are personal trainers available?",
    answer:
      "Absolutely! We have certified personal trainers available to help you achieve your fitness goals. You can schedule one-on-one sessions or join group training sessions.",
  },
  {
    id: 6,
    question: "Is there a trial period available for new members?",
    answer:
      "Yes, we offer a one-week free trial for new members. This allows you to experience our facilities and classes before committing to a membership.",
  },
  {
    id: 10,
    question: "How can I cancel my membership?",
    answer:
      "You can cancel your membership by visiting our front desk or contacting our customer support team. Please note that cancellation policies may vary depending on your membership plan.",
  },
];

const Faqs = () => {
  return (
    <div className="px-6 sm:px-10 md:px-14 lg:px-18 py-4 bg-gradient-to-r from-rose-100 to-teal-100">
        <Heading heading={"FAQs"} />
      {faqs.map((faq, index) => (
        <div className="my-4 rounded-full">
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span" variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default Faqs;
