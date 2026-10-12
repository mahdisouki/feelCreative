"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Menu, X, Eye, BarChart3, Cpu, Zap } from "lucide-react";

const services = [
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Real-time object detection, classification, and scene understanding for industrial and environmental systems.",
    index: "01",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Time-series forecasting and anomaly detection built on domain-specific training data, not generic models.",
    index: "02",
  },
  {
    icon: Cpu,
    title: "Embedded AI",
    description: "Edge-optimized models that run on constrained hardware — sensors, cameras, and IoT devices in the field.",
    index: "03",
  },
  {
    icon: Zap,
    title: "Automation Systems",
    description: "End-to-end pipeline design: from raw data ingestion to decision output with human-in-the-loop checkpoints.",
    index: "04",
  },
];

const projects = [
  {
    id: "01",
    name: "WasteAI",
    tag: "Environmental Intelligence",
    description:
      "Computer vision system that classifies waste streams in real-time, optimizes collection routes using predictive modeling, and monitors fill levels across 12 cities through a unified intelligence layer.",
    stats: [
      { label: "Collection Cost Reduction", value: "40%", },
      { label: "Sorting Accuracy", value: "98.2%" },
      { label: "Cities Deployed", value: "12" },
    ],
    color: "#00e87a",
    category: "Computer Vision · Route Optimization · IoT",
    featured: true,
  },
  {
    id: "02",
    name: "MediFlow",
    tag: "Healthcare Logistics",
    description:
      "Predictive scheduling engine for hospital resource allocation, reducing patient wait times through intelligent queue management.",
    color: "#38bdf8",
    category: "Predictive Analytics · NLP",
    featured: false,
  },
  {
    id: "03",
    name: "CropMind",
    tag: "Agricultural Intelligence",
    description:
      "Satellite imagery analysis combined with soil sensor data to forecast crop yields and recommend intervention timing.",
    color: "#a78bfa",
    category: "Computer Vision · Forecasting",
    featured: false,
  },
  {
    id: "04",
    name: "UrbanPulse",
    tag: "Smart City Systems",
    description:
      "Adaptive traffic flow optimization using real-time sensor fusion and reinforcement learning deployed citywide.",
    color: "#fb923c",
    category: "Reinforcement Learning · IoT",
    featured: false,
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ background: "#040408", color: "#e8e8ec", fontFamily: "'Barlow', sans-serif" }}
    >
      {/* NAV */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(4,4,8,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div
              className="w-7 h-7 flex items-center justify-center"
              style={{ background: "#00e87a", borderRadius: "3px" }}
            >
              <div
                className="w-2.5 h-2.5"
                style={{ background: "#040408", borderRadius: "2px" }}
              />
            </div>
            <span
              className="font-semibold text-xl tracking-wider uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", color: "#e8e8ec" }}
            >
              Feel Creative
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {["Services", "Projects", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition-colors duration-300"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(232,232,236,0.45)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#e8e8ec")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(232,232,236,0.45)")}
              >
                {item}
              </a>
            ))}
            <motion.a
              href="#contact"
              whileHover={{ backgroundColor: "#00ff8a" }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2 text-sm font-semibold tracking-widest uppercase transition-colors duration-200"
              style={{
                background: "#00e87a",
                color: "#040408",
                fontFamily: "'Barlow Condensed', sans-serif",
                letterSpacing: "0.15em",
              }}
            >
              Start a Project
            </motion.a>
          </div>

          <button
            className="md:hidden transition-colors"
            style={{ color: "rgba(232,232,236,0.7)" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden px-6 py-6 flex flex-col gap-5"
            style={{ background: "#040408", borderTop: "1px solid rgba(255,255,255,0.05)" }}
          >
            {["Services", "Projects", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase" as const,
                  color: "rgba(232,232,236,0.55)",
                }}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </motion.nav>

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center px-6 pt-32 pb-20 overflow-hidden"
      >
        {/* Background grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(232,232,236,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(232,232,236,0.025) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Glow orbs */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,232,122,0.07), transparent 65%)" }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(109,40,217,0.05), transparent 65%)" }}
          animate={{ scale: [1, 1.18, 1] }}
          transition={{ duration: 12, delay: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-8 h-px" style={{ background: "#00e87a" }} />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                color: "#00e87a",
                letterSpacing: "0.3em",
                textTransform: "uppercase" as const,
              }}
            >
              AI Agency
            </span>
          </motion.div>

          {/* Headline */}
          {[
            { text: "We Build", outline: false },
            { text: "AI That", outline: true },
            { text: "Works.", outline: false, accent: true },
          ].map((line, i) => (
            <div key={line.text} className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.05, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "clamp(4rem, 12vw, 10rem)",
                  lineHeight: 0.9,
                  fontWeight: 800,
                  textTransform: "uppercase" as const,
                  letterSpacing: "-0.01em",
                  color: line.accent ? "#00e87a" : line.outline ? "transparent" : "#e8e8ec",
                  WebkitTextStroke: line.outline ? "2px #e8e8ec" : undefined,
                }}
              >
                {line.text}
              </motion.h1>
            </div>
          ))}

          {/* Sub-copy + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65 }}
            className="flex flex-col md:flex-row items-start md:items-end gap-8 md:gap-16 mt-12"
          >
            <p
              className="text-lg max-w-md leading-relaxed"
              style={{ color: "rgba(232,232,236,0.45)" }}
            >
              We design and deploy production-grade artificial intelligence for
              real-world environments — from waste infrastructure to healthcare
              logistics.
            </p>
            <div className="flex items-center gap-6">
              <motion.a
                href="#projects"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 group cursor-pointer"
                style={{ color: "#e8e8ec" }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase" as const,
                  }}
                >
                  View Work
                </span>
                <ArrowRight size={14} />
              </motion.a>
              <div className="w-px h-8" style={{ background: "rgba(255,255,255,0.1)" }} />
              <motion.a
                href="#contact"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 cursor-pointer"
                style={{ color: "#00e87a" }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase" as const,
                  }}
                >
                  Start Project
                </span>
                <ArrowRight size={14} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-6 flex items-center gap-3"
        >
          <motion.div
            className="w-px h-12 origin-top"
            style={{ background: "rgba(0,232,122,0.4)" }}
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-32 px-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-20"
          >
            <div className="w-8 h-px" style={{ background: "#00e87a" }} />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                color: "#00e87a",
                letterSpacing: "0.3em",
                textTransform: "uppercase" as const,
              }}
            >
              Capabilities
            </span>
          </motion.div>

          <div
            className="grid md:grid-cols-2 gap-px"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="p-10 cursor-default transition-colors duration-300 group"
                  style={{ background: "#040408" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#07080e")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#040408")
                  }
                >
                  <div className="flex items-start justify-between mb-8">
                    <Icon size={22} style={{ color: "#00e87a", opacity: 0.8 }} />
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "11px",
                        color: "rgba(232,232,236,0.2)",
                        letterSpacing: "0.2em",
                      }}
                    >
                      {service.index}
                    </span>
                  </div>
                  <h3
                    className="text-3xl uppercase tracking-wide mb-4 transition-colors duration-300"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 600,
                      color: "#e8e8ec",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#00e87a")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#e8e8ec")
                    }
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "rgba(232,232,236,0.38)" }}
                  >
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="py-32 px-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-20"
          >
            <div className="w-8 h-px" style={{ background: "#00e87a" }} />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                color: "#00e87a",
                letterSpacing: "0.3em",
                textTransform: "uppercase" as const,
              }}
            >
              Selected Work
            </span>
          </motion.div>

          {/* Featured project — WasteAI */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-4 p-10 md:p-16 relative overflow-hidden group transition-all duration-500"
            style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "rgba(0,232,122,0.2)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")
            }
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(0,232,122,0.03), transparent 70%)",
              }}
            />

            <div className="relative z-10 grid md:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "11px",
                      color: "rgba(232,232,236,0.25)",
                      letterSpacing: "0.2em",
                    }}
                  >
                    01
                  </span>
                  <div
                    className="w-px h-4"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                  />
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "11px",
                      color: "#00e87a",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase" as const,
                    }}
                  >
                    Environmental Intelligence
                  </span>
                </div>

                <h2
                  className="text-[clamp(3rem,6vw,5.5rem)] uppercase leading-none mb-6 transition-colors duration-500"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    color: "#e8e8ec",
                  }}
                >
                  WasteAI
                </h2>

                <p
                  className="text-base leading-relaxed mb-8 max-w-sm"
                  style={{ color: "rgba(232,232,236,0.45)" }}
                >
                  Computer vision system that classifies waste streams in
                  real-time, optimizes collection routes using predictive
                  modeling, and monitors fill levels across 12 cities through a
                  unified intelligence layer.
                </p>

                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "11px",
                    color: "rgba(232,232,236,0.22)",
                    letterSpacing: "0.15em",
                  }}
                >
                  Computer Vision · Route Optimization · IoT
                </div>
              </div>

              {/* Stats */}
              <div ref={statsRef} className="grid grid-cols-1 gap-8">
                {[
                  { label: "Collection Cost Reduction", value: "40%" },
                  { label: "Sorting Accuracy", value: "98.2%" },
                  { label: "Cities Deployed", value: "12" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={statsInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    className="flex items-end justify-between pb-6"
                    style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <div>
                      <div
                        className="mb-2"
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontWeight: 700,
                          fontSize: "clamp(2.5rem,5vw,3.5rem)",
                          color: "#00e87a",
                          lineHeight: 1,
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: "11px",
                          color: "rgba(232,232,236,0.3)",
                          letterSpacing: "0.15em",
                          textTransform: "uppercase" as const,
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Other projects */}
          <div
            className="grid md:grid-cols-3 gap-px"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            {projects
              .filter((p) => !p.featured)
              .map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 cursor-default transition-colors duration-300"
                  style={{ background: "#040408" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#07080e")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#040408")
                  }
                >
                  <div className="flex items-center justify-between mb-10">
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "11px",
                        color: "rgba(232,232,236,0.18)",
                        letterSpacing: "0.2em",
                      }}
                    >
                      {project.id}
                    </span>
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: project.color }}
                    />
                  </div>
                  <span
                    className="block mb-3"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "11px",
                      color: project.color,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase" as const,
                    }}
                  >
                    {project.tag}
                  </span>
                  <h3
                    className="text-3xl uppercase mb-4"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      color: "#e8e8ec",
                    }}
                  >
                    {project.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(232,232,236,0.32)" }}
                  >
                    {project.description}
                  </p>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section
        id="about"
        className="py-40 px-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-20"
          >
            <div className="w-8 h-px" style={{ background: "#00e87a" }} />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                color: "#00e87a",
                letterSpacing: "0.3em",
                textTransform: "uppercase" as const,
              }}
            >
              Philosophy
            </span>
          </motion.div>

          <div className="grid md:grid-cols-[1fr_2fr] gap-20 items-start">
            <div className="space-y-8">
              {[
                { label: "Founded", value: "2022" },
                { label: "Based in", value: "Global · Remote-First" },
                { label: "Focused on", value: "Applied AI for the physical world" },
                { label: "Clients", value: "Government, Infrastructure, Healthcare" },
              ].map((item) => (
                <div key={item.label}>
                  <div
                    className="mb-1.5"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "10px",
                      color: "rgba(232,232,236,0.22)",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase" as const,
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="text-base"
                    style={{ color: "rgba(232,232,236,0.55)" }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <motion.blockquote
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="uppercase mb-10"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(2rem,4.5vw,4rem)",
                  lineHeight: 1.1,
                  color: "#e8e8ec",
                }}
              >
                Intelligence should be earned through domain expertise, not
                assembled from generic APIs.
              </motion.blockquote>
              <p
                className="text-base leading-relaxed max-w-lg"
                style={{ color: "rgba(232,232,236,0.38)" }}
              >
                We work at the intersection of machine learning, systems
                engineering, and real-world deployment constraints. Every
                project we take on is a long-term commitment — we stay until the
                model generalizes, not just until it demo-passes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-32 px-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[2fr_1fr] gap-16 items-end">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-12"
              >
                <div className="w-8 h-px" style={{ background: "#00e87a" }} />
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "11px",
                    color: "#00e87a",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase" as const,
                  }}
                >
                  Contact
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="uppercase leading-none mb-8"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(3.5rem,9vw,8rem)",
                  color: "#e8e8ec",
                }}
              >
                Have an AI
                <br />
                <span style={{ color: "#00e87a" }}>Problem?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-base max-w-md leading-relaxed"
                style={{ color: "rgba(232,232,236,0.38)" }}
              >
                We take on a limited number of new projects each quarter. Tell
                us what you are building and we will tell you if we can help.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-3"
            >
              {["Your name", "Email address"].map((placeholder) => (
                <input
                  key={placeholder}
                  type={placeholder === "Email address" ? "email" : "text"}
                  placeholder={placeholder}
                  className="w-full px-5 py-4 text-base transition-colors duration-300 bg-transparent"
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#e8e8ec",
                    fontFamily: "'Barlow', sans-serif",
                    outline: "none",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(0,232,122,0.5)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")
                  }
                />
              ))}
              <textarea
                placeholder="Describe your project..."
                rows={4}
                className="w-full px-5 py-4 text-base transition-colors duration-300 bg-transparent resize-none"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#e8e8ec",
                  fontFamily: "'Barlow', sans-serif",
                  outline: "none",
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(0,232,122,0.5)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")
                }
              />
              <motion.button
                whileHover={{ backgroundColor: "#00ff8a" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 text-sm font-bold tracking-widest uppercase transition-colors duration-200"
                style={{
                  background: "#00e87a",
                  color: "#040408",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  letterSpacing: "0.15em",
                }}
              >
                Send Message →
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-10 px-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-5 h-5 flex items-center justify-center"
              style={{ background: "#00e87a", borderRadius: "2px" }}
            >
              <div
                className="w-1.5 h-1.5"
                style={{ background: "#040408", borderRadius: "1px" }}
              />
            </div>
            <span
              className="text-base tracking-wider uppercase"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                color: "rgba(232,232,236,0.45)",
              }}
            >
              Feel Creative
            </span>
          </div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              color: "rgba(232,232,236,0.18)",
              letterSpacing: "0.1em",
            }}
          >
            © 2026 Feel Creative AI Agency. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-0 right-0 w-[900px] h-[900px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,232,122,0.025), transparent 60%)",
          }}
          animate={{ scale: [1, 1.1, 1], x: [0, 40, 0], y: [0, -25, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(109,40,217,0.02), transparent 60%)",
          }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 20, delay: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
