"use client"

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import * as THREE from "three";
import { useState, useEffect } from "react";

function AnimatedSphere({ color }: { color: string }) {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh scale={2.5}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          distort={0.3}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
}

function AnimatedTorus({ color }: { color: string }) {
  return (
    <Float speed={1.8} rotationIntensity={1.2} floatIntensity={2.5}>
      <mesh scale={2.2} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[1, 0.4, 24, 64]} />
        <MeshDistortMaterial
          color={color}
          distort={0.25}
          speed={1.8}
          roughness={0.2}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  const [currentShape, setCurrentShape] = useState(0);
  
  const shapes = [
    { 
      component: AnimatedSphere, 
      color: "#14b8a6", // Teal-500 - for shoes
      title: "Premium Leather Shoes",
      subtitle: "Timeless style meets uncompromising comfort"
    },
    { 
      component: AnimatedTorus, 
      color: "#06b6d4", // Cyan-500 - for towels
      title: "Luxury Towels",
      subtitle: "Superior softness and exceptional quality"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShape((prev) => (prev + 1) % shapes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const CurrentShapeComponent = shapes[currentShape].component;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-white to-cyan-50 overflow-hidden pt-20">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
          <directionalLight position={[-10, -10, -5]} intensity={1} color="#ffffff" />
          <pointLight position={[0, 5, 5]} intensity={1.2} color={shapes[currentShape].color} />
          <CurrentShapeComponent color={shapes[currentShape].color} />
          <OrbitControls 
            enableZoom={true} 
            enablePan={true} 
            autoRotate 
            autoRotateSpeed={0.5}
            minDistance={3}
            maxDistance={8}
          />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Everyday
            <span className="block mt-2 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Comfort
            </span>
          </motion.h1>

          <motion.p 
            key={`subtitle-${currentShape}`}
            className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto min-h-[4rem] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {shapes[currentShape].subtitle}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all hover:scale-105 shadow-lg shadow-teal-500/30"
            >
              Shop Collection
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 border-2 border-teal-600 text-teal-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-50 transition-all"
            >
              View on Amazon
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div>
              <p className="text-3xl font-bold text-teal-700">14+</p>
              <p className="text-sm text-gray-600 mt-1">Products</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-teal-700">100%</p>
              <p className="text-sm text-gray-600 mt-1">Premium Quality</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-teal-700">5★</p>
              <p className="text-sm text-gray-600 mt-1">Customer Rated</p>
            </div>
          </motion.div>

          {/* Product Type Indicators */}
          <motion.div
            className="flex justify-center gap-3 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {shapes.map((shape, index) => (
              <button
                key={index}
                onClick={() => setCurrentShape(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  currentShape === index 
                    ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg shadow-teal-500/30" 
                    : "bg-white text-gray-700 border border-gray-300 hover:border-teal-500"
                }`}
                aria-label={shape.title}
              >
                {index === 0 ? "Shoes" : "Towels"}
              </button>
            ))}
          </motion.div>
          
          <motion.p
            className="text-sm text-gray-500 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            💡 Drag to rotate • Scroll to zoom • Click to switch products
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-teal-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-teal-600 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}