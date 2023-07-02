import Layout from "@templates/Layout";
import ContactUsForm from "@templates/home/ContactUsForm";
import classnames from "tailwindcss-classnames";

export default function ContactUsPage() {
  return (
    <Layout>
      <div className={classnames("w-[800px]", "mx-auto", "py-24")}>
        <ContactUsForm />
      </div>
    </Layout>
  );
}
