import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import ProjectCard from '../components/projectCard';

export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with Next.js and Tailwind CSS.',
      link: 'https://github.com/prudhvireddy254/portfolio',
    },
    {
      title: 'E-commerce App',
      description: 'A full-stack e-commerce app with React and Node.js.',
      link: 'https://github.com/prudhvireddy254/ecommerce-app',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        <h1 className="text-4xl font-bold mb-6">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
