import { Accordion, AccordionItem } from "@heroui/react";
import { Icon } from "@iconify/react";
import faqs from "./faqs"; // <-- array of FAQs

export default function Faq() {
  return (
    <section className="w-full py-16 sm:py-24">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Centered Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Frequently Asked Questions
        </h2>

        {/* Accordion */}
        <Accordion
          fullWidth
          keepContentMounted
          className="space-y-2"
          itemClasses={{
            base: "group",
            title: "font-medium text-lg text-gray-800",
            trigger: "px-4 py-4 flex items-center justify-between w-full text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors",
            indicator: "text-gray-500 group-data-[open=true]:rotate-45 transition-transform",
            content: "pt-2 pb-4 px-4 text-base text-gray-600",
          }}
          selectionMode="multiple"
        >
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              indicator={<Icon icon="lucide:plus" width={20} />}
              title={item.title}
            >
              {item.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
