//@ts-nocheck
"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import emailjs from "@emailjs/browser";
import {
  User,
  MailIcon,
  ArrowRightIcon,
  MessageSquare,
  Loader2,
} from "lucide-react";
import { useRef, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
type Inputs = {
  customerName: string;
  customerEmail: string;
  customerMessage: string;
};
const ContactForm = () => {
  const [sendLoading, setSendLoading] = useState(false);
  const contactForm = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setSendLoading(true);
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        contactForm.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setSendLoading(false);
      toast({
        title: "Email Sent Successfully, We will get back to you soon!",
      });
    } catch (error) {
      setSendLoading(false);
      toast({
        title: "Something went wrong, Please try again!",
      });
      console.log("Error sending email", error);
    }
  };
  return (
    <form
      className="flex flex-col gap-y-1"
      onSubmit={handleSubmit(onSubmit)}
      ref={contactForm}
    >
      {/* Name */}
      <div className="flex flex-col">
        <div className="relative flex items-center">
          <Input
            id="name"
            placeholder="Name"
            {...register("customerName", { required: "Name is required" })}
          />

          <User className="absolute right-6" size={20} />
        </div>
        <div className="m-3 ml-4 text-red-600">
          {errors.customerName && (
            <p role="alert">{errors.customerName.message}</p>
          )}
        </div>
      </div>

      {/* Email*/}
      <div className="flex flex-col">
        <div className="relative flex items-center">
          <Input
            id="email"
            placeholder="Email"
            {...register("customerEmail", {
              required: "Email is required",
              validate: (data) => {
                const re = /\S+@\S+\.\S+/;
                const res = re.test(data);
                if (!res) return "Please enter valid email address";
                return res;
              },
            })}
          />
          <MailIcon className="absolute right-6" size={20} />
        </div>
        <div className="m-3 ml-4 text-red-600">
          {errors.customerEmail && (
            <p role="alert">{errors.customerEmail.message}</p>
          )}
        </div>
      </div>

      {/* Text area */}
      <div>
        <div className="relative flex items-center">
          <Textarea
            placeholder="Type Your Message Here."
            {...register("customerMessage", {
              required: "Message is required",
            })}
          />
          <MessageSquare className="absolute right-6 top-4" size={20} />
        </div>
        <div className="m-3 ml-4 text-red-600">
          {errors.customerMessage && (
            <p role="alert">{errors.customerMessage.message}</p>
          )}
        </div>
      </div>

      <Button className="flex items-center gap-x-1 max-w-[166px]">
        {sendLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}

        <span>Let&apos;s Talk</span>
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default ContactForm;
