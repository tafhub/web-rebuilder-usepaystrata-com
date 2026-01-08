import { motion } from 'framer-motion';
import { Zap, Shield, CloudLightning, Globe, Lock, Wallet } from 'lucide-react';

const features = [
  {
    icon: CloudLightning,
    title: 'Lightning Fast',
    description: 'Transactions complete in under 2 seconds. No waiting, no delays, just instant payments.',
  },
  {
    icon: Wallet,
    title: 'Ultra Low Fees',
    description: 'Pay only 0.1% transaction fees. Keep more of your money where it belongs, with you.',
  },
  {
    icon: Shield,
    title: 'Fully Secure',
    description: 'Built on Starknet with STARK proofs. Your transactions are secured by mathematics.',
  },
  {
    icon: Globe,
    title: 'Global Access',
    description: 'No bank hours, no holidays. Pay your bills anytime, anywhere in the world.',
  },
  {
    icon: Zap,
    title: 'Decentralized',
    description: 'Experience the future of payments with Starknet\'s lightning-fast transactions.',
  },
  {
    icon: Lock,
    title: 'Blockchain Security',
    description: 'Enjoy hassle-free payments with blockchain security. Say goodbye to traditional banking delays.',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for the Future</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            The future of utility payments, hotel bookings, and flights. Fast, secure, and decentralized payments powered by Starknet blockchain technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card border hover:border-primary/30 transition-colors group"
            >
              <div className="inline-flex items-center justify-center p-3 rounded-lg bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}