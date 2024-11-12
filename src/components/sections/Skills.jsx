export default function Skills() {
    const skillCategories = [
      {
        name: "Graphics APIs",
        skills: ["OpenGL", "OpenGL ES", "WebGL", "DirectX11", "Metal"]
      },
      {
        name: "GPU Computing",
        skills: ["CUDA", "OpenCL", "Direct-Compute"]
      },
      {
        name: "Mobile Development",
        skills: ["Android SDK", "SwiftUI", "Swift", "Combine (iOS)", "Accelerate (iOS)"]
      },
      {
        name: "3D Technologies",
        skills: ["SceneKit", "ARCore", "ModelI/O", "OpenXR"]
      },
      {
        name: "Programming Languages",
        skills: ["C/C++", "JavaScript", "Java", "Swift"]
      },
      {
        name: "Other Technologies",
        skills: ["Win32 SDK", "Xlib", "Flutter", "Version Control (git, SVN)"]
      },
      {
        name: "Specialties",
        skills: ["Rendering Algorithms", "Shader Development", "Graphics Optimization"]
      }
    ]
  
    return (
      <section id="skills" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }