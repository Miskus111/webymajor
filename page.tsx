/* eslint-disable @next/next/no-img-element */
"use client";

import { FormEvent, useState } from "react";

const projects = [
  { name: "Střechy EMMA", type: "Řemeslo · firemní web", image: "/projects/strechy-emma.webp", color: "#e98a21", note: "Přímá cesta od problému k telefonátu. Důraz na služby, region a rychlý kontakt.", size: "wide" },
  { name: "Servis Köstler", type: "Technické služby · CZ/DE", image: "/projects/servis-kostler.webp", color: "#65a9ff", note: "Důvěryhodná lokální prezentace pro servis klimatizací a tepelných čerpadel.", size: "standard" },
  { name: "Zahradní služby MAKO", type: "Lokální služba · poptávkový web", image: "/projects/mako.webp", color: "#67d39e", note: "Klidná přírodní identita a jasná nabídka pro zákazníky z regionu.", size: "standard" },
  { name: "Saint Void", type: "Fashion · e-commerce koncept", image: "/projects/saint-void.webp", color: "#d9d6cf", note: "Atmosférický digitální svět pro streetwear značku. Minimum prvků, maximum charakteru.", size: "standard" },
  { name: "AREX CZ", type: "B2B · firemní prezentace", image: "/projects/arex-cz.webp", color: "#ffc400", note: "Přehledná prezentace služeb a výhod pro společnost z oblasti pohonných hmot.", size: "standard" },
  { name: "Láces Barber", type: "Barber · rezervace", image: "/projects/laces-barber.webp", color: "#c9aa77", note: "Odvážný editorial design postavený na autentických fotografiích a silné typografii.", size: "wide" },
];

const services = [
  { number: "01", title: "Web od prvního nápadu", text: "Směr, struktura, texty, design i spuštění. Nemusíte skládat projekt z pěti různých dodavatelů.", tags: ["Webdesign", "Copywriting", "Mobilní verze", "SEO základ"] },
  { number: "02", title: "Značka, která drží pohromadě", text: "Logo, barvy a grafika navržené tak, aby web, sociální sítě i tisk působily jako jedna značka.", tags: ["Vizuální styl", "Logo", "Sociální sítě", "Tiskoviny"] },
  { number: "03", title: "Propagace po spuštění", text: "Web nemusí čekat, až ho někdo náhodou najde. Pomohu s kampaní, obsahem i dalším rozvojem.", tags: ["Meta Ads", "Google Ads", "Kreativa", "Správa"] },
];

