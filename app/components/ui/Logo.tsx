"use client"
import React, { useState } from "react";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "transparent" | "regular";
  className?: string;
  showText?: boolean;
  textClassName?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  size = "md", 
  variant = "transparent",
  className = "",
  showText = true,
  textClassName = ""
}) => {
  const [logoError, setLogoError] = useState(false);
  
  const sizeMap = {
    sm: { width: 24, height: 24, text: "text-sm" },
    md: { width: 40, height: 40, text: "text-lg sm:text-xl" },
    lg: { width: 56, height: 56, text: "text-xl sm:text-2xl" }
  };
  
  const logoSrc = variant === "transparent" 
    ? "/logo/logo_transparent.png" 
    : "/logo/logo.jpg";
  
  const { width, height, text } = sizeMap[size];
  
  return (
    <div className={`flex items-center gap-3 min-w-0 flex-shrink-0 ${className}`}>
      {!logoError && (
        <Image
          src={logoSrc}
          alt="Silverfin Academy"
          width={width}
          height={height}
          className={`flex-shrink-0 object-contain ${variant === "regular" ? "rounded-full" : ""}`}
          onError={() => setLogoError(true)}
        />
      )}
      {showText && (
        <span className={`${text} font-bold tracking-tight truncate ${textClassName}`}>
          Silverfin Academy
        </span>
      )}
    </div>
  );
};
