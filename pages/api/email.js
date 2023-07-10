import { EmailTemplate } from "@components/EmailTemplate";
import { webInfos } from "@constants";
import { Resend } from "resend";

const resend = new Resend("re_c2aaFokR_C1sX2Vvj7QV8iWLJfoRTm86R");

export default async (req, res) => {
  try {
    const data = await resend.emails.send({
      from: "noreply@webuild.gg",
      to: webInfos.contactEmails,
      // to: ['kemmie.xd@gmail.com'],
      subject: "Contact from We Build",
      react: EmailTemplate(JSON.parse(req?.body)),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
