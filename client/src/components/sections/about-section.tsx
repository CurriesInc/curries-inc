import { Button } from "@/components/ui/button";

export default function AboutSection() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <section id="about" className="py-16 bg-[#fffbeb]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-800 relative inline-block section-heading after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-[3px] after:bg-primary">
            Our Story
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="Restaurant interior"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
              Tradition Meets Innovation
            </h3>
            <p className="mb-4 text-neutral-800">
              At Curries Inc., we take pride in our commitment to authentic
              North Indian and Indo-Chinese cuisine. Every dish is prepared with
              love and care, using traditional recipes that have been passed
              down through generations.
            </p>
            <p className="mb-6 text-neutral-800">
              What sets us apart is our dedication to making everything in-house
              - from our aromatic spice blends to our signature sauces. We
              believe that quality ingredients and traditional preparation
              methods are the key to exceptional flavors.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <i
                  className="fas fa-leaf text-secondary mr-3 text-xl"
                  style={{ color: "#7BBF6A" }}
                ></i>
                <span>Pure Vegetarian</span>
              </div>
              <div className="flex items-center">
                <i
                  className="fas fa-mortar-pestle text-secondary mr-3 text-xl"
                  style={{ color: "#7BBF6A" }}
                ></i>
                <span>Homemade Spices</span>
              </div>
              <div className="flex items-center">
                <i
                  className="fas fa-utensils text-secondary mr-3 text-xl"
                  style={{ color: "#7BBF6A" }}
                ></i>
                <span>Traditional Recipes</span>
              </div>
              <div className="flex items-center">
                <i
                  className="fas fa-star text-secondary mr-3 text-xl"
                  style={{ color: "#7BBF6A" }}
                ></i>
                <span>Premium Quality</span>
              </div>
            </div>

            <Button
              asChild
              className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors font-medium"
            >
              <a href="#menu" onClick={handleLinkClick}>
                Explore Our Cuisine
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
