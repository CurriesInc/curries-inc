import { useState } from "react";
import { Button } from "@/components/ui/button";

const menuCategories = [
  { id: "all", name: "All" },
  { id: "starters", name: "Starters" },
  { id: "curries", name: "Curries" },
  { id: "biryanis", name: "Biryanis" },
  { id: "indo-chinese", name: "Indo-Chinese" },
  { id: "breads", name: "Breads" },
];

const menuItems = [
  {
    id: 1,
    name: "Paneer Tikka",
    price: "₹250",
    description:
      "Cottage cheese marinated in spices and yogurt, grilled to perfection.",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "starters",
    tags: ["Bestseller"],
  },
  {
    id: 2,
    name: "Butter Paneer Masala",
    price: "₹300",
    description:
      "Cottage cheese cubes simmered in a rich, creamy tomato-based gravy.",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "curries",
    tags: ["Popular"],
  },
  {
    id: 3,
    name: "Vegetable Biryani",
    price: "₹280",
    description:
      "Fragrant basmati rice cooked with mixed vegetables and aromatic spices.",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "biryanis",
    tags: [],
  },
  {
    id: 4,
    name: "Vegetable Hakka Noodles",
    price: "₹220",
    description:
      "Stir-fried noodles with mixed vegetables in our special Indo-Chinese sauce.",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "indo-chinese",
    tags: ["Bestseller"],
  },
  {
    id: 5,
    name: "Garlic Naan",
    price: "₹80",
    description:
      "Soft and fluffy bread topped with garlic and butter, baked in tandoor.",
    image:
      "https://images.unsplash.com/photo-1624374053855-39a5a1a41219?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "breads",
    tags: [],
  },
  {
    id: 6,
    name: "Aloo Tikki",
    price: "₹180",
    description:
      "Crispy potato patties seasoned with aromatic spices, served with chutney.",
    image:
      "https://images.unsplash.com/photo-1517244683847-7456b63c5969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "starters",
    tags: [],
  },
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const filteredItems = menuItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory,
  );

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
    <section id="menu" className="py-16 bg-[#fffbeb]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-800 relative inline-block section-heading after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-[3px] after:bg-primary">
            Our Menu
          </h2>
          <p className="mt-8 max-w-3xl mx-auto text-neutral-800">
            Discover our extensive menu featuring authentic North Indian and
            Indo-Chinese delicacies.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Menu Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeCategory === category.id
                    ? "bg-primary text-white"
                    : "bg-[#f8e8b3] text-neutral-800 hover:bg-primary hover:text-white"
                }`}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="menu-item bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-heading font-semibold">
                      {item.name}
                    </h3>
                    <span className="text-primary font-medium">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600 mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-center text-xs">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`${
                          tag === "Bestseller"
                            ? "bg-primary"
                            : tag === "Popular"
                              ? "bg-primary"
                              : "bg-primary"
                        } text-white px-2 py-1 rounded mr-2`}
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="flex items-center" style={{ color: '#7BBF6A' }}>
                      <i className="fas fa-leaf mr-1"></i> Pure Veg
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="mb-4 text-neutral-600">
              This is just a glimpse of our extensive menu.
            </p>
            <Button
              asChild
              className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors font-medium"
            >
              <a
                href="https://drive.google.com/file/d/YOUR_DRIVE_ID/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-file-pdf mr-2"></i>
                Download Full Menu (PDF)
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
