"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  ArrowRight,
  Sparkles,
  Moon,
  Sun,
  Award,
  Calendar,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "GraphQL",
    "Tailwind CSS",
    "Vue.js",
  ]

  // TypeScript-style typing animation
  useEffect(() => {
    const currentSkill = skills[currentSkillIndex]
    let currentIndex = 0

    const typeInterval = setInterval(() => {
      if (currentIndex <= currentSkill.length) {
        setTypedText(currentSkill.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setCurrentSkillIndex((prev) => (prev + 1) % skills.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [currentSkillIndex])

  // Handle theme mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [isLoading])

  // Particle animation
  const ParticleBackground = () => {
    const particleCount = 30
    const particles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 5,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }))

    return (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-xl"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-400/10 blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-400/5 to-purple-400/5 blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative flex flex-col items-center space-y-8">
          {/* Animated Logo */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 blur-xl opacity-50 animate-pulse"></div>
            <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl">
              <span className="text-3xl font-bold text-white animate-bounce">SK</span>
            </div>
          </div>

          {/* Loading Text */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
              Shashwat Karna
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 animate-pulse delay-300">
              Crafting digital experiences...
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-80 space-y-3">
            <div className="flex justify-between text-sm text-slate-500">
              <span>Loading</span>
              <span>{Math.round(loadingProgress)}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-300 ease-out relative"
                style={{ width: `${loadingProgress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </div>
            </div>
          </div>

          {/* Loading Dots */}
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-blue-600 animate-bounce"></div>
            <div className="h-3 w-3 rounded-full bg-purple-600 animate-bounce delay-100"></div>
            <div className="h-3 w-3 rounded-full bg-blue-800 animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 animate-fadeIn">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/20 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:border-slate-800/20 dark:bg-slate-950/80 dark:supports-[backdrop-filter]:bg-slate-950/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-8 flex items-center space-x-2" href="/">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                <span className="text-sm font-bold text-white">SK</span>
              </div>
              <span className="hidden font-bold sm:inline-block">SHASHWAT KARNA</span>
            </Link>
            <nav className="flex items-center space-x-8 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-blue-600">
                About
              </Link>
              <Link href="#projects" className="transition-colors hover:text-blue-600">
                Projects
              </Link>
              <Link href="#skills" className="transition-colors hover:text-blue-600">
                Skills
              </Link>
              <Link href="#certifications" className="transition-colors hover:text-blue-600">
                Certifications
              </Link>
              <Link href="#contact" className="transition-colors hover:text-blue-600">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-4 md:justify-end">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full bg-white/50 backdrop-blur-sm hover:bg-white/80 dark:bg-slate-800/50 dark:hover:bg-slate-800/80"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-slate-700" />
                )}
              </Button>
            )}
            <a
                href="https://drive.google.com/file/d/1QePp54PoZtEy0G90wQyGc4QowaE0h0RX/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                >
            <Button
              variant="outline"
              size="sm"
              className="ml-auto border-slate-200 bg-white/50 backdrop-blur-sm hover:bg-white/80 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:bg-slate-800/80"
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-32 md:py-40">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-3xl"></div>
          <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-purple-400/20 dark:bg-purple-600/10 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 dark:from-blue-600/5 dark:to-purple-600/5 blur-3xl"></div>
        </div>

        <div className="container">
          <div className="flex flex-col items-center text-center space-y-8">
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center rounded-full border border-slate-200 bg-white/50 px-4 py-2 text-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/50"
            >
              <Sparkles className="mr-2 h-4 w-4 text-blue-600" />
              Available for new opportunities
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
              >
                <span className="block">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Shashwat Karna
                </span>
              </motion.h1>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mx-auto max-w-2xl text-xl text-slate-600 dark:text-slate-300 md:text-2xl leading-relaxed"
              >
                I craft beautiful digital experiences that blend{" "}
                <span className="font-semibold text-blue-600">creativity</span> with{" "}
                <span className="font-semibold text-purple-600">functionality</span>
              </motion.p>
            </div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="mailto:shashwatkarna6@gmail.com"
                // target="_blank"
                rel="noopener noreferrer"
                >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Let's Connect
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              </a>

            <Link href="#projects" className="transition-colors hover:text-blue-600">
              <Button
                variant="outline"
                size="lg"
                className="border-slate-300 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:bg-slate-800/80"
              >
                View My Work
              </Button>
            </Link>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex space-x-6 pt-4"
            >
              <Link href="https://github.com/shashwatkarna/" className="group">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/50 backdrop-blur-sm border border-slate-200 transition-all duration-300 group-hover:bg-white group-hover:shadow-lg group-hover:scale-110 dark:bg-slate-800/50 dark:border-slate-700 dark:group-hover:bg-slate-800">
                  <Github className="h-5 w-5 text-slate-600 group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-white" />
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/shashwatkarna/" className="group">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/50 backdrop-blur-sm border border-slate-200 transition-all duration-300 group-hover:bg-white group-hover:shadow-lg group-hover:scale-110 dark:bg-slate-800/50 dark:border-slate-700 dark:group-hover:bg-slate-800">
                  <Linkedin className="h-5 w-5 text-slate-600 group-hover:text-blue-600 dark:text-slate-400 dark:group-hover:text-blue-400" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-4xl font-bold tracking-tight mb-4">About Me</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>
                    I'm a passionate full-stack developer with over 5 years of experience crafting digital solutions
                    that make a difference. I believe in the power of clean code, thoughtful design, and user-centered
                    thinking.
                  </p>
                  <p>
                    My journey in tech started with curiosity and has evolved into a deep love for creating applications
                    that solve real problems. I specialize in modern web technologies and enjoy staying at the forefront
                    of innovation.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700"
                  >
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Projects Completed</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-slate-200 dark:bg-slate-800/50 dark:border-slate-700"
                  >
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">1+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center lg:justify-end"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Image
                      src="/about.jpg?height=400&width=400"
                      alt="Profile"
                      width={400}
                      height={400}
                      className="relative rounded-2xl border-4 border-white shadow-2xl dark:border-slate-800"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-24 bg-gradient-to-b from-slate-50/50 to-white dark:from-slate-900/50 dark:to-slate-950"
      >
        <div className="container px-4">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-4xl font-bold tracking-tight mb-4">Skills & Technologies</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>

            {/* TypeScript-style Code Animation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16 mx-auto max-w-4xl"
            >
              <div className="relative rounded-2xl bg-slate-900 dark:bg-slate-800 p-8 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-slate-400 text-sm">skills.ts</span>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <div className="text-slate-400">
                    <span className="text-purple-400">interface</span> <span className="text-blue-400">Developer</span>{" "}
                    {"{"}
                  </div>
                  <div className="text-slate-400 ml-4">
                    <span className="text-green-400">name</span>:{" "}
                    <span className="text-yellow-300">"Shashwat Karna"</span>;
                  </div>
                  <div className="text-slate-400 ml-4">
                    <span className="text-green-400">currentSkill</span>:{" "}
                    <span className="text-yellow-300">"{typedText}"</span>
                    <span className="animate-pulse">|</span>;
                  </div>
                  <div className="text-slate-400 ml-4">
                    <span className="text-green-400">expertise</span>: <span className="text-blue-400">string</span>[];
                  </div>
                  <div className="text-slate-400">{"}"}</div>
                </div>
              </div>
            </motion.div>

            {/* Skills Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  category: "Frontend",
                  skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
                  color: "blue",
                },
                {
                  category: "Backend",
                  skills: ["Node.js", "Express", "Python", "GraphQL", "REST APIs"],
                  color: "purple",
                },
                {
                  category: "Database",
                  skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"],
                  color: "green",
                },
                { category: "DevOps", skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Vercel"], color: "orange" },
              ].map((group, groupIndex) => (
                <motion.div
                  key={group.category}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h3
                    className={cn(
                      "text-lg font-semibold",
                      group.color === "blue" && "text-blue-600 dark:text-blue-400",
                      group.color === "purple" && "text-purple-600 dark:text-purple-400",
                      group.color === "green" && "text-green-600 dark:text-green-400",
                      group.color === "orange" && "text-orange-600 dark:text-orange-400",
                    )}
                  >
                    {group.category}
                  </h3>
                  <div className="space-y-2">
                    {group.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: groupIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 10, scale: 1.05 }}
                        className="group"
                      >
                        <div
                          className={cn(
                            "px-4 py-2 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border transition-all duration-300 group-hover:shadow-lg",
                            group.color === "blue" &&
                              "border-blue-200 dark:border-blue-800 group-hover:border-blue-300 dark:group-hover:border-blue-700 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20",
                            group.color === "purple" &&
                              "border-purple-200 dark:border-purple-800 group-hover:border-purple-300 dark:group-hover:border-purple-700 group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20",
                            group.color === "green" &&
                              "border-green-200 dark:border-green-800 group-hover:border-green-300 dark:group-hover:border-green-700 group-hover:bg-green-50 dark:group-hover:bg-green-900/20",
                            group.color === "orange" &&
                              "border-orange-200 dark:border-orange-800 group-hover:border-orange-300 dark:group-hover:border-orange-700 group-hover:bg-orange-50 dark:group-hover:bg-orange-900/20",
                          )}
                        >
                          <span className="text-slate-700 dark:text-slate-300 font-medium">{skill}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Skills Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-20 relative h-40 overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">Always learning</p>
                  <div className="flex flex-wrap justify-center gap-2 max-w-2xl">
                    {skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: [0, 1, 1, 0],
                          y: [20, 0, 0, -20],
                        }}
                        transition={{
                          duration: 4,
                          delay: index * 0.3,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: skills.length * 0.3,
                        }}
                        className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-sm text-slate-600 dark:text-slate-300 backdrop-blur-sm border border-white/20"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-4xl font-bold tracking-tight mb-4">Certifications & Achievements</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
              <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
                Professional certifications and continuous learning achievements
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "CyberSecurity Fundamentals",
                  issuer: "IBM",
                  date: "2025",
                  description: "Gained foundational knowledge of cybersecurity principles, risk management, and threat mitigation strategies.",
                  color: "orange",
                  icon: "☁️",
                  link: "https://credly.com/"
                },
                {
                  title: "Introduction to CyberSecurity",
                  issuer: "Cisco",
                  date: "2023",
                  description: "Learned core concepts of cybersecurity, including network security, malware, cryptography, and threat analysis.",
                  color: "blue",
                  icon: "🌐",
                  link: "https://credly.com/"
                },
                {
                  title: "Micro-Certification- Welcome to ServiceNow",
                  issuer: "ServiceNow",
                  date: "2025",
                  description: "Explored the basics of the ServiceNow platform, its interface, workflows, and ITSM fundamentals.",
                  color: "cyan",
                  icon: "⚛️",
                  link: "https://credly.com/"
                },
                {
                  title: "Fundamentals of Deep Learning",
                  issuer: "Nvidia",
                  date: "2025",
                  description: "Built a strong understanding of neural networks, backpropagation, and training models using real-world datasets.",
                  color: "green",
                  icon: "🍃",
                  link: "https://credly.com/"
                },
                {
                  title: "CCNA: Introduction to networks",
                  issuer: "Cisco",
                  date: "2025",
                  description: "Developed skills in configuring, managing, and troubleshooting basic network infrastructures using Cisco devices.",
                  color: "blue",
                  icon: "🐳",
                  link: "https://credly.com/"
                },
                {
                  title: "Cloud Computing Training",
                  issuer: "Acmegrade Pvt. Ltd.",
                  date: "2023",
                  description: "Learned cloud service models (IaaS, PaaS, SaaS), virtualization, and deployment on platforms like AWS and Azure.",
                  color: "purple",
                  icon: "⚙️",
                  link: "https://credly.com/"
                },
              ].map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full border-0 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div
                          className={cn(
                            "flex h-12 w-12 items-center justify-center rounded-xl text-2xl shadow-lg",
                            cert.color === "orange" && "bg-gradient-to-r from-orange-500 to-orange-600",
                            cert.color === "blue" && "bg-gradient-to-r from-blue-500 to-blue-600",
                            cert.color === "cyan" && "bg-gradient-to-r from-cyan-500 to-cyan-600",
                            cert.color === "green" && "bg-gradient-to-r from-green-500 to-green-600",
                            cert.color === "purple" && "bg-gradient-to-r from-purple-500 to-purple-600",
                          )}
                        >
                          <span>{cert.icon}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-slate-500 dark:text-slate-400">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{cert.date}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl leading-tight">{cert.title}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{cert.issuer}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {cert.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-24 bg-gradient-to-b from-slate-50/50 to-white dark:from-slate-900/50 dark:to-slate-950"
      >
        <div className="container px-4">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
              <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
                Here are some of my recent works that showcase my skills and passion
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-70 transition duration-500"></div>
                <Card className="relative overflow-hidden border-0 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 dark:bg-slate-900/70">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src="/qf.png?height=240&width=400"
                        alt="QUESTiFY-AI MCQ Generator"
                        width={400}
                        height={240}
                        className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6"
                      >
                        <div className="text-white">
                          <h3 className="text-lg font-bold">QUESTiFY: AI MCQ Generator</h3>
                          <p className="text-sm text-white/80">Generate contextual MCQs with distractors using AI</p>
                        </div>
                      </motion.div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="mb-3 text-xl">AI MCQ Generator Tool</CardTitle>
                    <CardDescription className="mb-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                      An intelligent MCQ generator that uses AI and NLP to create multiple-choice questions with distractors based on the given text. Includes offline support, export options, difficulty levels, and performance tracking.
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <Badge
                        variant="outline"
                        className="border-blue-200 text-blue-700 dark:border-blue-800 dark:text-blue-400"
                      >
                        Next.js
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-green-200 text-green-700 dark:border-green-800 dark:text-green-400"
                      >
                        MongoDB
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-purple-200 text-purple-700 dark:border-purple-800 dark:text-purple-400"
                      >
                        Sense2vec
                      </Badge>
                    </div>
                    <div className="flex space-x-3">
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800/50"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      </a>
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-70 transition duration-500"></div>
                <Card className="relative overflow-hidden border-0 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 dark:bg-slate-900/70">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src="/tt.png?height=240&width=400"
                        alt="TalentTrack: Job Recommender System"
                        width={400}
                        height={240}
                        className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6"
                      >
                        <div className="text-white">
                          <h3 className="text-lg font-bold">TalentTrack: Job Recommender System</h3>
                          <p className="text-sm text-white/80">AI-driven career guidance and job matching</p>
                        </div>
                      </motion.div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="mb-3 text-xl">Career & Job Recommendation Platform</CardTitle>
                    <CardDescription className="mb-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                      An all-in-one platform that helps users discover suitable job roles, career paths, and expected salaries based on their skills. Includes resume builder, job search via external APIs, blogs, and user-specific predictions.
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <Badge
                        variant="outline"
                        className="border-blue-200 text-blue-700 dark:border-blue-800 dark:text-blue-400"
                      >
                        Java
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-yellow-200 text-yellow-700 dark:border-yellow-800 dark:text-yellow-400"
                      >
                        Spring Boot
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-green-200 text-green-700 dark:border-green-800 dark:text-green-400"
                      >
                        HTML/CSS/JS
                      </Badge>
                    </div>
                    <div className="flex space-x-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800/50"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-70 transition duration-500"></div>
                <Card className="relative overflow-hidden border-0 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 dark:bg-slate-900/70">
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src="/ot.png?height=240&width=400"
                        alt="ObjecTrack: Real-Time Object Detection"
                        width={400}
                        height={240}
                        className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6"
                      >
                        <div className="text-white">
                          <h3 className="text-lg font-bold">ObjecTrack: Real-Time Object Detection</h3>
                          <p className="text-sm text-white/80">AI-based animal/human detection system</p>
                        </div>
                      </motion.div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="mb-3 text-xl">YOLO-powered Surveillance System</CardTitle>
                    <CardDescription className="mb-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                      A real-time object detection and alert system using YOLO and OpenCV for identifying humans or animals. Integrated with a Flask backend and interactive web frontend for alerts and image/video visualization.
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <Badge
                        variant="outline"
                        className="border-green-200 text-green-700 dark:border-green-800 dark:text-green-400"
                      >
                        YOLOv8
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-blue-200 text-blue-700 dark:border-blue-800 dark:text-blue-400"
                      >
                        Flask
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-orange-200 text-orange-700 dark:border-orange-800 dark:text-orange-400"
                      >
                        OpenCV
                      </Badge>
                    </div>
                    <div className="flex space-x-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800/50"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Featured Project */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30"></div>
                <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src="/at.png?height=400&width=600"
                        alt="Featured Project"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 mix-blend-overlay"></div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="mb-4">
                        <Badge className="bg-blue-600 hover:bg-blue-700 text-white">Featured Project</Badge>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">AniTime+: Anime Watch Tracker</h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-6">
                        A modern web app to track and calculate total anime watch time. Offers localStorage support for offline progress saving, dark mode, and a clean, dynamic interface to enhance user experience over traditional trackers.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <Badge
                          variant="outline"
                          className="border-blue-200 text-blue-700 dark:border-blue-800 dark:text-blue-400"
                        >
                          React
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-purple-200 text-purple-700 dark:border-purple-800 dark:text-purple-400"
                        >
                          Tailwind CSS
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-green-200 text-green-700 dark:border-green-800 dark:text-green-400"
                        >
                          API
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-yellow-200 text-yellow-700 dark:border-yellow-800 dark:text-yellow-400"
                        >
                          MongoDB
                        </Badge>
                      </div>
                      <div className="flex space-x-4">
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Case Study
                        </Button>
                        <Button variant="outline" className="border-slate-300 dark:border-slate-700">
                          <Github className="mr-2 h-4 w-4" />
                          Repository
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-16 animate-on-scroll">
              <h2 className="text-4xl font-bold tracking-tight mb-4">Let's Create Something Amazing</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with
                amazing people.
              </p>
            </div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
            >

              <a
                href="mailto:shashwatkarna6@gmail.com"
                // target="_blank"
                rel="noopener noreferrer"
                >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                shashwatkarna6@gmail.com
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              </a>

              <a
                href="https://linkedin.com/in/shashwatkarna"
                target="_blank"
                rel="noopener noreferrer"
                >
              <Button
                variant="outline"
                size="lg"
                className="border-slate-300 bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:bg-slate-800/80"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full border border-slate-200 bg-white/50 px-6 py-3 text-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/50"
            >
              <div className="mr-3 h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
              Currently available for freelance work
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/50 backdrop-blur-sm py-8 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="container px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                <span className="text-sm font-bold text-white">AJ</span>
              </div>
              <span className="font-semibold">Shashwat Karna</span>
            </div>
            <p className="text-center text-sm text-slate-600 dark:text-slate-400 md:text-left">
              © 2025 Shashwat Karna. Crafted with ❤️ and lots of ☕
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
