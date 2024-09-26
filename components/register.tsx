'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Rocket, ArrowLeft, Plus, X } from "lucide-react"
import Link from "next/link"

interface TeamMember {
  firstName: string
  lastName: string
  email: string
  role: string
}

export default function TeamRegistrationPage() {
  const [formData, setFormData] = useState({
    teamName: '',
    teamSize: '',
    agreeTerms: false
  })
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { firstName: '', lastName: '', email: '', role: '' }
  ])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, agreeTerms: checked }))
  }

  const handleTeamMemberChange = (index: number, field: keyof TeamMember, value: string) => {
    const updatedMembers = [...teamMembers]
    updatedMembers[index][field] = value
    setTeamMembers(updatedMembers)
  }

  const addTeamMember = () => {
    setTeamMembers([...teamMembers, { firstName: '', lastName: '', email: '', role: '' }])
  }

  const removeTeamMember = (index: number) => {
    const updatedMembers = teamMembers.filter((_, i) => i !== index)
    setTeamMembers(updatedMembers)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', { ...formData, teamMembers })
    // Here you would typically send the data to your server
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute left-1/2 top-1/2 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl relative z-10"
      >
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-800/80 backdrop-blur-lg rounded-lg shadow-2xl p-8"
        >
          <div className="flex items-center justify-center mb-8">
            <Rocket className="h-12 w-12 text-purple-400" />
            <h1 className="ml-4 text-3xl font-bold text-white">Register Your Team for Innov8X</h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="teamName" className="text-white">Team Name</Label>
              <Input
                id="teamName"
                name="teamName"
                value={formData.teamName}
                onChange={handleInputChange}
                required
                className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="teamSize" className="text-white">Team Size</Label>
              <Select name="teamSize" onValueChange={(value) => handleSelectChange('teamSize', value)}>
                <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white">
                  <SelectValue placeholder="Select team size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2">2 members</SelectItem>
                  <SelectItem value="3">3 members</SelectItem>
                  <SelectItem value="4">4 members</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-4">
              <Label className="text-white text-lg">Team Members</Label>
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 p-4 bg-gray-700/30 rounded-lg"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-white font-semibold">Member {index + 1}</h3>
                    {index > 0 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeTeamMember(index)}
                        className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`firstName-${index}`} className="text-white">First Name</Label>
                      <Input
                        id={`firstName-${index}`}
                        value={member.firstName}
                        onChange={(e) => handleTeamMemberChange(index, 'firstName', e.target.value)}
                        required
                        className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`lastName-${index}`} className="text-white">Last Name</Label>
                      <Input
                        id={`lastName-${index}`}
                        value={member.lastName}
                        onChange={(e) => handleTeamMemberChange(index, 'lastName', e.target.value)}
                        required
                        className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`email-${index}`} className="text-white">Email</Label>
                    <Input
                      id={`email-${index}`}
                      type="email"
                      value={member.email}
                      onChange={(e) => handleTeamMemberChange(index, 'email', e.target.value)}
                      required
                      className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`role-${index}`} className="text-white">Role</Label>
                    <Select onValueChange={(value) => handleTeamMemberChange(index, 'role', value)}>
                      <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="developer">Developer</SelectItem>
                        <SelectItem value="designer">Designer</SelectItem>
                        <SelectItem value="product-manager">Product Manager</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </motion.div>
              ))}
              <Button
                type="button"
                onClick={addTeamMember}
                className="w-full bg-purple-600/50 hover:bg-purple-600/70 text-white transition-all duration-300"
              >
                <Plus className="mr-2 h-4 w-4" /> Add Team Member
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="agreeTerms"
                checked={formData.agreeTerms}
                onCheckedChange={handleCheckboxChange}
              />
              <Label htmlFor="agreeTerms" className="text-white">
                I agree to the <Link href="#" className="text-purple-400 hover:underline">Terms and Conditions</Link>
              </Label>
            </div>
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 transform hover:scale-105">
              Register Team
            </Button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  )
}