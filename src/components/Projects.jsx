const Projects = () => {
  const projects = [
    {
      title: "Portfolio",
      description: "My personal portfolio website built with React and Tailwindcss.",
      technologies: ["React", "Tailwindcss"],
      image: "/path/to/image1.jpg",
      link: "https://github.com/Mathieu17M/portfolio_Mathieu"
    }
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-secondary rounded-lg overflow-hidden shadow-lg">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-accent px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
