import Image from "next/image";
import type { Metadata } from "next";
import ViewportRedirect from "@/components/ViewportRedirect";

export const metadata: Metadata = {
  title: "Камиль Шарипов · Telegram эксперт",
  description:
    "Маркетолог, эксперт по чат-ботам, запуску клубов и курсов в Telegram. Автоворонки, автоматизация продаж, упаковка закрытых каналов под ключ.",
};

const stages = [
  { n: "I", t: "Погружение", d: "Разбираем ситуацию, раскрываем экспертность, активы, ставим гипотезы по продуктам." },
  { n: "II", t: "Распаковка", d: "Исследуем аудиторию — кем они вас видят и что готовы купить прямо сейчас." },
  { n: "III", t: "Методология", d: "Структура продуктов, упаковка в закрытый Telegram-канал, офферы." },
  { n: "IV", t: "Автоматизация", d: "Воронка продаж, лидмагниты, оплаты, прогревы, дожимы, контент." },
  { n: "V", t: "Сопровождение", d: "Отдел заботы, техническое сопровождение, доработка воронок." },
];

const cases = [
  { t: "Клуб 500+ участников", tag: "Закрытый канал", chip: "+412% LTV", desc: "Автоворонка прогрева + приём оплат, закрытый канал с тарифами.", g: "g-1" },
  { t: "Курс по психологии", tag: "Вебинар-воронка", chip: "3 200 000 ₽", desc: "Бот-вебинар 5 дней, прогревы, дожим, приём ЮKassa.", g: "g-2" },
  { t: "Маркетолог наставник", tag: "Лидмагнит", chip: "CPL 98 ₽", desc: "Чек-лист → 3 письма → вебинар → продажа курса.", g: "g-3" },
  { t: "Нутрициолог онлайн", tag: "Квиз-воронка", chip: "x3 конверсия", desc: "Квиз 12 вопросов → диагностика → пакеты сопровождения.", g: "g-4" },
  { t: "Косметолог премиум", tag: "Онлайн-запись", chip: "MRR +220к", desc: "Бот-запись, напоминания, программа лояльности, оплаты.", g: "g-5" },
  { t: "Инвест-клуб", tag: "Закрытый чат", chip: "Retention 89%", desc: "Прогревы, сигналы, модерация, тарифная сетка 3 уровня.", g: "g-6" },
  { t: "Женский клуб", tag: "Марафон", chip: "CPA 340 ₽", desc: "Марафон 14 дней, прогревы, переход в годовой тариф.", g: "g-7" },
  { t: "Онлайн-школа", tag: "LMS + бот", chip: "ARR x2", desc: "Автоматизация выдачи уроков, прогресса, дожимов курса.", g: "g-8" },
];

const plans = [
  {
    name: "Создание бота",
    tier: "Разовая услуга",
    price: "от 15 000",
    period: "за проект",
    lines: [
      "Создание бота под любой запрос",
      "Автоматизации в Telegram",
      "Бот-квест / оплат / лидмагнит",
      "Бот для прогрева аудитории",
      "Урок-инструкция по работе",
    ],
    cta: "Обсудить задачу",
    featured: false,
  },
  {
    name: "Лайт",
    tier: "Пакет запуска",
    price: "от 25 000",
    period: "в месяц",
    ribbon: "ЧАСТЫЙ ВЫБОР",
    lines: [
      "Создание продающего бота",
      "Упаковка закрытого канала",
      "Привязка и тесты онлайн-оплат",
      "Автоматизации в Telegram",
      "Техническое создание воронки",
    ],
    cta: "Взять Лайт",
    featured: true,
  },
  {
    name: "Под ключ",
    tier: "Полное погружение",
    price: "от 60 000",
    period: "в месяц",
    lines: [
      "Анализ аудитории и рынка",
      "Разработка продуктовой линейки",
      "Стратегия и упаковка клуба",
      "Вся тех. реализация воронки",
      "Создание контента прогревов",
      "Сопровождение соц. сетей",
      "Отдел заботы и модерация",
      "Юридические документы",
      "Оплата всех сервисов",
      "Связь 24/7 с Камилем",
    ],
    cta: "Оставить заявку",
    featured: false,
  },
];