const prices = [
  { name: "Start", price: "od 4 000 Kč", for: "Pro živnostníka nebo menší službu", items: ["Web do 5 sekcí", "Mobilní verze", "Kontaktní formulář", "Základní SEO"] },
  { name: "Firemní", price: "od 8 000 Kč", for: "Pro firmu, která chce působit profesionálně", items: ["Rozsáhlejší web", "Texty a struktura", "Individuální vizuální směr", "Analytika a SEO"] },
  { name: "Růst", price: "od 13 000 Kč", for: "Web a propagace v jednom směru", items: ["Firemní web", "Vizuální identita", "Reklamní kreativa", "Nastavení kampaní"] },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function sendInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setFormStatus("submitting");
    try {
      const response = await fetch("https://formspree.io/f/xdayqgln", { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Form submission failed");
      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav shell" aria-label="Hlavní navigace">
          <a className="brand" href="#top" aria-label="Weby Major – domů"><span>WEBY</span><strong>MAJOR</strong></a>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#prace" onClick={closeMenu}>Práce</a><a href="#sluzby" onClick={closeMenu}>Služby</a><a href="#cenik" onClick={closeMenu}>Ceník</a><a href="#kontakt" onClick={closeMenu}>Kontakt</a><a className="nav-call" href="tel:+420602202009">602 202 009</a>
          </div>
          <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"}><span>{menuOpen ? "ZAVŘÍT" : "MENU"}</span><i aria-hidden="true">{menuOpen ? "×" : "↗"}</i></button>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-kicker"><span>Digitální studio</span><span>Český Brod / Praha</span></div>
        <h1>Webové stránky,<br />které posunou <em>vaši značku.</em></h1>
        <div className="hero-bottom">
          <p>Navrhuji profesionální weby pro firmy a živnostníky. Každý projekt propojuje promyšlenou strukturu, individuální design a jasný obchodní cíl.</p>
          <div className="hero-actions"><a className="button primary" href="#prace">Prohlédnout realizace <span>↓</span></a><a className="button ghost" href="#kontakt">Probrat projekt <span>↗</span></a></div>
        </div>
        <div className="hero-ticker" aria-hidden="true"><span>WEBY</span><i>✦</i><span>DESIGN</span><i>✦</i><span>TEXTY</span><i>✦</i><span>REKLAMA</span></div>
      </section>

      <section className="work-section" id="prace">
        <div className="shell section-intro split-intro">
          <div><span className="eyebrow">Vybrané realizace / 2026</span><h2>Různé obory.<br />Vždy řešení na míru.</h2></div>
          <p>Řemeslo, technická firma, zahradnictví, móda, B2B i barber. Každý vizuální směr vychází z konkrétní značky, její nabídky a zákazníků.</p>
        </div>
        <div className="portfolio shell">
          {projects.map((project, index) => (
            <article className={`project ${project.size}`} key={project.name} style={{ "--project": project.color } as React.CSSProperties}>
              <a className="project-media" href={project.image} target="_blank" rel="noreferrer" aria-label={`Zvětšit náhled projektu ${project.name}`}><img src={project.image} alt={`Úvodní stránka projektu ${project.name}`} width="1920" height="1080" loading={index < 2 ? "eager" : "lazy"} decoding="async" /><span className="project-index">0{index + 1}</span></a>
              <div className="project-info"><div><h3>{project.name}</h3><span>{project.type}</span></div><p>{project.note}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto"><div className="shell manifesto-grid">
        <span className="eyebrow">Můj přístup</span><p className="manifesto-line">Design vychází ze strategie.</p><p className="manifesto-line muted">Každý detail podporuje značku i rozhodování zákazníka.</p>
        <div className="manifesto-note"><span>01</span><p>Nejdříve si ujasníme cíl, nabídku a zákazníka. Teprve potom vzniká struktura, texty a vizuální podoba webu.</p></div>
      </div></section>

      <section className="services shell" id="sluzby">
        <div className="section-intro split-intro"><div><span className="eyebrow">Kompletní řešení</span><h2>Od prvního návrhu<br />po spuštění a propagaci.</h2></div><p>Jedna přímá komunikace, konzistentní vizuální směr a výsledek připravený pro reálné podnikání.</p></div>
        <div className="service-list">{services.map((service) => <article className="service-row" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><div className="tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div>
      </section>

      <section className="process-section"><div className="shell process-grid">
        <div className="process-title"><span className="eyebrow">Jak spolupráce probíhá</span><h2>Jasný proces.<br />Přehledný výsledek.</h2></div>
        <ol className="steps"><li><span>01</span><div><h3>Krátká domluva</h3><p>Řeknete mi, co děláte, pro koho a co má nový web přinést.</p></div></li><li><span>02</span><div><h3>Směr a první návrh</h3><p>Připravím strukturu, hlavní myšlenku a vizuální směr projektu.</p></div></li><li><span>03</span><div><h3>Tvorba a připomínky</h3><p>Web postupně dokončím a společně doladíme konkrétní detaily.</p></div></li><li><span>04</span><div><h3>Spuštění</h3><p>Web připravím pro mobil, vyhledávače a předám vše potřebné.</p></div></li></ol>
      </div></section>

      <section className="pricing shell" id="cenik">
        <div className="section-intro split-intro"><div><span className="eyebrow">Orientační ceny</span><h2>Transparentní rozsah.<br />Jasná investice.</h2></div><p>Finální cenu vždy určím podle skutečného rozsahu. Před zahájením přesně víte, co projekt zahrnuje a kolik bude stát.</p></div>
        <div className="price-grid">{prices.map((price, index) => <article className={`price-card ${index === 1 ? "featured" : ""}`} key={price.name}><div className="price-top"><span>0{index + 1}</span>{index === 1 && <b>Nejčastější volba</b>}</div><h3>{price.name}</h3><p className="price-for">{price.for}</p><strong>{price.price}</strong><ul>{price.items.map(item => <li key={item}>{item}</li>)}</ul><a href="#kontakt">Chci nabídku <span>↗</span></a></article>)}</div>
      </section>

      <section className="contact" id="kontakt"><div className="shell contact-grid">
        <div className="contact-copy"><span className="eyebrow">Máte nový projekt?</span><h2>Proměňme vaši představu<br /><em>v profesionální web.</em></h2><p>Popište mi stručně svůj projekt nebo rovnou zavolejte. Doporučím vhodné řešení, orientační rozpočet a nejbližší možný termín.</p><div className="contact-links"><a href="tel:+420602202009"><small>Telefon</small><span>602 202 009 ↗</span></a><a href="mailto:webymajor@gmail.com"><small>E-mail</small><span>webymajor@gmail.com ↗</span></a></div></div>
        <form className="inquiry" action="https://formspree.io/f/xdayqgln" method="POST" onSubmit={sendInquiry}><input type="hidden" name="_subject" value="Nová poptávka z webu Weby Major" /><label>Jméno / firma<input name="name" required autoComplete="name" placeholder="Jak vám mám říkat?" /></label><label>Telefon nebo e-mail<input name="contact" required placeholder="Kam se vám ozvat?" /></label><label>Co potřebujete?<select name="project" defaultValue="Firemní web"><option>Firemní web</option><option>Jednoduchý web</option><option>E-shop</option><option>Web + reklama</option><option>Grafika / branding</option><option>Jiné</option></select></label><label>Krátce o projektu<textarea name="message" required placeholder="Co děláte a s čím potřebujete pomoct?" /></label><button type="submit" disabled={formStatus === "submitting"}>{formStatus === "submitting" ? "Odesílám…" : "Odeslat poptávku"} <span>↗</span></button><p className={`form-status ${formStatus}`} aria-live="polite">{formStatus === "success" && "Děkuji. Poptávka byla úspěšně odeslána."}{formStatus === "error" && "Odeslání se nepodařilo. Zkuste to znovu nebo mi zavolejte."}</p><small>Vaše údaje použiji pouze pro odpověď na tuto poptávku. Odpovídám zpravidla do 24 hodin.</small></form>
      </div></section>

      <footer><div className="shell footer-grid"><a className="brand" href="#top"><span>WEBY</span><strong>MAJOR</strong></a><p>Weby, grafika a propagace<br />pro firmy a živnostníky.</p><div><a href="#prace">Práce</a><a href="#sluzby">Služby</a><a href="#cenik">Ceník</a></div><div><a href="tel:+420602202009">602 202 009</a><a href="mailto:webymajor@gmail.com">webymajor@gmail.com</a></div></div><div className="shell footer-bottom"><span>© 2026 Weby Major</span><span>Promyšlený design. Jasný obchodní cíl.</span></div></footer>
      <div className="sticky-contact"><span>Chcete nový web?</span><a href="tel:+420602202009">Zavolat</a><a className="yellow" href="#kontakt">Mám zájem ↗</a></div>
    </main>
  );
}
