import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from './ui/button';

export default function CallToAction() {
  return (
    <section id="cta" className="py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground"
        >
          <Zap className="h-12 w-12 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of users making seamless crypto payments for everyday utilities. Experience next-gen payments today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2">
              Launch App
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              View Documentation
            </Button>
          </div>
          <p className="mt-8 text-sm text-primary-foreground/70">
            No registration required • Start in under 2 minutes • 24/7 support
          </p>
        </motion.div>
      </div>
    </section>
  );
}