import { motion } from "motion/react";
import { skills } from "../../data/skills";
import SkillCard from "../molecules/SkillCard";

export default function Skills () {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
                >
                    Skills & Expertise
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <SkillCard 
                            key={index} 
                            skill={skill} 
                            index={index} 
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}