"use client";

import { usePathname, useRouter } from "next/navigation";

export type TabKey = "expert" | "cases" | "videos" | "reviews";

const tabs: {
  key: TabKey;
  label: string;
  href: string;
  icon: (active: boolean) => React.ReactNode;
}[] = [
  {
    key: "expert",
    label: "Обо мне",
    href: "/expert",
    icon: (active) => (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill={active ? "#ffffff" : "none"}
        stroke={active ? "#ffffff" : "#94a3b8"}
        strokeWidth={active ? "2.6" : "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="7.5" r="3.6" />
        <path d="M4.5 20.5c0-3.6 3.4-6.5 7.5-6.5s7.5 2.9 7.5 6.5" />
      </svg>
    ),
  },
  {
    key: "cases",
    label: "Кейсы",
    href: "/cases",
    icon: (active) => (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke={active ? "#ffffff" : "#94a3b8"}
        strokeWidth={active ? "2.6" : "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="7" width="18" height="13" rx="2.5" />
        <path d="M8 7V5.6A2.6 2.6 0 0 1 10.6 3h2.8A2.6 2.6 0 0 1 16 5.6V7" />
        <path d="M3 13h18" />
        <circle cx="9.5" cy="17" r="1.1" fill={active ? "#ffffff" : "none"} />
        <circle cx="14.5" cy="17" r="1.1" fill={active ? "#ffffff" : "none"} />
      </svg>
    ),
  },
  {
    key: "videos",
    label: "Видео-материал",
    href: "/videos",
    icon: (active) => (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke={active ? "#ffffff" : "#94a3b8"}
        strokeWidth={active ? "2.6" : "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2.5" y="6" width="13" height="12" rx="2.4" />
        <path d="M22 8.5v7l-6.5-3.5z" fill={active ? "#ffffff" : "none"} />
        <rect x="10" y="13" width="14" height="0.1" fill="none" opacity="0" />
      </svg>
    ),
  },
  {
    key: "reviews",
    label: "Отзывы",
    href: "/reviews",
    icon: (active) => (
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke={active ? "#ffffff" : "#94a3b8"}
        strokeWidth={active ? "2.6" : "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3.5" y="5.5" width="7" height="7" rx="1.8" />
        <rect x="13.5" y="5.5" width="7" height="7" rx="1.8" />
        <rect x="3.5" y="14.5" width="7" height="5" rx="1.8" />
        <rect x="13.5" y="14.5" width="7" height="5" rx="1.8" />
      </svg>
    ),
  },
];

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const getKey = (): TabKey => {
    if (pathname.startsWith("/cases")) return "cases";
    if (pathname.startsWith("/videos")) return "videos";
    if (pathname.startsWith("/reviews")) return "reviews";
    return "expert";
  };

  const activeKey = getKey();

  return (
    <nav className="bottom-nav mobile-only" role="navigation" aria-label="Главное меню">
      {tabs.map((tab) => {
        const active = tab.key === activeKey;
        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => router.push(tab.href)}
            className={`nav-item ${active ? "active" : ""}`}
            aria-current={active ? "page" : undefined}
          >
            {tab.icon(active)}
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
