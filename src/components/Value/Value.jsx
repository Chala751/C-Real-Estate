import React from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './Value.css';
// Replace with your actual image path

const Value = () => {
  const accordionData = [
    {
      id: 1,
      heading: "Exceptional Quality",
      content: "We maintain the highest standards in all our properties, ensuring premium materials and craftsmanship in every detail."
    },
    {
      id: 2,
      heading: "Customer Satisfaction",
      content: "Your happiness is our priority. We go above and beyond to meet your expectations and provide exceptional service."
    },
    {
      id: 3,
      heading: "Innovative Design",
      content: "Our properties feature cutting-edge architecture and smart home technology for modern, efficient living."
    },
    {
      id: 4,
      heading: "Sustainable Living",
      content: "We're committed to eco-friendly practices, using sustainable materials and energy-efficient solutions in all our developments."
    },
    {
      id: 5,
      heading: "Community Focus",
      content: "We create spaces that foster connection, with communal areas and amenities designed to bring people together."
    }
  ];

  return (
    <section className="value-wrapper">
      <div className="paddings innerWidth value-container">
        {/* Left side - Image */}
        <div className="value-left">
          <div className="image-container">
            <img src="./val-img.jpg" alt="Our values" />
          </div>
        </div>

        {/* Right side - Accordion */}
        <div className="value-right">
          <h2 className="primaryText">Our Core Values</h2>
          <p className="secondaryText">These principles guide everything we do</p>
          
          <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[1]}>
            {accordionData.map((item) => (
              <AccordionItem key={item.id} uuid={item.id}>
                <AccordionItemHeading>
                  <AccordionItemButton className="accordion-button">
                    {item.heading}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="accordion-panel">
                  <p>{item.content}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;