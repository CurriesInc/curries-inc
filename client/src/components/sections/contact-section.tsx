import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  subject: z.string().min(1, { message: "Please select a subject" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
  subscribe: z.boolean().default(false),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "general",
      message: "",
      subscribe: false,
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon.",
        variant: "default",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-16 bg-[#fffbeb]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-800 relative inline-block section-heading after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-[3px] after:bg-primary">
            Get in Touch
          </h2>
          <p className="mt-8 max-w-3xl mx-auto text-neutral-800">
            Whether you have a question about our menu, want to place an order,
            or inquire about catering services - we're here to help!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-white rounded-lg shadow-lg h-full">
            <CardContent className="p-6">
              <h3 className="text-2xl font-heading font-semibold text-primary mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start mb-4">
                  <div>
                    <p className="font-medium text-[#2e0101]">Address</p>
                    <p className="text-neutral-600">
                      F-10, Aagam Vivianna, Vesu, Surat, Gujarat - 395007
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-4">
                  <div>
                    <p className="font-medium text-[#2e0101]">Phone</p>
                    <p className="text-neutral-600">+91 9601503194</p>
                  </div>
                </div>

                <div className="flex items-start mb-4">
                  <div>
                    <p className="font-medium text-[#2e0101]">Email</p>
                    <p className="text-neutral-600">curriesinc.srt@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start mb-4">
                  <div>
                    <p className="font-medium text-[#2e0101]">Hours</p>
                    <p className="text-neutral-600">
                      Monday - Sunday: 12:00 PM - 11:30 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-3">Order Online</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://wa.me/919601503194"
                    className="flex items-center px-4 py-2 bg-neutral-200 rounded-md hover:bg-primary hover:text-white transition-colors"
                  >
                    <img
                      src="https://cdn.brandfetch.io/id6Zq084G_/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B"
                      alt="WhatsApp"
                      className="h-6 mr-2"
                    />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="https://link.zomato.com/xqzv/rshare?id=79016599305637fb"
                    className="flex items-center px-4 py-2 bg-neutral-200 rounded-md hover:bg-primary hover:text-white transition-colors"
                  >
                    <img
                      src="https://cdn.brandfetch.io/idEql8nEWn/w/2048/h/2048/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B"
                      alt="Zomato"
                      className="h-6 mr-2"
                    />
                    <span>Zomato</span>
                  </a>
                  <a
                    href="https://www.swiggy.com/direct/brand/533390?source=swiggy-direct&subSource=generic"
                    className="flex items-center px-4 py-2 bg-neutral-200 rounded-md hover:bg-primary hover:text-white transition-colors"
                  >
                    <img
                      src="https://cdn.brandfetch.io/ideeTxiKQK/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B"
                      alt="Swiggy"
                      className="h-6 mr-2"
                    />
                    <span>Swiggy</span>
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-3">Our Location</h4>
                <div className="rounded-lg overflow-hidden h-48 bg-neutral-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d238171.34365095553!2d72.770642!3d21.135389!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dc31410bd79%3A0x391453086d9ceca1!2sCurries%20Inc.!5e0!3m2!1sen!2sin!4v1745152242959!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-lg shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-2xl font-heading font-semibold text-primary mb-6">
                Send us a Message
              </h3>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              {...field}
                              className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="john@example.com"
                              {...field}
                              className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="+91 98765 43210"
                            {...field}
                            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="general">
                              General Inquiry
                            </SelectItem>
                            <SelectItem value="order">
                              Place an Order
                            </SelectItem>
                            <SelectItem value="catering">
                              Catering Inquiry
                            </SelectItem>
                            <SelectItem value="feedback">
                              Feedback/Suggestion
                            </SelectItem>
                          </SelectContent>
                        </Select>
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
                            placeholder="Your message here..."
                            rows={4}
                            {...field}
                            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subscribe"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="h-4 w-4 text-primary focus:ring-primary border-neutral-300 rounded"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Subscribe to our newsletter for special offers
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors font-medium"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
