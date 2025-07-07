"use client";
import Image from 'next/image';
import project from '../public/images/project.jpg';
import { motion } from 'framer-motion';


const projects = [
    {
        title: "Weather App",
        desc: "Aplicación que muestra el clima en tiempo real usando una API externa.",
        devStack: "React, Tailwind CSS, OpenWeather API",
        link: "https://weather-app-demo.com",
        git: "https://github.com/usuario/weather-app",
        srcImg: project
    },
    {
        title: "Gestor de Tareas",
        desc: "Aplicación tipo ToDo que permite crear, editar y eliminar tareas.",
        devStack: "Vue, Firebase, Vuetify",
        link: "https://gestor-tareas-demo.com",
        git: "https://github.com/usuario/gestor-tareas",
        srcImg: project
    },
    {
        title: "Blog Personal",
        desc: "Blog con panel de administración para crear y editar artículos.",
        devStack: "Next.js, Prisma, PostgreSQL",
        link: "https://blog-personal-demo.com",
        git: "https://github.com/usuario/blog-personal",
        srcImg: project
    }
]

export const Portfolio = () => {
    return (
        <div className='text-white bg-gradient-to-b from-black to-[#381a5F] py-18 mt-52' id='portfolio'>


            <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold my-12">
                Selected <span className="text-orange-400">Projects</span>
            </h1>

            <div className='px-6 md-px-0 max-w-[1000px] mx-auto mt-40 space-y-24'>
                {
                    projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 75 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className={`mt-12 flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse gap-12" : "md:flex-row"}`}
                        >

                            <div className='space-y-2 max-w-[550px]'>
                                <h2 className='text-7xl my-4 text-white/70'>{`0${i + 1}`}</h2>
                                <h2 className='text-4xl'>{project.title}</h2>
                                <p className='text-lg text-white/70 break-words p-4'>{project.desc}</p>
                                <p className='text-xl text-orange-400 font-semibold'>{project.devStack}</p>
                                <div className='w-64 h-[1px] bg-gray-400 my-4'>
                                    <a href={project.link} className='mr-6'>Link</a>
                                    <a href={project.git}>Git</a>
                                </div>
                            </div>

                            <div className='flex justify-center items-center'>
                                <Image
                                    className='h-[350px] w-[500px] object-cover border rounded border-gray-700'
                                    src={project.srcImg}
                                    alt={project.title}
                                />
                            </div>

                        </motion.div>
                    ))
                }
            </div>
        </div>
    );
}