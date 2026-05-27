import React, { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  DoorOpen,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Star,
  Warehouse,
  X,
} from "lucide-react";

const PHONE = "03 20 41 31 43";
const MOBILE = "06 77 32 93 03";
const PHONE_LINK = "tel:+33320413143";
const MOBILE_LINK = "tel:+33677329303";
const EMAIL = "contact@la-fdf.fr";
const ADDRESS = "Rue Armel Marsy, Sainghin-en-Mélantois";
const WEB3FORMS_ACCESS_KEY = "03dd7b28-8a9f-4b91-af2a-7d064c23a69b";

const services = [
  {
    icon: Building2,
    title: "Fenêtres PVC / ALU",
    text: "Menuiseries sur mesure, isolation renforcée et finitions haut de gamme.",
  },
  {
    icon: DoorOpen,
    title: "Portes d’entrée",
    text: "Portes contemporaines, sécurisées et élégantes pour valoriser votre façade.",
  },
  {
    icon: Warehouse,
    title: "Portes de garage",
    text: "Solutions modernes, robustes et adaptées à votre habitation.",
  },
];

const projects = [
  { title: "Porte d’entrée aluminium", category: "Entrée premium", image: "/porte-entree.jpg" },
  { title: "Baie vitrée anthracite", category: "Coulissant grande largeur", image: "/hero-baie.jpg" },
  { title: "Coulissant moderne", category: "Menuiserie aluminium", image: "/coulissant.jpg" },
  { title: "Porte contemporaine", category: "Entrée design", image: "/porte-design.jpg" },
  { title: "Porte de garage sectionnelle", category: "Garage", image: "/porte-garage.jpg" },
  { title: "Fenêtre façade", category: "Rénovation extérieure", image: "/fenetre-facade.jpg" },
];

