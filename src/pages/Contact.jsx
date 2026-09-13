import { useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../lib/supabase'
import { 
  HiOutlineMail, 
  HiOutlinePhone, 
  HiOutlineLocationMarker, 
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiOutlinePaperAirplane
} from 'react-icons/hi'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const { error } = await supabase.from('contacts').insert([formData])
      if (error) throw error
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Error:', error)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    { icon: HiOutlineLocationMarker, title: 'Our Office', lines: ['123 Excellence Avenue', 'District Center, DC 10001'] },
    { icon: HiOutlinePhone, title: 'Phone', lines: ['(555) 123-4567', 'Mon-Fri, 9AM-6PM'] },
    { icon: HiOutlineMail, title: 'Email', lines: ['info@district-excellence.org', 'support@district-excellence.org'] },
    { icon: HiOutlineClock, title: 'Office Hours', lines: ['Mon-Fri: 9AM - 6PM', 'Sat: 10AM - 2PM'] },
  ]

  return (
    <div className="pt-16 md:pt-20">
      {/* HERO */}
      <section className="bg-mtn-yellow py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-mtn-black mb-4">
              Get In Touch
            </h1>
            <p className="text-mtn-black/80 text-base md:text-lg max-w-2xl mx-auto">
              We value your feedback and inquiries. Reach out through any of the channels below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 md:py-20 bg-mtn-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-4"
            >
              {contactInfo.map((info, i) => (
                <div key={info.title} className="bg-white rounded-2xl p-6 flex items-start hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-mtn-yellow rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                    <info.icon className="text-mtn-black" size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-mtn-black mb-1">{info.title}</h3>
                    {info.lines.map((line, j) => (
                      <p key={j} className="text-sm text-gray-600">{line}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Social */}
              <div className="bg-mtn-black rounded-2xl p-6">
                <h3 className="font-bold text-white mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-11 h-11 bg-mtn-yellow/20 hover:bg-mtn-yellow rounded-xl flex items-center justify-center text-mtn-yellow hover:text-mtn-black transition-all"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 bg-white rounded-3xl shadow-2xl p-6 md:p-10"
            >
              <h2 className="text-2xl md:text-3xl font-black text-mtn-black mb-6">
                Send Us a Message
              </h2>

              {status === 'success' && (
                <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-lg flex items-start">
                  <HiOutlineCheckCircle className="text-green-500 mr-3 flex-shrink-0" size={22} />
                  <div>
                    <h4 className="font-bold text-green-800">Message Sent!</h4>
                    <p className="text-green-700 text-sm">We'll get back to you soon.</p>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg flex items-start">
                  <HiOutlineXCircle className="text-red-500 mr-3 flex-shrink-0" size={22} />
                  <div>
                    <h4 className="font-bold text-red-800">Failed to Send</h4>
                    <p className="text-red-700 text-sm">Please try again.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-mtn-black mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-mtn"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-mtn-black mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-mtn"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-mtn-black mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-mtn"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-mtn-black mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input-mtn resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-mtn w-full flex items-center justify-center disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <div className="spinner mr-3" style={{ width: 20, height: 20, borderWidth: 2 }}></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <HiOutlinePaperAirplane className="ml-2 transform rotate-90" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
