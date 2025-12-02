"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  title?: string;
  icons?: React.ReactNode;
  href?: string;
  onClick?: () => void;    
  className?: string;
}

const Button = ({ type, title, icons, href, onClick, className = '' }: ButtonProps) => {
  const router = useRouter()

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (href) {
      router.push(href)
    }
  }

  const buttonContent = (
    <>
      {icons && <span>{icons}</span>}
      {title && <span>{title}</span>}
    </>
  )


  const baseClasses = 'bg-[#3252DF] text-white font-medium px-5 py-2 rounded-md hover:bg-[#152C5B] transition duration-300 ease-in-out flex items-center gap-2'

  return (
    <button
      className={`${baseClasses} ${className}`.trim()}
      type={type}
      onClick={handleClick}
    >
      {buttonContent}
    </button>
  )
}

export default Button
