'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Particle {
  x: number
  y: number
  id: number
  size: number
  color: string
  initialX: number
  initialY: number
}

const Background = () => {
  const [particles, setParticles] = useState<Particle[]>([])
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>(0)

  useEffect(() => {
    // Initialize particles
    const particleCount = 120
    const colors = ['#D72638', '#555555', '#F8F8F8']
    
    const newParticles = Array.from({ length: particleCount }, (_, i) => {
      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight
      return {
        x,
        y,
        initialX: x,
        initialY: y,
        id: i,
        size: Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)]
      }
    })
    setParticles(newParticles)

    // Handle window resize
    const handleResize = () => {
      const canvas = canvasRef.current
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!particles.length) return

    const drawLines = () => {
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle1) => {
        particles.forEach((particle2) => {
          const dx = particle1.x - particle2.x
          const dy = particle1.y - particle2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150 && distance > 0) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(215, 38, 56, ${0.15 * (1 - distance / 150)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particle1.x, particle1.y)
            ctx.lineTo(particle2.x, particle2.y)
            ctx.stroke()
          }
        })
      })

      animationFrameRef.current = requestAnimationFrame(drawLines)
    }

    drawLines()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [particles])

  return (
    <div className="fixed inset-0 z-[-1] bg-black overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            initial={{ x: particle.initialX, y: particle.initialY }}
            animate={{
              x: [
                particle.initialX,
                particle.initialX + Math.random() * 150 - 75,
                particle.initialX + Math.random() * 150 - 75,
                particle.initialX
              ],
              y: [
                particle.initialY,
                particle.initialY + Math.random() * 150 - 75,
                particle.initialY + Math.random() * 150 - 75,
                particle.initialY
              ],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            style={{
              width: particle.size,
              height: particle.size,
              background: particle.color,
              boxShadow: `0 0 ${particle.size}px ${particle.color}`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

export default Background 