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
  headline: <>IT for fun</>,
  subline: (
    <>
      Sono Luca, vivo in Italia,
      <br />
      programmatore per divertimento
      <br />
      <br />
      <code>First make it run, then make it faster</code>.
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
        Le esperienze di medio e lungo corso, testimoniano la mia dedizione al
        lavoro, la capacità di lavorare in squadra con l'occhio attento alla
        sicurezza ed alla salute, il raggiungimento degli obiettivi lavorativi.
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
          <>Conduttore di bobinatrice</>,
          <>
            Lavoro quotidiano su differenti bobinatrici quali
            <ul>
              <li>Jagenberg - VariRoll</li>
              <li>Jagenberg - VariPlus</li>
              <li>Voith - VariFlex</li>
            </ul>
          </>,
          <>
            A breve la nuova installata
            <ul>
              <li>ACelli/Andritz - ACelli</li>
            </ul>
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Maxidraulica - Hidro",
        timeframe: "2000 - 2010",
        role: "Operaio specializzato",
        achievements: [
          <>Installatore di impianti e sistemi</>,
          <>
            <ul>
              <li>Solari - circolazione naturale e forzata</li>
              <li>Termici - riscaldamento tradizionale, pavimento o parete</li>
              <li>Climatizzazione - Utenze domestiche</li>
              <li>Gas - Utenze domestiche</li>
              <li>Acqua - Utenze domestiche</li>
            </ul>
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
        description: <>Informatica</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
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
  label: "Lavori",
  title: "I miei lavori",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
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
