import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Эксперт · Камиль Шарипов",
  description:
    "Маркетолог, эксперт по чат-ботам, запуску клубов и курсов в Telegram. 7+ лет опыта, 150+ проектов.",
};

const stages = [
  { num: "I", title: "Погружение", desc: "Разбираем ситуацию, раскрываем экспертность, активы, гипотезы продуктов." },
  { num: "II", title: "Распаковка", desc: "Исследуем аудиторию — кем они вас видят и что готовы купить." },
  { num: "III", title: "Методология", desc: "Структура продуктов, упаковка в закрытый Telegram-канал." },
  { num: "IV", title: "Автоматизация", desc: "Воронка, лидмагниты, оплаты, прогревы, дожимы, контент." },
  { num: "V", title: "Сопровождение", desc: "Отдел заботы, тех. сопровождение, доработка воронок." },
];

const plans = [
  {
    tier: "I",
    name: "Создание бота",
    subtitle: "Разовая услуга",
    accent: false,
    price: "от 15 000",
    period: "за проект",
    lines: [
      "Создание бота под любой запрос",
      "Автоматизации в Telegram",
      "Бот-квест / оплат / лидмагнит",
      "Урок-инструкция по работе",
    ],
    cta: "Обсудить бота",
  },
  {
    tier: "II",
    name: "Лайт",
    subtitle: "Пакет запуска",
    accent: false,
    price: "от 25 000",
    period: "в месяц",
    lines: [
      "Создание продающего бота",
      "Упаковка закрытого канала",
      "Привязка и тесты оплат",
      "Автоматизации в Telegram",
      "Техническое создание воронки",
    ],
    cta: "Выбрать Лайт",
  },
  {
    tier: "III · L'Elite",
    name: "Под ключ",
    subtitle: "Полное погружение",
    accent: true,
    price: "от 60 000",
    period: "в месяц",
    lines: [
      "Углубленный анализ аудитории",
      "Разработка продуктовой линейки",
      "Разработка стратегии и упаковка клуба",
      "Вся техническая реализация воронки",
      "Создание контента для прогревов",
      "Отдел заботы и модерация",
      "Полное вовлечение Камиля 24/7",
    ],
    cta: "Хочу под ключ",
  },
];

