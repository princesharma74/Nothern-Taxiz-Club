import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface MembershipProps {
  icon: string;
  title: string;
  description: string;
}

const membershipList: MembershipProps[] = [
  {
    icon: "Taxi",
    title: "Taxi Cover Melbourne",
    description:
      "We offer specialized protection for taxi operators with competitive rates and complete coverage options.",
  },
  {
    icon: "Car",
    title: "Rideshare Cover in Melbourne",
    description:
      "Custom protection plans for all rideshare drivers that understand the unique needs of your business model.",
  },
  {
    icon: "Shield",
    title: "Owner & Driver Cover Melbourne",
    description:
      "Complete protection packages for both vehicle owners and drivers ensuring everyone is covered.",
  },
];

export const MembershipSection = () => {
  return (
    <section id="membership" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Membership</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Melbourne&apos;s Most Trusted Taxi & Rideshare Club
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Whether you drive for Uber, Ola, Didi, or operate a traditional taxi, our club offers comprehensive protection designed specifically for Melbourne&apos;s commercial drivers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {membershipList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
