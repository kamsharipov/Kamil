const formats = [
  {
    roman: "IV",
    title: "Интенсив выходного дня",
    desc: "Сб · Вс · 8 часов · практика",
    price: "4 500",
    unit: "2 дня",
    main: true,
  },
  {
    roman: "V",
    title: "Подписка на гайды",
    desc: "PDF · чек-листы · схемы",
    price: "590",
    unit: "в месяц",
  },
  {
    roman: "VI",
    title: "Разбор сессии 1-на-1",
    desc: "60 минут · Zoom · протокол",
    price: "12 000",
    unit: "час",
  },
];

const chips = ["Все", "Результаты", "Отзывы"];

// ===== MOBILE: FaceFit Workouts-style 2-col grid =====
const caseCategories = ["Все", "Инфобизнес", "Психолог", "Коучинг", "Эксперт"];
const caseTools = [
  { icon: "filters", label: "Фильтры" },
  { icon: "sorting", label: "Сортировка" },
  { icon: "search", label: "Поиск" },
];

type Difficulty = "Легко" | "Средне" | "Сложно" | "PRO";
interface CaseCard {
  id: number;
  title: string;
  subtitle: string;
  metric: string;
  metricSmall: string;
  difficulty: Difficulty;
  badge: "PRO" | "TOP" | "A" | "B";
  badgeColor: string;
  placeholder: string;
}

