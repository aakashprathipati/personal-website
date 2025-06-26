
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "7730901750",
      href: "tel:7730901750"
    },
    {
      icon: Mail,
      label: "Email",
      value: "aakashprathipaticore@gmail.com",
      href: "mailto:aakashprathipaticore@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Vijayawada, Tadepalli",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Get In <span className="text-purple-400">Touch</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-4 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  <item.icon className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="font-semibold">{item.label}</p>
                    <p>{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-bold text-white mb-4">Social Profiles</h4>
              <a
                href="https://www.linkedin.com/in/aakash-prathipati-741b18347/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-8">Let's Work Together</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm always interested in new opportunities and innovative projects. 
              Whether you're looking for a tech strategist, AI specialist, or business 
              collaborator, let's connect and explore how we can create something amazing together.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:aakashprathipaticore@gmail.com"
                className="block bg-purple-600 hover:bg-purple-700 text-white text-center px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Send Email
              </a>
              <a
                href="tel:7730901750"
                className="block border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-center px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
