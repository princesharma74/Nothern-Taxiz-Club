"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaShieldAlt, FaDollarSign, FaTruck, FaShieldVirus, FaTags } from "react-icons/fa";

export const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background border-none shadow-lg text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="w-full text-4xl md:text-5xl font-bold flex flex-col items-center animate-fade-in">
                <div>
                  Why Choose
                  <div className="text-transparent pl-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                    Northern Taxiz Club?
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-full text-xl text-muted-foreground">
              <ul className="list-none text-left space-y-6">
                <li className="flex items-start space-x-4">
                  <FaShieldAlt className="text-primary text-2xl" />
                  <span>
                    <strong>Regulated, Trustworthy Protection:</strong> Self-insured membership for Taxi, Hire Cars, Ride Share Vehicles, and all commercial vehicles.
                  </span>
                </li>
                <li className="flex items-start space-x-4">
                  <FaDollarSign className="text-primary text-2xl" />
                  <span>
                    <strong>Flexible Payment Options:</strong> Manage your finances with ease through monthly, quarterly, or annual payment plans.
                  </span>
                </li>
                <li className="flex items-start space-x-4">
                  <FaTruck className="text-primary text-2xl" />
                  <span>
                    <strong>No Towing Fees:</strong> Eligible claims include free towing services to reduce your stress during accidents.
                  </span>
                </li>
                <li className="flex items-start space-x-4">
                  <FaShieldVirus className="text-primary text-2xl" />
                  <span>
                    <strong>Comprehensive Coverage:</strong> From theft liability to accidental damage, we’ve got you covered.
                  </span>
                </li>
                <li className="flex items-start space-x-4">
                  <FaTags className="text-primary text-2xl" />
                  <span>
                    <strong>Special Discounts:</strong> Exclusive discounts for start-ups and new ventures.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};