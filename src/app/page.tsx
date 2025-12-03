import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero3D from "@/components/Hero3D";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  // Get 2 shoes and 2 towels for featured section
  const shoes = products.filter(p => p.category === "Shoes").slice(0, 2);
  const towels = products.filter(p => p.category === "Towels").slice(0, 2);
  const featuredProducts = [...shoes, ...towels];

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section with 3D Animation */}
        <Hero3D />

        {/* Category Highlights */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Two Categories, One Promise
              </h2>
              <p className="text-xl text-gray-600">
                Premium leather shoes and luxury towels for everyday comfort
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-teal-50 to-teal-100 p-8 hover:shadow-2xl transition-all">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Premium Leather Shoes
                  </h3>
                  <p className="text-gray-700 mb-6 text-lg">
                    Full-grain leather crafted for timeless style and all-day comfort. From casual to formal, step out in confidence.
                  </p>
                  <Link 
                    href="/products?type=Shoes"
                    className="inline-flex items-center gap-2 text-teal-700 font-semibold hover:gap-4 transition-all group"
                  >
                    Browse Shoes
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 hover:shadow-2xl transition-all">
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Luxury Towels
                  </h3>
                  <p className="text-gray-700 mb-6 text-lg">
                    Premium cotton towels designed for superior absorbency and spa-like softness. Transform your daily routine.
                  </p>
                  <Link 
                    href="/products?type=Towels"
                    className="inline-flex items-center gap-2 text-cyan-700 font-semibold hover:gap-4 transition-all group"
                  >
                    Browse Towels
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Featured Collection
                </h2>
                <p className="text-xl text-gray-600">
                  Handpicked favorites from both categories
                </p>
              </div>
              <Link 
                href="/products"
                className="hidden md:inline-flex items-center gap-2 text-gray-900 font-semibold hover:gap-4 transition-all group"
              >
                View All
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            <div className="text-center mt-12 md:hidden">
              <Link 
                href="/products"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                View All Products
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Noravo */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Noravo?
              </h2>
              <p className="text-xl text-gray-600">
                Excellence in every detail, comfort in every product
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Premium Materials
                </h3>
                <p className="text-gray-600">
                  Finest full-grain leather for shoes and ultra-soft premium cotton for towels, all carefully sourced and expertly crafted
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  All-Day Comfort
                </h3>
                <p className="text-gray-600">
                  Ergonomic shoe design and superior towel absorbency for maximum comfort from morning to night
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Exceptional Value
                </h3>
                <p className="text-gray-600">
                  Premium quality at accessible prices, available exclusively through Amazon
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience Everyday Comfort?
            </h2>
            <p className="text-xl text-teal-100 mb-10">
              Browse our full collection of premium leather shoes and luxury towels on Amazon
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products?type=Shoes"
                className="inline-flex items-center justify-center gap-3 bg-white text-teal-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-teal-50 transition-all hover:scale-105"
              >
                Shop Shoes
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/products?type=Towels"
                className="inline-flex items-center justify-center gap-3 bg-cyan-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-cyan-700 transition-all hover:scale-105"
              >
                Shop Towels
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}