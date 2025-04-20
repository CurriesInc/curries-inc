export interface MenuItem {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
}

export interface GalleryItem {
  id: number;
  title: string;
  image: string;
  type: string;
}

export interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  image: string;
  rating: number;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  iconBgClass: string;
  linkClass: string;
}
