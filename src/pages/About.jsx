import { motion } from 'framer-motion'
import { 
  HiOutlineTrophy, 
  HiOutlineLightningBolt, 
  HiOutlineUserGroup,
  HiOutlineChartBar,
  HiOutlineScale,
  HiOutlineHeart,
  HiOutlineGlobe,
  HiOutlineSparkles
} from 'react-icons/hi'

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.1, duration: 0.6 }
    })
  }

  const values = [
    { icon: HiOutlineScale, title: 'Merit-Based', desc: 'Awards based on measurable achievements and transparent criteria.' },
    { icon: HiOutlineUserGroup, title: 'Inclusive', desc: 'Celebrating excellence from frontline workers to executives.' },
    { icon: HiOutlineChartBar, title: 'Sustainable', desc: 'Promoting long-term success over short-term gains.' },
    { icon: HiOutlineHeart, title: 'Community', desc: 'Excellence contributes to community prosperity and quality of life.' },
  ]

  const team = [
    { name: 'Robert Chen', role: 'Founder & Chairman', initial: 'RC' },
    { name: 'Maria Rodriguez', role: 'Executive Director', initial: 'MR' },
    { name: 'James Wilson', role: 'Awards Director', initial: 'JW' },
    { name: 'Aisha Johnson', role: 'Community Relations', initial: 'AJ' },
  ]

  return (
    <div className="pt-16 md:pt-20">
      {/* HERO */}
      <section className="bg-mtn-black py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-mtn-yellow rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <div className="inline-block bg-mtn-yellow text-mtn-black rounded-full px-4 py-1 text-xs sm:text-sm font-bold mb-6">
              ABOUT US
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Championing Excellence<br />
              <span className="text-mtn-yellow">Across Every Workplace</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
              District Excellence Foundation is a pioneering organisation dedicated to promoting 
              a culture of excellence, recognising outstanding achievements, and fostering 
              healthy competition in workplaces of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              <div className="w-16 h-16 bg-mtn-yellow rounded-2xl flex items-center justify-center mb-6">
                <HiOutlineSparkles className="text-mtn-black" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-mtn-black mb-6">Our Mission</h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                We exist to transform workplace cultures by systematically identifying, 
                celebrating, and rewarding excellence in performance, innovation, and 
                dedication across all sectors of our district's economy.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                From small businesses to large corporations, we believe that recognition 
                creates a ripple effect of productivity, innovation, and growth throughout 
                our community.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
            >
              <div className="w-16 h-16 bg-mtn-black rounded-2xl flex items-center justify-center mb-6">
                <HiOutlineGlobe className="text-mtn-yellow" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-mtn-black mb-6">Our Vision</h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                To create a district where excellence is the standard, where every worker 
                feels valued, and where healthy competition drives continuous improvement 
                across all industries.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                We envision a thriving ecosystem where businesses of all sizes compete 
                not just for profit, but for impact, quality, and the recognition of 
                their contribution to our shared prosperity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-16 md:py-24 bg-mtn-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-mtn-black mb-4">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              The principles that guide every award we give and every program we run.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-white rounded-2xl p-6 md:p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-mtn-yellow rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <value.icon className="text-mtn-black" size={30} />
                </div>
                <h3 className="text-lg font-bold text-mtn-black mb-3">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS PROGRAMS */}
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-mtn-black mb-4">
              Our Awards Programs
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Comprehensive recognition across every level of achievement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: HiOutlineTrophy, title: 'Excellence in Leadership', desc: 'Recognising visionary leaders who inspire their teams to achieve extraordinary results.' },
              { icon: HiOutlineLightningBolt, title: 'Innovation Award', desc: 'Celebrating breakthrough ideas and innovative solutions that drive business forward.' },
              { icon: HiOutlineUserGroup, title: 'Small Business Excellence', desc: 'Honouring outstanding small businesses demonstrating remarkable growth and quality.' },
              { icon: HiOutlineHeart, title: 'Team Excellence', desc: 'Acknowledging high-performing teams that achieve collective success through collaboration.' },
            ].map((award, i) => (
              <motion.div
                key={award.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="flex items-start bg-mtn-gray rounded-2xl p-6 md:p-8 hover:bg-mtn-black group transition-all duration-300"
              >
                <div className="w-14 h-14 bg-mtn-yellow rounded-2xl flex items-center justify-center flex-shrink-0 mr-5 group-hover:scale-110 transition-transform">
                  <award.icon className="text-mtn-black" size={26} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-mtn-black group-hover:text-mtn-yellow mb-2 transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-300 transition-colors">
                    {award.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16 md:py-24 bg-mtn-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              Our <span className="text-mtn-yellow">Leadership</span>
            </h2>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
              Guided by industry experts passionate about raising standards.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-mtn-dark rounded-2xl p-6 text-center hover:bg-mtn-yellow group transition-all duration-300"
              >
                <div className="w-20 h-20 bg-mtn-yellow group-hover:bg-mtn-black rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                  <span className="text-2xl font-black text-mtn-black group-hover:text-mtn-yellow transition-colors">
                    {member.initial}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-mtn-black mb-1 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-mtn-black/70 transition-colors">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
