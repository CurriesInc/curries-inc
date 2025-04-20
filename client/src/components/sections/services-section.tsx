import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Takeaway & Delivery",
    description:
      "Enjoy our delicious food at home. Order through our delivery partners.",
    linkText: (
      <div className="flex flex-col gap-4">
        <div className="flex justify-center gap-6">
          <a
            href="https://wa.me/919601503194"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity flex items-center justify-center"
          >
            <img
              src="https://cdn.brandfetch.io/id6Zq084G_/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B"
              alt="WhatsApp"
              className="h-8"
            />
          </a>
          <a
            href="https://link.zomato.com/xqzv/rshare?id=79016599305637fb"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src="https://cdn.brandfetch.io/idEql8nEWn/w/2048/h/2048/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B"
              alt="Zomato"
              className="h-8"
            />
          </a>
          <a
            href="https://www.swiggy.com/direct/brand/533390?source=swiggy-direct&subSource=generic"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img
              src="https://cdn.brandfetch.io/ideeTxiKQK/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B"
              alt="Swiggy"
              className="h-8"
            />
          </a>
        </div>
      </div>
    ),
    linkHref: "#",
    iconBgClass: "bg-primary",
    linkClass: "",
  },
  {
    title: "Party Catering",
    description:
      "From small gatherings to large celebrations, we offer customized catering solutions for every occasion.",
    linkText: "Inquire Now",
    linkHref: "#contact",
    iconBgClass: "bg-primary",
    linkClass: "text-primary",
  },
  {
    title: "Corporate Events",
    description:
      "Elevate your corporate events with our professional catering services. Perfect for meetings, conferences, and team celebrations.",
    linkText: "Get a Quote",
    linkHref: "#contact",
    iconBgClass: "bg-primary",
    linkClass: "text-primary",
  },
];

export default function ServicesSection() {
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
    <section className="py-16 bg-[#f8e8b3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-800 relative inline-block section-heading after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-[3px] after:bg-primary">
            Our Services
          </h2>
          <p className="mt-8 max-w-3xl mx-auto text-neutral-800">
            From quick takeaway meals to full-scale corporate events, we cater
            to all your culinary needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white rounded-lg shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-heading font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-800 mb-4">{service.description}</p>
                <div className={service.linkClass}>{service.linkText}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
