import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Taxi Cover and Rideshare Cover",
    description:
      "Complete protection for all commercial passenger vehicles operating in Melbourne.",
    pro: 0,
  },
  {
    title: "At Fault Protection",
    description:
      "Coverage when accidents happen that are determined to be your fault, minimizing your financial exposure.",
    pro: 0,
  },
  {
    title: "Theft and Malicious Damages",
    description:
      "Protection against vehicle theft, vandalism, and intentional damage by others.",
    pro: 0,
  },
  {
    title: "Hire Car Cover",
    description:
      "Specialized protection for hire car operators with unique business needs.",
    pro: 0,
  },
  {
    title: "Easy Insurance Policy",
    description:
      "Straightforward policy terms without confusing fine print or hidden exclusions.",
    pro: 0,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Our Protection Packages
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
       {`Comprehensive protection plans tailored for Melbourne's taxi and rideshare drivers.`} 
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:w-[80%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};