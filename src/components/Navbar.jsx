import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Awards', path: '/awards' },
    { name: 'Nominate', path: '/nominate' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-mtn-yellow shadow-lg'
          : 'bg-mtn-yellow/95 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 no-select">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-mtn-black rounded-full flex items-center justify-center">
              <span className="text-mtn-yellow font-black text-xl md:text-2xl">D</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-black text-mtn-black text-sm md:text-base leading-none">DISTRICT</div>
              <div className="font-black text-mtn-black text-sm md:text-base leading-none">EXCELLENCE</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'bg-mtn-black text-mtn-yellow'
                    : 'text-mtn-black hover:bg-mtn-black/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/nominate"
              className="ml-4 bg-mtn-black text-mtn-yellow px-5 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform"
            >
              Nominate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-mtn-black p-2 no-select"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-mtn-yellow border-t-2 border-mtn-black/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl font-semibold transition-all ${
                    location.pathname === link.path
                      ? 'bg-mtn-black text-mtn-yellow'
                      : 'text-mtn-black hover:bg-mtn-black/10'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
