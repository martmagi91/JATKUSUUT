const A = "/assets";

type Day = {
  date: string;
  name: string;
  location: string;
  activities: string[];
};

const days: Day[] = [
  {
    date: "19.10",
    name: "Esmaspäev",
    location: "Kuressaare Ametikool",
    activities: [
      "Jätkusuutlikkuse nädala sissejuhatav loeng. Rakenduslik keskharidus I kursus. “TalTech – keskkonnakaitse ja säästlikkus. Saaremaa Vald – ringmajandus. Saarlus”",
      "TalTech Kuressaare töötoad. Taastuvenergia",
    ],
  },
  {
    date: "20.10",
    name: "Teisipäev",
    location: "Restoran Kass, Kuressaare Ametikool",
    activities: [
      "Restoran Kass kutsub! Lihavaba teisipäev",
      "Tallinna Tehnikakõrgkooli töötoad jätkusuutlikkuse teemadel õpilastele",
      "Tallinna Tehnikakõrgkooli loeng ja infotund õpetajatele",
      "TalTech Kuressaare töötoad. Taastuvenergia",
      "Verston Eesti OÜ töötoad",
    ],
  },
  {
    date: "21.10",
    name: "Kolmapäev",
    location: "Kuressaare Ametikool, Saaremaa Muuseum",
    activities: [
      "Loodusmuuseum tuleb külla! Töötoad “Disainime tulevikku”",
      "Verston Eesti OÜ töötoad",
      "Saaremaa muuseumi näituse külastused “Käega katsutav kliima. Mis meist saab?”",
    ],
  },
  {
    date: "22.10",
    name: "Neljapäev",
    location: "Kuressaare Ametikool, Saaremaa Muuseum",
    activities: [
      "Loodusmuuseum tuleb külla! Töötoad “Disainime tulevikku”",
      "Töötoad “Kapselgarderoob”",
      "Saaremaa muuseumi näituse külastused “Käega katsutav kliima. Mis meist saab?”",
      "Jätkusuutlikkuse nädala e-viktoriin kogu koolile! Auhinnasadu!",
    ],
  },
  {
    date: "23.10",
    name: "Reede",
    location: "Saaremaa Muuseum, Pargi Lasteaed",
    activities: [
      "Õppesuundades töötoad ja väljasõidud",
      "Saaremaa muuseumi näituse külastused “Käega katsutav kliima. Mis meist saab?”",
      "Kinnisvarahooldaja eriala näitab taset: Maailmakoristuspäev Pargi Lasteaias!",
    ],
  },
];

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Tagasi lehe algusesse">
      <picture>
        <source media="(max-width: 767px)" srcSet={`${A}/5b056.svg`} />
        <img src={`${A}/342c2.svg`} alt="Kuressaare Ametikool" />
      </picture>
    </a>
  );
}

function Navigation() {
  return (
    <nav aria-label="Põhinavigatsioon">
      <a href="#nadalast">Nädalast</a>
      <a href="#ajakava">Ajakava</a>
      <a href="#lihavaba">Lihavaba teisipäev</a>
    </nav>
  );
}

function ButtonLink({ mobileText = false }: { mobileText?: boolean }) {
  return (
    <a className="button" href="#ajakava">
      <span className={mobileText ? "desktop-label" : ""}>Tutvu ajakavaga</span>
      {mobileText && <span className="mobile-label">Vaata ajakava</span>}
      <span className="button-icon" aria-hidden="true">
        <img
          className="button-arrow button-arrow-default"
          src={`${A}/093b3.svg`}
          alt=""
        />
        <img
          className="button-arrow button-arrow-hover"
          src={`${A}/20bea.svg`}
          alt=""
        />
      </span>
    </a>
  );
}

function ResponsiveIcon({
  desktop,
  mobile,
  alt = "",
}: {
  desktop: string;
  mobile: string;
  alt?: string;
}) {
  return (
    <picture>
      <source media="(max-width: 767px)" srcSet={`${A}/${mobile}`} />
      <img src={`${A}/${desktop}`} alt={alt} />
    </picture>
  );
}

