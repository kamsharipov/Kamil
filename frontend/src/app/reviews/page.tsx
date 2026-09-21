export default function ReviewsPage() {
  const reviews = [
    { n: "I", name: "Рустем С.", role: "Нутрициолог", text: "За 3 недели с Камилем собрали мини-апп + прогрев. Первый запуск — 232 000 ₽ чистыми, без рекламы.", rating: 5, date: "08.2026", main: true },
    { n: "II", name: "Елена В.", role: "Психолог", text: "Перестала стесняться продавать. Воронка из 6 постов + бот закрывает на диагностику 3—4 в день.", rating: 5, date: "07.2026" },
    { n: "III", name: "Айдар М.", role: "Трейдер-аналитик", text: "ЛК Matchbet поднял средний чек подписки с 3 500 до 12 000 ₽. Retention +38%.", rating: 5, date: "06.2026" },
    { n: "IV", name: "Маргарита К.", role: "Дизайнер интерьеров", text: "Долго не решалась на Telegram-продукт. Первый поток — 18 учеников по 25 000.", rating: 5, date: "05.2026" },
    { n: "V", name: "Ильяс Р.", role: "Юрист", text: "Подписка на юридические шаблоны: 8 200 активных, MRR стабильно выше 1.2M ₽.", rating: 4, date: "04.2026" },
    { n: "VI", name: "Светлана П.", role: "Фотограф", text: "Календарь записи в мини-апе. Вся бухгалтерия и предоплата — автоматически.", rating: 5, date: "03.2026" },
    { n: "VII", name: "Динара А.", role: "Косметолог", text: "После нашей упаковки выручка салона за месяц выросла в 2.1 раза, очередь 3 недели.", rating: 5, date: "02.2026" },
    { n: "VIII", name: "Андрей Г.", role: "Инвестор", text: "Портфель-дашборд в Telegram: ROI, ставки, дивиденды — под рукой 24/7.", rating: 5, date: "01.2026" },
  ];

  const desktopReviews = [
    { no: "01", name: "Рустем С.", role: "нутрициолог · проект «Протокол 21»", meta: "232 000 ₽ · 3 недели", quote: "«Мне казалось, что я прохожу и так всё хорошо. Камиль показал мне 28 точек, где я теряю деньги. Через 3 недели первый запуск — 232 000 ₽, ни копейки рекламы, живые люди из сторис. Впервые понял, что экспертство можно масштабировать без выгорания.»" },
    { no: "02", name: "Елена В.", role: "психолог · частная практика", meta: "+340% заявок · 6 недель", quote: "«Перед Камилем я уже 2 раза влезала в долги на запуски с нулевым результатом. За 6 недель с ним упаковала прогрев, воронку, диагностику — и сейчас принимаю по 3—4 новых клиента в день. При этом работаю 4 дня в неделю.»" },
    { no: "03", name: "Айдар М.", role: "аналитик · Matchbet", meta: "средний чек x3.4 · 8 недель", quote: "«У меня была база 1200 человек из телеграм-канала, и я не понимал как её монетизировать кроме «запишитесь». Мы сделали личный кабинет с аналитикой и сигналами. Средний чек подскочил с 3 500 до 12 000 за неделю.»" },
    { no: "04", name: "Маргарита К.", role: "дизайнер · Школа интерьеров", meta: "450 000 ₽ · 1 поток", quote: "«СК момент: думала, что «школа» это про 200 слайдов презентаций. Оказалось — 5 живых уроков, 2 дз и чат поддержки. Первый поток — 18 учеников по 25 000. Запустила второй через 5 недель, +24 ученика.»" },
    { no: "05", name: "Ильяс Р.", role: "юрист · Документы под ключ", meta: "MRR 1.2M ₽ · 12 нед", quote: "«Думал, что юриспруденция не зайдёт в Telegram. Оказалось, зайдёт сильнее всего. Подписка на шаблоны + живые ответы — сейчас 8 200 активных подписчиков, MRR стабильно за 1.2M рублей.»" },
  ];

  return (
    <>
      <div className="mobile-only">
        <div className="mini-section-head">
          <div className="msh-no">TESTIMONIALS · №005</div>
          <div className="msh-title">Отзывы · Результаты</div>
          <div className="msh-sub">Живые цифры клиентов после работы.</div>
        </div>

        <div className="stat-grid mb-4">
          <div className="stat-box">
            <div className="sb-label">Довольных клиентов</div>
            <div className="sb-value"><span>142</span><em>/150</em></div>
            <div className="sb-bar"><span style={{ width: "95%" }}/></div>
          </div>
          <div className="stat-box">
            <div className="sb-label">Средний рейтинг</div>
            <div className="sb-value"><span>4.96</span><em>/5.0</em></div>
            <div className="sb-bar"><span style={{ width: "99%" }}/></div>
          </div>
        </div>

        <div className="filter-chips">
          {["Все", "5★", "4★", "Видео"].map((c, i) => (
            <div key={c} className={`chip ${i === 0 ? "chip-active" : ""}`}>{c}</div>
          ))}
        </div>

        <div className="space-y-3 mt-3">
          {reviews.map((r) => (
            <div key={r.n} className={`review-card ${r.main ? "main" : ""}`}>
              <div className="fc-circ">{r.n}</div>
              <div className="rc-body">
                <div className="rc-top">
                  <div className="rc-name">{r.name}</div>
                  <div className="rc-stars">{"★".repeat(r.rating)}</div>
                </div>
                <div className="rc-role">{r.role} · {r.date}</div>
                <div className="rc-text">{r.text}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="sub-card mt-5">
          <div className="sc-title">Отзыв с видео-разбором</div>
          <div className="sc-sub">18 минут · с разбором проекта клиента</div>
          <div className="sc-cta">▶ видео</div>
        </div>

        <div className="badge-list mt-5">
          <div className="bdg">
            <div className="bdg-ic">★</div>
            <div><div className="bdg-t">NPS клиентов</div><div className="bdg-s">4.96 / 5.0 · 150 отзывов</div></div>
          </div>
          <div className="bdg">
            <div className="bdg-ic">🔥</div>
            <div><div className="bdg-t">Результат через 21 день</div><div className="bdg-s">Средний чек клиента вырос x2.5</div></div>
          </div>
          <div className="bdg">
            <div className="bdg-ic">✦</div>
            <div><div className="bdg-t">Гарантия результата</div><div className="bdg-s">Возврат в течение 7 дней</div></div>
          </div>
        </div>
      </div>

      <div className="desktop-only">
        <header className="landing-header">
          <div className="lnav-left">
            <a href="#mission" className="lnav-link">миссия</a>
            <a href="#about" className="lnav-link">о нас</a>
            <a href="#services" className="lnav-link">услуги</a>
          </div>
          <div className="lnav-brand">K<em>A</em>MIL·SH<em>A</em>RIPOV</div>
          <div className="lnav-right">
            <a href="#cases" className="lnav-link">кейсы</a>
            <a href="#pricing" className="lnav-link">тарифы</a>
            <a href="#reviews" className="lnav-link">отзывы</a>
            <button className="landing-cta"><span className="dot"/>Контакты</button>
          </div>
        </header>

        <section className="landing-hero">
          <div className="hero-grid">
            <div className="hg-col">
              <div className="display-h1">
                <span className="row accent">ОТЗЫВЫ</span>
                <span className="row">· живые</span>
                <span className="row outline">цифры.</span>
              </div>
              <div className="lead-sq">
                <div className="ls-tag">[ testimonials ]</div>
                <p className="ls-text">Никаких «понравилось» без деталей. Ниже — 5 глубоких разборов с именем, ролью и цифрами, которые подтверждают работу.</p>
              </div>
            </div>
            <div className="hg-col">
              <div className="hero-photo-desktop">
                <div className="badge-v">ks · reviews №005</div>
                <img src="/ava.jpg" alt="Камиль Шарипов" />
                <div className="badge-hz">
                  <div className="bh-name">150+ отзывов</div>
                  <div className="bh-role">средний рейтинг 4.96 / 5.0</div>
                </div>
              </div>
            </div>
            <div className="hg-col">
              <div className="info-kv">
                <div className="ik-row"><span className="ik-k">всего отзывов</span><span className="ik-v">150</span></div>
                <div className="ik-row"><span className="ik-k">средний рейтинг</span><span className="ik-v">4.96</span></div>
                <div className="ik-row"><span className="ik-k">возвратов</span><span className="ik-v">0.3%</span></div>
                <div className="ik-row"><span className="ik-k">повторных обращений</span><span className="ik-v">62%</span></div>
              </div>
              <div className="quote-block">
                <q>Я не предлагаю «стать блогером» и «публиковать каждый день сторис». Я предлагаю схему, где твой экспертский ресурс умножается на технологию, а не на твою выносливость.</q>
                <div className="qb-src">— МАНИФЕСТ KS / testimonials №005</div>
              </div>
              <div className="hero-stat-big">
                <div className="hs-big"><span className="hs-label">средний рост выручки</span><span className="hs-value">+240%</span></div>
                <div className="hs-big"><span className="hs-label">средний срок</span><span className="hs-value">8 нед</span></div>
              </div>
            </div>
          </div>
        </section>

        <div className="phil strip">
          <div className="phil-tag">[ отзывы · без сокрытия ]</div>
          <p className="phil-text">«Каждый <em>клиент</em> имеет контакты 3 моих предыдущих заказчика перед оплатой. Я не прячу результаты. Если не уверен, что смогу — <em>отказываю</em> сразу.»</p>
          <div className="phil-actions">
            <button className="mini-cta-primary">читать все ↓</button>
            <button className="mini-cta-s">посмотреть видео</button>
          </div>
        </div>

        <section id="reviews" className="sec">
          <div className="sec-head">
            <div className="sh-no">N° 01 · SECTION</div>
            <div className="sh-title">5 глубоких <em>отзывов · с</em> цифрами.</div>
            <p className="sh-desc">Истории клиентов. Роли, сроки, выручка — реальные имена, с которыми можно связаться лично по запросу.</p>
          </div>
          <div className="stages-grid reviews-grid">
            {desktopReviews.map((t) => (
              <div key={t.no} className="stage r-stage">
                <div className="st-num">{t.no}</div>
                <div className="st-tag">{t.meta}</div>
                <div className="st-title">{t.name}</div>
                <div className="st-role">{t.role}</div>
                <div className="st-quote">{t.quote}</div>
                <div className="st-line"/>
              </div>
            ))}
          </div>
        </section>

        <section className="sec">
          <div className="sec-head">
            <div className="sh-no">N° 02 · SECTION</div>
            <div className="sh-title">featured · <em>видео-разбор</em> с клиентом.</div>
            <p className="sh-desc">25 минут живого диалога с Рустемом С. (нутрициолог). Как выглядел запуск, где были ошибки и что мы сделали — всё без монтажа и воды.</p>
          </div>
          <div className="video-hero">
            <div className="cover-grad g8"/>
            <div className="vh-badge">ВИДЕО-ОТЗЫВ · 25 МИН</div>
            <div className="vh-play">▶</div>
            <div className="vh-meta">
              <div className="vh-num">№03 · TESTIMONIAL</div>
              <div className="vh-title">Рустем С. · 232 000 ₽ за 3 недели</div>
              <div className="vh-sub">Без рекламы. 5 постов прогрева + диагностический бот + мини-апп с меню протоколов. Разбор каждого этапа на камеру.</div>
            </div>
          </div>
        </section>

        <section id="pricing" className="sec">
          <div className="sec-head">
            <div className="sh-no">N° 03 · SECTION</div>
            <div className="sh-title">тарифы <em>на</em> совместную работу.</div>
            <p className="sh-desc">Ознакомься с отзывами. Если почувствуешь — наш формат. Записываемся на диагностику 30 минут. Бесплатно.</p>
          </div>
          <div className="price-grid">
            <div className="price-col">
              <div className="pc-tier"><em>I</em> · Le Basique</div>
              <div className="pc-name">Разбор кейса
                <div className="pc-amount"><span className="pa-v">15 000</span><span className="pa-p">₽ / проект</span></div>
              </div>
              <ul>
                <li>— Разбор текущего состояния</li>
                <li>— Roadmap на 2 месяца</li>
                <li>— Zoom 60 минут</li>
              </ul>
              <button className="pc-cta">Заказать разбор</button>
            </div>

            <div className="price-col featured">
              <div className="price-ribbon">ЧАСТЫЙ ВЫБОР</div>
              <div className="pc-tier"><em>II</em> · Prestige</div>
              <div className="pc-name">Готовая упаковка
                <div className="pc-amount"><span className="pa-v">25 000</span><span className="pa-p">₽ / проект</span></div>
              </div>
              <ul>
                <li>— Всё из разбора +</li>
                <li>— Воронка, бот, мини-апп</li>
                <li>— 30 дней поддержки</li>
                <li>— Контакты 3 клиентов</li>
              </ul>
              <div className="pay-row">
                <div className="pay-pill">СБП</div>
                <div className="pay-pill">Card</div>
                <div className="pay-pill alt">0% · 6 мес</div>
              </div>
              <button className="pc-cta featured">Запросить место</button>
            </div>

            <div className="price-col">
              <div className="pc-tier"><em>III</em> · L'Elite</div>
              <div className="pc-name">Личное сопровождение
                <div className="pc-amount"><span className="pa-v">60 000</span><span className="pa-p">₽ / мес</span></div>
              </div>
              <ul>
                <li>— 4 личные сессии в месяц</li>
                <li>— Развитие продукта</li>
                <li>— Приоритет 24/7</li>
                <li>— Личный чат со мной</li>
              </ul>
              <button className="pc-cta">Запросить</button>
            </div>
          </div>
        </section>

        <section id="cta" className="cta-big">
          <div className="cta-split">
            <div>
              <h2>
                Читал отзывы?<br/>
                Значит <em>настало время</em> <span className="accent-text">написать свой.</span>
              </h2>
              <p className="cta-desc">30 минутная диагностика. Разберём твою ситуацию, посмотрим цифры и я честно скажу — есть ли для тебя точка роста в Telegram. Без продажи на встрече.</p>
            </div>
            <div className="cta-stack">
              <a className="cs p">Записаться на диагностику →</a>
              <a className="cs s">hello@kamilsharipov.ru</a>
              <a className="cs s">Скачать PDF-презентацию ↓</a>
            </div>
          </div>
        </section>

        <footer className="landing-foot">
          <div className="foot-grid">
            <div className="foot-brand">
              <div className="fb-logo">K<em>A</em>MIL·SH<em>A</em>RIPOV</div>
              <p className="fb-desc">Telegram-эксперт. Упаковываю экспертов в боты и мини-аппы с 2019 года.</p>
              <div className="fb-meta">© 2026 KS Studio · Все цены без НДС</div>
            </div>
            <div className="foot-links">
              <div className="fl-col">
                <div className="fl-title">Навигация</div>
                <a>миссия</a><a>о нас</a><a>услуги</a><a>отзывы</a>
              </div>
              <div className="fl-col">
                <div className="fl-title">Продукты</div>
                <a>Telegram боты</a><a>Мини-аппы</a><a>Воронки</a><a>Аудит</a>
              </div>
              <div className="fl-col">
                <div className="fl-title">Документы</div>
                <a>Политика</a><a>Оферта</a><a>Конфиденциальность</a>
              </div>
            </div>
            <div className="foot-cta">
              <a className="mini-cta-primary">Telegram · открыт ↗</a>
              <a className="mini-cta-s compact">hello@kamilsharipov.ru</a>
            </div>
          </div>
          <div className="foot-bottom">
            <span>ИНН 000000000000 · ИП Шарипов К.Р.</span>
            <span className="fb-links">
              <a>Telegram</a><a>YouTube</a><a>Дзен</a>
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}
