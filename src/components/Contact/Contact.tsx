import { Linkedin, Mail, Phone } from "lucide-react";
import SectionHeader from "../SectionHeader";
import ContactCard from "./ContactCard";

const Contact = () => (
  <section id="contact" className="py-20 px-6">
    <div className="max-w-6xl mx-auto py-5">
      <SectionHeader title="Get In Touch" />

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <ContactCard
          Icon={Phone}
          title="Phone Call"
          value="+92 (339) 993-2001"
          link="tel:+923399932001"
        />
        <ContactCard
          Icon={Mail}
          title="Email"
          value="yasindaniyal.frontend@gmail.com"
          link="https://mail.google.com/mail/?view=cm&fs=1&to=yasindaniyal.frontend@gmail.com"
        />
        <ContactCard
          Icon={Linkedin}
          title="LinkedIn"
          value="linkedin.com/in/yasindaniyal"
          link="https://www.linkedin.com/in/yasindaniyal"
        />
      </div>

      <div className="text-center">
        <p className="text-xl text-gray-300 mb-8">
          I'm currently open to new opportunities. Let's build something amazing
          together!
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=yasindaniyal.frontend@gmail.com&su=Hello%20Yasin&body=I%20just%20visited%20your%20portfolio!"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
        >
          Say Hello
        </a>

        {/* Mobile/Tablet button (<768px) */}
        <a
          href="mailto:yasindaniyal.frontend@gmail.com?subject=Hello Yasin&body=I just visited your portfolio!"
          className="md:hidden inline-block bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
        >
          Say Hello
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
