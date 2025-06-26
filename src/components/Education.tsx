
const Education = () => {
  const educationData = [
    {
      institution: "KL UNIVERSITY",
      degree: "Bachelor of Technology",
      duration: "2022 - 2026",
      description: "Pursuing a Bachelor of Technology at KL University with a strong focus on Practical problem-solving and emerging tech. Actively exploring in AI, Cybersecurity, focusing on real-world projects, and staying ahead of industry trends. Passionate about turning ideas into scalable solutions."
    },
    {
      institution: "KL UNIVERSITY",
      degree: "Bachelor of Business Administration",
      duration: "2023 - 2026",
      description: "Pursuing a Bachelor of Business Administration with a focus on strategic management marketing, and financial model design. Passionate about entrepreneurship, business growth, and leveraging data-driven decision-making to solve real-world challenges. Actively involved in projects that bridge business theory with practical execution."
    }
  ];

  const certifications = [
    "AI Associate, Salesforce Certified - October 2024",
    "Multicloud Network Associate, Aviatrix - January 2025"
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Education & <span className="text-purple-400">Certifications</span>
        </h2>
        
        <div className="space-y-8 mb-12">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{edu.institution}</h3>
                  <h4 className="text-xl text-purple-400 font-semibold">{edu.degree}</h4>
                </div>
                <span className="text-gray-300 font-medium mt-2 md:mt-0">{edu.duration}</span>
              </div>
              <p className="text-gray-300 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Global Certifications</h3>
          <ul className="space-y-3">
            {certifications.map((cert, index) => (
              <li key={index} className="flex items-start text-gray-300">
                <span className="text-purple-400 mr-2">•</span>
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
