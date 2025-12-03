"use client"

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/products";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 mb-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {product.category}
          </div>
        </div>
      </Link>
      
      <div className="space-y-2">
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-2xl font-bold text-gray-900">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex gap-2 pt-2">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 text-center bg-gray-900 text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
          >
            View Details
          </Link>
          <a
            href={product.amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#FF9900] text-gray-900 px-4 py-3 rounded-full font-semibold hover:bg-[#f59e0b] transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
