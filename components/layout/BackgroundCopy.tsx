'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BackgroundCopy = () => {
  const [particles, setParticles] = useState<{ x: number; y: number; id: number; size: number }[]>([])

  useEffect(() => {
    // Increased particle count and added varying sizes
    const particleCount = 100
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      id: i,
      size: Math.random() * 2 + 1, // Particles between 1-3px
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 z-[-1] bg-black overflow-hidden">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              background: `rgba(255, 255, 255, ${0.1 + Math.random() * 0.2})` // Varying opacity
            }}
            initial={{ x: particle.x, y: particle.y }}
            animate={{
              x: [
                particle.x,
                particle.x + Math.random() * 200 - 100,
                particle.x + Math.random() * 200 - 100,
                particle.x
              ],
              y: [
                particle.y,
                particle.y + Math.random() * 200 - 100,
                particle.y + Math.random() * 200 - 100,
                particle.y
              ],
            }}
            transition={{
              duration: 8 + Math.random() * 4, // Random duration between 8-12s
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

export default BackgroundCopy 