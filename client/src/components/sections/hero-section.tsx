import { Button } from "@/components/ui/button";

export default function HeroSection() {
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
    <section
      id="home"
      className="flex items-center justify-center h-[80vh] bg-cover bg-center bg-no-repeat bg-[#f8e8b3]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')",
      }}
    >
      <div className="text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">
          Authentic Indian Flavors
        </h1>
        <h2 className="text-xl md:text-2xl font-accent mb-8">
          Pure Vegetarian North Indian & Indo-Chinese Cuisine
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-10">
          Homemade spices. Traditional recipes. Modern twists.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button
            asChild
            className="bg-white text-primary px-6 py-3 rounded-md hover:bg-[#2e0101] hover:text-white transition-colors font-medium"
          >
            <a href="#menu" onClick={handleLinkClick}>
              Explore Our Menu
            </a>
          </Button>
          <Button
            asChild
            className="bg-white text-primary px-6 py-3 rounded-md hover:bg-[#2e0101] hover:text-white transition-colors font-medium"
          >
            <a href="#contact" onClick={handleLinkClick}>
              Book Catering
            </a>
          </Button>
        </div>
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="https://wa.me/919601503194"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center"
          >
            <div className="flex justify-center mb-2">
              <img
                src="https://cdn.brandfetch.io/id6Zq084G_/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B"
                alt="Zomato"
                className="h-8"
              />
            </div>
            <p className="text-sm">WhatsApp Order</p>
          </a>
          <a
            href="https://link.zomato.com/xqzv/rshare?id=79016599305637fb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center"
          >
            <div className="flex justify-center mb-2">
              <img
                src="https://cdn.brandfetch.io/idEql8nEWn/w/2048/h/2048/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B"
                alt="Zomato"
                className="h-8"
              />
            </div>
            <p className="text-sm">Order on Zomato</p>
          </a>
          <a
            href="https://www.swiggy.com/direct/brand/533390?source=swiggy-direct&subSource=generic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center"
          >
            <div className="flex justify-center mb-2">
              <img
                src="https://cdn.brandfetch.io/ideeTxiKQK/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B"
                alt="Swiggy"
                className="h-8"
              />
            </div>
            <p className="text-sm">Order on Swiggy</p>
          </a>
        </div>
      </div>
    </section>
  );
}
