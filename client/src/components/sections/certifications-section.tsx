import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Certification {
  id: number;
  title: string;
  issuedBy: string;
  year: string;
  description: string;
  tags: string[];
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "FSSAI License",
    issuedBy: "Food Safety and Standards Authority of India",
    year: "2023",
    description:
      "Authorized to operate as a food business operator with proper safety and hygiene standards.",
    tags: ["Safety", "Quality", "Compliance"],
  },
  {
    id: 2,
    title: "Health & Hygiene Certificate",
    issuedBy: "Gujarat Food Safety Department",
    year: "2023",
    description:
      "Certified for maintaining excellent health and hygiene standards in food preparation.",
    tags: ["Hygiene", "Cleanliness", "Health"],
  },
  {
    id: 3,
    title: "Pure Vegetarian Certification",
    issuedBy: "Vegetarian Society of India",
    year: "2023",
    description:
      "Certified as a 100% pure vegetarian establishment with strict adherence to vegetarian principles.",
    tags: ["Vegetarian", "Food Standards"],
  },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 bg-[#f8e8b3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Certifications</span> &{" "}
            <span className="text-primary">Licenses</span>
          </h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            We pride ourselves on maintaining the highest standards of food
            safety, hygiene, and quality. Here are the certifications that
            validate our commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              className="hover:shadow-lg transition-all duration-300 h-full"
            >
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-primary mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-neutral-500">
                      <span className="font-medium">{cert.issuedBy}</span> •{" "}
                      {cert.year}
                    </p>
                  </div>

                  <p className="text-neutral-600 mb-4 flex-grow">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto justify-center font-medium">
                    {cert.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="bg-amber-100 text-primary font-medium border-amber-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
