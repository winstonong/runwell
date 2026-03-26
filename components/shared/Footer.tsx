import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <span className="font-heading text-xl font-bold text-white">Runwell</span>
            <p className="mt-3 text-sm leading-relaxed">
              Trained virtual assistants from $4–$8/hr that help you reclaim your time and scale your business.
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium text-sm mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Admin Support</li>
              <li>Email Management</li>
              <li>Scheduling</li>
              <li>Data Entry</li>
              <li>Research</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/v1" className="hover:text-white transition-colors">For Founders</Link></li>
              <li><Link href="/v2" className="hover:text-white transition-colors">Flexible Plans</Link></li>
              <li><Link href="/v3" className="hover:text-white transition-colors">Our Quality Standard</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium text-sm mb-4">Get Started</h4>
            <p className="text-sm leading-relaxed mb-4">
              Book a free consultation and see how Runwell can help.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 bg-white text-gray-900 text-sm font-medium rounded-full hover:bg-gray-100 transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          &copy; {new Date().getFullYear()} Runwell. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
