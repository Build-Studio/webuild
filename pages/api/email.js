import { EmailTemplate } from "@components/EmailTemplate";
import { webInfos } from "@constants";
import { Resend } from "resend";

const resend = new Resend("re_BwN9kPzC_MSTYcKEriqUcKrYhwfYbVzCG");

export default async (req, res) => {
  try {
    const data = await resend.emails.send({
      from: "noreply@webuild.gg",
      to: ["kemmie.xd@gmail.com"],
      // to: webInfos.contactEmails,
      subject: "Contact from We Build",
      react: EmailTemplate(req),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
