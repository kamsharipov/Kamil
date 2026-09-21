"use client";

import Image from "next/image";
import { useState } from "react";

const categories = ["Интенсивы", "Кейсы", "Гайды", "Интервью"];
const toolRow = [
  { icon: "filters", label: "Фильтры" },
  { icon: "sorting", label: "Сортировка" },
  { icon: "search", label: "Поиск" },
];

type Difficulty = "Легко" | "Средне" | "Сложно" | "PRO";
interface VideoRow {
  id: number;
  title: string;
  subtitle: string;
  duration: string;
  difficulty: Difficulty;
  badge: "HARD" | "MED" | "EASY" | "PRO";
  badgeColor: string;
  placeholder: string;
  cover?: string;
  ytId: string;
  featured?: boolean;
}

const videos: VideoRow[] = [
  {
    id: 1,
    title: "Бот и первая цепочка",
    subtitle: "Чат-боты для продажи курса",
    duration: "18:09",
    difficulty: "Средне",
    badge: "MED",
    badgeColor: "#3b82f6",
    placeholder:
      "radial-gradient(140% 90% at 30% 0%, #475569 0%, #1e293b 45%, #0f172a 100%)",
    cover: "/урок1.jpg",
    ytId: "oHli2HaOyAg",
  },
  {
    id: 2,
    title: "Метки, условия и дожим",
    subtitle: "Сегментация подписчиков",
    duration: "14:57",
    difficulty: "Сложно",
    badge: "HARD",
    badgeColor: "#a3e635",
    placeholder:
      "radial-gradient(120% 80% at 80% 10%, #334155 0%, #1e293b 40%, #0b1220 100%)",
    cover: "/урок2.jpg",
    ytId: "oHli2HaOyAg",
  },
  {
    id: 3,
    title: "Лид-магнит и точки входа",
    subtitle: "Ссылки и разные сценарии",
    duration: "5:42",
    difficulty: "Легко",
    badge: "EASY",
    badgeColor: "#a3e635",
    placeholder:
      "radial-gradient(120% 80% at 20% 10%, #64748b 0%, #334155 45%, #0f172a 100%)",
    cover: "/урок3.jpg",
    ytId: "oHli2HaOyAg",
  },
  {
    id: 4,
    title: "Кодовые слова в Instagram",
    subtitle: "Автоответы и сегментация",
    duration: "16:51",
    difficulty: "Средне",
    badge: "MED",
    badgeColor: "#3b82f6",
    placeholder:
      "radial-gradient(120% 90% at 70% 0%, #475569 0%, #1e293b 45%, #0b1220 100%)",
    cover: "/урок4.jpg",
    ytId: "oHli2HaOyAg",
  },
  {
    id: 5,
    title: "Приём оплат и доступ",
    subtitle: "Платежи · закрытый канал",
    duration: "14:26",
    difficulty: "Сложно",
    badge: "HARD",
    badgeColor: "#a3e635",
    placeholder:
      "radial-gradient(120% 90% at 50% 10%, #52606d 0%, #293548 45%, #0f172a 100%)",
    cover: "/урок5.jpg",
    ytId: "oHli2HaOyAg",
  },
  {
    id: 6,
    title: "Промежуточный финал",
    subtitle: "Итоги · проверка бота",
    duration: "2:27",
    difficulty: "Легко",
    badge: "EASY",
    badgeColor: "#a3e635",
    placeholder:
      "radial-gradient(140% 90% at 10% 10%, #52606d 0%, #293548 40%, #0b1220 100%)",
    cover: "/урок6.jpg",
    ytId: "oHli2HaOyAg",
  },
  {
    id: 7,
    title: "Чат-боты с нуля · Введение",
    subtitle: "Плейлист для экспертов",
    duration: "10:55",
    difficulty: "Легко",
    badge: "EASY",
    badgeColor: "#a3e635",
    placeholder:
      "radial-gradient(130% 90% at 80% 0%, #3f4c5d 0%, #1f2a3e 45%, #0c1424 100%)",
    cover: "/чатботы.jpg",
    ytId: "oHli2HaOyAg",
  },
  {
    id: 8,
    title: "300–600 тыс. в месяц онлайн",
    subtitle: "Камиль + Альбина Терон",
    duration: "57:47",
    difficulty: "PRO",
    badge: "PRO",
    badgeColor: "#3b82f6",
    featured: true,
    placeholder:
      "linear-gradient(135deg, #312e81 0%, #4c1d95 40%, #831843 100%)",
    ytId: "9sPzoK8ADTQ",
  },
];

const FiltersIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5h18M6 12h12M10 19h4"/></svg>
);
const SortingIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h13M3 12h9M3 17h5M17 5v14M14 16l3 3 3-3"/></svg>
);
const SearchIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
);
const PlayIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff"><path d="M6 4.5v15l13-7.5-13-7.5z"/></svg>
);

export default function VideosPage() {
  const [cat, setCat] = useState(0);
  const [active, setActive] = useState<VideoRow | null>(null);

  return (
    <>
      <div className="mobile-only">
        <div className="page-content">
          <div className="cats-row">
            {categories.map((c, i) => (
              <div
                key={c}
                className={`cat-pill ${i === cat ? "cat-active" : ""}`}
                onClick={() => setCat(i)}
              >
                {c}
              </div>
            ))}
          </div>

          <div className="tools-row">
            {toolRow.map((t, i) => (
              <div key={t.label} className="tool-cell">
                <span className="tool-ic">
                  {t.icon === "filters" && <FiltersIcon />}
                  {t.icon === "sorting" && <SortingIcon />}
                  {t.icon === "search" && <SearchIcon />}
                </span>
                <span className="tool-label">{t.label}</span>
              </div>
            ))}
          </div>

          <div className="v-grid">
            {videos.map((v) => (
              <div
                key={v.id}
                className="v-card"
                onClick={() => setActive(v)}
              >
                <div className="v-cover" style={v.cover ? undefined : { background: v.placeholder }}>
                  {v.cover && (
                    <Image
                      src={v.cover}
                      alt={v.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 240px"
                      style={{ objectFit: "cover" }}
                      priority={v.id <= 4}
                    />
                  )}
                  <div className="v-badge" style={{ background: v.badgeColor }}>
                    {v.badge}
                  </div>
                  <div className="v-cover-fade" />
                  <div className="v-title-row">
                    <div className="v-t">{v.title}</div>
                    <div className="v-s">{v.subtitle}</div>
                  </div>
                </div>
                <div className="v-meta">
                  <div className="v-duration">
                    <PlayIcon />
                    {v.duration}
                  </div>
                  <div className={`v-diff ${v.difficulty === "PRO" ? "pro" : v.difficulty === "Сложно" ? "hard" : v.difficulty === "Средне" ? "med" : "easy"}`}>
                    {v.difficulty}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="desktop-only">
        <div className="page-content" style={{ paddingBottom: 110 }}>
          <div className="cats-row">
            {categories.map((c, i) => (
              <div
                key={c}
                className={`cat-pill ${i === cat ? "cat-active" : ""}`}
                onClick={() => setCat(i)}
              >
                {c}
              </div>
            ))}
          </div>

          <div className="tools-row">
            {toolRow.map((t, i) => (
              <div key={t.label} className="tool-cell">
                <span className="tool-ic">
                  {t.icon === "filters" && <FiltersIcon />}
                  {t.icon === "sorting" && <SortingIcon />}
                  {t.icon === "search" && <SearchIcon />}
                </span>
                <span className="tool-label">{t.label}</span>
              </div>
            ))}
          </div>

          <div className="v-grid">
            {videos.map((v) => (
              <div key={v.id} className="v-card" onClick={() => setActive(v)}>
                <div className="v-cover" style={v.cover ? undefined : { background: v.placeholder }}>
                  {v.cover && (
                    <Image
                      src={v.cover}
                      alt={v.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 240px"
                      style={{ objectFit: "cover" }}
                      priority={v.id <= 4}
                    />
                  )}
                  <div className="v-badge" style={{ background: v.badgeColor }}>
                    {v.badge}
                  </div>
                  <div className="v-cover-fade" />
                  <div className="v-title-row">
                    <div className="v-t">{v.title}</div>
                    <div className="v-s">{v.subtitle}</div>
                  </div>
                </div>
                <div className="v-meta">
                  <div className="v-duration">
                    <PlayIcon />
                    {v.duration}
                  </div>
                  <div className={`v-diff ${v.difficulty === "PRO" ? "pro" : v.difficulty === "Сложно" ? "hard" : v.difficulty === "Средне" ? "med" : "easy"}`}>
                    {v.difficulty}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {active && (
        <div className="yt-modal" onClick={() => setActive(null)}>
          <div className="yt-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="yt-modal-close" onClick={() => setActive(null)}>✕</div>
            <div className="yt-modal-title">{active.title} · {active.subtitle}</div>
            <div className="yt-embed">
              <iframe
                src={`https://www.youtube.com/embed/${active.ytId}?rel=0&autoplay=1&modestbranding=1`}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ width: "100%", height: "100%", border: 0, borderRadius: 14 }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
