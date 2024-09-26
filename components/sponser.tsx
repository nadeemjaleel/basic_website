'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Diamond, Award, Medal, Star, ArrowRight, Check, Sparkles } from "lucide-react"
import Link from "next/link"

const sponsorTiers = [
  {
    name: "Diamond",
    icon: Diamond,
    price: "$10,000",
    color: "from-blue-400 to-blue-600",
    benefits: [
      "Prime logo placement on all event materials",
      "VIP booth at the event",
      "5-minute keynote speech opportunity",
      "Access to participants' resumes",
      "Social media shoutouts",
      "10 free tickets for your team"
    ]
  },
  {
    name: "Gold",
    icon: Award,
    price: "$5,000",
    color: "from-yellow-400 to-yellow-600",
    benefits: [
      "Logo on event website and materials",
      "Booth at the event",
      "3-minute pitch opportunity",
      "Social media mentions",
      "5 free tickets for your team"
    ]
  },
  {
    name: "Silver",
    icon: Medal,
    price: "$2,500",
    color: "from-gray-300 to-gray-500",
    benefits: [
      "Logo on event website",
      "Small booth at the event",
      "Social media mention",
      "3 free tickets for your team"
    ]
  },
  {
    name: "Bronze",
    icon: Star,
    price: "$1,000",
    color: "from-orange-400 to-orange-600",
    benefits: [
      "Logo on event website",
      "1 free ticket for your team"
    ]
  }
]

const FadingSparkle = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
      transition={{ duration: 2, delay, repeat: Infinity }}
      className="absolute"
    >
      <Sparkles className="text-purple-300" size={16} />
    </motion.div>
  )
}

export default function StunningSponsorPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your server
  }

  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <FadingSparkle key={i} delay={i * 0.5} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Sponsor Innov8X
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us in shaping the future of technology. Your support ignites innovation.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {sponsorTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <Card className="bg-gray-800/50 backdrop-blur-md border-gray-700 overflow-hidden group">
                <CardHeader className="relative">
                  <div className={`w-20 h-20 bg-gradient-to-br ${tier.color} rounded-full flex items-center justify-center mb-4 mx-auto transform group-hover:scale-110 transition-transform duration-300`}>
                    <tier.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-center text-white">{tier.name}</CardTitle>
                  <CardDescription className="text-center text-white text-lg">{tier.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-white">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white transform hover:scale-105 transition-all duration-300">
                    Choose {tier.name}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-800/50 backdrop-blur-md rounded-lg p-8 max-w-2xl mx-auto relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Interested in Sponsoring?
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-700/50 border-gray-600 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-700/50 border-gray-600 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-700/50 border-gray-600 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-gray-700/50 border-gray-600 text-white"
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transform hover:scale-105 transition-all duration-300">
                Send Inquiry
              </Button>
            </form>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center relative z-10"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Why Sponsor HackFest 2024?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Connect with top talent, showcase your brand, and be part of the next big innovation in tech.
          </p>
          <Link href="/about" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group">
            Learn more about our event
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}