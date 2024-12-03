import { motion } from "motion/react"
import ProjectCard from "../molecules/ProjectCard"
import { projects } from "../../data/projects"

export default function Projects () {
    return (
        <section className="py-20 bg-gradient-to-b from-transparent to-purple-500/5 dark:to-purple-500/5">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
                >
                    Featured Projects
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}