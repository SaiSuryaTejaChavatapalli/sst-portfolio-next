import ContactForm from "@/components/ContactForm";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
const ContactPage = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text and illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            {/* text */}
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              <span>Say Hello 👋</span>
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Connect.</h1>
            <p className="subtitle max-w-[400px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus est consequatur nesciunt odit!
            </p>
          </div>
          {/* illustrations */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light bg-contain bg-no-repeat bg-top dark:bg-contact_illustration_dark"></div>
        </div>
        {/* info text and form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text */}
          <div className="flex flex-col  gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            <div>
              {/* mail */}
              <div className="flex items-center gap-x-8">
                <MailIcon size={18} className="text-primary" />
                <div>saisuryateja3@gmail.com</div>
              </div>
            </div>
            <div>
              {/* address */}
              <div className="flex items-center gap-x-8">
                <HomeIcon size={18} className="text-primary" />
                <div>Hinjewadi, Pune, Maharastra, India</div>
              </div>
            </div>
            <div>
              {/* phone */}
              <div className="flex items-center gap-x-8">
                <PhoneCall size={18} className="text-primary" />
                <div>+91 9885432575</div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