export default function ExpertPage() {
  return (
    <>
      {/* ============================================================
          MOBILE — EXPERT mini-app page (FaceFit style)
          ============================================================ */}
      <div className="mobile-only">
        <div className="page-content">
          <section className="hero-photo mb-6">
            <Image src="/ava.jpg" alt="Камиль Шарипов" fill priority sizes="(max-width: 480px) 100vw, 480px" />
            <div className="hero-caption">
              <div className="hero-name">Молодость<br/>бизнеса <em style={{ fontFamily: "\"Times New Roman\", Georgia, serif", fontStyle: "italic", fontWeight: 300, color: "rgba(255,255,255,0.72)" }}>без уколов.</em></div>
              <div className="hero-sub">Камиль Шарипов · Маркетолог Telegram</div>
            </div>
          </section>

          <a href="#plans" className="mini-cta-primary" style={{ display: "inline-flex", width: "100%", justifyContent: "center", marginTop: 8 }}>Получить доступ</a>

          {/* Lead */}
          <div className="format-card" style={{ background: "var(--surface-2)", marginTop: 18 }}>
            <div className="body" style={{ padding: "4px 2px" }}>
              <div className="desc" style={{ fontSize: 11, marginBottom: 8 }}>
                Закрытый atelier-клуб: авторские методики, 200+ упражнений, личный куратор и живое сообщество экспертов.
              </div>
              <div className="title" style={{ fontSize: 13 }}>
                Маркетолог, эксперт по чат-ботам, запуску клубов и курсов в Telegram.
              </div>
            </div>
          </div>

          {/* Stats */}
          <section className="mb-6 mt-7">
            <div className="stat-strip">
              <div>
                <div className="label">Опыт</div>
                <div className="value">7+ лет</div>
              </div>
              <div>
                <div className="label">Проектов</div>
                <div className="value">150+</div>
              </div>
              <div>
                <div className="label">Активных</div>
                <div className="value">12</div>
              </div>
            </div>
          </section>

          {/* Stages */}
          <div className="mini-section-head">
            <h3>Этапы <em>работы</em></h3>
            <span className="see">Все</span>
          </div>
          <div>
            {stages.map((s, i) => (
              <div key={s.num} className={`format-card ${i === 0 ? "main" : ""}`}>
                <div className="circ">{s.num}</div>
                <div className="body">
                  <div className="title">{s.title}</div>
                  <div className="desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Plans */}
          <div className="mini-section-head" id="plans">
            <h3>Тарифы <em>доступ</em></h3>
            <span className="see">Смета →</span>
          </div>
          <div className="progress-strip mb-5"><span style={{ width: "82%" }} /></div>

          <div>
            {plans.map((p) => (
              <article
                key={p.name}
                className={`plan-card ${p.accent ? "featured" : ""}`}
              >
                <div className="row">
                  <div>
                    <div className="tier">Tier {p.tier}</div>
                    <div className="name">{p.name}</div>
                  </div>
                  <div className="amount">
                    <div className="v">{p.price}</div>
                    <div className="p">₽ · {p.period}</div>
                  </div>
                </div>
                <ul>
                  {p.lines.map((l, i) => (
                    <li key={i}>{l}</li>
                  ))}
                </ul>
                {p.accent && (
                  <div className="pay-row">
                    <span className="pay-pill">СБП</span>
                    <span className="pay-pill">Card</span>
                    <span className="pay-pill">PayPal</span>
                    <span className="pay-pill">0% · 6 мес</span>
                  </div>
                )}
                <button
                  className="mini-cta-primary"
                  style={{
                    marginTop: 16,
                    background: p.accent ? "white" : "linear-gradient(135deg, var(--accent), var(--accent-2))",
                    color: p.accent ? "var(--accent)" : "white",
                  }}
                >
                  {p.cta}
                </button>
              </article>
            ))}
          </div>

          {/* Cabinet teaser */}
          <div className="mini-section-head">
            <h3>Кабинет <em>профиль</em></h3>
            <span className="see">Войти →</span>
          </div>
          <div className="stat-grid mb-3">
            <div className="stat-box">
              <div className="num">5<small style={{ fontSize: 13, color: "var(--text-muted)" }}>/21</small></div>
              <div className="lbl">Марафон</div>
              <div className="bar"><span style={{ width: "24%" }} /></div>
            </div>
            <div className="stat-box">
              <div className="num">12</div>
              <div className="lbl">Уроков пройдено</div>
              <div className="bar"><span style={{ width: "58%" }} /></div>
            </div>
          </div>
          <div className="badge-list" style={{ marginTop: 6 }}>
            <div className="badge-row main">
              <div className="ic">🔥</div>
              <div className="b">
                <div className="t">Стрик 7 дней</div>
                <div className="s">Серия · ежедневная практика</div>
              </div>
            </div>
            <div className="badge-row">
              <div className="ic">✦</div>
              <div className="b">
                <div className="t">Первый мастер-класс</div>
                <div className="s">Открыт · 02.09.2026</div>
              </div>
            </div>
            <div className="badge-row">
              <div className="ic">❄</div>
              <div className="b">
                <div className="t">L'Elite · следующий шаг</div>
                <div className="s">Разблокируется на Tier III</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          DESKTOP — full editorial landing section EXPERT
          ============================================================ */}
      <div className="desktop-only">
        {/* HEADER */}
        <header className="landing-header">
          <div className="wrap landing-header-inner">
            <div className="landing-nav" style={{ flex: 1, justifyContent: "flex-start" }}>
              <a href="/#mission">миссия</a>
              <a href="/#about">о нас</a>
              <a href="/#services">услуги</a>
            </div>
            <div className="landing-brand">K<em>A</em>MIL · SH<em>A</em>RIPOV</div>
            <div className="landing-nav" style={{ flex: 1, justifyContent: "flex-end" }}>
              <a href="/reviews">отзывы</a>
              <a href="/#cases">кейсы</a>
              <a href="/#pricing">тарифы</a>
              <a href="#cta-exp" className="landing-cta">Контакты</a>
            </div>
          </div>
        </header>

        {/* HERO */}
        <section className="landing-hero landing-grid-bg" id="about-exp">
          <div className="wrap">
            <div className="hero-meta-row">
              <div className="left">
                <span className="bar" />
                <em>01 · EXPERT · main profile</em>
                <span className="bar" />
              </div>
              <div>Профиль · приём заявок · Q4 · 2026</div>
            </div>

            <div className="hero-grid">
              <div className="hero-col c1">
                <h1 className="display-h1">
                  <span className="row">Камиль</span>
                  <span className="row accent">Шарипов</span>
                  <span className="row outline"><em>· Telegram эксперт</em></span>
                </h1>
                <div className="lead-sq">
                  <div className="lbl">[ о себе ]</div>
                  <p>
                    Закрываю все технические вопросы экспертам по запуску своих продуктов в Telegram:
                    автоворонки, автоматизация продаж и администрирование закрытых каналов. Вовлекаюсь не только технически —
                    я партнёр по продукту и маркетингу.
                  </p>
                  <div className="sig">— работаю с экспертами с 2019 года</div>
                </div>
              </div>

              <div className="hero-col c2">
                <div className="hero-photo-desktop">
                  <Image src="/ava.jpg" alt="Камиль Шарипов" fill sizes="(min-width: 860px) 480px, 100vw" priority style={{ position: "absolute" }} />
                  <div className="hero-photo-badge">ks · atelier №001</div>
                  <div className="hero-photo-tag">
                    <div className="big">Private membership</div>
                    <div className="small">atelier-клуб · 7 лет практики</div>
                  </div>
                </div>
              </div>

              <div className="hero-col c3">
                <div className="c3-block">
                  <div className="info-kv"><div className="k">Специализация</div><div className="v"><em>Telegram</em><br/>маркетинг</div></div>
                  <div className="info-kv"><div className="k">Стаж</div><div className="v">7+ <em>лет</em></div></div>
                  <div className="info-kv"><div className="k">Проектов</div><div className="v">150+ запусков</div></div>
                  <div className="info-kv"><div className="k">Локация</div><div className="v">Москва · <em>online</em></div></div>
                </div>
                <div className="c3-block">
                  <div className="quote-block">
                    <q>Самое сложное — не техника. Самое сложное — разрешить себе попросить помощи и доверить кому-то свой продукт. Я беру эту ношу на себя.</q>
                    <div className="src">— ИНТЕРВЬЮ · KS</div>
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

        {/* Philosophy strip */}
        <section className="phil">
          <div className="wrap phil-inner">
            <div className="tag">[ методология ]</div>
            <h2>
              Эксперты приходят ко мне <em>в моменты «точки опоры»</em> —
              когда нужно запустить продукт, но голова от всего кругом. Я превращаю хаос в работающую Telegram-воронку.
            </h2>
            <div className="sign">
              <a href="#stages-exp" className="btn">↓ Этапы работы</a>
              <div className="mini">5 шагов до запуска вашего продукта</div>
            </div>
          </div>
        </section>

        {/* STAGES */}
        <section className="sec" id="stages-exp">
          <div className="wrap">
            <div className="sec-head">
              <div className="no">02 / Этапы работы</div>
              <h2 className="title">
                Пять <em>движений</em><br/>
                <span className="out">до запуска.</span>
              </h2>
              <p className="desc">
                Участвую в каждом шаге лично — ваш напарник, а не «исполнитель по ТЗ».
              </p>
            </div>
            <div className="stages-grid">
              {stages.map((s) => (
                <div key={s.num} className="stage">
                  <span className="num">{s.num}</span>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="sec" id="pricing-exp">
          <div className="wrap">
            <div className="sec-head">
              <div className="no">03 / Тарифы</div>
              <h2 className="title">
                Три <em>формата</em> <span className="accent">работы</span>.
              </h2>
              <p className="desc">
                От разовой задачи до полного ведения проекта под ключ. Смета и сроки — в течение дня после звонка.
              </p>
            </div>
            <div className="price-grid">
              {plans.map((p) => (
                <div key={p.name} className={`price-col ${p.accent ? "featured" : ""}`}>
                  <div className="head">
                    <div className="tier">Tier {p.tier} · {p.subtitle}</div>
                    <div className="flex items-center gap-3" style={{ flexWrap: "wrap" }}>
                      <div className="name">{p.name}</div>
                      {p.accent && <span className="ribbon">TАРИФ ВЫБОР</span>}
                    </div>
                  </div>
                  <div className="amount">
                    <div className="v">{p.price} ₽</div>
                    <div className="p">{p.period}</div>
                  </div>
                  <ul>{p.lines.map((l, i) => <li key={i}>{l}</li>)}</ul>
                  <a href="#cta-exp" className="cta-btn">{p.cta} →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-big" id="cta-exp">
          <div className="wrap cta-big-inner">
            <div>
              <h2>Готовы <em>обсудить</em> ваш проект <span className="accent-text">в Telegram?</span></h2>
              <p>
                30-минутный созвон бесплатно. Разбираем вашу ситуацию, я показываю похожие кейсы, говорим сроки и смету. Без продажи «в лоб».
              </p>
            </div>
            <div className="cta-stack">
              <a className="p" href="https://t.me" target="_blank" rel="noreferrer">Написать в Telegram →</a>
              <a className="s" href="mailto:hello@kamil.dev">hello@kamil.dev</a>
              <a className="s" href="/">← Вернуться на главную</a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="landing-foot">
          <div className="wrap">
            <div className="foot-grid">
              <div className="brand-col">
                <div className="b">K<em>A</em>MIL · SH<em>A</em>RIPOV</div>
                <p>Маркетолог, эксперт по чат-ботам, запуску клубов и курсов в Telegram. Работаю с экспертами с 2019 года.</p>
              </div>
              <div className="links-col">
                <div className="gr">
                  <h5>Навигация</h5>
                  <a href="/#mission">миссия</a>
                  <a href="/#about">о нас</a>
                  <a href="/#services">услуги</a>
                  <a href="/#cases">кейсы</a>
                </div>
                <div className="gr">
                  <h5>Страницы</h5>
                  <a href="/expert">обо мне</a>
                  <a href="/videos">видео-материал</a>
                  <a href="/reviews">отзывы</a>
                </div>
                <div className="gr">
                  <h5>Документы</h5>
                  <a href="#">политика</a>
                  <a href="#">оферта</a>
                  <a href="#">реквизиты</a>
                </div>
              </div>
              <div className="cta-col">
                <a className="pill" href="https://t.me" target="_blank" rel="noreferrer">Telegram · открыт</a>
                <a className="pill" href="mailto:hello@kamil.dev">hello@kamil.dev</a>
              </div>
            </div>
            <div className="foot-bottom">
              <div>© {new Date().getFullYear()} Камиль Шарипов · <em>Точка опоры в Telegram</em></div>
              <div>Москва · Q4 · 2026</div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
