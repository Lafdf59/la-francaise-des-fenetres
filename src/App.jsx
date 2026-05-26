import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  ShieldCheck,
  Menu,
  Phone,
  MapPin,
  Mail,
  Home,
  DoorOpen,
  BadgeCheck,
} from "lucide-react";
import "./index.css";

const PHONE = "03 20 41 31 43";
const PHONE_LINK = "tel:+33320413143";
const EMAIL = "contact@la-fdf.fr";
const EMAIL_LINK = `mailto:${EMAIL}?subject=Demande%20de%20devis%20-%20La%20Française%20des%20Fenêtres`;
const FORM_ACTION = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "03dd7b28-8a9f-4b91-af2a-7d064c23a69b";
const ADDRESS = "Rue Armel Marsy, Sainghin-en-Mélantois";

function Button({ children, className = "", variant = "default", size = "default", ...props }) {
  const base =
    "inline-flex items-center justify-center font-semibold transition disabled:cursor-not-allowed disabled:opacity-70";
  const sizes = size === "lg" ? "min-h-12 px-6 py-3 text-base" : "px-4 py-2 text-sm";
  const variants =
    variant === "outline"
      ? "border border-white/20 bg-transparent text-white hover:bg-white/10"
      : "bg-[#DC2626] text-white hover:bg-[#B91C1C]";
  return (
    <button className={`${base} ${sizes} ${variants} ${className}`} {...props}>
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

export default function LandingPage() {
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);
    setFormStatus("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "Nouvelle demande de devis - La Française des Fenêtres",
      from_name: "Landing Page La FDF",
      ...Object.fromEntries(formData),
    };

    try {
      const response = await fetch(FORM_ACTION, {
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

      setFormStatus("Merci, votre demande a bien été envoyée. Nous vous recontactons rapidement.");
      event.currentTarget.reset();
    } catch (error) {
      setFormStatus("Une erreur est survenue. Vous pouvez aussi nous appeler directement au 03 20 41 31 43.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const benefits = [
    "Fenêtres PVC et aluminium sur mesure",
    "Volets roulants, portes d’entrée et portes de garage",
    "Pose soignée par des professionnels qualifiés",
    "Isolation thermique et phonique haute performance",
  ];

  const services = [
    {
      icon: Home,
      title: "Fenêtres PVC / ALU",
      text: "Des menuiseries performantes, élégantes et fabriquées selon vos dimensions.",
    },
    {
      icon: ShieldCheck,
      title: "Volets roulants",
      text: "Plus de confort, de sécurité et d’isolation pour votre habitation.",
    },
    {
      icon: DoorOpen,
      title: "Portes entrée / garage",
      text: "Des ouvertures robustes, esthétiques et adaptées au style de votre maison.",
    },
  ];

  const reviews = [
    {
      name: "Client Google",
      rating: 5,
      text: "Équipe sérieuse, travail propre et résultat conforme à nos attentes.",
    },
    {
      name: "Client Google",
      rating: 5,
      text: "Très bon accompagnement du devis jusqu’à la pose. Je recommande.",
    },
    {
      name: "Client Google",
      rating: 5,
      text: "Fenêtres de qualité, délais respectés et finitions impeccables.",
    },
  ];

  const stats = [
    { label: "Devis", value: "Gratuit" },
    { label: "Certification", value: "RGE" },
    { label: "Fabrication", value: "Sur mesure" },
  ];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#111827_0%,_#05070D_52%,_#020308_100%)] text-white">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#05070D]/85 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <a href="#accueil" className="flex items-center gap-3" aria-label="Accueil La Française des Fenêtres">
            <img
              src="/logo-la-fdf.jpg"
              alt="Logo La Française des Fenêtres"
              className="h-14 w-auto object-contain md:h-16"
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-300 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#qualites" className="hover:text-white">Garanties</a>
            <a href="#avis" className="hover:text-white">Avis</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href={PHONE_LINK} className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">
              {PHONE}
            </a>
            <a href="#contact">
              <Button className="rounded-full">Devis gratuit</Button>
            </a>
          </div>

          <Menu className="md:hidden" />
        </div>
      </header>

      <section id="accueil" className="relative overflow-hidden px-5 pb-20 pt-10 md:pb-28 md:pt-16">
        <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#1E3A8A]/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-[#DC2626]/10 blur-3xl" />

        <div className="relative z-10 mx-auto mb-10 max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl">
          <div className="grid items-center gap-6 p-6 md:grid-cols-[1fr_auto] md:p-8">
            <div className="flex flex-wrap items-center gap-5">
              <BadgeCheck className="h-10 w-10 text-white" />
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-neutral-400">Sur mesure • Qualibat RGE</p>
                <p className="mt-1 text-xl font-bold md:text-3xl">La Française des Fenêtres</p>
              </div>
            </div>
            <a href={PHONE_LINK} className="rounded-2xl bg-[#DC2626] px-6 py-4 text-center text-3xl font-black tracking-wider text-white transition hover:bg-[#B91C1C] md:text-5xl">
              {PHONE}
            </a>
          </div>
          <div className="grid border-t border-white/10 md:grid-cols-3">
            {services.map(({ icon: Icon, title }) => (
              <div key={title} className="flex items-center justify-center gap-3 border-white/10 px-6 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white md:border-r md:text-base last:border-r-0">
                <Icon className="h-7 w-7" />
                {title}
              </div>
            ))}
          </div>
          <div className="bg-[#1E3A8A] px-6 py-4 text-center text-lg font-semibold uppercase tracking-[0.25em] text-white md:text-2xl">
            Rue Armel Marsy - Sainghin en Mélantois
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-gradient-to-r from-[#1E3A8A]/35 to-[#DC2626]/35 px-4 py-2 text-sm text-neutral-100">
              Fabricant & installateur de menuiseries sur mesure
            </div>
            <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
              Des fenêtres plus belles, plus isolantes, plus durables.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              Fenêtres PVC/ALU, volets roulants, portes d’entrée et portes de garage : une solution complète, à vos couleurs, posée avec soin par La Française des Fenêtres.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact">
                <Button size="lg" className="w-full rounded-full px-8 sm:w-auto">
                  Demander mon devis gratuit <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href={PHONE_LINK}>
                <Button size="lg" variant="outline" className="w-full rounded-full px-8 sm:w-auto">
                  <Phone className="mr-2 h-4 w-4" /> Appeler maintenant
                </Button>
              </a>
            </div>

            <div id="qualites" className="mt-8 flex flex-wrap gap-3 text-sm text-neutral-300">
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">✓ QUALIBAT RGE</div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">✓ Sur mesure</div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">✓ Devis gratuit</div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2">✓ Pose professionnelle</div>
            </div>

            <div className="mt-8 space-y-3">
              {benefits.map((item) => (
                <div key={item} className="flex items-center gap-3 text-neutral-300">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-[#0B1020] p-6">
              <img
                src="/panneau-la-fdf.png"
                alt="Panneau La Française des Fenêtres"
                className="mb-6 rounded-2xl border border-white/10"
              />
              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-white/5 p-4 text-center">
                    <p className="text-sm text-neutral-400">{stat.label}</p>
                    <p className="mt-1 text-xl font-bold">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-neutral-400">Nos solutions</p>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">Vos ouvertures, conçues pour durer.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map(({ icon: Icon, title, text }) => (
              <Card key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] text-white shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-r from-[#1E3A8A] to-[#DC2626] p-3">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">{title}</h3>
                  <p className="leading-7 text-neutral-300">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="avis" className="overflow-hidden px-5 py-20">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-neutral-400">Avis clients Google</p>
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">Ils nous font confiance.</h2>
          <p className="mt-4 text-neutral-400">La section est prête à recevoir ton widget Google Reviews Trustindex, Elfsight ou SociableKIT.</p>
        </div>

        <div className="relative mx-auto max-w-7xl overflow-hidden">
          <motion.div animate={{ x: [0, -1180] }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }} className="flex gap-6">
            {[...reviews, ...reviews, ...reviews].map((review, index) => (
              <div key={index} className="min-w-[340px] rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:min-w-[390px]">
                <div className="mb-4 flex items-center gap-1 text-[#FACC15]">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#FACC15] text-[#FACC15]" />
                  ))}
                </div>
                <p className="leading-8 text-neutral-200">“{review.text}”</p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-sm text-neutral-400">Avis Google</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-24 pt-10">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[2rem] border border-white/10 bg-white p-6 text-neutral-950 shadow-2xl md:grid-cols-[1fr_0.9fr] md:p-10">
          <div className="rounded-[1.5rem] bg-neutral-950 p-8 text-white">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-neutral-400">Contact</p>
            <h2 className="text-4xl font-black tracking-tight">Demandez votre devis gratuit.</h2>
            <p className="mt-4 leading-7 text-neutral-300">
              Un projet de remplacement de fenêtres, volets ou portes ? Contactez La Française des Fenêtres pour un accompagnement clair et rapide.
            </p>
            <div className="mt-8 space-y-4">
              <a href={PHONE_LINK} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 hover:bg-white/15">
                <Phone className="h-5 w-5" /> {PHONE}
              </a>
              <a href={EMAIL_LINK} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 hover:bg-white/15">
                <Mail className="h-5 w-5" /> Demande par email
              </a>
              <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4">
                <MapPin className="h-5 w-5" /> {ADDRESS}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 rounded-[1.5rem] bg-neutral-100 p-6">
            <input type="hidden" name="Sujet" value="Nouvelle demande de devis - La Française des Fenêtres" />
            <input type="hidden" name="Email de destination" value={EMAIL} />
            <div>
              <label className="mb-2 block text-sm font-semibold">Nom</label>
              <input required name="Nom" className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 outline-none focus:border-[#1E3A8A]" placeholder="Votre nom" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold">Téléphone</label>
              <input required name="Téléphone" className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 outline-none focus:border-[#1E3A8A]" placeholder="Votre téléphone" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold">Projet</label>
              <select name="Projet" className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 outline-none focus:border-[#1E3A8A]">
                <option>Fenêtres PVC / ALU</option>
                <option>Volets roulants</option>
                <option>Porte d’entrée</option>
                <option>Porte de garage</option>
                <option>Autre demande</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold">Message</label>
              <textarea name="Message" rows={4} className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 outline-none focus:border-[#1E3A8A]" placeholder="Décrivez rapidement votre besoin" />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full rounded-full py-6 text-base">
              {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            {formStatus && (
              <p className="rounded-2xl bg-white p-4 text-center text-sm font-medium text-neutral-700">
                {formStatus}
              </p>
            )}
            <p className="text-center text-xs text-neutral-500">Formulaire sécurisé et connecté avec Web3Forms.</p>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-neutral-500">
        <div className="mb-4 flex items-center justify-center gap-2">
          <div className="h-1 w-20 rounded-full bg-[#1E3A8A]" />
          <div className="h-1 w-20 rounded-full bg-white/20" />
          <div className="h-1 w-20 rounded-full bg-[#DC2626]" />
        </div>
        <p>© 2026 La Française des Fenêtres. Tous droits réservés.</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<LandingPage />);
