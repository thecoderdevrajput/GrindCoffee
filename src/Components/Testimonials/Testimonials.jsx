/* eslint-disable react/prop-types */
import { useState } from "react";

const testimonials = [
  {
    name: "Annalisa",
    review: "Finally, a good tasting compostable Nespresso compatible option! Also the tin is adorable and the shipping was fast. Thank you, Grind!",
    role: "Software Engineer",
  },
  {
    name: "Gemma",
    review: "Great coffee & quick delivery. Tins are a bonus!",
    role: "Graphic Designer",
  },
  {
    name: "Andrew",
    review: "Best whole beans I've used. My bean-to-cup machine is making coffee that's as close to barista standard as I've managed so far at home.",
    role: "Entrepreneur",
  },
  {
    name: "Jean",
    review: "Simple easy to order, delivered quickly, no hassle. Lovely coffee & great that the capsules can go into the recycling food waste, win win",
    role: "Marketing Specialist",
  },
  {
    name: "Alice",
    review: "As a long-time subscriber, I know that GRIND always delivers!",
    role: "Product Manager",
  },
  {
    name: "Sarah",
    review: "Grind has replaced my lifelong favourite coffee brand! It's worth the money for the taste and to support a smaller business, particularly one focussed on sustainability.",
    role: "E-commerce Owner",
  },
  {
    name: "Sophie",
    review: "Fast delivery, great customer service and 10/10 iced coffee!",
    role: "Freelancer",
  },
  {
    name: "Milijana",
    review: "I've been on Nespresso pods for so long, I didn't realise the world of flavour I was missing out on - the house blend is perfection *chefs kiss*",
    role: "Interior Designer",
  },
];

const TestimonialCard = ({ name, review, role }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    
    <div
      className={`p-6 rounded-xl shadow-lg transition-all duration-300 ${
        isHovered ? "bg-[#FEEBEE] text-black" : "bg-neutral-50 text-black"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className="h-3 -ml-4" src="quote.png" />
      <p className="text-lg font-semibold">{review}</p>
      <div className="mt-4">
        <h4 className="font-bold">{name}</h4>
        <p className="text-sm opacity-70">{role}</p>
       
      </div>
      
    </div>
     
  );
};

const Testimonials = () => {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h2 className="text-5xl font-bold text-center mb-6 alegreya">Join 250,000+ customers making more sustainable coffee at home.</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
