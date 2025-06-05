import { InlineCode } from "@/once-ui/components";

const person = {
  firstname: "Luca",
  lastname: "Calvetti",
  get name() {
    return `${this.firstname} ${this.lastname}`;
  },
  role: "Worker - Installer - Programmer",
  avatar: "/images/avatar.jpg",
  location: "europe/rome", // expecting the iana time zone identifier, e.g., 'europe/vienna'
  languages: ["italian", "english"], // optional: leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>subscribe to {person.firstname}'s newsletter</>,
  description: (
    <>
      I occasionally write about technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // links are automatically displayed.
  // import new icons in /once-ui/icons.ts
  {
    name: "github",
    icon: "github",
    link: "https://github.com/calvuzs3",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/luca-calvetti-61691753/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:calvetti.luca@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Mani in pasta, codice per passione</>,
  subline: (
    <>
      Sono Luca, vivo in Italia.
      <br />
      Di giorno lavoro nei reparti industriali,
      <br />
      di sera programmo per il puro divertimento di creare.
      <br />
      <br />
      <code>"First make it work, then make it better"</code>
      <br />
      <small>— La mia filosofia, dal reparto al codice</small>
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduzione",
    description: (
      <>
        Due mondi che si completano: l'esperienza pratica maturata in anni di
        lavoro industriale a ciclo continuo, e la passione per la programmazione
        che mi accompagna nei ritagli di tempo. Le competenze tecniche del
        lavoro quotidiano si fondono con la creatività del coding, creando un
        approccio unico ai problemi e alle soluzioni.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Esperienze lavorative",
    experiences: [
      {
        company: "Cartiere del Garda S.p.A.",
        timeframe: "2010 - Oggi",
        role: "Operaio a ciclo continuo",
        achievements: [
          <>Conduttore specializzato di bobinatrici industriali</>,
          <>
            Esperienza quotidiana su diverse tipologie di macchinari:
            <ul>
              <li>Jagenberg - VariRoll</li>
              <li>Jagenberg - VariPlus</li>
              <li>Voith - VariFlex</li>
            </ul>
          </>,
          <>
            Prossimamente formazione sulla nuova installazione:
            <ul>
              <li>ACelli/Andritz - ACelli</li>
            </ul>
          </>,
          <>Lavoro in team su turni H24, 4 giorni ON / 2 giorni OFF</>,
          <>Focus costante su sicurezza, qualità e ottimizzazione processi</>,
        ],
        images: [],
      },
      {
        company: "Maxidraulica - Hidro",
        timeframe: "2000 - 2010",
        role: "Operaio specializzato",
        achievements: [
          <>Installatore e manutentore di impianti</>,
          <>
            Competenze sviluppate in:
            <ul>
              <li>Impianti solari - circolazione naturale e forzata</li>
              <li>
                Sistemi termici - riscaldamento tradizionale, a pavimento e
                parete
              </li>
              <li>Climatizzazione per utenze domestiche</li>
              <li>Impianti gas per utenze domestiche</li>
              <li>Sistemi idrici per utenze domestiche</li>
            </ul>
          </>,
          <>
            Problem solving pratico e adattamento a diverse situazioni di
            cantiere
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studi",
    institutions: [
      {
        name: "ITT Marconi - Rovereto",
        description: (
          <>Informatica - Le prime basi che hanno acceso la passione</>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills & Passioni",
    skills: [
      {
        title: "Sviluppo Android con AI",
        description: (
          <>
            Creo app Android usando Java e l'ausilio dell'intelligenza
            artificiale. Il mio progetto QDue dimostra come l'AI possa
            trasformare il processo di sviluppo, migliorando sia la qualità del
            codice che l'esperienza di apprendimento.
          </>
        ),
        images: [
          {
            src: "/images/projects/qdue/qdue_feature_graphic_1024x500.png",
            alt: "QDue App Screenshot",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Problem Solving Industriale",
        description: (
          <>
            Anni di esperienza in ambiente industriale a ciclo continuo hanno
            sviluppato un approccio metodico ai problemi: analisi, diagnosi e
            intervento rapido. Competenze che si rivelano preziose anche nel
            debugging del codice.
          </>
        ),
        images: [],
      },
      {
        title: "Filosofia del Lavoro",
        description: (
          <>
            "First make it work, then make it better" - Che si tratti di
            sistemare una bobinatrice o di scrivere una funzione, l'approccio è
            lo stesso: prima la funzionalità, poi l'ottimizzazione. Pragmatismo
            e dedizione sono i miei strumenti principali.
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Cose trovate in giro...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Progetti",
  title: "I miei progetti",
  description: `Progetti di sviluppo e sperimentazioni di ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Galleria",
  title: "La mia galleria",
  description: `Una collezione di foto, by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
