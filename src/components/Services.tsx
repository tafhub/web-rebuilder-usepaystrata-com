import { motion } from 'framer-motion';
import { Smartphone, Wifi, Tv, Zap, Building, Plane } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'Airtime Top-up',
    description: 'Top up any Nigerian mobile network instantly. Join thousands of users making seamless crypto payments.',
  },
  {
    icon: Wifi,
    title: 'Data Bundles',
    description: 'Purchase data bundles for all networks. Fast, low-cost, and secure transactions on Starknet.',
  },
  {
    icon: Tv,
    title: 'Cable TV',
    description: 'Pay DStv, GOtv, and Startimes subscriptions. No bank hours, instant activation.',
  },
  {
    icon: Zap,
    title: 'Electricity',
    description: 'Buy prepaid and postpaid electricity tokens. Experience next-gen payments today!',
  },
  {
    icon: Building,
    title: 'Hotel Bookings',
    description: 'Book hotels instantly with decentralized transactions. Fast, secure, and reliable.',
  },
  {
    icon: Plane,
    title: 'Flight Tickets',
    description: 'Book flights instantly with blockchain technology. Experience seamless payments.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Buy airtime and mobile data, book hotels and flights instantly with decentralized transactions on Starknet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />
              <div className="relative p-8 rounded-2xl bg-card border">
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-primary/10 text-primary mb-6">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}