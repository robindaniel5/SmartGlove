import React from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Smartphone,
  Activity,
  Speaker,
  Waves,
  Layers,
  ArrowRight,
  Zap,
  Shield,
  Rocket,
  Globe,
  Share2,
  Users,
  Mail,
  MessageSquare,
  Send
} from 'lucide-react';
import GloveModel from './GloveModel';

const components = [
  {
    name: "ESP32 Microcontroller",
    icon: <Cpu className="w-10 h-10 text-cyan-400" />,
    description: "The heart of the glove, providing Wi-Fi and Bluetooth connectivity for seamless data transmission."
  },
  {
    name: "MPU6050 IMU",
    icon: <Activity className="w-10 h-10 text-purple-400" />,
    description: "6-axis motion tracking sensor that precisely detects hand orientation and spatial movements."
  },
  {
    name: "Flex Sensors",
    icon: <Waves className="w-10 h-10 text-blue-400" />,
    description: "Sensitivity sensors that capture the exact curvature of each finger for sign identification."
  },
  {
    name: "Advanced OLED Display",
    icon: <Smartphone className="w-10 h-10 text-indigo-400" />,
    description: "Ultra-sharp wrist-mounted display providing instant visual confirmation and translated text feedback."
  },
  {
    name: "MAX98357A I2S Amp",
    icon: <Layers className="w-10 h-10 text-pink-400" />,
    description: "Digital audio processing unit that ensures crystal-clear sign-to-speech conversion."
  },
  {
    name: "High-Fidelity Speaker",
    icon: <Speaker className="w-10 h-10 text-green-400" />,
    description: "Compact speaker module that vocalizes translated signs for seamless communication."
  }
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const FutureScopeItem = ({ icon, title, desc }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="glass p-10 flex flex-col gap-6"
  >
    <div className="p-4 bg-white/5 rounded-2xl w-fit">
      {icon}
    </div>
    <h3 className="text-2xl font-bold">{title}</h3>
    <p className="text-gray-400 text-lg leading-relaxed">{desc}</p>
  </motion.div>
);

function App() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen selection:bg-cyan-500/30">
      {/* Hero Section */}
      <section style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh', 
        padding: isMobile ? '80px 20px' : '40px 0', 
        overflow: 'hidden' 
      }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          width: '100%', 
          maxWidth: '1800px', 
          padding: isMobile ? '0' : '0 5%',
          gap: isMobile ? '40px' : '0'
        }}>
          {/* Text Content - Left */}
          <div style={{ 
            width: isMobile ? '100%' : '45%', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: isMobile ? 'center' : 'flex-start', 
            textAlign: isMobile ? 'center' : 'left', 
            zIndex: 10 
          }}>
            <span className="px-6 py-3 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-bold mb-8 inline-block border border-cyan-500/20">
              SMART GLOVE PROJECT
            </span>
            <h1 className="font-extrabold mb-8 tracking-tighter text-5xl lg:text-9xl leading-[1.1] lg:leading-[0.9]">
              Smart <span className="gradient-text">Glove</span> for Sign Language Translation
            </h1>
            <p className="text-xl lg:text-3xl text-gray-400 mb-12 max-w-xl leading-relaxed">
              Real-time sign language translation. Bridging the gap between worlds with cutting-edge wearable technology.
            </p>
          </div>
          
          {/* 3D Model - Right */}
          <div style={{ 
            width: isMobile ? '100%' : '55%', 
            height: isMobile ? '400px' : '900px', 
            position: 'relative', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <GloveModel isMobile={isMobile} />
          </div>
        </div>
      </section>

      {/* Components Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="bg-[#080808]"
      >
        <div className="container">
          <div className="text-center mb-24">
            <h2 className="mb-8">Precision <span className="gradient-text">Hardware</span></h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Engineered with industrial-grade sensors and custom processing circuitry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {components.map((comp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-10 hover:border-cyan-500/50 transition-all duration-500"
              >
                <div className="mb-8">
                  {comp.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4">{comp.name}</h3>
                <p className="text-gray-400 text-lg">
                  {comp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Future Scope Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2">
              <h2 className="mb-10 text-6xl">Visionary <span className="gradient-text">Roadmap</span></h2>
              <p className="text-2xl text-gray-400 mb-16 leading-relaxed">
                We are evolving beyond simple translation.
              </p>

              <div className="space-y-12">
                {[
                  { title: "Neural Gesture AI", desc: "Understanding subtle emotional nuances." },
                  { title: "Haptic Intelligence", desc: "Sensory pulses on fingertips." },
                  { title: "Global Languages", desc: "Supporting 50+ sign variations." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 items-start">
                    <div className="mt-2 w-4 h-4 bg-cyan-500 rounded-full" />
                    <div>
                      <h4 className="font-bold text-2xl mb-2">{item.title}</h4>
                      <p className="text-xl text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
              <FutureScopeItem
                icon={<Zap className="w-10 h-10 text-yellow-400" />}
                title="Nano-Latency"
                desc="Edge computing optimizations."
              />
              <FutureScopeItem
                icon={<Shield className="w-10 h-10 text-green-400" />}
                title="Ergo-Design"
                desc="Breathable tech fabrics."
              />
              <FutureScopeItem
                icon={<Rocket className="w-10 h-10 text-red-400" />}
                title="Cloud Sync"
                desc="Continuous data learning."
              />
              <div className="glass p-10 flex items-center justify-center border-dashed border-2 border-white/10">
                <span className="text-gray-500 font-bold text-xl">EVOLVING...</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Redesigned Footer */}
      <footer className="relative bg-[#050505] py-32 grid-background overflow-hidden border-t border-white/5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', textAlign: 'center' }}>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{ marginBottom: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <h4 className="text-red-600 font-bold tracking-[0.5em] text-lg uppercase mb-16">
              Ready to start?
            </h4>

            <div style={{ display: 'flex', flexDirection: 'row', gap: '40px', justifyContent: 'center', alignItems: 'center' }}>
              {[
                { icon: <Mail className="w-8 h-8" />, color: "hover:text-red-500 hover:border-red-500", href: "mailto:robindaniel2914@gmail.com" },
                { icon: <MessageSquare className="w-8 h-8" />, color: "hover:text-red-500 hover:border-red-500", href: "https://wa.me/+919975062253" },
                { icon: <Send className="w-8 h-8" />, color: "hover:text-red-500 hover:border-red-500", href: "https://github.com/robin_daniel5" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className={`w-20 h-20 rounded-full border-2 border-gray-700 flex items-center justify-center cursor-pointer transition-all duration-300 text-gray-400 ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ marginTop: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <h2 className="text-[10vw] font-black text-gray-800/20 leading-none tracking-tighter mb-4 pointer-events-none uppercase">
              Smart Glove
            </h2>
            <p className="text-gray-600 text-lg tracking-[0.2em] font-medium uppercase">
              © 2026. All Rights Reserved.
            </p>
          </motion.div>

        </div>

        {/* Corner Indicator */}
        <div className="absolute bottom-10 right-10 text-gray-800 text-6xl font-black opacity-10 select-none">
          04
        </div>
      </footer>
    </div>
  );
}

export default App;
