import ExperienceCard from "../molecules/ExperienceCard";
import { experiences } from "../../data/experiences";
import { motion } from "motion/react";

export default function Experience () {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm" />
            <div className="container mx-auto px-4 z-10 relative">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
                >
                    Experience
                </motion.h2>
                <div className="max-w-4xl mx-auto">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}