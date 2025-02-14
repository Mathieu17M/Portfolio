import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaDocker, 
  FaPython, 
  FaLinux 
} from 'react-icons/fa'
import { 
  SiNextdotjs, 
  SiMongodb,
  SiCplusplus,
  SiC 
} from 'react-icons/si'

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact className="text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-4xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-4xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-4xl" /> },
    { name: "Docker", icon: <FaDocker className="text-4xl" /> },
    { name: "C", icon: <SiC className="text-4xl" /> },
    { name: "C++", icon: <SiCplusplus className="text-4xl" /> },
    { name: "Python", icon: <FaPython className="text-4xl" /> },
    { name: "Linux", icon: <FaLinux className="text-4xl" /> },
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="bg-secondary p-6 rounded-lg flex flex-col items-center justify-center gap-3 hover:bg-opacity-80 transition-all duration-300"
          >
            <div className="text-accent">
              {skill.icon}
            </div>
            <span className="font-medium text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
