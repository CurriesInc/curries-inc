import { Link } from "wouter";

export default function Footer() {
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
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="font-heading text-2xl font-bold mb-4">
              Curries Inc.
            </div>
            <p className="mb-4">
              Authentic North Indian & Indo-Chinese cuisine made with love and
              tradition.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>Dine-In</li>
              <li>Takeaway</li>
              <li>Home Delivery</li>
              <li>Party Catering</li>
              <li>Corporate Events</li>
              <li>Special Occasions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday:</span>
                <span>06:00 PM - 11:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Tuesday:</span>
                <span>12:00 PM - 11:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Wednesday:</span>
                <span>12:00 PM - 11:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Thursday:</span>
                <span>12:00 PM - 11:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday:</span>
                <span>12:00 PM - 11:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>12:00 PM - 11:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>12:00 PM - 11:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-neutral-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400">
            © 2023 Curries Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
