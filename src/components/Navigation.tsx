"use client"

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-36">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logos/noravo-with-icon.png"
              alt="Noravo"
              width={450}
              height={149}
              className="h-32 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Shop
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Collections
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              About
            </Link>
          </div>

          {/* Shopping Bag */}
          <div className="hidden md:flex items-center">
            <Link href="/products" className="text-gray-700 hover:text-gray-900 transition-colors">
              <ShoppingBag className="w-6 h-6" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-gray-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-4">
            <Link 
              href="/" 
              className="block text-gray-700 hover:text-gray-900 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/products" 
              className="block text-gray-700 hover:text-gray-900 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link 
              href="/products" 
              className="block text-gray-700 hover:text-gray-900 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Collections
            </Link>
            <Link 
              href="/products" 
              className="block text-gray-700 hover:text-gray-900 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}