const caseCards: CaseCard[] = [
  {
    id: 1, title: "Марафон 500 учеников", subtitle: "Инфобизнес 2.0 · воронка",
    metric: "₽ 3,2 млн", metricSmall: "за 4 дня", difficulty: "PRO",
    badge: "PRO", badgeColor: "#3b82f6",
    placeholder: "linear-gradient(135deg,#1e293b 0%,#334155 40%,#0f172a 100%)",
  },
  {
    id: 2, title: "Продажи на диагностике", subtitle: "Нутрициолог · 20 сессий",
    metric: "60% CR", metricSmall: "из 20 → 12", difficulty: "Сложно",
    badge: "TOP", badgeColor: "#bef264",
    placeholder: "linear-gradient(135deg,#1e3a8a 0%,#312e81 35%,#0c1424 100%)",
  },
  {
    id: 3, title: "Клуб «Живая опора»", subtitle: "Психолог · подписка",
    metric: "₽ 1,5 млн", metricSmall: "MRR", difficulty: "PRO",
    badge: "PRO", badgeColor: "#10b981",
    placeholder: "linear-gradient(135deg,#312e81 0%,#6366f1 40%,#0f172a 100%)",
  },
  {
    id: 4, title: "Mini-app Telegram", subtitle: "Маркетолог · квиз-продажи",
    metric: "₽ 84 000", metricSmall: "AOV", difficulty: "Средне",
    badge: "A", badgeColor: "#3b82f6",
    placeholder: "linear-gradient(135deg,#0f172a 0%,#1e293b 40%,#334155 100%)",
  },
  {
    id: 5, title: "Интенсив выходного дня", subtitle: "Коучинг · 120 мест",
    metric: "₽ 540k", metricSmall: "за выходные", difficulty: "Сложно",
    badge: "TOP", badgeColor: "#bef264",
    placeholder: "linear-gradient(135deg,#111827 0%,#1f2937 40%,#0b1220 100%)",
  },
  {
    id: 6, title: "300–600 тыс. в месяц", subtitle: "Эксперт · вебинар",
    metric: "4 000", metricSmall: "зрителей", difficulty: "PRO",
    badge: "PRO", badgeColor: "#f59e0b",
    placeholder: "linear-gradient(135deg,#3b0764 0%,#831843 40%,#0c1424 100%)",
  },
  {
    id: 7, title: "AI-ассистент контента", subtitle: "LLM pipeline · 60+/нед",
    metric: "60+", metricSmall: "постов / нед", difficulty: "Средне",
    badge: "A", badgeColor: "#3b82f6",
    placeholder: "linear-gradient(135deg,#0b1220 0%,#1e293b 40%,#0f172a 100%)",
  },
  {
    id: 8, title: "Закрытый чат 1200+", subtitle: "Сообщество · теги",
    metric: "32", metricSmall: "mini-apps", difficulty: "PRO",
    badge: "PRO", badgeColor: "#bef264",
    placeholder: "linear-gradient(135deg,#0c4a6e 0%,#1e293b 45%,#0b1220 100%)",
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

export default function CasesPage() {
  return (
    <>
      {/* =====================================================
           MOBILE (<860px) — FaceFit Workouts grid-style
          ===================================================== */}
      <div className="mobile-only">
        <div className="page-content">
          <div className="cats-row">
            {caseCategories.map((c, i) => (
              <div
                key={c}
                className={`cat-pill ${i === 0 ? "cat-active" : ""}`}
              >
                {c}
              </div>
            ))}
          </div>

          <div className="tools-row">
            {caseTools.map((t) => (
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
            {caseCards.map((c) => (
              <div key={c.id} className="v-card">
                <div className="v-cover" style={{ background: c.placeholder }}>
                  <div className="v-badge" style={{ background: c.badgeColor }}>
                    {c.badge}
                  </div>
                  <div className="v-cover-fade" />
                  <div className="v-title-row">
                    <div className="v-t">{c.title}</div>
                    <div className="v-s">{c.subtitle}</div>
                  </div>
                </div>
                <div className="v-meta">
                  <div className="v-duration">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="2.2"><path d="M12 2l3 6 6 .9-4.5 4.2 1 6.9L12 17l-5.5 3 1-6.9L3 8.9 9 8z"/></svg>
                    <b style={{ color: "#fff", fontWeight: 800 }}>{c.metric}</b>
                    <span style={{ color: "var(--text-muted)", marginLeft: 2, fontWeight: 600, fontSize: 10 }}>
                      · {c.metricSmall}
                    </span>
                  </div>
                  <div className={`v-diff ${c.difficulty === "PRO" ? "pro" : c.difficulty === "Сложно" ? "hard" : c.difficulty === "Средне" ? "med" : "easy"}`}>
                    {c.difficulty}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
           DESKTOP (≥860px) — ВЕРНУТЬ КАК БЫЛО: FORMATS·MENU
          ===================================================== */}
      <div className="desktop-only">
        <div className="page-content" style={{ maxWidth: 720, margin: "0 auto", padding: "56px 24px 80px" }}>
          <div className="mini-section-head" style={{ marginBottom: 16 }}>
            <div className="msh-no">FORMATS · MENU</div>
            <div className="msh-title">Кейсы · Форматы</div>
            <div className="msh-sub">Тарифы на проекты — без сокрытия.</div>
          </div>

          <div className="filter-chips" style={{ marginBottom: 16 }}>
            {chips.map((c, i) => (
              <div key={c} className={`chip ${i === 0 ? "chip-active" : ""}`}>{c}</div>
            ))}
          </div>

          <div className="space-y-3 mb-5">
            {formats.map((f) => (
              <div key={f.roman} className={`format-card ${f.main ? "main" : ""}`}>
                <div className="fc-circ">{f.roman}</div>
                <div className="fc-body">
                  <div className="fc-title">{f.title}</div>
                  <div className="fc-sub">{f.desc}</div>
                </div>
                <div className="fc-price">
                  <div className="price-v">{f.price}</div>
                  <div className="price-p">{f.unit}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="sub-card">
            <div className="q">Приглашение для новых</div>
            <div className="t">Первое вводное занятие — бесплатно.</div>
            <div className="d">Запись в закрытый кабинет после подтверждения заявки.</div>
          </div>

          <div className="plan-card featured mt-5">
            <div className="pc-tier"><em>III</em> · L'Elite</div>
            <div className="pc-name">
              Личное сопровождение
              <div className="pc-amount">
                <span className="pa-v">60 000</span>
                <span className="pa-p">₽ / мес</span>
              </div>
            </div>
            <ul>
              <li>— Создание контента для прогревов</li>
              <li>— Отдел заботы и модерация</li>
              <li>— Полное вовлечение Камиля 24/7</li>
              <li>— Юридические документы</li>
            </ul>
            <div className="pay-row">
              <div className="pay-pill">СБП</div>
              <div className="pay-pill">Card</div>
              <div className="pay-pill">PayPal</div>
              <div className="pay-pill alt">0% · 6 мес</div>
            </div>
            <button className="pc-cta featured">ХОЧУ ПОД КЛЮЧ</button>
          </div>
        </div>
      </div>
    </>
  );
}
