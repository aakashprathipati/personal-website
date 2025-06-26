
import { useState } from "react";
import { Brain, Shield, Blocks, Cloud, BarChart3, Code, Briefcase } from "lucide-react";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skillCategories = [
    {
      title: "Artificial Intelligence & Machine Learning",
      icon: Brain,
      skills: ["Model development", "NLP", "Deep learning applications"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10"
    },
    {
      title: "Cybersecurity & Ethical Hacking",
      icon: Shield,
      skills: ["Risk assessment", "Penetration testing", "Threat intelligence"],
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-500/10"
    },
    {
      title: "Blockchain & Web3",
      icon: Blocks,
      skills: ["Smart contracts", "Decentralized applications (DApps)", "Tokenomics"],
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10"
    },
    {
      title: "Cloud Computing",
      icon: Cloud,
      skills: ["Infrastructure management", "Serverless architecture", "Multi-cloud strategies"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "Data Science & Analytics",
      icon: BarChart3,
      skills: ["Predictive modeling", "Big data processing", "Business intelligence"],
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-500/10"
    },
    {
      title: "Software & Web Development",
      icon: Code,
      skills: ["Scalable system design", "API integrations", "Full-stack development"],
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-500/10"
    },
    {
      title: "Business & Technology Strategy",
      icon: Briefcase,
      skills: ["Product innovation", "Digital transformation", "Go-to-market execution"],
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-500/10"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive skill set spanning cutting-edge technologies and strategic business domains
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-all duration-500 cursor-pointer ${
                  hoveredSkill === index ? 'scale-105 bg-white/20' : 'hover:scale-102'
                }`}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${category.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-7 h-7 bg-gradient-to-br ${category.color} bg-clip-text text-transparent`} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                  {category.title}
                </h3>

                {/* Skills list */}
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-start text-gray-300 group-hover:text-white transition-colors duration-300">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-3 mt-2 opacity-70 group-hover:opacity-100`}></div>
                      <span className="text-sm leading-relaxed">{skill}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover indicator */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            );
          })}
        </div>

        {/* Skills summary */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-gray-300 text-lg">
              Staying at the forefront of technology trends and continuously expanding expertise to deliver innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
