export default function Experience() {
    return (
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Software Developer</h3>
            <p className="text-gray-400 mb-4">Prototech Solutions | 03/2023 - Present | Pune, India</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Single-handedly spearheaded the development of the iOS application for "3DMeasureUp"</li>
              <li>Implemented a mesh reconstruction engine for human models using depth data</li>
              <li>Developed a CAD viewer for Quest 3 & Quest 2 VR headsets using OpenXR and DirectX</li>
              <li>Created an AR experience using Metal for real-time fluid simulation on iOS devices</li>
              <li>Contributed to projects involving core CAD libraries and built headless rendering machines</li>
              <li>Implemented meshing and geometric algorithms for human measurements extraction</li>
              <li>Developed a multi-agent CNN pipeline for model reconstruction and segmentation</li>
              <li>Implemented support for normal and occlusion maps plugins</li>
              <li>Worked on numerous plugins for 3D CAD software like Inventor, Fusion, and Maya</li>
            </ul>
          </div>
        </div>
      </section>
    )
  }