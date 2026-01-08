import { motion } from 'framer-motion';
import { Zap, ArrowRight, Shield, Clock, DollarSign } from 'lucide-react';
import { Button } from './ui/button';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
            <Shield className="h-4 w-4" />
            Built on Starknet with STARK proofs
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Pay Bills with{' '}
            <span className="text-primary">Crypto</span> Instantly
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl text-foreground/80 mb-10 max-w-3xl mx-auto leading-relaxed">
            Experience seamless utility payments on Starknet. Buy airtime, data, pay for cable TV and electricity, book hotels and flights, all with lightning fast blockchain transactions and minimal fees.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="gap-2">
              Get Started Now
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 justify-center p-4 rounded-xl bg-card border">
              <Clock className="h-5 w-5 text-primary" />
              <div className="text-left">
                <p className="font-semibold">Under 2 seconds</p>
                <p className="text-sm text-muted-foreground">Transaction speed</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 justify-center p-4 rounded-xl bg-card border">
              <DollarSign className="h-5 w-5 text-primary" />
              <div className="text-left">
                <p className="font-semibold">0.1% fees</p>
                <p className="text-sm text-muted-foreground">Ultra low cost</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 justify-center p-4 rounded-xl bg-card border">
              <Zap className="h-5 w-5 text-primary" />
              <div className="text-left">
                <p className="font-semibold">24/7 Service</p>
                <p className="text-sm text-muted-foreground">No bank hours</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}