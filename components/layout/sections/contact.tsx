"use client";
import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(10, "Phone number must be at least 10 digits."),
  vehicleType: z.string().min(1, "Vehicle type is required."),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export const ContactSection = () => {
  const [message, setMessage] = useState("");
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      vehicleType: "",
      message: "",
    },
  });

  async function onSubmit(userDetails: FormData) {
    setMessage("Loading...");
    try {
      const response = await axios.post("/api/contact", userDetails);

      if (response.status === 200) {
        setMessage("Thank you for contacting us! We will get back to you soon.");
        console.log("Form submitted successfully:", response.data);
      } else {
        setMessage("Submission failed! Please try again later.");
        console.error("Failed to submit form:", response.data);
      }
    } catch (error: unknown) {
      setMessage("Submission failed! Please try again later.");

      if (axios.isAxiosError(error)) {
        console.error(
          "Error submitting contact form:",
          error.response?.data || error.message
        );
      } else if (error instanceof Error) {
        console.error("Error submitting contact form:", error.message);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  }

  return (
    <section id="contact" className="text-white body-font relative">
      <div className="absolute inset-0">
        <iframe
          title="map"
          className="w-full h-full"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153169!3d-37.81627974202198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8b3c5b1b1b1!2s123%20Transport%20Street%2C%20Melbourne%20VIC%203000!5e0!3m2!1sen!2sau!4v1681234567890!5m2!1sen!2sau"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
        ></iframe>
      </div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-6 px-5 py-24 flex">
        <div className="lg:w-1/3 md:w-1/2 bg-black rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md text-white">
          <h2 className="text-white text-2xl font-semibold title-font mb-5">
            Get In Touch
          </h2>
          <p className="text-gray-200 mb-5">
            Contact us for any inquiries or assistance. We’re here to help!
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        className="border-white bg-black text-white p-2 rounded"
                        placeholder="Your Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="border-white bg-black text-white p-2 rounded"
                        placeholder="example@email.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        className="border-white bg-black text-white p-2 rounded"
                        placeholder="1234567890"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="vehicleType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vehicle Type</FormLabel>
                    <FormControl>
                      <Input
                        className="border-white bg-black text-white p-2 rounded"
                        placeholder="e.g., Taxi, Rideshare"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        className="border-white bg-black text-white p-2 rounded"
                        placeholder="Your message"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                variant={"secondary"}
                type="submit"
                className="w-full py-2 px-4"
              >
                Submit
              </Button>
            </form>
          </Form>
          {message && (
            <p className="text-center text-sm text-gray-400 mt-4">{message}</p>
          )}
        </div>
      </div>
    </section>
  );
};