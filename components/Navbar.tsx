'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // --- Added states ---
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  // --- End added states ---

  // --- Updated scroll effect ---
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Logic for background/shadow
      setScrolled(currentScrollY > 20);

      // Logic for visibility
      if (currentScrollY <= 20) {
        setIsVisible(true); // Always show at the very top
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Hide when scrolling down
      } else {
        setIsVisible(true); // Show when scrolling up
      }

      // Update last scroll position
      setLastScrollY(currentScrollY <= 0 ? 0 : currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]); // Added lastScrollY dependency
  // --- End updated scroll effect ---

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Our Services' },
    { href: '#process', label: 'Our Process' },
    { href: '#clients', label: 'Clients' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-neutral-dark/95 backdrop-blur-sm shadow-md'
          : 'bg-white dark:bg-neutral-dark'
      } ${
        // --- Added visibility class ---
        isVisible ? 'translate-y-0' : '-translate-y-full'
        // --- End added visibility class ---
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button - Left on Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-light dark:hover:bg-neutral-surface-dark transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-neutral-text dark:text-neutral-text-dark" />
            ) : (
              <Menu className="w-6 h-6 text-neutral-text dark:text-neutral-text-dark" />
            )}
          </button>

          {/* Logo - Left on Desktop, Center on Mobile */}
          <a
            href="#hero"
            className="absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0 font-poppins font-bold text-xl md:text-2xl text-neutral-text dark:text-neutral-text-dark hover:text-primary transition-colors"
          >
            HAMMOUDA
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 ml-auto mr-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative font-inter text-sm font-medium text-neutral-subtext dark:text-neutral-subtext-dark hover:text-primary dark:hover:text-primary transition-colors group"
              >
                {link.label}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </div>

          {/* Dark/Light Mode Toggle - Right on All Screens */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg hover:bg-neutral-light dark:hover:bg-neutral-surface-dark transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-accent-amber" />
            ) : (
              <Moon className="w-5 h-5 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${ // --- CHANGED: duration-300 to duration-500
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-1 border-t border-neutral-border dark:border-neutral-border-dark">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-4 py-3 font-inter text-base font-medium text-neutral-subtext dark:text-neutral-subtext-dark hover:text-primary dark:hover:text-primary hover:bg-neutral-light dark:hover:bg-neutral-surface-dark rounded-lg transition-all"
                style={{
                  animation: isOpen
                    ? `slideDown 0.5s ease-out ${index * 0.05}s both` // --- CHANGED: 0.3s to 0.5s
                    : 'none',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
}