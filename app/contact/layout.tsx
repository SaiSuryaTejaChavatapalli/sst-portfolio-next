type ContactLayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: "Contact",
  description: "Contact page of Sai Surya Teja Portfolio.",
};
const ContactLayout = ({ children }: ContactLayoutProps) => {
  return <div>{children}</div>;
};

export default ContactLayout;
