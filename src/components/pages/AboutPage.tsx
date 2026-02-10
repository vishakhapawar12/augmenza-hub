import { motion } from 'framer-motion';
import { Target, Eye, Award, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-deep-navy">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-20 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-heading text-5xl lg:text-7xl text-soft-white mb-6">
            About Augmenza Tech
          </h1>
          <p className="font-paragraph text-lg lg:text-xl text-muted-grey leading-relaxed">
            A premier IT staffing and recruitment partner committed to connecting businesses 
            with exceptional talent and driving innovation through strategic workforce solutions.
          </p>
        </motion.div>
      </section>

      {/* Company Overview */}
      <section className="w-full bg-secondary py-24">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl lg:text-5xl text-soft-white mb-6">
                Who We Are
              </h2>
              <p className="font-paragraph text-base text-muted-grey leading-relaxed mb-4">
                Augmenza Tech Pvt. Ltd. is a trusted name in IT staffing and recruitment, 
                specializing in delivering high-quality talent solutions tailored to meet 
                the unique needs of businesses across industries.
              </p>
              <p className="font-paragraph text-base text-muted-grey leading-relaxed mb-4">
                With a deep understanding of the technology landscape and a commitment to 
                excellence, we bridge the gap between organizations seeking skilled professionals 
                and talented individuals looking for meaningful career opportunities.
              </p>
              <p className="font-paragraph text-base text-muted-grey leading-relaxed">
                Our approach combines industry expertise, rigorous vetting processes, and 
                personalized service to ensure successful placements that drive business growth 
                and professional development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Award, label: 'Quality Assured', description: 'Vetted professionals' },
                { icon: TrendingUp, label: 'Growth Focused', description: 'Scalable solutions' },
                { icon: Target, label: 'Client Centric', description: 'Tailored approach' },
                { icon: Eye, label: 'Transparent', description: 'Clear communication' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-deep-navy p-6 rounded-lg border border-muted-grey/20"
                >
                  <item.icon className="w-10 h-10 text-accent-gold mb-4" />
                  <h3 className="font-heading text-xl text-soft-white mb-2">
                    {item.label}
                  </h3>
                  <p className="font-paragraph text-sm text-muted-grey">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-20 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-secondary p-10 rounded-lg border border-muted-grey/20"
          >
            <Target className="w-12 h-12 text-accent-gold mb-6" />
            <h2 className="font-heading text-3xl text-soft-white mb-4">
              Our Mission
            </h2>
            <p className="font-paragraph text-base text-muted-grey leading-relaxed">
              To empower businesses with exceptional IT talent through strategic staffing 
              solutions, fostering innovation, growth, and long-term success. We are committed 
              to delivering reliable, high-quality recruitment services that exceed expectations 
              and create lasting partnerships.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-secondary p-10 rounded-lg border border-muted-grey/20"
          >
            <Eye className="w-12 h-12 text-accent-gold mb-6" />
            <h2 className="font-heading text-3xl text-soft-white mb-4">
              Our Vision
            </h2>
            <p className="font-paragraph text-base text-muted-grey leading-relaxed">
              To be the most trusted and preferred IT staffing partner globally, recognized 
              for our commitment to excellence, integrity, and innovation. We envision a future 
              where every organization has access to the right talent at the right time, enabling 
              them to achieve their strategic objectives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full bg-secondary py-24">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl lg:text-5xl text-soft-white mb-4">
              Our Core Values
            </h2>
            <p className="font-paragraph text-lg text-muted-grey max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We strive for the highest standards in every placement and partnership'
              },
              {
                title: 'Integrity',
                description: 'We operate with transparency, honesty, and ethical practices'
              },
              {
                title: 'Innovation',
                description: 'We embrace new approaches to deliver cutting-edge staffing solutions'
              },
              {
                title: 'Partnership',
                description: 'We build lasting relationships based on trust and mutual success'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-deep-navy p-8 rounded-lg border border-muted-grey/20"
              >
                <h3 className="font-heading text-2xl text-soft-white mb-4">
                  {value.title}
                </h3>
                <p className="font-paragraph text-base text-muted-grey leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
