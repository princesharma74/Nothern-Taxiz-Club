import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon, Divide } from "lucide-react";
import Link from "next/link";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#",
    label: "Home",
  },
  {
    href: "#why-choose-us",
    label: "Why Us",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#contact",
    label: "Contact",
  },
  {
    href: "#faqs",
    label: "FAQs"
  }
];

export const FooterSection = () => {
  return (
    <footer id="footer" className="container">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="flex flex-col md:flex-row md:justify-between gap-2">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" />
              <h3 className="text-2xl">Northern Taxiz Club</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Quick Links</h3>
            {routeList.map((item, index) => (
              <div key={index}>
                <Link href={item.href}>{item.label}</Link>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Our Location</h3>
            <div>
              <p className="opacity-60">
                53 Jutland Way, Epping VIC 3076, Australia
              </p>
              <p className="opacity-60">
                <Link href="mailto:northerntclub@gmail.com">
                  northerntclub@gmail.com
                </Link>
              </p>
              <p className="opacity-60">04 8003 3986</p>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; 2025 All Rights Reserved | Northern Taxiz Club, Melbourne
            Australia.
          </h3>
        </section>
      </div>
    </footer>
  );
};