function TopicIcon({
  desktop,
  mobile,
  variant,
  motion,
}: {
  desktop: string;
  mobile: string;
  variant: string;
  motion: string;
}) {
  return (
    <span className={`topic-icon topic-icon-${motion}`} aria-hidden="true">
      <picture className="topic-icon-default">
        <source media="(max-width: 767px)" srcSet={`${A}/${mobile}`} />
        <img src={`${A}/${desktop}`} alt="" />
      </picture>
      <img
        className="topic-icon-variant"
        src={`${A}/${variant}`}
        alt=""
      />
    </span>
  );
}

function Header() {
  return (
    <header>
      <Logo />
      <Navigation />
      <ButtonLink />
    </header>
  );
}

function Hero() {
  const highlights = [
    ["1abf1.svg", "5 päeva põnevaid ja harivaid sündmusi"],
    ["435a1.svg", "Ülikoolide loengud jätkusuutlikkuse teemal"],
    ["a74b2.svg", "Töötoad ja külastused"],
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <h1>
            Käes on jätku-
            <br className="mobile-break" />
            suutlikkuse nädal
          </h1>
          <p className="date">19.–23. oktoober</p>
          <p>
            Viis päeva, et ümber mõelda, parandada ja uue mõtteviisiga ellu
            astuda. Liitu koolikogukonna üritustega, mis aitavad muuta meie
            igapäevaelu natuke rohelisemaks.
          </p>
          <ButtonLink mobileText />
        </div>
        <div className="hero-image">
          <img
            className="hero-photo hero-photo-default"
            src={`${A}/e699f.png`}
            alt="Tuulikud mere ääres"
          />
          <img
            className="hero-photo hero-photo-variant"
            src={`${A}/hero-variant-2.jpg`}
            alt="Värvilised puu- ja köögiviljad"
          />
          <div className="image-note hero-note hero-note-default">
            <strong>TULEVIK ON ROHELINE</strong>
            <span>
              Hea tulevik tuleb
              <br />
              siis, kui tegutseme koos.
            </span>
          </div>
          <div className="image-note hero-note hero-note-variant">
            <strong>LIHAVABA TEISIPÄEV</strong>
            <span>20.10 Kuressaare restoranis Kass</span>
          </div>
        </div>
      </section>
      <div className="highlights">
        {highlights.map(([icon, text]) => (
          <div key={text}>
            <img src={`${A}/${icon}`} alt="" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function About() {
  const cards = [
    {
      desktop: "feb3a.svg",
      mobile: "15469.svg",
      variant: "ab45b.svg",
      motion: "rotate",
      title: "Ülikoolide loengud ja töötoad jätkusuutlikkuse teemal",
      body: "Taastuvenergia, keskkonnakaitse ja säästlikkus, ringmajandus ja Saarlus.",
      color: "#dce8d4",
    },
    {
      desktop: "e153b.svg",
      mobile: "47537.svg",
      variant: "9dc67.svg",
      motion: "grow",
      title: "Lihavaba teisipäev",
      body: "Selleks, et tõsta teadlikkust liha liigse tarbimise terviseriskidest ja selle keskkonnamõjudest. Kooliperele ja restoranikülalistele tutvustatakse ÜRO säästva arengu eesmärke.",
      color: "#f0ebcf",
    },
    {
      desktop: "537bf.svg",
      mobile: "35468.svg",
      variant: "f41f8.svg",
      motion: "grow",
      title: "Muuseumikülastused ja väljasõidud",
      body: "Õppesuundades toimuvad põnevad väljasõidud. Saaremaa muuseumi külastused ja maailmakoristuspäev.",
      color: "#f3ddd0",
    },
  ];

  return (
    <section className="about section-pad" id="nadalast">
      <div className="about-intro">
        <div>
          <p className="eyebrow">JÄTKUSUUTLIKKUSE NÄDALAST</p>
          <h2>Parem homme algab sinust.</h2>
        </div>
        <div className="about-copy">
          <p>Kas tahad teada, milline on sinu keskkonna jalajälg?</p>
          <p>
            Jätkusuutlikkuse nädalal saad seda kõike teada läbi praktiliste
            töötubade ja tänu põnevatele väljasõitudele.
          </p>
        </div>
      </div>
      <div className="cards">
        {cards.map((card) => (
          <article style={{ backgroundColor: card.color }} key={card.title}>
            <TopicIcon
              desktop={card.desktop}
              mobile={card.mobile}
              variant={card.variant}
              motion={card.motion}
            />
            <div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Meatless() {
  return (
    <section className="meatless section-pad" id="lihavaba">
      <div className="meatless-copy">
        <p className="meatless-date">20.10.2026</p>
        <h2>LIHAVABA TEISIPÄEV</h2>
        <div className="restaurant">
          <img src={`${A}/14551.svg`} alt="" />
          <span>Kuressaare Ametikooli restoranis Kass</span>
        </div>
        <h3>Miks me seda teeme?</h3>
        <p>Lihavaba päeva eesmärk on:</p>
        <ul>
          <li>
            Tõsta teadlikkust liha liigse tarbimise terviseriskidest ja selle
            keskkonnamõjudest.
          </li>
          <li>
            Tutvustada kooliperele ja restoranikülalistele ÜRO säästva arengu
            eesmärke.
          </li>
        </ul>
      </div>
      <div className="meat-image">
        <picture className="meat-photo meat-photo-default">
          <source media="(max-width: 767px)" srcSet={`${A}/a83b5.png`} />
          <img src={`${A}/b2c3f.png`} alt="Peotäis liha ja värsked köögiviljad" />
        </picture>
        <img
          className="meat-photo meat-photo-variant"
          src={`${A}/meatless-variant-2.jpg`}
          alt="Laps hoiab brokolit ja näitab pöialt"
        />
        <div className="image-note meat-note">
          <strong>LIHAVABA TEISIPÄEV</strong>
          <span>Kohtume 20. oktoobril restoranis Kass</span>
        </div>
      </div>
    </section>
  );
}

function Schedule() {
  return (
    <section className="schedule section-pad" id="ajakava">
      <p className="eyebrow">NÄDALA KAVA</p>
      <h2>Viis päeva. Palju sündmusi.</h2>
      <div className="day-list">
        {days.map((day) => (
          <article className="day" key={day.date}>
            <p className="day-date">
              <span className="mobile-day">{day.name.toUpperCase()} </span>
              {day.date}
            </p>
            <div className="day-events">
              <h3>{day.name}</h3>
              <ul>
                {day.activities.map((activity, index) => (
                  <li
                    className={day.date === "20.10" && index === 0 ? "bold" : ""}
                    key={activity}
                  >
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
            <div className="location">
              <img src={`${A}/fcc51.svg`} alt="" />
              <span>{day.location}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <>
      <aside className="closing">
        <div className="closing-message">
          <ResponsiveIcon desktop="48ec9.svg" mobile="cabcb.svg" />
          <p>Tule osalema ja saad teadlikumaks!</p>
        </div>
        <div className="closing-logos" aria-label="Partnerid">
          <picture>
            <source media="(max-width: 767px)" srcSet={`${A}/e5aa8.svg`} />
            <img src={`${A}/a7c2d.svg`} alt="Terve Kool" />
          </picture>
          <picture>
            <source media="(max-width: 767px)" srcSet={`${A}/9e16f.svg`} />
            <img
              src={`${A}/280e1.svg`}
              alt="Euroopa Liit, Euroopa Regionaalarengu Fond ja Eesti tuleviku heaks"
            />
          </picture>
          <picture>
            <source media="(max-width: 767px)" srcSet={`${A}/bdfb0.svg`} />
            <img src={`${A}/ac4a9.svg`} alt="Inseneriakadeemia" />
          </picture>
        </div>
      </aside>
      <footer>
        <div className="footer-nav">
          <Logo />
          <Navigation />
        </div>
        <div className="footer-meta">
          <span>www.ametikool.ee</span>
          <span>19.–23. oktoober</span>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <main id="top">
      <Header />
      <Hero />
      <About />
      <Meatless />
      <Schedule />
      <Footer />
    </main>
  );
}
