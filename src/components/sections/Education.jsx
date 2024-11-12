export default function Education() {
    const education = [
      {
        degree: "Bachelor of Engineering",
        institution: "Sipna College of Engineering, Amravati",
        year: "2018 - 2022",
        details: "Bachelor's Degree in Electronics and Telecommunication",
        grade: "8.5 CGPA"
      },
      {
        degree: "HSC",
        institution: "Narayana Institute, Hyderabad",
        year: "2016 - 2018",
        details: "PCM",
        grade: "94%"
      },
      {
        degree: "SSC",
        institution: "Tomoae ICSE School, Amravati",
        year: "2006 - 2016",
        grade: "85%"
      }
    ]
  
    return (
      <section id="education" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-gray-300">{edu.institution}</p>
                <p className="text-gray-400">{edu.year}</p>
                {edu.details && <p className="text-gray-300 mt-2">{edu.details}</p>}
                <p className="text-blue-400 mt-2">{edu.grade}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }