import React from 'react';
import { Link } from 'react-router-dom';
import {  FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import SocialIcons from '../Components/SocialIcons/SocialIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', path: '/AboutSection' },
    { name: 'Projects', path: '/Project' },
    { name: 'Contact', path: '/Contect' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-3xl tracking-wider text-white uppercase">Ritesh Kaloni</h3>
            <p className="text-gray-400">
              Front-end developer crafting beautiful and functional web experiences.
            </p>
            {/* Social Links */}
            <SocialIcons />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="hover:text-white transition-colors duration-300"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span>Noida, Uttar Pradesh 201301</span>
              </p>
              <p className="flex items-center gap-2">
                <FaPhone />
                <span>+91 9319014190</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>© {currentYear} Ritesh Kaloni. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
