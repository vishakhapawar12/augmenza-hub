import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Globe, Linkedin, Instagram } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91-9220758400'],
      link: 'tel:+919220758400'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        { label: 'General Inquiries', email: 'info@augmenzatech.com' },
        { label: 'Vendor Empanelment', email: 'Sales@augmenzatech.com' },
        { label: 'HR Department', email: 'hr@augmenzatech.com' }
      ]
    },
    {
      icon: Globe,
      title: 'Website',
      details: ['https://Augmenzatech.com'],
      link: 'https://Augmenzatech.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: [
        'HB 43, Abhiruchi Parisar',
        'Old Subhash Nagar Colony',
        'Old Subhash Nagar',
        'Bhopal, Madhya Pradesh 462023'
      ]
    }
  ];

  const socialMedia = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/110598904/admin/page-posts/published/',
      color: 'hover:bg-[#0077B5]'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/augmenzatech/',
      color: 'hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]'
    }
  ];

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
            Contact Us
          </h1>
          <p className="font-paragraph text-lg lg:text-xl text-muted-grey leading-relaxed">
            Get in touch with Augmenza Tech. We're here to answer your questions 
            and discuss how we can support your IT staffing needs.
          </p>
        </motion.div>
      </section>

      {/* Contact Information */}
      <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-secondary p-8 rounded-lg border border-muted-grey/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-accent-gold" />
                </div>
                <div className="flex-1">
                  <h2 className="font-heading text-2xl text-soft-white mb-4">
                    {item.title}
                  </h2>
                  {item.title === 'Email Addresses' ? (
                    <div className="space-y-3">
                      {(item.details as Array<{ label: string; email: string }>).map((detail, idx) => (
                        <div key={idx}>
                          <p className="font-paragraph text-sm text-muted-grey mb-1">
                            {detail.label}
                          </p>
                          <a
                            href={`mailto:${detail.email}`}
                            className="font-paragraph text-base text-accent-gold hover:underline"
                          >
                            {detail.email}
                          </a>
                        </div>
                      ))}
                    </div>
                  ) : item.link ? (
                    <a
                      href={item.link}
                      target={item.title === 'Website' ? '_blank' : undefined}
                      rel={item.title === 'Website' ? 'noopener noreferrer' : undefined}
                      className="font-paragraph text-base text-accent-gold hover:underline"
                    >
                      {item.details[0]}
                    </a>
                  ) : (
                    <div className="space-y-1">
                      {(item.details as string[]).map((detail, idx) => (
                        <p key={idx} className="font-paragraph text-base text-muted-grey">
                          {detail}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Media Section */}
      <section className="w-full bg-secondary py-24">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-heading text-4xl lg:text-5xl text-soft-white mb-6">
              Connect With Us
            </h2>
            <p className="font-paragraph text-lg text-muted-grey mb-12 max-w-2xl mx-auto">
              Follow us on social media to stay updated with the latest news, 
              opportunities, and insights from Augmenza Tech.
            </p>
            
            <div className="flex justify-center gap-6">
              {socialMedia.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`w-16 h-16 rounded-full border-2 border-accent-gold flex items-center justify-center text-accent-gold transition-all ${social.color} hover:text-white hover:border-transparent`}
                  aria-label={social.name}
                >
                  <social.icon className="w-7 h-7" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-20 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-secondary p-12 rounded-lg border border-muted-grey/20 text-center"
        >
          <h2 className="font-heading text-3xl lg:text-4xl text-soft-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="font-paragraph text-lg text-muted-grey mb-8 max-w-2xl mx-auto">
            Whether you're looking for IT talent or exploring career opportunities, 
            we're here to help. Reach out today.
          </p>
          <a
            href="mailto:info@augmenzatech.com"
            className="inline-block bg-accent-gold text-white font-paragraph font-semibold px-10 py-4 rounded transition-all hover:opacity-90"
          >
            Send Us an Email
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
