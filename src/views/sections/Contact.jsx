import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { MagneticButton } from "../components/MagneticButton";

export const Contact = ({ profile }) => {
  if (!profile) return null;

  return (
    <section id="contact" className="py-32 relative">
      <div className="container">
        <div className="glass p-12 md:p-20 relative overflow-hidden text-center max-w-5xl mx-auto">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-500"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Let's build something <br />
              <span className="gradient-text">Exceptional</span> together.
            </h2>
            <p className="text-zinc-500 text-lg mb-12 max-w-2xl mx-auto">
              Currently open to new opportunities and interesting collaborations
              in Mobile & AI domains.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <MagneticButton
                href={`mailto:${profile.email}`}
                className="px-10 py-5 rounded-2xl bg-white text-black font-bold flex items-center gap-3 hover:bg-zinc-100 transition-all shadow-xl"
              >
                Get in Touch <Send size={20} />
              </MagneticButton>
            </div>

            <div className="flex justify-center gap-10">
              {[
                { icon: Github, href: profile.github, label: "GitHub" },
                { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  whileHover={{ y: -5, color: "#10b981" }}
                  className="flex flex-col items-center gap-2 text-zinc-500 transition-colors"
                >
                  <social.icon size={24} />
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em]">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
