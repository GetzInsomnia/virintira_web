'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPhoneAlt, FaLine } from 'react-icons/fa'

type ContactCTAProps = {
  onExpandChange?: (expanded: boolean) => void
}

export default function ContactCTA({ onExpandChange }: ContactCTAProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // ✅ แจ้งผลหลัง state เปลี่ยน
  useEffect(() => {
    onExpandChange?.(isOpen)
  }, [isOpen, onExpandChange])

  return (
    <div className="relative h-12 w-full flex justify-center items-center" ref={containerRef}>
      <AnimatePresence initial={false}>
        {isOpen ? (
          isMobile ? (
            <motion.div
              key="cta-options-mobile"
                className="absolute top-0 flex flex-col items-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                <a
                  href="tel:0928825556"
                  className="flex items-center justify-center gap-2 px-4 h-10 border-2 border-[#A70909] rounded-full text-[#A70909] font-medium text-sm hover:bg-[#A70909] hover:text-white transition-all duration-200 w-[190px]"
                >
                  <FaPhoneAlt className="text-base" /> โทร 092-882-5556
                </a>
                <a
                  href="https://lin.ee/TBe5njP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-10 px-4 rounded-full bg-[#06C755] text-white text-sm font-medium transition-all duration-200 hover:brightness-110 w-[190px]"
                >
                  <FaLine className="text-2xl mr-2" /> แชทเลย!
                </a>
              </motion.div>
            ) : (
              <motion.div
                key="cta-options-desktop"
                className="absolute inset-0 flex gap-4 justify-center items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <a
                  href="tel:0928825556"
                  className="flex items-center gap-2 px-4 h-10 border-2 border-[#A70909] rounded-full text-[#A70909] font-medium text-sm hover:bg-[#A70909] hover:text-white transition w-[190px] justify-center"
                >
                  <FaPhoneAlt className="text-base" /> โทร 092-882-5556
                </a>
                <a
                  href="https://lin.ee/TBe5njP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-10 px-4 rounded-full bg-[#06C755] text-white text-sm font-medium transition hover:brightness-110 w-[190px]"
                >
                  <FaLine className="text-2xl mr-2" /> แชทเลย!
                </a>
              </motion.div>
            )
        ) : (
          <motion.button
            key="cta-main"
            className="px-6 py-2 text-white bg-[#A70909] rounded-full text-base font-medium hover:bg-[#C9341F] transition"
            onClick={() => setIsOpen(true)}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            ขอคำปรึกษาฟรี
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
