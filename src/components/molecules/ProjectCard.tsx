import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"
import { ExternalLink } from "lucide-react"
import { projects } from "../../data/projects"

interface ProjectCardProps {
    project: typeof projects[0]
    index: number
}

export default function ProjectCard ({ project, index } : ProjectCardProps) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    const handleClick = () =>  {
        window.open(project.url, '_blank', 'noopener, noreferrer')
    }

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            onClick={handleClick}
            className="group relative rounded-xl overflow-hidden cursor-pointer"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="p-6 relative z-10 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                    <span
                        key={tagIndex}
                        className="px-3 py-1 bg-white/10 dark:bg-white/10 backdrop-blur-sm rounded-full text-sm"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
    )
}