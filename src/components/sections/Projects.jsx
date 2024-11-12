export default function Projects() {
  const projects = [
    {
      title: "Parallax",
      description: "A cinematic sequence rendered in real-time using C++ and OpenGL (4.6), involving a particle system of 2624 instanced boids and a real-time spline implementation.",
      link: "https://www.youtube.com/watch?v=QPNofgcB-0U",
      date: "09/2022"
    },
    {
      title: "Lori",
      description: "A story-based sequence rendered in real-time using JavaScript and WebGL (OpenGL ES).",
      link: "https://www.youtube.com/watch?v=OGmhZyy-ZB0",
      date: "01/2023"
    },
    {
      title: "Ray Marching Using OpenGL and CUDA",
      description: "A demo showcasing image order rendering computed with CUDA and rendered in real-time with OpenGL.",
      date: "01/2024"
    },
    {
      title: "MARiCHi",
      description: "A graphics engine implemented to merge image order and object order rendering pipelines, namely rasterization and ray marching.",
      date: "Ongoing"
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Personal Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.date}</p>
              <p className="text-gray-300 mb-4">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}