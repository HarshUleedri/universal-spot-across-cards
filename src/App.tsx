import { useEffect, useRef, useState, type ReactElement } from "react";
import Card from "./components/Card";

export default function App() {
  const cards: {
    title: string;
    description: string;
    icon: ReactElement;
  }[] = [
    {
      title: "Getting Started",
      description: "Learn the fundamentals and get started.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="24"
          height="24"
        >
          <path d="m3 10 9-7 9 7" />
          <path d="M5 9v12h14V9" />
          <path d="M9 21v-7h6v7" />
        </svg>
      ),
    },
    {
      title: "Development",
      description: "Build modern web applications.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="24"
          height="24"
        >
          <path d="m8 17-5-5 5-5" />
          <path d="m16 7 5 5-5 5" />
          <path d="m14 4-4 16" />
        </svg>
      ),
    },
    {
      title: "Design",
      description: "Create beautiful user interfaces.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="24"
          height="24"
        >
          <path d="m12 19 7-7 3 3-7 7-3-3Z" />
          <path d="m18 13-1.5-1.5" />
          <path d="m2 22 5-1 11-11-4-4L3 17l-1 5Z" />
        </svg>
      ),
    },
    {
      title: "Performance",
      description: "Optimize applications for better performance.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="24"
          height="24"
        >
          <path d="m13 2-3 9h7l-6 11 1-9H5l8-11Z" />
        </svg>
      ),
    },
    {
      title: "Security",
      description: "Protect applications and user data.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="24"
          height="24"
        >
          <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Deployment",
      description: "Deploy applications and make them live.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="24"
          height="24"
        >
          <path d="M5 19c-1.5 0-2-1-2-2.5S4 13 7 13c0-6 5-10 14-10 0 9-4 14-10 14 0 3-2 4-3.5 4S5 20.5 5 19Z" />
          <path d="M8 16 3 21" />
          <circle cx="15" cy="9" r="2" />
        </svg>
      ),
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null!);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-neutral-950 w-full flex-col gap-12 justify-center flex items-center "
    >
      <h1 className="text-4xl font-mono text-neutral-200">Universal Spot</h1>
      <div className="grid relative   grid-cols-3 gap-4">
        {cards.map((item, idx) => (
          <Card
            key={idx}
            title={item.title}
            description={item.description}
            icon={item.icon}
            // position={position}
            ref={containerRef}
          />
        ))}
      </div>
    </div>
  );
}
