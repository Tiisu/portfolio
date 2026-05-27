'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Hero text reveal animation
    const ctx = gsap.context(() => {
      // Split text animation for hero title
      const titleLines = titleRef.current?.querySelectorAll('.title-line');
      if (titleLines) {
        gsap.from(titleLines, {
          y: 100,
          opacity: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power4.out',
        });
      }

      // Subtitle and buttons fade in
      gsap.from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.hero-buttons', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 1.2,
        ease: 'power3.out',
      });

      // Profile image reveal
      gsap.from('.profile-image', {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
        ease: 'power3.out',
      });

      // Scroll-triggered animations for sections
      gsap.utils.toArray('.fade-in-section').forEach((section: any) => {
        gsap.from(section, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      });

      // Project cards stagger animation
      gsap.utils.toArray('.project-card').forEach((card: any, index) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });

      // Text reveal for process section
      gsap.utils.toArray('.process-item').forEach((item: any, index) => {
        gsap.from(item, {
          x: -50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      });

      // Skills cards animation
      gsap.utils.toArray('.skill-card').forEach((card: any, index) => {
        gsap.from(card, {
          scale: 0.9,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });

      // Contact section reveal
      gsap.from('.contact-title', {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.contact-title',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: 'Golden Tower Hotel',
      category: 'Full Stack Development',
      description: 'Role-based booking & property management platform with JWT authentication, RBAC, and payment integration',
      tech: ['Node.js', 'React', 'MongoDB', 'Stripe'],
      link: 'https://www.goldentowerhotelgh.org',
      gradient: 'from-blue-50 to-purple-50',
      type: 'Solo Project'
    },
    {
      title: 'Hackerboost LMS',
      category: 'Full Stack Development',
      description: 'Learning management system for managing courses, assignments, and student interactions (Team Project)',
      tech: ['Node.js', 'Express', 'React', 'MongoDB'],
      link: 'https://hackerboost.org',
      gradient: 'from-emerald-50 to-teal-50',
      type: 'Team Project'
    },
    {
      title: 'Zaanet Dashboard',
      category: 'Frontend Development',
      description: 'Web3-enabled platform dashboards for decentralized internet resource sharing (Team Project)',
      tech: ['React', 'Web3', 'TypeScript'],
      link: 'https://zaanet.xyz',
      gradient: 'from-pink-50 to-rose-50',
      type: 'Team Project'
    },
    {
      title: 'TechInsyt',
      category: 'Frontend Development',
      description: 'Modern technology platform with responsive design and optimized user experience',
      tech: ['React', 'Next.js', 'Tailwind CSS'],
      link: 'https://techinsyt.vercel.app',
      gradient: 'from-orange-50 to-red-50',
      type: 'Solo Project'
    },
    {
      title: 'BESS',
      category: 'Full Stack Development',
      description: 'Scholarship portal with application workflows and intuitive user interface',
      tech: ['MERN Stack', 'REST APIs'],
      link: 'https://bess-client.vercel.app/',
      gradient: 'from-violet-50 to-purple-50',
      type: 'Solo Project'
    },
    {
      title: 'Sissala Sports Online',
      category: 'Full Stack Development',
      description: 'Community sports platform with modern responsive pages and structured content delivery',
      tech: ['Node.js', 'Express', 'React'],
      link: 'https://sissala-sports-online.vercel.app/',
      gradient: 'from-cyan-50 to-blue-50',
      type: 'Solo Project'
    },
    {
      title: 'WikiWalkthrough',
      category: 'Full Stack Development',
      description: 'Educational platform teaching Wikipedia contribution with strong accessibility and SEO',
      tech: ['React', 'Node.js', 'SEO'],
      link: 'https://www.wikiwalkthrough.org/',
      gradient: 'from-indigo-50 to-purple-50',
      type: 'Solo Project'
    }
  ];

  const process = [
    {
      number: '01',
      title: 'Architect',
      description: 'Design system architecture, database schemas, and API structure for scalable solutions'
    },
    {
      number: '02',
      title: 'Build',
      description: 'Develop clean, maintainable code with modern frameworks and best practices'
    },
    {
      number: '03',
      title: 'Deploy',
      description: 'Ship production-ready applications with CI/CD pipelines and monitoring'
    }
  ];

  return (
    <div ref={heroRef} className="min-h-screen bg-white text-zinc-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-zinc-50">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-zinc-600 text-lg tracking-wider uppercase font-medium">Full Stack Developer</p>
                <h1 ref={titleRef} className="text-7xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight overflow-hidden">
                  <span className="title-line block">Building</span>
                  <span className="title-line block bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">
                    Digital
                  </span>
                  <span className="title-line block">Solutions</span>
                </h1>
              </div>
              
              <p className="hero-subtitle text-xl text-zinc-600 max-w-xl leading-relaxed">
                Building <span className="text-zinc-900 font-semibold">unconventional</span> yet{' '}
                <span className="text-zinc-900 font-semibold">functional</span> web applications with the MERN stack. 
                Specializing in end-to-end development from system design to deployment.
              </p>

              <div className="hero-buttons flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="group px-8 py-4 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Let&apos;s Work Together
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a
                  href="#projects"
                  className="px-8 py-4 border-2 border-zinc-900 rounded-full font-medium hover:bg-zinc-900 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  View Projects
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative profile-image">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-zinc-200 rounded-3xl blur-3xl opacity-60" />
                <div className="relative w-full h-full rounded-3xl border-2 border-zinc-200 shadow-2xl overflow-hidden bg-white">
                  <img
                    src="/profile.jpg"
                    alt="Sharif Bawiah Luri Tiisu"
                    className="w-full h-full object-cover object-[center_20%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="px-6 py-32 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 fade-in-section">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-zinc-900">Work Experience</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-zinc-900 to-transparent" />
          </div>

          <div className="space-y-12">
            {/* Zaanet */}
            <div className="fade-in-section border-l-4 border-zinc-900 pl-8 py-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-3xl font-bold text-zinc-900 mb-2">Frontend Developer</h3>
                  <a
                    href="https://zaanet.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-zinc-600 hover:text-zinc-900 transition-colors font-medium"
                  >
                    Zaanet
                  </a>
                </div>
                <div className="text-zinc-600">
                  <p className="font-medium">October 2025 - Present</p>
                  <p className="text-sm">Part-time • Collaborative Team</p>
                </div>
              </div>
              <ul className="space-y-3 text-zinc-600 leading-relaxed">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zinc-900 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span>Collaborated with a team to develop Host and Admin dashboards for a Web3-enabled platform that allows users to share internet resources and participate in a decentralized network</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zinc-900 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span>Implemented reusable UI components and optimized dashboard performance for a smooth user experience</span>
                </li>
              </ul>
            </div>

            {/* Hackerboost */}
            <div className="fade-in-section border-l-4 border-zinc-900 pl-8 py-4">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-3xl font-bold text-zinc-900 mb-2">Full Stack Developer</h3>
                  <a
                    href="https://hackerboost.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-zinc-600 hover:text-zinc-900 transition-colors font-medium"
                  >
                    Hackerboost
                  </a>
                </div>
                <div className="text-zinc-600">
                  <p className="font-medium">January 2025 - Present</p>
                  <p className="text-sm">Part-time • Collaborative Team</p>
                </div>
              </div>
              <ul className="space-y-3 text-zinc-600 leading-relaxed">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zinc-900 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span>Collaborated with a development team to build a learning management system similar to Google Classroom for managing courses, assignments, and student interactions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zinc-900 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span>Designed and implemented backend APIs using Node.js and Express to support features such as assignment submission, course enrollment, and instructor dashboards</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-zinc-900 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span>Participated in team code reviews, debugging, and feature planning using Git and Agile development practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="px-6 py-32 relative bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 fade-in-section">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-zinc-900">Featured Work</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-zinc-900 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card group relative bg-white border-2 border-zinc-200 rounded-2xl p-8 hover:border-zinc-900 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-zinc-500 text-sm uppercase tracking-wider font-medium">{project.category}</p>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      project.type === 'Team Project' 
                        ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                        : 'bg-zinc-100 text-zinc-600 border border-zinc-200'
                    }`}>
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-zinc-900 group-hover:text-zinc-900 transition-colors">{project.title}</h3>
                  <p className="text-zinc-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-zinc-100 border border-zinc-200 rounded-full text-xs text-zinc-700 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-zinc-600 group-hover:text-zinc-900 transition-colors font-medium">
                    <span className="text-sm">View Project</span>
                    <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Philosophy */}
            <div className="fade-in-section">
              <h2 className="text-5xl font-bold mb-8 text-zinc-900">My Philosophy</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-zinc-900 to-transparent mb-8" />
              <p className="text-xl text-zinc-600 leading-relaxed mb-6">
                I believe in building applications that are not just functional, but elegant and maintainable. 
                Every line of code should serve a purpose, and every feature should enhance the user experience.
              </p>
              <p className="text-xl text-zinc-600 leading-relaxed">
                With a strong focus on clean architecture, performance optimization, and modern development practices, 
                I deliver solutions that scale and stand the test of time.
              </p>
            </div>

            {/* Process */}
            <div className="fade-in-section">
              <h2 className="text-5xl font-bold mb-8 text-zinc-900">My Process</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-zinc-900 to-transparent mb-8" />
              <div className="space-y-8">
                {process.map((step, index) => (
                  <div key={index} className="process-item group">
                    <div className="flex items-start gap-6">
                      <span className="text-5xl font-bold text-zinc-200 group-hover:text-zinc-400 transition-colors">
                        {step.number}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 text-zinc-900 group-hover:text-zinc-900 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-zinc-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                    {index < process.length - 1 && (
                      <div className="h-px bg-zinc-200 my-8 ml-20" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="fade-in-section mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-zinc-900">Technical Expertise</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-zinc-900 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Backend',
                skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT/Auth', 'RBAC', 'MongoDB']
              },
              {
                title: 'Frontend',
                skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3']
              },
              {
                title: 'Styling & UI',
                skills: ['Tailwind CSS', 'ShadCN', 'Responsive Design', 'Accessibility']
              },
              {
                title: 'Tools & Workflow',
                skills: ['Git & GitHub', 'Agile/Scrum', 'CI/CD', 'Debugging']
              }
            ].map((category, index) => (
              <div
                key={index}
                className="skill-card bg-white border-2 border-zinc-200 rounded-2xl p-8 hover:border-zinc-900 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-6 text-zinc-900">{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="text-zinc-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full mr-3" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-32 relative overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-zinc-50">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="contact-title">
            <h2 className="text-6xl md:text-8xl font-bold mb-8 leading-tight text-zinc-900">
              Let&apos;s Work
              <br />
              <span className="bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            
            <p className="text-xl text-zinc-600 mb-12 max-w-2xl mx-auto">
              Available for freelance projects and full-time opportunities. 
              Let&apos;s build something amazing.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href="mailto:tiisusharif@gmail.com"
                className="group px-10 py-5 bg-zinc-900 text-white rounded-full font-medium text-lg hover:bg-zinc-800 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                tiisusharif@gmail.com
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="tel:+233550318885"
                className="px-10 py-5 border-2 border-zinc-900 rounded-full font-medium text-lg hover:bg-zinc-900 hover:text-white transition-all duration-300 hover:scale-105"
              >
                +233 (0)550318885
              </a>
            </div>

            <div className="flex gap-6 justify-center">
              <a
                href="https://github.com/tiisu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-zinc-900 transition-colors text-lg font-medium"
              >
                GitHub
              </a>
              <span className="text-zinc-300">•</span>
              <a
                href="https://www.linkedin.com/in/tiisusharif/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-zinc-900 transition-colors text-lg font-medium"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t-2 border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto text-center text-zinc-500">
          <p>© 2026 Sharif Bawiah Luri Tiisu. Crafted with precision.</p>
        </div>
      </footer>
    </div>
  );
}
