/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowDown, 
  Rocket, 
  Mail, 
  MapPin, 
  Phone,
  ArrowRight
} from "lucide-react";

// Icons from lucide-react don't exactly match the material symbols, 
// so I'll use Lucide equivalents or custom SVGs where needed for the brand.

const StarIcon = () => (
  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
  </svg>
);

const IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoeJAZM22_8GW9ECoVhpuERArovxRP0FQ2H9FBx7Vxphm_SS74RN4lfEkvt9JDLttyXYfY-rOVEklOLO2KU_wC8zPn9urUTd4ZQ0Z2VbXxfxnpRvbOfyn3btlonWmF9dSVVUMGNl4X5PU2MHcApIqqF0iJKBCtX_CCbqvq6vNIWQ7t6sDbklHS4f2NhLBCZIcR28pqBZaf3iT4PaXLH3Awr4UYuFnqzB-tzYXF-tli6voFm1z1VxYTNsu4jjV1qeolBkrXJBgTvsyo",
  omniX: "https://lh3.googleusercontent.com/aida-public/AB6AXuDG-NQvH6UCkafWhjh6SxfUPsM-tHU6WETFe4y2Ldm5NgxYltPv-9f2MmCm-cWOoE6cFxkYfTJKSl-8DFkttiI9sx7m7D5__TMFQG1uEcAfa1rwW1WIA_nKWSkHKVHi1IZL8vyY5vJ2BpTu27pQX-3rFmK67h9KixFkDNoAj28Q-kAQod6X12_vG7mzxt8mg3EZX0vc3w78DoNycWnmBpMSgfVT7jpAFceKlWPfMu374Nq3TgFTzhl0wEVYhMLEAVcpDQJ3Fxvz5PMD",
  protocol: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUleWINSmfupi00MP9C9zLYIEp3C95FOcCpmehZ4CKtXMwk1MunYylCaE4072b9RyLr7Gjoa5OdPViqoDOODf7v9Z0pMxOJXEO8RLPNdgAlpy_2zbpqXF_GThrfzsEkR7lj0nhe-ynmrfyKdXNJB8zgIy3F-2ARWXaojEL0QIUpQB8OMRurQbp4QAbRQ2Z-rWu5yanz3ZY7cYTLbKYi6h7V_ou8z3SZ-H7_8btS-x-5M5EUXPuDnYw8Di6WuyA1RKBAMpI3IiSLcjf",
  flowState: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVafpnF8TZWYqQe-z4B26TnZ_Dgyz8BJrxOTOk_B1sGdQOjGUqBYKUOWPf4pX_gsEe1w-tRwszaAvon1DFgXiaGhRnaNuEHlWk-dqPGDsa9p3uwAR5Jf-FZrI6aMwrF399Faq8V8EZ60oSMQdiKd2Ka5pmIqAaNPTBhL8oOHgYEBpB_yaXybi9z-ppsieTanXQRPfWEmBq7irEuxDtGK9emrT_-bMbblItnSL-zPOtWecW6qN-jUrQ0ntT6PaVA6sxCW_5BqsvCxuI"
};

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-1.5 rounded-sm">
              <StarIcon />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase">GTM0x</span>
          </div>
          <div className="hidden md:flex items-center gap-12 text-sm font-medium tracking-tight uppercase">
            <a className="hover:text-blue-600 transition-colors" href="#">Portfolio</a>
            <a className="hover:text-blue-600 transition-colors" href="#">Expertise</a>
            <a className="hover:text-blue-600 transition-colors" href="#">Studio</a>
            <a className="hover:text-blue-600 transition-colors" href="#">Process</a>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-blue-700 transition-all active:scale-95">
            Book a Call
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuD7RnKRrwXSptUym2kb9buSZbbTGAR7_3j0vZZZA0W-sIMO4j-c8DsIBkjp4yGPjtXoBhxqU9V8J86Zo-rXylQ3y0juVyMj24eDVe9X9ko_jYj9XnttEQ2O_5MtOhxV3jv8WEcEbZljBylSdwEo3YyQMkWLgYA1-_qG7oABSTsSal3_OgGm5OINl732Tejo-W2kJPeJnmBchIG4N3krz9RBdK5OipoJbeaT8ZHzpCbn8xN03E2MFE5jG3sTe0snbYSuGhwo74brV-ZN')]"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 z-10"
            >
              <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Premium Design Studio</span>
              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight mb-8">
                ENGINEERING <span className="text-blue-600">ALPHA</span> FOR TECH GIANTS.
              </h1>
              <p className="text-xl text-slate-500 max-w-xl leading-relaxed mb-10">
                A creative powerhouse for B2B tech and crypto frontiers. Delivering high-end execution from Lagos to the world's leading protocols.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-slate-900 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest hover:opacity-90 transition-all">
                  Start a Project
                </button>
                <button className="border-2 border-slate-200 px-8 py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-slate-50 transition-all">
                  View Work
                </button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[4/5] bg-slate-100 rounded-xl overflow-hidden shadow-2xl hover:rotate-0 transition-transform duration-700">
                <img 
                  alt="Crypto Interface" 
                  className="w-full h-full object-cover" 
                  src={IMAGES.hero}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-8 rounded-lg shadow-xl hidden md:block">
                <div className="text-4xl font-black">05+</div>
                <div className="text-xs uppercase tracking-widest font-bold opacity-80">Years Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Counter */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black tracking-tight mb-6 uppercase">Five Years of Scaling Crypto & B2B Frontiers</h2>
              <p className="text-lg text-slate-600">Since our inception, we've navigated the complexities of Web3 and enterprise tech, transforming abstract concepts into market-ready assets.</p>
            </div>
            <div className="grid grid-cols-2 gap-8 w-full md:w-auto">
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="text-5xl font-black italic">120+</div>
                <div className="text-sm uppercase tracking-widest font-bold text-slate-500">Projects</div>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="text-5xl font-black italic">$2B+</div>
                <div className="text-sm uppercase tracking-widest font-bold text-slate-500">Value Managed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-20">
            <h2 className="text-5xl font-black tracking-tighter uppercase">Selected Work</h2>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowDown className="w-10 h-10 text-blue-600" />
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Project 1 - Replaced with Image 2 as requested */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden mb-6 relative">
                <img 
                  alt="Protocol Layer Visuals" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={IMAGES.protocol}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest">View Case Study</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Protocol Layer Visuals</h3>
              <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">Infrastructure / Crypto / Branding</p>
            </motion.div>

            {/* Project 2 - OmniX */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group cursor-pointer mt-12 md:mt-24"
            >
              <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden mb-6 relative">
                <img 
                  alt="Trading Terminal" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={IMAGES.omniX}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest">View Case Study</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">OmniX Trading Terminal</h3>
              <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">Fintech / Web3 / SaaS</p>
            </motion.div>

            {/* Project 3 - FlowState */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden mb-6 relative">
                <img 
                  alt="Enterprise SaaS" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={IMAGES.flowState}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest">View Case Study</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">FlowState Analytics</h3>
              <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">B2B SaaS / Big Data</p>
            </motion.div>

            {/* Project 4 - Call to Action */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group cursor-pointer mt-12 md:mt-24"
            >
              <div className="aspect-[4/3] bg-blue-600 rounded-xl overflow-hidden mb-6 flex flex-col items-center justify-center text-white p-12 text-center group-hover:bg-blue-700 transition-colors">
                <Rocket className="w-16 h-16 mb-6" />
                <h3 className="text-3xl font-black uppercase mb-4 leading-tight">Your Project Could Be Next</h3>
                <p className="font-medium opacity-80 mb-8">We're looking for our next long-term partner in the tech space.</p>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold uppercase text-sm tracking-widest">Schedule Brief</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-5xl font-black tracking-tighter uppercase mb-12">How We Move<br/><span className="text-blue-600">The Needle.</span></h2>
              <ul className="space-y-8">
                {[
                  { id: "01", title: "Product Strategy" },
                  { id: "02", title: "UI/UX Design" },
                  { id: "03", title: "Web3 Integration" },
                  { id: "04", title: "Brand Architecture" }
                ].map((service) => (
                  <motion.li 
                    key={service.id}
                    whileHover={{ x: 20 }}
                    className="group border-b border-slate-800 pb-8 hover:border-blue-600 transition-colors cursor-default"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-slate-600 font-bold">{service.id}</span>
                      <h4 className="text-3xl font-bold">{service.title}</h4>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-md">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-[40px] border-blue-600 opacity-10 rounded-full"
                ></motion.div>
                <div className="absolute inset-20 border-[1px] border-blue-600 opacity-30 rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-black text-blue-600">GTM</div>
                    <div className="text-2xl font-bold tracking-[0.5em] opacity-50">METRICS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="bg-white pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
            <div className="lg:col-span-8">
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-12">
                LET'S BUILD THE <span className="text-blue-600 italic">FUTURE</span> OF TECH TOGETHER.
              </h2>
              <a className="text-2xl md:text-4xl font-light hover:text-blue-600 transition-colors break-all flex items-center gap-4" href="mailto:gtm0xpartners@gmail.com">
                gtm0xpartners@gmail.com
                <ArrowRight className="w-8 h-8" />
              </a>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2">
                    <MapPin className="w-3 h-3" /> Location
                  </p>
                  <p className="text-xl font-bold">Lagos, Nigeria</p>
                  <p className="text-slate-500">Global Hub</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2">
                    <Phone className="w-3 h-3" /> Call Us
                  </p>
                  <p className="text-xl font-bold">+234 816 950 5141</p>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                {['𝕏', 'Li', 'In'].map((social) => (
                  <a key={social} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all" href="#">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-1.5 rounded-sm">
                <StarIcon />
              </div>
              <span className="text-sm font-black tracking-tighter uppercase">GTM0x Studio</span>
            </div>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-widest">© 2024 GTM0x Partners. All rights reserved.</p>
            <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
              <a className="hover:text-blue-600" href="#">Privacy</a>
              <a className="hover:text-blue-600" href="#">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
