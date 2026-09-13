import { useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../lib/supabase'
import { 
  HiOutlineCheckCircle, 
  HiOutlineXCircle,
  HiOutlinePaperAirplane
} from 'react-icons/hi'

const Nominate = () => {
  const [formData, setFormData] = useState({
    nominator_name: '',
    nominator_email: '',
    nominee_name: '',
    nominee_email: '',
    company: '',
    category: '',
    reason: '',
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null) // 'success' | 'error'

  const categories = [
    'Excellence in Leadership',
    'Innovation Award',
    'Small Business Excellence',
    'Team Excellence',
    'Community Impact',
    'Rising Star',
  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const { error } = await supabase
        .from('nominations')
        .insert([formData])

      if (error) throw error

      setStatus('success')
      setFormData({
        nominator_name: '',
        nominator_email: '',
        nominee_name: '',
        nominee_email: '',
        company: '',
        category: '',
        reason: '',
      })
    } catch (error) {
      console.error('Error submitting nomination:', error)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-16 md:pt-20">
      {/* HERO */}
      <section className="bg-mtn-black py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-mtn-yellow rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              Nominate <span className="text-mtn-yellow">Excellence</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
              Help us recognise outstanding individuals, teams, and businesses. 
              Fill out the form below to submit your nomination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FORM */}
      <section className="py-12 md:py-20 bg-mtn-gray">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl p-6 md:p-10"
          >
            {/* Status Messages */}
            {status === 'success' && (
              <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-lg flex items-start">
                <HiOutlineCheckCircle className="text-green-500 flex-shrink-0 mr-3" size={24} />
                <div>
                  <h4 className="font-bold text-green-800">Nomination Submitted!</h4>
                  <p className="text-green-700 text-sm">
                    Thank you for your submission. We will review it shortly.
                  </p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg flex items-start">
                <HiOutlineXCircle className="text-red-500 flex-shrink-0 mr-3" size={24} />
                <div>
                  <h4 className="font-bold text-red-800">Submission Failed</h4>
                  <p className="text-red-700 text-sm">
                    Something went wrong. Please try again later.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nominator Info */}
              <div>
                <h3 className="text-lg font-bold text-mtn-black mb-4 flex items-center">
                  <span className="w-6 h-6 bg-mtn-yellow rounded-full flex items-center justify-center text-xs font-black mr-2">1</span>
                  Your Information
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-mtn-black mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="nominator_name"
                      value={formData.nominator_name}
                      onChange={handleChange}
                      required
                      className="input-mtn"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-mtn-black mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="nominator_email"
                      value={formData.nominator_email}
                      onChange={handleChange}
                      required
                      className="input-mtn"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Nominee Info */}
              <div className="pt-4 border-t border-gray-100">
                <h3 className="text-lg font-bold text-mtn-black mb-4 flex items-center">
                  <span className="w-6 h-6 bg-mtn-yellow rounded-full flex items-center justify-center text-xs font-black mr-2">2</span>
                  Nominee Information
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-mtn-black mb-2">
                      Nominee's Full Name *
                    </label>
                    <input
                      type="text"
                      name="nominee_name"
                      value={formData.nominee_name}
                      onChange={handleChange}
                      required
                      className="input-mtn"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-mtn-black mb-2">
                      Nominee's Email
                    </label>
                    <input
                      type="email"
                      name="nominee_email"
                      value={formData.nominee_email}
                      onChange={handleChange}
                      className="input-mtn"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-mtn-black mb-2">
                      Company / Organisation *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="input-mtn"
                      placeholder="Company Name Ltd."
                    />
                  </div>
                </div>
              </div>

              {/* Award Details */}
              <div className="pt-4 border-t border-gray-100">
                <h3 className="text-lg font-bold text-mtn-black mb-4 flex items-center">
                  <span className="w-6 h-6 bg-mtn-yellow rounded-full flex items-center justify-center text-xs font-black mr-2">3</span>
                  Award Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-mtn-black mb-2">
                      Award Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="input-mtn"
                    >
                      <option value="">Select a category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-mtn-black mb-2">
                      Why do they deserve this award? *
                    </label>
                    <textarea
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="input-mtn resize-none"
                      placeholder="Describe their achievements and impact..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="btn-mtn w-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="spinner mr-3" style={{ width: 20, height: 20, borderWidth: 2 }}></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Nomination
                    <HiOutlinePaperAirplane className="ml-2 transform rotate-90" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Nominate
