import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BaseCrudService } from '@/integrations';
import { Services } from '@/entities';
import { Image } from '@/components/ui/image';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { CheckCircle, XCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  const [services, setServices] = useState<Services[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const result = await BaseCrudService.getAll<Services>('services');
      setServices(result.items);
    } catch (error) {
      console.error('Error loading services:', error);
    } finally {
      setIsLoading(false);
    }
  };

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
            Our Services
          </h1>
          <p className="font-paragraph text-lg lg:text-xl text-muted-grey leading-relaxed">
            Comprehensive IT staffing solutions designed to meet your unique business needs 
            with precision, flexibility, and excellence.
          </p>
        </motion.div>
      </section>

      {/* Services List */}
      <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-20 pb-24">
        <div className="min-h-[600px]">
          {isLoading ? null : services.length > 0 ? (
            <div className="space-y-12">
              {services.map((service, index) => (
                <motion.div
                  key={service._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-secondary rounded-lg border border-muted-grey/20 overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Image Section */}
                    {service.serviceImage && (
                      <div className="lg:col-span-1">
                        <Image
                          src={service.serviceImage}
                          alt={service.serviceName || 'Service'}
                          width={400}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    {/* Content Section */}
                    <div className={`p-8 lg:p-10 ${service.serviceImage ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
                      <h2 className="font-heading text-3xl lg:text-4xl text-soft-white mb-4">
                        {service.serviceName}
                      </h2>
                      
                      {service.shortDescription && (
                        <p className="font-paragraph text-lg text-accent-gold mb-6">
                          {service.shortDescription}
                        </p>
                      )}

                      {service.detailedDescription && (
                        <p className="font-paragraph text-base text-muted-grey leading-relaxed mb-6">
                          {service.detailedDescription}
                        </p>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        {service.deliveryModel && (
                          <div>
                            <h3 className="font-heading text-xl text-soft-white mb-3">
                              Delivery Model
                            </h3>
                            <p className="font-paragraph text-base text-muted-grey">
                              {service.deliveryModel}
                            </p>
                          </div>
                        )}

                        <div>
                          <h3 className="font-heading text-xl text-soft-white mb-3">
                            Bench Resource Support
                          </h3>
                          <div className="flex items-center gap-2">
                            {service.benchResourceSupport ? (
                              <>
                                <CheckCircle className="w-5 h-5 text-accent-gold" />
                                <span className="font-paragraph text-base text-muted-grey">
                                  Available
                                </span>
                              </>
                            ) : (
                              <>
                                <XCircle className="w-5 h-5 text-muted-grey" />
                                <span className="font-paragraph text-base text-muted-grey">
                                  Not Available
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      {service.customizationDetails && (
                        <div className="mt-6 p-6 bg-deep-navy rounded-lg border border-muted-grey/20">
                          <h3 className="font-heading text-xl text-soft-white mb-3">
                            Customization Options
                          </h3>
                          <p className="font-paragraph text-base text-muted-grey leading-relaxed">
                            {service.customizationDetails}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-paragraph text-lg text-muted-grey">
                No services available at the moment.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
