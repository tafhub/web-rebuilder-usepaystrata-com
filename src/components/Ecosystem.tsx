import { motion } from 'framer-motion';
import { Users, TrendingUp, Globe, ShieldCheck } from 'lucide-react';

const ecosystemStats = [
  { label: 'Active Users', value: '10K+', icon: Users },
  { label: 'Transactions', value: '500K+', icon: TrendingUp },
  { label: 'Countries', value: '50+', icon: Globe },
  { label: 'Uptime', value: '99.9%', icon: ShieldCheck },
];

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-20 md:py-32 bg-primary/5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Paystrata Ecosystem</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Join a growing community of users enjoying seamless crypto payments for everyday utilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {ecosystemStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-card border"
            >
              <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-4">
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-foreground/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Experience the next generation of utility payments</h3>
              <p className="text-foreground/80 mb-6">
                Paystrata leverages the power of Starknet to offer seamless, low-fee, and instant utility payments. No banks, no delays, just fast and decentralized transactions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Built on Starknet with STARK proofs</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Transactions complete in under 2 seconds</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Only 0.1% transaction fees</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Available 24/7 worldwide</span>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="p-6 rounded-xl bg-background border">
                <p className="italic text-foreground/80">
                  "Paystrata has revolutionized how I pay my bills. Fast, secure, and the low fees make all the difference. The future of payments is here!"
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20" />
                  <div>
                    <p className="font-semibold">Alex Johnson</p>
                    <p className="text-sm text-foreground/60">Early User</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}