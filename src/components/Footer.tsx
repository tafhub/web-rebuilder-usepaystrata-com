import { Zap, Twitter, Github, Mail, Globe } from 'lucide-react';

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#' },
    { label: 'API', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
  ],
  Legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Security', href: '#' },
    { label: 'Cookies', href: '#' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Help Center', href: '#' },
    { label: 'Community', href: '#' },
    { label: 'Contact', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Paystrata</span>
            </div>
            <p className="text-foreground/70 mb-6 max-w-md">
              Experience seamless utility payments on Starknet. Buy airtime, data, pay for cable TV and electricity, book hotels and flights, all with lightning fast blockchain transactions.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Twitter" className="p-2 rounded-lg bg-card border hover:bg-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="GitHub" className="p-2 rounded-lg bg-card border hover:bg-accent transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Email" className="p-2 rounded-lg bg-card border hover:bg-accent transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Website" className="p-2 rounded-lg bg-card border hover:bg-accent transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-foreground/60 text-sm">
          <p>© 2025 Paystrata. All rights reserved.</p>
          <p className="mt-2">Built on Starknet • Secured by STARK proofs • Decentralized infrastructure</p>
        </div>
      </div>
    </footer>
  );
}