import { Code2, Database, Layout, Settings } from "lucide-react"

<Code2 />

export const skills = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'JavaScript', 'TailwindCSS', 'Framer Motion']
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Backend Integration',
      skills: ['RESTful APIs', 'GraphQL', 'Node.js']
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Clean Code',
      skills: ['SOLID Principles', 'Design Patterns', 'Testing', 'Atomic Design']
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Tools & Deployment',
      skills: ['Git', 'Vercel', 'GitHub Pages']
    }
]