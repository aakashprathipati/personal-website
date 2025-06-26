
import { Phone, Mail, MapPin, Globe, Star } from "lucide-react";

const About = () => {
  const languages = [
    { name: "English", level: 5, color: "from-blue-400 to-blue-600" },
    { name: "Telugu", level: 5, color: "from-green-400 to-green-600" },
    { name: "Hindi", level: 5, color: "from-orange-400 to-orange-600" },
    { name: "German", level: 2, color: "from-purple-400 to-purple-600" },
  ];

  const stats = [
    { label: "Years of Experience", value: "4+", icon: "🚀" },
    { label: "Technologies Mastered", value: "25+", icon: "💻" },
    { label: "Projects Completed", value: "50+", icon: "✨" },
    { label: "Certifications", value: "10+", icon: "🏆" },
  ];

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -left-20 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about bridging the gap between technology and business strategy
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-semibold block">Phone</span>
                  <span className="text-sm">7730901750</span>
                </div>
              </div>
              <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-semibold block">Email</span>
                  <span className="text-sm">aakashprathipaticore@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center text-gray-300 hover:text-white transition-colors duration-300 group">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-semibold block">Location</span>
                  <span className="text-sm">Vijayawada, Tadepalli</span>
                </div>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              Languages
            </h3>
            <div className="space-y-6">
              {languages.map((lang) => (
                <div key={lang.name} className="group">
                  <div className="flex justify-between text-gray-300 group-hover:text-white mb-3 transition-colors duration-300">
                    <span className="font-medium text-lg">{lang.name}</span>
                    <span className="text-sm">{lang.level === 5 ? 'Native' : `Level ${lang.level}`}</span>
                  </div>
                  <div className="flex space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={`transition-all duration-300 ${
                          i < lang.level 
                            ? `text-yellow-400 fill-yellow-400 group-hover:scale-110` 
                            : "text-gray-600"
                        }`}
                        style={{
                          transitionDelay: `${i * 100}ms`
                        }}
                      />
                    ))}
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${lang.color} rounded-full transition-all duration-1000 group-hover:animate-pulse`}
                      style={{ 
                        width: `${(lang.level / 5) * 100}%`,
                        transitionDelay: '200ms'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Statement */}
        <div className="mt-12 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">My Mission</h3>
          <p className="text-gray-200 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            To bridge the gap between cutting-edge technology and strategic business solutions, 
            creating innovative systems that not only solve today's challenges but anticipate tomorrow's opportunities. 
            I believe in the power of technology to transform industries and improve lives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
