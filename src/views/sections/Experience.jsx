import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

export const Experience = ({ experience }) => {
  if (!experience) return null;

  return (
    <section id="experience" className="py-32 bg-white/[0.01]">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr,2fr] gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-emerald-500 font-bold tracking-widest uppercase text-xs mb-4"
            >
              Professional Path
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-bold mb-8 leading-tight"
            >
              Experience <br />& <span className="gradient-text">Journey</span>
            </motion.h2>
            <p className="text-zinc-500 leading-relaxed max-w-sm">
              A timeline of my professional growth, from internships to
              specialized development roles.
            </p>
          </div>

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                  <Briefcase size={80} />
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors uppercase tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="text-zinc-400 font-bold text-sm">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-xs font-bold text-zinc-500">
                    <Calendar size={14} className="text-emerald-500" />
                    {exp.period}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
