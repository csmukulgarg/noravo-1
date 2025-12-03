"use client"

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, productTypes, getProductsByType, getCategoriesByType } from "@/lib/products";
import { motion } from "framer-motion";

export default function ProductsPage() {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const availableCategories = getCategoriesByType(selectedType);
  
  const filteredProducts = products.filter(product => {
    const typeMatch = selectedType === "All" || product.productType === selectedType;
    const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
    return typeMatch && categoryMatch;
  });

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    setSelectedCategory("All");
  };

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen pt-20">
        {/* Header */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Our Collection
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover our carefully curated selection of premium leather shoes and luxury towels, 
                each designed for everyday comfort and timeless quality.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Product Type Filter */}
        <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-wrap gap-3 justify-center border-b border-gray-100 pb-4">
              {productTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => handleTypeChange(type)}
                  className={`px-8 py-3 rounded-full font-semibold transition-all text-lg ${
                    selectedType === type
                      ? "bg-gray-900 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center pt-4">
              {availableCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full font-medium transition-all text-sm ${
                    selectedCategory === category
                      ? "bg-teal-600 text-white"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600">
                  No products found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}