import { motion } from "framer-motion";
import { ChevronRight, Download, MapPin, Code2 } from "lucide-react";
import { MagneticButton } from "../components/MagneticButton";

export const Hero = ({ profile }) => {
  if (!profile) return null;

  return (
    <section
      id="top"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Dynamic Background elements */}
      <div className="blob" style={{ top: "-10%", left: "-10%" }}></div>
      <div
        className="blob"
        style={{
          bottom: "10%",
          right: "10%",
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent 70%)",
        }}
      ></div>

      <div className="container grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            {profile.title}
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-[1.1] tracking-tight">
            Design <span className="gradient-text">Systems</span> <br />
            That Scale.
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-xl leading-relaxed">
            I'm <span className="text-white font-semibold">{profile.name}</span>
            . Crafting premium mobile experiences at the intersection of{" "}
            <span className="text-emerald-400">clean code</span> and{" "}
            <span className="text-blue-400">AI innovation</span>.
          </p>

          <div className="flex flex-wrap gap-6 mb-16">
            <MagneticButton
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-emerald-500 text-black font-bold flex items-center gap-2 hover:bg-emerald-400 transition-all hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]"
            >
              Start Exploring <ChevronRight size={20} />
            </MagneticButton>

            <MagneticButton
              href="#"
              className="px-8 py-4 rounded-2xl glass font-semibold flex items-center gap-2 hover:bg-white/5 transition-all"
            >
              Curriculum Vitae <Download size={20} />
            </MagneticButton>
          </div>

          <div className="flex flex-wrap items-center gap-12 text-zinc-500">
            <div className="flex flex-col gap-1.5">
              <span className="text-white font-bold text-4xl">02+</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500">
                Years Experience
              </span>
            </div>
            <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
            <div className="flex flex-col gap-1.5">
              <span className="text-white font-bold text-4xl">12+</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500">
                Global Projects
              </span>
            </div>
            <div className="w-px h-12 bg-white/10 hidden sm:block"></div>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-zinc-300">
                <MapPin size={14} className="text-emerald-500" />
                <span className="text-xs font-semibold">
                  {profile.location}
                </span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Code2 size={14} className="text-blue-500" />
                <span className="text-xs font-semibold">Open to Work</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative hidden lg:block perspective-1000"
        >
          <motion.div
            whileHover={{ rotateX: 10, rotateY: -10 }}
            className="w-full aspect-square rounded-[40px] overflow-hidden relative z-10 p-1 group"
            style={{
              background:
                "linear-gradient(135deg, rgba(16,185,129,0.5), rgba(59,130,246,0.5))",
            }}
          >
            <div className="w-full h-full bg-[#080808] rounded-[38px] overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                alt="Avinash Magar"
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </motion.div>

          {/* Floating decorative elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass p-4 z-20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                <Code2 size={20} />
              </div>
              <div>
                <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">
                  Expertise
                </div>
                <div className="text-sm font-bold">Flutter Dev</div>
              </div>
            </div>
          </motion.div>

          <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};
