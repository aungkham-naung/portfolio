import StackIcon from "tech-stack-icons";

function Skills() {
  const skills = [
    { name: "JavaScript", icon: <StackIcon name="js" /> },
    { name: "TypeScript", icon: <StackIcon name="typescript" /> },
    { name: "React.js", icon: <StackIcon name="reactjs" /> },
    { name: "Node.js", icon: <StackIcon name="nodejs" /> },
    { name: "HTML", icon: <StackIcon name="html5" /> },
    { name: "Tailwind", icon: <StackIcon name="tailwindcss" /> },
    { name: "MongoDB", icon: <StackIcon name="mongodb" /> },
    { name: "PostgreSQL", icon: <StackIcon name="postgresql" /> }
  ];

  const certs = [
    {
      name: "Certified Developer Associate",
      imageUrl: "/certs/AWS Certified Developer - Associate certificate-1.png"
    },
    {
      name: "The Ultimate React Course",
      imageUrl: "/certs/react.png"
    },
    {
      name: "Microservices with React & Node.js",
      imageUrl: "/certs/microservices.png"
    },
    {
      name: "Web Developer Bootcamp 2024",
      imageUrl: "/certs/bootcamp.png"
    }
  ];
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-6">
        <div className="w-1/3">
          <h3 className="text-xl font-bold mb-4">Skills</h3>
          <div className="grid grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-3xl">{skill.icon}</div>
                <span className="mt-2 text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-2/3">
          <h3 className="text-xl font-bold mb-4">Certifications</h3>
          <div className="grid grid-cols-2 gap-4">
            {certs.map((cert, index) => (
              <div
                key={index}
                className="flex flex-col items-center border p-2 rounded"
              >
                <img
                  src={cert.imageUrl}
                  alt={cert.name}
                  className="w-full h-auto object-contain mb-2"
                />
                <span className="text-sm">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