const reviews = [
  "Travail sérieux, pose propre et très bon accompagnement.",
  "Devis clair, équipe disponible et résultat très qualitatif.",
  "Menuiseries modernes, finitions propres et chantier bien suivi.",
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setSending(true);
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "Nouvelle demande de devis - La Française des Fenêtres",
      from_name: "Landing Page La FDF",
      ...Object.fromEntries(formData),
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l’envoi");
      }

      setStatus("Merci, votre demande a bien été envoyée. Nous vous recontactons rapidement.");
      form.reset();
    } catch (error) {
      setStatus("Une erreur est survenue. Vous pouvez aussi nous appeler directement au 06 77 32 93 03.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main>
      <header className="header">
        <a href="#accueil" className="logoBox" aria-label="Accueil La Française des Fenêtres">
          <img src="/logo-la-fdf.jpg" alt="Logo La Française des Fenêtres" />
        </a>

        <nav className="desktopNav">
          <a href="#services">Services</a>
          <a href="#realisations">Réalisations</a>
          <a href="#avis">Avis</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="desktopActions">
          <a className="topPhone" href={MOBILE_LINK}>{MOBILE}</a>
          <a className="btn btnRed btnSmall" href="#contact">Devis gratuit</a>
        </div>

        <button className="menuBtn" onClick={() => setMenuOpen(true)} aria-label="Ouvrir le menu">
          <Menu />
        </button>
      </header>

      {menuOpen && (
        <div className="mobileMenu">
          <button className="closeMenu" onClick={() => setMenuOpen(false)} aria-label="Fermer le menu">
            <X />
          </button>
          <a onClick={() => setMenuOpen(false)} href="#services">Services</a>
          <a onClick={() => setMenuOpen(false)} href="#realisations">Réalisations</a>
          <a onClick={() => setMenuOpen(false)} href="#avis">Avis</a>
          <a onClick={() => setMenuOpen(false)} href="#contact">Contact</a>
          <a className="btn btnRed" href={MOBILE_LINK}>Appeler maintenant</a>
        </div>
      )}

      <section id="accueil" className="hero">
        <div className="heroBg" />
        <div className="heroOverlay" />

        <div className="heroContent">
          <div className="pill">
            <BadgeCheck size={18} />
            Menuiseries sur mesure • PVC & aluminium • Pose soignée
          </div>

          <h1>Fenêtres, portes et volets sur mesure dans la métropole lilloise.</h1>

          <p>
            La Française des Fenêtres vous accompagne avec des menuiseries modernes,
            performantes et durables pour valoriser votre habitation.
          </p>

          <div className="heroButtons">
            <a className="btn btnRed" href="#contact">
              Demander un devis <ArrowRight size={18} />
            </a>
            <a className="btn btnGlass" href={MOBILE_LINK}>
              <Phone size={18} /> {MOBILE}
            </a>
          </div>

          <div className="heroStats">
            <div><strong>Devis</strong><span>Gratuit</span></div>
            <div><strong>Pose</strong><span>Soignée</span></div>
            <div><strong>Finitions</strong><span>Premium</span></div>
          </div>
        </div>
      </section>

      <section className="proof">
        <div><ShieldCheck /><span>Accompagnement personnalisé</span></div>
        <div><CheckCircle2 /><span>Fabrication sur mesure</span></div>
        <div><BadgeCheck /><span>Design moderne & durable</span></div>
      </section>

      <section id="services" className="section">
        <div className="sectionHead">
          <span>Nos solutions</span>
          <h2>Des menuiseries pensées pour durer.</h2>
          <p>
            Fenêtres, portes, coulissants et garages : chaque projet est étudié avec soin,
            pour un résultat esthétique, fiable et performant.
          </p>
        </div>

        <div className="serviceGrid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="serviceCard" key={service.title}>
                <div className="iconBox"><Icon /></div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="realisations" className="section dark">
        <div className="sectionHead">
          <span>Réalisations</span>
          <h2>Un rendu propre, moderne et haut de gamme.</h2>
          <p>
            Quelques exemples de poses : portes d’entrée, baies vitrées,
            fenêtres anthracite et portes de garage.
          </p>
        </div>

        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.title}>
              <img src={project.image} alt={project.title} />
              <div>
                <span>{project.category}</span>
                <h3>{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="avis" className="section reviews">
        <div className="sectionHead">
          <span>Avis clients</span>
          <h2>Une entreprise de proximité, orientée qualité.</h2>
        </div>

        <div className="reviewGrid">
          {reviews.map((review, index) => (
            <article className="reviewCard" key={review}>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => <Star key={star} fill="currentColor" />)}
              </div>
              <p>“{review}”</p>
              <strong>Client La FDF #{index + 1}</strong>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contactInfo">
          <span>Contact</span>
          <h2>Parlez-nous de votre projet.</h2>
          <p>
            Un projet de fenêtres, porte d’entrée, baie vitrée, volets ou garage ?
            Envoyez votre demande, nous vous recontactons rapidement.
          </p>

          <a href={PHONE_LINK}><Phone /> Fixe : {PHONE}</a>
          <a href={MOBILE_LINK}><Phone /> Mobile : {MOBILE}</a>
          <a href={`mailto:${EMAIL}`}><Mail /> {EMAIL}</a>
          <div><MapPin /> {ADDRESS}</div>
        </div>

        <form className="contactForm" onSubmit={handleSubmit}>
          <label>Nom<input required name="Nom" placeholder="Votre nom" /></label>
          <label>Téléphone<input required name="Téléphone" placeholder="Votre téléphone" /></label>
          <label>Ville<input name="Ville" placeholder="Votre ville" /></label>

          <label>
            Projet
            <select name="Projet">
              <option>Fenêtres PVC / ALU</option>
              <option>Porte d’entrée</option>
              <option>Baie vitrée / coulissant</option>
              <option>Volets roulants</option>
              <option>Porte de garage</option>
              <option>Autre demande</option>
            </select>
          </label>

          <label>Message<textarea name="Message" rows="4" placeholder="Décrivez votre besoin" /></label>

          <button className="btn btnRed formBtn" disabled={sending}>
            {sending ? "Envoi en cours..." : "Envoyer ma demande"} <ArrowRight size={18} />
          </button>

          {status && <p className="formStatus">{status}</p>}
        </form>
      </section>

      <footer>
        © 2026 La Française des Fenêtres. Tous droits réservés.
      </footer>

      <div className="mobileBar">
        <a href={MOBILE_LINK}>Appeler</a>
        <a href="#contact">Devis gratuit</a>
      </div>
    </main>
  );
}
