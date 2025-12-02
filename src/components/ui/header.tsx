"use client";
import React from "react";

function Header({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <header
      className={`w-full border-b bg-background py-2.25 pl-3 pr-5 flex items-center justify-between ${className}`}
    >
      {children}
    </header>
  );
}

export { Header };
