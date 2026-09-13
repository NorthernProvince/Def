import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  HiOutlineTrophy, 
  HiOutlineUsers, 
  HiOutlineChartBar, 
  HiOutlineLightningBolt,
  HiArrowRight,
  HiOutlineStar,
  HiOutlineBriefcase,
  HiOutlineGlobe
} from 'react-icons/hi'

const Home = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 }
    })
  }

  const stats = [
    { number: '250+', label: 'Businesses Recognized', icon: HiOutlineBriefcase },
    { number: '1,200+', label: 'Individuals Awarded', icon: HiOutlineTrophy },
    { number: '45%', label: 'Productivity Growth', icon: HiOutlineChartBar },
    { number: '85%', label: 'Retention Improvement', icon: HiOutlineUsers },
  ]

  const features = [
    {
      icon: HiOutlineTrophy,
      title: 'Award Excellence',
      description: 'Recognizing outstanding individuals and teams who demonstrate exceptional commitment.',
    },
    {
      icon: HiOutlineLightningBolt,
      title: 'Drive Competition',
      description: 'Creating healthy competition that inspires organizations to continually raise standards.',
    },
    {
      icon: HiOutlineStar,
      title: 'Promote Culture',
      description: 'Cultivating workplace environments where excellence becomes the standard.',
    },
    {
      icon: HiOutlineGlobe,
      title: 'Community Impact',
      description: 'Building a district-wide ecosystem of achievement and prosperity.',
    },
  ]

  return (
    <div className="full-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-screen bg-mtn-black overflow-hidden flex items-center pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-mtn-yellow rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-mtn-yellow rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center bg-mtn-yellow/20 border border-mtn-yellow/30 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-mtn-yellow rounded-full mr-2 animate-pulse"></span>
                <span className="text-mtn-yellow text-xs sm:text-sm font-semibold">
                  Championing Excellence Since 2015
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
                EVERY WORKPLACE
                <br />
                <span className="text-mtn-yellow">DESERVES</span>
                <br />
                EXCELLENCE
              </h1>

              <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                We promote a culture of excellence across all workplaces—from small businesses to 
                large corporations. Recognising hard work. Inspiring competition. Building a better district.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/nominate" className="btn-mtn inline-flex items-center justify-center">
                  Nominate Someone
                  <HiArrowRight className="ml-2" />
                </Link>
                <Link to="/about" className="btn-outline inline-flex items-center justify-center text-white border-white hover:bg-white hover:text-mtn-black">
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main Circle */}
                <div className="w-96 h-96 bg-mtn-yellow rounded-full mx-auto flex items-center justify-center shadow-2xl shadow-mtn-yellow/50">
                  <div className="w-80 h-80 bg-mtn-black rounded-full flex items-center justify-center">
                    <HiOutlineTrophy className="text-mtn-yellow" size={180} />
                  </div>
                </div>
                
                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-10 -left-4 bg-white rounded-2xl p-4 shadow-2xl"
                >
                  <div className="text-3xl font-black text-mtn-black">1,200+</div>
                  <div className="text-xs font-semibold text-gray-500">Awards Given</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute bottom-10 -right-4 bg-mtn-yellow rounded-2xl p-4 shadow-2xl"
                >
                  <div className="text-3xl font-black text-mtn-black">250+</div>
                  <div className="text-xs font-semibold text-mtn-black">Partners</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-mtn-yellow rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-mtn-yellow rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-mtn-yellow py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="text-center"
              >
                <stat.icon className="mx-auto text-mtn-black mb-3" size={32} />
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-mtn-black mb-1">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-mtn-black/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-block bg-mtn-yellow/20 text-mtn-black rounded-full px-4 py-1 text-xs sm:text-sm font-bold mb-4">
              WHAT WE DO
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-mtn-black mb-4">
              Building a Culture of <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              We transform workplaces by recognising achievement and inspiring competition 
              across every sector of our district's economy.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="group bg-mtn-gray rounded-2xl p-6 md:p-8 hover:bg-mtn-black transition-all duration-500 cursor-pointer"
              >
                <div className="w-14 h-14 bg-mtn-yellow rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-mtn-black" size={28} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-mtn-black group-hover:text-mtn-yellow mb-3 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-mtn-black py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-mtn-yellow rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-mtn-yellow rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
              Know Someone <span className="text-mtn-yellow">Outstanding?</span>
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Nominate a deserving individual, team, or business today. 
              Help us celebrate excellence and inspire others to achieve greatness.
            </p>
            <Link
              to="/nominate"
              className="btn-mtn inline-flex items-center text-base md:text-lg"
            >
              Submit a Nomination
              <HiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
