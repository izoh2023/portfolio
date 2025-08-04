"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let&apos;s Connect</h2>
          <p className="text-xl text-[#9e9e9e] max-w-3xl mx-auto">
            Ready to collaborate on your next AI project or discuss innovative solutions?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="backdrop-blur-sm bg-[#565656]/20 rounded-3xl p-8 border border-[#565656]">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#fba92c]/20 rounded-2xl">
                    <Mail className="text-[#fba92c]" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-[#9e9e9e]">ndunguisaac34@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-2xl">
                    <MessageSquare className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Response Time</p>
                    <p className="text-[#9e9e9e]">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-sm bg-[#565656]/20 rounded-3xl p-8 border border-[#565656]">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 bg-[#565656] rounded-2xl hover:bg-[#9e9e9e] transition-all duration-300 hover:shadow-lg hover:shadow-[#fba92c]/25"
                >
                  <Github className="text-white" size={24} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-[#565656] rounded-2xl hover:bg-[#9e9e9e] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <Linkedin className="text-white" size={24} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-[#565656] rounded-2xl hover:bg-[#9e9e9e] transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  <Twitter className="text-white" size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="backdrop-blur-sm bg-[#565656]/20 rounded-3xl p-8 border border-[#565656]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#565656] border border-[#565656] rounded-2xl text-white placeholder-[#9e9e9e] focus:outline-none focus:ring-2 focus:ring-[#fba92c] focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#565656] border border-[#565656] rounded-2xl text-white placeholder-[#9e9e9e] focus:outline-none focus:ring-2 focus:ring-[#fba92c] focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#565656] border border-[#565656] rounded-2xl text-white placeholder-[#9e9e9e] focus:outline-none focus:ring-2 focus:ring-[#fba92c] focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-[#565656] border border-[#565656] rounded-2xl text-white placeholder-[#9e9e9e] focus:outline-none focus:ring-2 focus:ring-[#fba92c] focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or idea..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#e14912] to-[#dd4956] text-black font-semibold rounded-2xl hover:shadow-2xl hover:shadow-[#fba92c]/25 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
