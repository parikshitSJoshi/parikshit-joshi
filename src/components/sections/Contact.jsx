import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <div className="flex flex-col items-center space-y-4">
          <a href="mailto:parikshit.s.joshi@gmail.com" className="flex items-center text-lg hover:text-blue-400 transition-colors">
            <MailIcon className="mr-2" /> parikshit.s.joshi@gmail.com
          </a>
          <a href="tel:+918459175916" className="flex items-center text-lg hover:text-blue-400 transition-colors">
            <PhoneIcon className="mr-2" /> +91 8459175916
          </a>
          <a href="https://linkedin.com/in/parikshit-joshi-42a524191" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg hover:text-blue-400 transition-colors">
            <LinkedinIcon className="mr-2" /> LinkedIn
          </a>
          <a href="https://github.com/parikshitSJoshi" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg hover:text-blue-400 transition-colors">
            <GithubIcon className="mr-2" /> GitHub
          </a>
          <p className="text-gray-300 mt-4">Located in Pune, India</p>
        </div>
      </div>
    </section>
  )
}