import { Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-secondary border-t border-muted-grey/20">
      <div className="max-w-[100rem] mx-auto px-8 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="font-heading text-2xl text-soft-white mb-4">
              Augmenza Tech
            </h3>
            <p className="font-paragraph text-base text-muted-grey leading-relaxed">
              Your trusted IT staffing and recruitment partner, delivering excellence in talent solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl text-soft-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Contact Us', path: '/contact' }
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="font-paragraph text-base text-muted-grey hover:text-accent-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-xl text-soft-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent-gold mt-1 flex-shrink-0" />
                <a
                  href="tel:+919220758400"
                  className="font-paragraph text-base text-muted-grey hover:text-accent-gold transition-colors"
                >
                  +91-9220758400
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent-gold mt-1 flex-shrink-0" />
                <a
                  href="mailto:info@augmenzatech.com"
                  className="font-paragraph text-base text-muted-grey hover:text-accent-gold transition-colors"
                >
                  info@augmenzatech.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-gold mt-1 flex-shrink-0" />
                <span className="font-paragraph text-base text-muted-grey">
                  Bhopal, Madhya Pradesh
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-heading text-xl text-soft-white mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/110598904/admin/page-posts/published/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-accent-gold flex items-center justify-center text-accent-gold hover:bg-accent-gold hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/augmenzatech/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-accent-gold flex items-center justify-center text-accent-gold hover:bg-accent-gold hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-muted-grey/20 text-center">
          <p className="font-paragraph text-sm text-muted-grey">
            © {new Date().getFullYear()} Augmenza Tech Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
