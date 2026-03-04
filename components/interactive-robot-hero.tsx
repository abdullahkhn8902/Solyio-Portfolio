'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface MousePosition {
  x: number
  y: number
}

interface RobotRotation {
  rotateX: number
  rotateY: number
  rotateZ: number
}

interface EyePosition {
  leftX: number
  leftY: number
  rightX: number
  rightY: number
}

export function InteractiveRobotHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const robotRef = useRef<HTMLDivElement>(null)
  const eyeMatrixRef = useRef<SVGSVGElement>(null)
  
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const [robotRotation, setRobotRotation] = useState<RobotRotation>({ rotateX: 0, rotateY: 0, rotateZ: 0 })
  const [eyePosition, setEyePosition] = useState<EyePosition>({ leftX: 0, leftY: 0, rightX: 0, rightY: 0 })
  const [isBlinking, setIsBlinking] = useState(false)
  const [breathing, setBreathing] = useState(0)
  const blinkIntervalRef = useRef<NodeJS.Timeout | null>(null)

  // Handle mouse movement for eye tracking and body tilt
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current
      if (!container) return

      const rect = container.getBoundingClientRect()
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      // Store mouse position
      setMousePosition({
        x: mouseX - centerX,
        y: mouseY - centerY,
      })

      // Calculate rotation for body (parallax effect)
      const rotationStrengthX = (mouseY - centerY) / rect.height * 8
      const rotationStrengthY = (mouseX - centerX) / rect.width * 8

      setRobotRotation({
        rotateX: rotationStrengthX,
        rotateY: rotationStrengthY,
        rotateZ: 0,
      })

      // Calculate eye movement within the visor
      const eyeTrackingStrength = 6
      const eyeOffsetX = (mouseX - centerX) / rect.width * eyeTrackingStrength
      const eyeOffsetY = (mouseY - centerY) / rect.height * eyeTrackingStrength

      setEyePosition({
        leftX: eyeOffsetX,
        leftY: eyeOffsetY,
        rightX: eyeOffsetX,
        rightY: eyeOffsetY,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Breathing animation
  useEffect(() => {
    let animationId: number
    let time = 0

    const animate = () => {
      time += 0.02
      const breatheAmount = Math.sin(time) * 2
      setBreathing(breatheAmount)
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  // Blinking animation
  useEffect(() => {
    const blink = () => {
      setIsBlinking(true)
      setTimeout(() => setIsBlinking(false), 150)
    }

    blinkIntervalRef.current = setInterval(() => {
      if (Math.random() > 0.7) {
        blink()
      }
    }, 3000)

    return () => {
      if (blinkIntervalRef.current) {
        clearInterval(blinkIntervalRef.current)
      }
    }
  }, [])

  // SVG eye matrix component - creates dotted pattern eyes
  const EyeMatrix = ({ offsetX = 0, offsetY = 0 }: { offsetX?: number; offsetY?: number }) => {
    const dotSize = 3
    const gaps = 5
    const cols = 8
    const rows = 6
    const dots = []

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * gaps + 4 + offsetX
        const y = row * gaps + 4 + offsetY
        dots.push(
          <circle
            key={`dot-${row}-${col}`}
            cx={x}
            cy={y}
            r={dotSize}
            fill="#ff4757"
            opacity={isBlinking ? 0.2 : 1}
            style={{
              transition: 'opacity 0.1s ease-out',
              filter: `drop-shadow(0 0 3px #ff4757)`,
            }}
          />
        )
      }
    }

    return dots
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100"
    >
      {/* Subtle background gradient overlay */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-300/10 rounded-full blur-3xl" />
      </div>

      {/* Robot Container with 3D perspective */}
      <div
        className="relative"
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Main Robot Body */}
        <div
          ref={robotRef}
          className="relative w-64 h-96 transition-transform duration-150 ease-out"
          style={{
            transform: `
              translateY(${breathing}px)
              rotateX(${robotRotation.rotateX}deg)
              rotateY(${robotRotation.rotateY}deg)
              rotateZ(${robotRotation.rotateZ}deg)
            `,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Robot Image */}
          <div className="relative w-full h-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_1yvhsn1yvhsn1yvh-AiitDCFpdZ3ZhNbsg092JxnezyFBmO.png"
              alt="Interactive AI Robot"
              fill
              className="object-contain drop-shadow-2xl"
              priority
              draggable={false}
            />
          </div>

          {/* Eyes - Overlaid SVG for eye tracking */}
          <div
            className="absolute top-20 left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              width: '200px',
              height: '120px',
            }}
          >
            {/* Left Eye Container */}
            <svg
              ref={eyeMatrixRef}
              className="absolute left-0 top-0"
              width="80"
              height="60"
              viewBox="0 0 80 60"
              style={{
                overflow: 'visible',
              }}
            >
              <g
                style={{
                  transform: `translate(${eyePosition.leftX}px, ${eyePosition.leftY}px)`,
                  transformOrigin: 'center',
                  transition: 'transform 0.05s ease-out',
                  transformBox: 'fill-box',
                }}
              >
                <EyeMatrix offsetX={8} offsetY={8} />
              </g>
            </svg>

            {/* Right Eye Container */}
            <svg
              className="absolute right-0 top-0"
              width="80"
              height="60"
              viewBox="0 0 80 60"
              style={{
                overflow: 'visible',
              }}
            >
              <g
                style={{
                  transform: `translate(${eyePosition.rightX}px, ${eyePosition.rightY}px)`,
                  transformOrigin: 'center',
                  transition: 'transform 0.05s ease-out',
                  transformBox: 'fill-box',
                }}
              >
                <EyeMatrix offsetX={8} offsetY={8} />
              </g>
            </svg>
          </div>

          {/* Floating shadow */}
          <div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/10 rounded-full blur-xl opacity-60"
            style={{
              transform: `translateY(${breathing * 0.5}px) translateX(-50%)`,
            }}
          />
        </div>
      </div>

      {/* Floating text below robot */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-sm text-slate-500 pointer-events-none">
        <p className="text-xs">Move your mouse to interact</p>
      </div>
    </div>
  )
}
