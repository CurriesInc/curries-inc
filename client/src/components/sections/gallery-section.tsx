import { useState } from "react";

const galleryCategories = [
  { id: "all", name: "All" },
  { id: "food", name: "Food" },
  { id: "events", name: "Events" },
  { id: "catering", name: "Catering" },
];

const galleryItems = [
  {
    id: 1,
    title: "Paneer Tikka Masala",
    image: "https://images.unsplash.com/photo-1596797038530-2c107aa7e1f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    type: "food",
  },
  {
    id: 2,
    title: "Vegetable Biryani",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    type: "food",
  },
  {
    id: 3,
    title: "Corporate Lunch Event",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    type: "events",
  },
  {
    id: 4,
    title: "Wedding Catering Setup",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    type: "catering",
  },
  {
    id: 5,
    title: "Malai Kofta",
    image: "https://images.unsplash.com/photo-1662116765994-1e4200c43589?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    type: "food",
  },
  {
    id: 6,
    title: "Birthday Party Catering",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    type: "events",
  },
  {
    id: 7,
    title: "Corporate Buffet Setup",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    type: "catering",
  },
  {
    id: 8,
    title: "Paneer Tikka",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    type: "food",
  },
];

export default function GallerySection() {
  const [activeGallery, setActiveGallery] = useState("all");

  const handleCategoryChange = (categoryId: string) => {
    setActiveGallery(categoryId);
  };

  const filteredItems = galleryItems.filter(
    (item) => activeGallery === "all" || item.type === activeGallery
  );

  return (
    <section id="gallery" className="py-16 bg-[#f8e8b3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-800 relative inline-block section-heading after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-[3px] after:bg-primary">
            Food & Events Gallery
          </h2>
          <p className="mt-8 max-w-3xl mx-auto text-neutral-800">
            A visual feast of our culinary creations and the events we've catered.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Gallery Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeGallery === category.id
                    ? "bg-primary text-white"
                    : "bg-white text-neutral-800 hover:bg-primary hover:text-white"
                }`}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="gallery-item relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-medium">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}