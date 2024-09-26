'use client'

import { Button } from "@/components/ui/button"
import { Code, Rocket, Calendar, Users, ChevronRight, Lightbulb, Brush} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
//import { RegisterPage } from "@/components/register"

export function SuperAttractiveHackathon() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  useEffect(() => {
    const countdownDate = new Date("2024-10-19T09:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = countdownDate - now

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })

      if (distance < 0) {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white">
      <header className="px-4 lg:px-6 h-16 flex items-center fixed w-full z-50 bg-gray-900/80 backdrop-blur-md">
        <Link className="flex items-center justify-center" href="#">
          <Rocket className="h-8 w-8 text-purple-400" />
          <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Innov8X</span>
        </Link>
        <nav className="ml-auto flex justify-center items-center gap-4 sm:gap-6">
          {["About", "Events", "Schedule", "Prizes"].map((item) => (
            <Link key={item} className="text-sm font-medium hover:text-purple-400 transition-colors relative group" href={`#${item.toLowerCase()}`}>
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <Button className="bg-gradient-to-r from-purple-400 to-pink-600 hover:text-black hover:bg-white" ><Link href="#register">Register</Link></Button>
          <Link href="/sponser"> 
            <Button className="border border-white text-white bg-transparent px-4 py-2" variant="ghost">
              Sponser
            </Button>
          </Link>
        </nav>
      </header>
      <main className="flex-1 pt-16">
        <section className="w-full py-20 md:py-32 lg:py-48 xl:py-64 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
          <motion.div 
            style={{ opacity, scale }}
            className="container mx-auto px-4 relative z-10"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center space-y-6 text-center"
            >
              <motion.h1 
                className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl/none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Welcome to{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
                  Innov8X V1
                </span>
              </motion.h1>
              <motion.h3
                className="mx-auto max-w-[700px] text-gray-300 md:text-xl lg:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}>
                Create. Design. Hack.
              </motion.h3>
              <motion.p 
                className="mx-auto max-w-[700px] text-gray-300 md:text-xl lg:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Join us for 30 hours of coding, creativity, and innovation. Build something amazing and win big!
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link href="/register">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 ease-in-out transform hover:scale-105" size="lg">
                  Register Now
                </Button>
                </Link>
                <Button variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300 ease-in-out transform hover:scale-105" size="lg">
                  <Link href="#about" >Sponser Now</Link>
                </Button>
              </motion.div>
              <motion.div 
                className="mt-12 grid grid-cols-4 gap-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="bg-gray-800/50 backdrop-blur-md p-4 rounded-lg shadow-lg">
                    <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">{value}</div>
                    <div className="text-xs text-gray-400 uppercase">{unit}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
        <section id="about" className="w-full pt-10 pb-10 md:py-32 bg-gray-800">
          <div className="container mx-auto px-4 md:px-40">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">About Innvo8X</h2>
            <div className="grid  gap-8">
              {[
                { description: "InnovateX is a 30-hour, offline event that brings together young innovators from high schools and colleges for an exciting challenge to solve real-world problems using technology, creativity, and teamwork. Organized by the KMEA Computer Science Department, the event includes three tracks: Hackathon, Ideathon, and Designathon. InnovateX is more than a competition—it’s an opportunity to network, learn, and build solutions that have a lasting impact on society." }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center  p-6 bg-gray-700 rounded-xl hover:bg-gray-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                > 
                  <p className="text-gray-300 text-center">{item.description}</p>
                  <ul className="list-disc list-inside ml-4 mt-8">
                    <li className="mb-2">1500+ students engaged</li>
                    <li className="mb-2">300+ participants</li>
                    <li className="mb-2">Expert mentorship and workshops</li>
                    <li className="mb-2">Cash prizes, internship offers, and more!</li>
                    
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section id="events" className="w-full py-10 md:py-32 bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Code, title: "Hackathon", description: "A hackathon is a collaborative event where participants work together to create innovative solutions or projects, typically within 24-30 hours." },
                { icon: Lightbulb, title: "Ideathon", description: "An ideathon is a creative event where participants brainstorm and pitch innovative ideas to solve specific challenges in a limited time." },
                { icon: Brush, title: "Designathon", description: "A designathon is a focused event where participants collaborate to create design-based solutions, turning ideas into prototypes within a set timeframe." }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-6 bg-gray-700 rounded-xl hover:bg-gray-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section id="schedule" className="w-full py-20 md:py-32 bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Event Schedule</h2>
            <div className="grid gap-8 md:gap-12">
              {[
                { day: "Day 1", title: "Kickoff and Team Formation", schedule: "9:00 AM - Opening Ceremony, 10:00 AM - Hacking Begins" },
                { day: "Day 2", title: "Hacking Continues", schedule: "All Day - Coding, Workshops, and Mentorship Sessions" },
                { day: "Day 3", title: "Project Submission and Judging", schedule: "12:00 PM - Submission Deadline, 2:00 PM - Presentations, 5:00 PM - Awards Ceremony" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                >
                  <Calendar className="h-12 w-12 text-purple-400 mr-6 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-2xl mb-2">{item.day}: {item.title}</h3>
                    <p className="text-gray-300">{item.schedule}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section id="register" className="w-full py-20 md:py-32 bg-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-5"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-8 text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Ready to Hack?</h2>
                <p className="mx-auto max-w-[600px] text-gray-300 text-xl">
                  Register now to secure your spot at Innov8X 2024. Don't miss out on this incredible opportunity!
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full max-w-md"
              >
                <form className="space-y-4">
                  <Link href="/register">
                    <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-6 text-lg rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
                      Register Now
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-8 px-4 md:px-6 bg-gray-900">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2024 Innov8X. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link className="text-sm text-gray-400 hover:text-purple-400 transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm text-gray-400 hover:text-purple-400 transition-colors" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}