const navLinks = [
  { href: "#mission", label: "миссия" },
  { href: "#about", label: "о нас" },
  { href: "#services", label: "услуги" },
  { href: "/reviews", label: "отзывы" },
  { href: "#cases", label: "кейсы" },
  { href: "#pricing", label: "тарифы" },
];

export default function HomePage() {
  return (
    <>
      <ViewportRedirect mobileTo="/expert" />

      {/* ============================================================
          MOBILE — mini-app entry / FaceFit-style landing
          ============================================================ */}
      <div className="mobile-only">
        <div className="page-content">
          <h1 className="mini-h1">
            Запуски<br />
            <em>в Telegram без</em><br />
            головной <span className="gradient-text">боли.</span>
          </h1>
          <p className="mini-h1-sub">
            Закрываю все технические вопросы экспертам:
            автоворонки, оплаты, упаковка клубов и отдел заботы.
          </p>

          <a href="#cta" className="mini-cta-primary" style={{ display: "inline-flex", width: "100%", justifyContent: "center" }}>
            Получить доступ
          </a>

          <section className="hero-photo mb-6">
            <Image src="/ava.jpg" alt="Камиль Шарипов" fill priority sizes="(max-width: 480px) 100vw, 480px" />
            <div className="hero-caption">
              <div className="hero-name">Камиль Шарипов</div>
              <div className="hero-sub">Маркетолог · Telegram-эксперт</div>
            </div>
          </section>

          {/* FORMATS */}
          <div className="mini-section-head">
            <h3>Форматы <em>занятий</em></h3>
            <span className="see">Все →</span>
          </div>
          <div className="format-card main">
            <div className="circ">IV</div>
            <div className="body">
              <div className="title">Интенсив выходного дня</div>
              <div className="desc">Сб · Вс · 8 часов · практика</div>
            </div>
            <div className="price">
              <div className="v">4 500</div>
              <div className="p">2 дня</div>
            </div>
          </div>
          <div className="format-card">
            <div className="circ">V</div>
            <div className="body">
              <div className="title">Подписка на гайды</div>
              <div className="desc">PDF · чек-листы · схемы</div>
            </div>
            <div className="price">
              <div className="v">590</div>
              <div className="p">в месяц</div>
            </div>
          </div>
          <div className="format-card">
            <div className="circ">VI</div>
            <div className="body">
              <div className="title">Разбор сессии 1-на-1</div>
              <div className="desc">60 минут · Zoom · протокол</div>
            </div>
            <div className="price">
              <div className="v">12 000</div>
              <div className="p">час</div>
            </div>
          </div>
          <div className="sub-card">
            <div className="q">Приглашение для новых</div>
            <div className="t">Первое вводное занятие — бесплатно.</div>
            <div className="d">Запись в закрытый кабинет после подтверждения заявки.</div>
          </div>

          {/* TARIFFS */}
          <div className="mini-section-head">
            <h3>Тарифы <em>доступ</em></h3>
            <span className="see">Смета →</span>
          </div>
          <div className="progress-strip mb-5"><span /></div>

          <div className="plan-card featured">
            <div className="row">
              <div>
                <div className="tier">Tier III</div>
                <div className="name">III · L'Elite</div>
              </div>
              <div className="amount">
                <div className="v">60 000</div>
                <div className="p">₽ / мес</div>
              </div>
            </div>
            <ul>
              <li>Углубленный анализ аудитории</li>
              <li>Разработка продуктовой линейки</li>
              <li>Разработка стратегии + упаковка</li>
              <li>Полное вовлечение Камиля</li>
              <li>Приоритет 24/7 куратор</li>
            </ul>
            <div className="pay-row">
              <span className="pay-pill">СБП</span>
              <span className="pay-pill">Card</span>
              <span className="pay-pill">PayPal</span>
              <span className="pay-pill">0% · 6 мес</span>
            </div>
            <a href="#cta" className="mini-cta-primary" style={{ marginTop: 16 }}>Запросить</a>
          </div>
        </div>
      </div>

      {/* ============================================================
          DESKTOP — LANDING SITE (editorial / ТОЧКА ОПОРЫ style)
          ============================================================ */}
      <div className="desktop-only">
        {/* HEADER */}
        <header className="landing-header">
          <div className="wrap landing-header-inner">
            <div className="landing-nav" style={{ flex: 1, justifyContent: "flex-start" }}>
              {navLinks.slice(0, 3).map((l) => (
                <a key={l.href} href={l.href}>{l.label}</a>
              ))}
            </div>
            <div className="landing-brand">K<em>A</em>MIL · SH<em>A</em>RIPOV</div>
            <div className="landing-nav" style={{ flex: 1, justifyContent: "flex-end" }}>
              {navLinks.slice(3).map((l) => (
                <a key={l.href} href={l.href}>{l.label}</a>
              ))}
              <a href="#cta" className="landing-cta">Контакты</a>
            </div>
          </div>
        </header>

        {/* HERO */}
        <section className="landing-hero landing-grid-bg" id="mission">
          <div className="wrap">
            <div className="hero-meta-row">
              <div className="left">
                <span className="bar" />
                <em>private membership · n°001</em>
                <span className="bar" />
              </div>
              <div>Москва · приём заявок · Q4 2026</div>
            </div>

            <div className="hero-grid" id="about">
              {/* COL 1 — big headline */}
              <div className="hero-col c1">
                <h1 className="display-h1">
                  <span className="row accent">ТОЧКА</span>
                  <span className="row">ОПОРЫ</span>
                  <span className="row outline">в Telegram.</span>
                </h1>
                <div className="lead-sq">
                  <div className="lbl">[ философия ]</div>
                  <p>
                    Моя работа — не обслуживание, а <strong style={{ color: "var(--text)" }}>сопровождение</strong>: в периоды точки опоры,
                    после выгораний, в поиске голоса, после грызни сомнений. Главный инструмент — ваш Telegram-канал, продуманный до последнего сообщения.
                  </p>
                  <div className="sig">— здесь безопасно. даже если вы пока не знаете, кто вы.</div>
                </div>
              </div>

              {/* COL 2 — photo */}
              <div className="hero-col c2">
                <div className="hero-photo-desktop">
                  <Image src="/ava.jpg" alt="Камиль Шарипов" fill sizes="(min-width: 860px) 480px, 100vw" priority style={{ position: "absolute" }} />
                  <div className="hero-photo-badge">ksh · expert №001</div>
                  <div className="hero-photo-tag">
                    <div className="big">Камиль Шарипов</div>
                    <div className="small">маркетолог · telegram-эксперт</div>
                  </div>
                </div>
              </div>

              {/* COL 3 — info */}
              <div className="hero-col c3">
                <div className="c3-block">
                  <div className="info-kv"><div className="k">Специализация</div><div className="v"><em>Telegram</em><br/>эксперт</div></div>
                  <div className="info-kv"><div className="k">Стаж</div><div className="v">7+ <em>лет</em></div></div>
                  <div className="info-kv"><div className="k">Проектов</div><div className="v">150+</div></div>
                  <div className="info-kv"><div className="k">Формат</div><div className="v">1-на-1<br/>под ключ</div></div>
                </div>
                <div className="c3-block">
                  <div className="quote-block">
                    <q>Ты не должен «справляться». Ты имеешь право попросить помощи. Иногда это самое сложное — и самое сильное, что можно сделать.</q>
                    <div className="src">— МАНИФЕСТ · KS</div>
                  </div>
                </div>
                <div className="c3-block">
                  <div className="hero-stat-big">
                    <div className="hs-big"><div className="n">12<em>+</em></div><div className="l">активных клиентов</div></div>
                    <div className="hs-big"><div className="n">24<em>/7</em></div><div className="l">поддержка</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY STRIP */}
        <section className="phil">
          <div className="wrap phil-inner">
            <div className="tag">[ философия ]</div>
            <h2 id="services">
              <em>Закрываю все технические вопросы экспертам</em> по запуску своих продуктов в Telegram. Вовлекаюсь не только технически, но и со стороны маркетинга.
            </h2>
            <div className="sign">
              <a href="#stages" className="btn">↓ Этапы</a>
              <div className="mini">сначала посмотрите, как мы работаем</div>
            </div>
          </div>
        </section>

        {/* STAGES */}
        <section className="sec" id="stages">
          <div className="wrap">
            <div className="sec-head">
              <div className="no">02 / Этапы работы</div>
              <h2 className="title">
                От идеи <em>до запуска</em><br/>
                <span className="out">в 5 движений.</span>
              </h2>
              <p className="desc">
                От нулевой идеи до запущенного продукта с трафиком, оплатами и отделом заботы. Участвую в каждом шаге лично — как напарник, а не исполнитель «по техзаданию».
              </p>
            </div>

            <div className="stages-grid">
              {stages.map((s) => (
                <div key={s.n} className="stage">
                  <span className="num">{s.n}</span>
                  <h4>{s.t}</h4>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASES GALLERY */}
        <section className="sec" id="cases">
          <div className="wrap">
            <div className="sec-head">
              <div className="no">03 / Кейсы</div>
              <h2 className="title">
                Работы <em>и</em> <span className="accent">результаты</span>.
              </h2>
              <p className="desc">
                Реальные запуски экспертов, нутрициологов, маркетологов и клубов. Показываю цифры — без сокрытия и «в среднем по больнице».
              </p>
            </div>

            <div className="g-grid">
              {cases.map((c, i) => (
                <article key={c.t} className={`g-tile ${c.g}`}>
                  <div className="num-tag">0{i + 1}</div>
                  <div className={`cover cover-grad g${((i % 8) + 1)}`}>
                    <div className="meta">
                      <span className="chip">{c.tag}</span>
                      <h4>{c.t}</h4>
                      <p>{c.desc}</p>
                    </div>
                    <span style={{
                      position: "absolute", top: 18, left: 20, zIndex: 2,
                      padding: "4px 10px", borderRadius: 9999,
                      background: "rgba(37,99,235,0.85)", backdropFilter: "blur(6px)",
                      color: "white", fontSize: 11, fontWeight: 700, letterSpacing: "0.02em",
                    }}>
                      {c.chip}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* VIDEOS SECTION */}
        <section className="sec" id="videos-sec">
          <div className="wrap">
            <div className="sec-head">
              <div className="no">04 / Видео-материалы</div>
              <h2 className="title">
                Разборы <em>и</em> инструкции <span className="out">бесплатно</span>.
              </h2>
              <p className="desc">
                Забирайте без подписки и регистрации: как упаковать закрытый канал, как собрать автоворонку за выходные и как принимать оплаты без юрлица.
              </p>
            </div>
            <div className="stages-grid">
              {[
                { n: "01", t: "Как упаковать закрытый канал", d: "6 ошибок при запуске клуба и упаковка, которую хочется купить." },
                { n: "02", t: "Автоворонка за выходные", d: "Готовый конструктор: сообщения, прогревы, тайминги и крючки." },
                { n: "03", t: "Оплаты в Telegram без юрлица", d: "5 способов: ЮKassa, Тинькофф, Telegram Pay, CloudPayments, СБП." },
                { n: "04", t: "Отдел заботы: 25 шаблонов", d: "Возражения, возвраты, техвопросы, оффтоп — разбор каждого сценария." },
                { n: "05", t: "Контент-план прогрева", d: "30 дней на каждый день с примерами постов и крючков в первые 3 секунды." },
              ].map((v) => (
                <div key={v.n} className="stage">
                  <span className="num" style={{ fontSize: 22 }}>▶ {v.n}</span>
                  <h4>{v.t}</h4>
                  <p>{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="sec" id="pricing">
          <div className="wrap">
            <div className="sec-head">
              <div className="no">05 / Услуги и стоимость</div>
              <h2 className="title">
                Три <em>формата</em><br/>
                <span className="accent">работы</span>.
              </h2>
              <p className="desc">
                От разовой задачи до полного ведения проекта под ключ с моим личным вовлечением. Все цены указаны как стартовая вилка — смета по вашему запросу в течение дня.
              </p>
            </div>

            <div className="price-grid">
              {plans.map((p) => (
                <div key={p.name} className={`price-col ${p.featured ? "featured" : ""}`}>
                  <div className="head">
                    <div className="tier">{p.tier}</div>
                    <div className="flex items-center gap-3" style={{ flexWrap: "wrap" }}>
                      <div className="name">{p.name}</div>
                      {p.ribbon && <span className="ribbon">{p.ribbon}</span>}
                    </div>
                  </div>
                  <div className="amount">
                    <div className="v">{p.price} ₽</div>
                    <div className="p">{p.period}</div>
                  </div>
                  <ul>
                    {p.lines.map((l) => <li key={l}>{l}</li>)}
                  </ul>
                  <a href="#cta" className="cta-btn">{p.cta} →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-big" id="cta">
          <div className="wrap cta-big-inner">
            <div>
              <h2>Готов <em>запустить</em> свой Telegram-продукт <span className="accent-text">без головной боли?</span></h2>
              <p>
                Оставьте заявку — разберу ситуацию, покажу похожие кейсы, пришлю смету и сроки в течение дня. Без навязчивых звонков и ледяных прогревов. Только честный разговор по делу.
              </p>
            </div>
            <div className="cta-stack">
              <a className="p" href="https://t.me" target="_blank" rel="noreferrer">Написать в Telegram →</a>
              <a className="s" href="mailto:hello@kamil.dev">hello@kamil.dev</a>
              <a className="s" href="#contacts">Скачать презентацию (PDF)</a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="landing-foot" id="contacts">
          <div className="wrap">
            <div className="foot-grid">
              <div className="brand-col">
                <div className="b">K<em>A</em>MIL · SH<em>A</em>RIPOV</div>
                <p>Маркетолог, эксперт по чат-ботам, запуску клубов и курсов в Telegram. Работаю с экспертами с 2019 года.</p>
              </div>
              <div className="links-col">
                <div className="gr">
                  <h5>Навигация</h5>
                  <a href="#mission">миссия</a>
                  <a href="#about">о нас</a>
                  <a href="#services">услуги</a>
                  <a href="#cases">кейсы</a>
                </div>
                <div className="gr">
                  <h5>Продукты</h5>
                  <a href="#pricing">тарифы</a>
                  <a href="#videos-sec">видео</a>
                  <a href="#miniapps-id">mini apps</a>
                  <a href="#stages">этапы</a>
                </div>
                <div className="gr">
                  <h5>Документы</h5>
                  <a href="#">политика</a>
                  <a href="#">оферта</a>
                  <a href="#">реквизиты</a>
                  <a href="#">конфиденциальность</a>
                </div>
              </div>
              <div className="cta-col">
                <a className="pill" href="https://t.me" target="_blank" rel="noreferrer">Telegram · открыт</a>
                <a className="pill" href="mailto:hello@kamil.dev">hello@kamil.dev</a>
              </div>
            </div>
            <div className="foot-bottom">
              <div>© {new Date().getFullYear()} Камиль Шарипов · <em>Точка опоры в Telegram</em></div>
              <div>Москва · приём проектов · Q4 · 2026</div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
