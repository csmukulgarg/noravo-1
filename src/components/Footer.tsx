import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/images/logos/noravo-full.png"
              alt="Noravo"
              width={500}
              height={200}
              className="h-40 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-gray-400 max-w-md">
              Noravo delivers everyday comfort through premium leather shoes and luxury towels. 
              Each product combines quality craftsmanship with exceptional materials for your daily comfort.
            </p>
            <div className="mt-4">
              <a 
                href="mailto:support@noravo.co" 
                className="text-sm text-teal-400 hover:text-teal-300 transition-colors"
              >
                support@noravo.co
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm hover:text-white transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/products?type=Shoes" className="text-sm hover:text-white transition-colors">
                  Leather Shoes
                </Link>
              </li>
              <li>
                <Link href="/products?type=Towels" className="text-sm hover:text-white transition-colors">
                  Luxury Towels
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="mailto:support@noravo.co" className="text-sm hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Noravo. All rights reserved. Everyday Comfort.</p>
          <p className="mt-2">
            Premium shoes and luxury towels sold exclusively through our Amazon storefront.
          </p>
        </div>
      </div>
    </footer>
  );
}