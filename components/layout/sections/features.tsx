import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "ShieldCheck",
    title: "Comprehensive Protection",
    description:
      "Get complete and all-inclusive coverage with the best plans for taxi and rideshare service protection in Melbourne.",
  },
  {
    icon: "DollarSign",
    title: "Flexible Payment Options",
    description:
      "Manage your business finances with ease through monthly, quarterly, and annual payment plans.",
  },
  {
    icon: "Truck",
    title: "No Towing Fees",
    description:
      "We don't charge towing fees for eligible claims under our protection plans, ensuring peace of mind.",
  },
  {
    icon: "Percent",
    title: "New Venture Discounts",
    description:
      "Special discounts on cover packages for start-ups and new ventures in the taxi and rideshare industry.",
  },
  {
    icon: "ClipboardCheck",
    title: "Hassle-Free Claims",
    description:
      "Our streamlined claims process ensures you're back on the road fast, minimizing income loss.",
  },
  {
    icon: "ThumbsUp",
    title: "Trusted by Drivers",
    description:
      "Join Melbourne's most trusted club for taxi and rideshare drivers with top-tier protection and service.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <div className="flex flex-col gap-4">
      <CardTitle className="w-full text-4xl md:text-5xl font-bold flex flex-col items-center animate-fade-in text-center">
        <div>
          Why Choose
          <div className="text-transparent pl-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
            Northern Taxiz Club?
          </div>
        </div>
      </CardTitle>
      <div>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        {`Discover the benefits of joining Melbourne's premier protection club for taxi and rideshare drivers.`}
      </h3>
      </div>
      </div>


      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};