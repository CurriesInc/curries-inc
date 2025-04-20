import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "The Paneer Butter Masala is simply divine! Authentic flavors that remind me of home. The service is always prompt and the food is consistently excellent.",
    name: "Priya Sharma",
    role: "Regular Customer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
  },
  {
    id: 2,
    text: "Curries Inc. catered our office party and everyone was impressed! The variety was excellent and the flavors were authentic. Will definitely be ordering from them again.",
    name: "Rajesh Patel",
    role: "Corporate Client",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    id: 3,
    text: "Their Hakka Noodles and Gobi Manchurian are the best Indo-Chinese dishes I've had in the city. The WhatsApp ordering is super convenient too!",
    name: "Meera Iyer",
    role: "Foodie",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
    rating: 4.5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideTrackRef = useRef<HTMLDivElement>(null);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const updateSlidesToShow = () => {
    if (window.innerWidth >= 1024) {
      setSlidesToShow(3);
    } else if (window.innerWidth >= 768) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(1);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - slidesToShow);

  const updateSlider = (index: number) => {
    if (slideTrackRef.current) {
      const newIndex = Math.min(Math.max(index, 0), maxIndex);
      setCurrentIndex(newIndex);
      slideTrackRef.current.style.transform = `translateX(-${
        newIndex * (100 / slidesToShow)
      }%)`;
    }
  };

  const handlePrev = () => {
    updateSlider(currentIndex - 1);
  };

  const handleNext = () => {
    updateSlider(currentIndex + 1);
  };

  const handleDotClick = (index: number) => {
    updateSlider(index);
  };

  return (
    <section id="testimonials" className="py-16 bg-[#fffbeb]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-800 relative inline-block section-heading after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-[3px] after:bg-primary">
            Customer Love
          </h2>
          <p className="mt-8 max-w-3xl mx-auto text-neutral-800">
            Don't just take our word for it. See what our customers have to say.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="testimonial-slider relative">
            <div className="overflow-hidden">
              <div
                ref={slideTrackRef}
                className="testimonial-track flex transition-transform duration-500"
                style={{ transform: "translateX(0)" }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className={`testimonial-slide w-full ${
                      slidesToShow === 3
                        ? "lg:w-1/3"
                        : slidesToShow === 2
                          ? "md:w-1/2"
                          : ""
                    } flex-shrink-0 px-4`}
                  >
                    <Card className="testimonial-card h-full border border-neutral-200 bg-white relative before:text-4xl before:absolute before:top-[-1rem] before:left-4 before:text-neutral-200 before:font-serif">
                      <CardContent className="p-6">
                        <p className="text-neutral-800 mb-6">
                          {testimonial.text}
                        </p>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-neutral-600">
                            {testimonial.role}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Controls */}
            <Button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#f8e8b3] p-2 rounded-full shadow-md border border-neutral-200 hover:bg-primary hover:text-white transition-colors"
              variant="outline"
              size="icon"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#f8e8b3] p-2 rounded-full shadow-md border border-neutral-200 hover:bg-primary hover:text-white transition-colors"
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Slider Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(maxIndex + 1)].map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === currentIndex
                    ? "bg-primary"
                    : "bg-neutral-300 hover:bg-primary transition-colors"
                }`}
                onClick={() => handleDotClick(i)}
                aria-label={`Go to slide ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
