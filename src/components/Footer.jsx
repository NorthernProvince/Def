import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-mtn-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-mtn-yellow rounded-full flex items-center justify-center">
                <span className="text-mtn-black font-black text-2xl">D</span>
              </div>
              <div>
                <div className="font-black text-mtn-yellow text-sm leading-none">DISTRICT</div>
                <div className="font-black text-white text-sm leading-none">EXCELLENCE</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Championing excellence, recognising achievement, and fostering healthy 
              competition across all workplaces.
            </p>
            <div className="flex gap-3">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-white/10 hover:bg-mtn-yellow rounded-lg flex items-center justify-center text-white hover:text-mtn-black transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-mtn-yellow mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Awards', 'Nominate', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-mtn-yellow text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-mtn-yellow mb-4">Programs</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Leadership Awards</li>
              <li>Innovation Awards</li>
              <li>Small Business Excellence</li>
              <li>Team Excellence</li>
              <li>Community Impact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-mtn-yellow mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start text-gray-400">
                <HiOutlineLocationMarker className="text-mtn-yellow mr-2 flex-shrink-0 mt-0.5" size={18} />
                <span>123 Excellence Avenue, District Center, DC 10001</span>
              </li>
              <li className="flex items-center text-gray-400">
                <HiOutlinePhone className="text-mtn-yellow mr-2 flex-shrink-0" size={18} />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center text-gray-400">
                <HiOutlineMail className="text-mtn-yellow mr-2 flex-shrink-0" size={18} />
                <span>info@district-excellence.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © {currentYear} District Excellence Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
