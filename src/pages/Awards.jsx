import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  HiOutlineTrophy, 
  HiOutlineStar, 
  HiOutlineLightningBolt,
  HiOutlineUserGroup,
  HiOutlineBriefcase,
  HiOutlineHeart,
  HiArrowRight,
  HiOutlineCalendar
} from 'react-icons/hi'

const Awards = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.1, duration: 0.6 }
    })
  }

  const categories = [
    { 
      icon: HiOutlineTrophy, 
      title: 'Excellence in Leadership', 
      desc: 'Recognising visionary leaders who inspire their teams to achieve extraordinary results.',
      deadline: 'December 31, 2024'
    },
    { 
      icon: HiOutlineLightningBolt, 
      title: 'Innovation Award', 
      desc: 'Celebrating breakthrough ideas and innovative solutions that drive business forward.',
      deadline: 'January 15, 2025'
    },
    { 
      icon: HiOutlineBriefcase, 
      title: 'Small Business Excellence', 
      desc: 'Honouring outstanding small businesses demonstrating remarkable growth and quality.',
      deadline: 'December 31, 2024'
    },
    { 
      icon: HiOutlineUserGroup, 
      title: 'Team Excellence', 
      desc: 'Acknowledging high-performing teams achieving collective success through collaboration.',
      deadline: 'February 1, 2025'
    },
    { 
      icon: HiOutlineHeart, 
      title: 'Community Impact', 
      desc: 'Recognising organisations making meaningful contributions to community wellbeing.',
      deadline: 'January 30, 2025'
    },
    { 
      icon: HiOutlineStar, 
      title: 'Rising Star', 
      desc: 'Celebrating emerging talent and new businesses with outstanding potential.',
      deadline: 'December 15, 2024'
    },
  ]

  return (
    <div className="pt-16 md:pt-20">
      {/* HERO */}
      <section className="bg-mtn-yellow py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <div className="inline-flex items-center bg-mtn-black text-mtn-yellow rounded-full px-4 py-1 text-xs sm:text-sm font-bold mb-6">
              <HiOutlineCalendar className="mr-2" />
              Nominations Open
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-mtn-black mb-6 leading-tight">
              Excellence Awards
            </h1>
            <p className="text-mtn-black/80 text-base md:text-lg max-w-3xl mx-auto">
              Our comprehensive awards program recognises excellence at every level and 
              across all business sectors within our district.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AWARDS GRID */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="group bg-mtn-gray rounded-3xl p-6 md:p-8 hover:bg-mtn-black transition-all duration-500 flex flex-col"
              >
                <div className="w-16 h-16 bg-mtn-yellow rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <cat.icon className="text-mtn-black" size={30} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-mtn-black group-hover:text-mtn-yellow mb-3 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-300 mb-6 flex-grow transition-colors">
                  {cat.desc}
                </p>
                <div className="border-t border-gray-300 group-hover:border-mtn-yellow/30 pt-4 transition-colors">
                  <div className="text-xs text-gray-500 group-hover:text-gray-400 mb-1">
                    Deadline
                  </div>
                  <div className="text-sm font-bold text-mtn-black group-hover:text-mtn-yellow transition-colors">
                    {cat.deadline}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="mt-16 text-center"
          >
            <Link to="/nominate" className="btn-mtn inline-flex items-center text-base md:text-lg">
              Submit a Nomination
              <HiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Awards
