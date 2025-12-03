import React from "react";
import { Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black to-[#130428] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* 1. Brand */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-wide">Rajnish Kumar</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Fullstack Developer passionate about creating modern,
            scalable & user-centric digital experiences.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/ikrajnish"
              target="_blank"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition"
            >
              <Linkedin size={20} className="text-blue-400" />
            </a>

            <a
              href="https://www.instagram.com/0xrajnish"
              target="_blank"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition"
            >
              <Instagram size={20} className="text-pink-400" />
            </a>

            <a
              href="https://github.com/ikrajnish"
              target="_blank"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition"
            >
              <Github size={20} className="text-gray-200" />
            </a>
          </div>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer transition">Home</li>
            <li className="hover:text-white cursor-pointer transition">About</li>
            <li className="hover:text-white cursor-pointer transition">Skills</li>
            <li className="hover:text-white cursor-pointer transition">Experience</li>
            <li className="hover:text-white cursor-pointer transition">Projects</li>
            <li className="hover:text-white cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* 3. Contact Details */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>

          <div className="flex items-start gap-3 mb-4">
            <Mail className="text-blue-300" size={18} />
            <p className="text-gray-300 text-sm">krajnish1103@gmail.com</p>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <MapPin className="text-purple-300" size={18} />
            <p className="text-gray-300 text-sm">Kolkata, West Bengal</p>
          </div>

          <a
            href="https://portfolio-ppba.vercel.app/"
            target="_blank"
            className="text-green-300 hover:text-white text-sm underline transition"
          >
            portfolio-ppba.vercel.app/
          </a>
        </div>

        {/* 4. Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe to get updates on projects and new opportunities.
          </p>

          <div className="flex items-center bg-white/10 p-2 rounded-lg border border-white/10 backdrop-blur">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent flex-1 outline-none text-gray-200 px-2 text-sm"
            />
            <button className="bg-[#915EFF] hover:bg-[#7a47e8] px-4 py-2 rounded-md text-sm font-medium transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-14 pt-6 border-t border-white/10 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Rajnish Kumar — Built with ❤️ & React.
      </div>
    </footer>
  );
}
