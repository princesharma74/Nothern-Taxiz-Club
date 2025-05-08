import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

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
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Home
              </Link>
            </div>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                About Us
              </Link>
            </div>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Services
              </Link>
            </div>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Membership
              </Link>
            </div>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Make A Claim
              </Link>
            </div>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Contact
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Our Location</h3>
            <div>
              <p className="opacity-60">123 Transport Street, Melbourne VIC 3000</p>
              <p className="opacity-60">northerntaxizclub@gmail.com</p>
              <p className="opacity-60">03 XXXX XXXX</p>
            </div>
            <div>
              <p className="opacity-60">456 Driver Avenue, Thomastown VIC 3074</p>
              <p className="opacity-60">northerntaxizclub2@gmail.com</p>
              <p className="opacity-60">03 XXXX XXXX</p>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; 2025 All Rights Reserved | Northern Taxiz Club, Melbourne Australia.
          </h3>
        </section>
      </div>
    </footer>
  );
};