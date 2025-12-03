import { Mail, MapPin, Link as LinkIcon, Github, Instagram, Linkedin } from "lucide-react";
import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-black to-[#130428] text-white py-16 px-6"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading (same style as Skills.jsx) */}
        <h2 className="text-center text-4xl md:text-3xl font-bold mb-12">
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Left section */}
          <div className="space-y-8">

            <p className="text-gray-300 leading-relaxed text-lg">
              Feel free to reach out if you'd like to collaborate, discuss tech, or share ideas!
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-blue-300" size={22} />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-gray-300 text-sm">krajnish1103@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-purple-300" size={22} />
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-gray-300 text-sm">Kolkata, West Bengal</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <LinkIcon className="text-pink-300" size={22} />
                <div>
                  <p className="font-semibold text-white">Portfolio</p>
                  <a
                    href="https://portfolio.greenhacker.tech/"
                    className="text-blue-300 hover:underline text-sm"
                    target="_blank"
                  >
                    portfolio.greenhacker.tech
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <p className="font-semibold mb-3">Connect With Me</p>
              <div className="flex gap-4">
                <a
                  className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
                  href="www.linkedin.com/in/ikrajnish"
                >
                  <Linkedin className="text-blue-400" />
                </a>

                <a
                  className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
                  href="https://www.instagram.com/0xrajnish"
                >
                  <Instagram className="text-pink-400" />
                </a>

                <a
                  className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
                  href="https://github.com/ikrajnish"
                >
                  <Github className="text-gray-200" />
                </a>
              </div>
            </div>

          </div>

          {/* Right section – Form */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-10 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-5">
              <div>
                <label className="text-gray-300 text-sm">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full mt-1 p-3 bg-black/20 rounded-lg text-white border border-white/10 outline-none focus:border-green-400"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm">Your Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full mt-1 p-3 bg-black/20 rounded-lg text-white border border-white/10 outline-none focus:border-green-400"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm">Subject</label>
                <input
                  type="text"
                  placeholder="Project Collaboration"
                  className="w-full mt-1 p-3 bg-black/20 rounded-lg text-white border border-white/10 outline-none focus:border-green-400"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm">Message</label>
                <textarea
                  rows="5"
                  placeholder="Hi there, I'd like to talk about..."
                  className="w-full mt-1 p-3 bg-black/20 rounded-lg text-white border border-white/10 outline-none resize-none focus:border-green-400"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3 bg-gradient-to-r from-green-400 to-green-600 text-black font-semibold rounded-lg hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
