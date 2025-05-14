import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is Northern Taxiz Club?",
    answer:
      "Northern Taxiz Club provides comprehensive protection for taxi and rideshare drivers in Melbourne. We offer coverage for vehicle damage, liability, and more.",
    value: "item-1",
  },
  {
    question: "Who can join Northern Taxiz Club?",
    answer:
      "Our membership is open to taxi operators, rideshare drivers (e.g., Uber, Ola, Didi), hire car operators, and all commercial vehicle owners in Melbourne.",
    value: "item-2",
  },
  {
    question: "What types of protection plans do you offer?",
    answer:
      "We offer a variety of protection plans, including Taxi Cover, Rideshare Cover, At-Fault Protection, Theft and Malicious Damage Cover, and more.",
    value: "item-3",
  },
  {
    question: "How do I make a claim?",
    answer:
      "Making a claim is simple. Contact us on 0480033986, provide your membership details and incident information, and our team will guide you through the process.",
    value: "item-4",
  },
  {
    question: "Are there any discounts available?",
    answer:
      "Yes, we offer special discounts for start-ups and new ventures. Contact us to learn more about our flexible payment options and discounts.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faqs" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};