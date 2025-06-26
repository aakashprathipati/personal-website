import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="relative inline-block">
            <img
              src="/lovable-uploads/0b62bd69-2d44-492f-bff5-3169e34d4801.png"
              alt="Aakash Prathipati"
              className="w-56 h-56 rounded-full mx-auto mb-8 border-4 border-purple-400 shadow-2xl object-cover object-center hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 animate-fade-in">
            AAKASH <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">PRATHIPATI</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-4 text-xl md:text-2xl text-gray-300 mb-8">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-purple-400/30">
              Computer Science Engineer
            </span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-blue-400/30">
              Business Administration
            </span>
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-5xl mx-auto mb-12 border border-white/20 shadow-2xl">
          <p className="text-gray-200 text-xl leading-relaxed">
            A strategic and forward-thinking technologist with a deep foundation in 
            <span className="text-purple-400 font-semibold"> AI</span>, 
            <span className="text-blue-400 font-semibold"> cybersecurity</span>, 
            <span className="text-green-400 font-semibold"> blockchain</span>, 
            <span className="text-yellow-400 font-semibold"> cloud computing</span>, and 
            <span className="text-pink-400 font-semibold"> data science</span>. 
            Passionate about leveraging technology to drive business innovation and solve real-world challenges.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <a
            href="#contact"
            className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center gap-2">
              <Mail size={20} />
              Get In Touch
            </span>
          </a>
          <a
            href="#about"
            className="group border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm bg-white/5"
          >
            Learn More
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://github.com/aakashprathipati"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/aakash-prathipati-741b18347/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:aakashprathipaticore@gmail.com"
            className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="mx-auto text-purple-400" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
