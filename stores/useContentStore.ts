import { defineStore } from "pinia";
import { defineComponent, h } from "vue";

export const useContentStore = defineStore("content", () => {
  const { logout } = useAuth();

  const title = "Die besten Kindergeschichten";
  const subtitle =
    "Entdecke mit unserer Plattform eine Welt voller Fantasie! Unsere liebevoll ausgewählten, altersgerechten Geschichten fördern die Vorstellungskraft und Kreativität deines Kindes und lassen es in unvergessliche Abenteuer eintauchen. Gestalte das Lesen zu einem besonderen Moment, den du und dein Kind gemeinsam erleben könnt - entfache die Liebe zum Lesen in deinem Kind. Tritt jetzt unserer Community bei!";
  const navigation = ref([
    { name: "Home", href: "/", type: "internal" },
    {
      name: "Kurzgeschichten",
      href: "/stories",
      type: "internal",
      important: true,
    },
    { name: "Bücher", href: "/books", type: "internal" },
    { name: "Blog", href: "/blog", type: "internal", important: true },
    { name: "Hilfe", href: "/help", type: "internal" },
  ]);

  const importantNavigation = computed(() =>
    navigation.value.filter((item) => item.important)
  );

  const nonImportantNavigation = computed(() =>
  navigation.value.filter((item) => !item.important)
);

  const userNavigation = [
    { name: "Dein Profil", href: "/account" },
    {
      name: "Ausloggen",
      action: () => {
        logout();
      },
    },
  ];

  const footerNavigation = {
    "Online-kurzgeschichten": [
      { name: "Marketing", href: "#" },
      { name: "Analytics", href: "#" },
      { name: "Commerce", href: "#" },
      { name: "Insights", href: "#" },
    ],
    support: [
      { name: "Pricing", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Guides", href: "#" },
      { name: "API Status", href: "#" },
    ],
    impressum: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Jobs", href: "#" },
      { name: "Press", href: "#" },
      { name: "Partners", href: "#" },
    ],
    legal: [
      { name: "Claim", href: "#" },
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
    ],
    social: [
      {
        name: "Facebook",
        href: "#",
        icon: defineComponent({
          render: () =>
            h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
              h("path", {
                "fill-rule": "evenodd",
                d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                "clip-rule": "evenodd",
              }),
            ]),
        }),
      },
      {
        name: "Instagram",
        href: "#",
        icon: defineComponent({
          render: () =>
            h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
              h("path", {
                "fill-rule": "evenodd",
                d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                "clip-rule": "evenodd",
              }),
            ]),
        }),
      },
      {
        name: "Twitter",
        href: "#",
        icon: defineComponent({
          render: () =>
            h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
              h("path", {
                d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
              }),
            ]),
        }),
      },
      {
        name: "GitHub",
        href: "#",
        icon: defineComponent({
          render: () =>
            h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
              h("path", {
                "fill-rule": "evenodd",
                d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                "clip-rule": "evenodd",
              }),
            ]),
        }),
      },
      {
        name: "YouTube",
        href: "#",
        icon: defineComponent({
          render: () =>
            h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
              h("path", {
                "fill-rule": "evenodd",
                d: "M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z",
                "clip-rule": "evenodd",
              }),
            ]),
        }),
      },
    ],
  };

  const faqsLong = [
    {
      id: "faq-1",
      question: "Was ist das Konzept hinter dem Kinder Kurzgeschichten-Abo?",
      answer:
        "Das Kinder Kurzgeschichten-Abo verfolgt das Ziel, Kindern im Alter von 0 bis 11 Jahren Zugang zu einer Welt voller faszinierender Kinderbücher zu bieten. Wir stellen vielfältige Abo-Optionen bereit, um den unterschiedlichsten Anforderungen gerecht zu werden. Unsere Geschichten, verfasst von einer Vielzahl kreativer Autoren, werden von talentierten Designern mit bezaubernden Illustrationen bereichert. Für ein noch intensiveres Leseerlebnis bieten wir außerdem die Möglichkeit, die Geschichten vorlesen zu lassen.",
    },
    {
      id: "faq-2",
      question:
        "Gibt es auch Geschichten für Nicht-Muttersprachler oder mehrsprachige Kinder?",
      answer:
        "Bislang noch nicht, aber wir haben definitiv vor, unser Angebot in Zukunft um Geschichten für Nicht-Muttersprachler und mehrsprachige Kinder zu erweitern.",
    },
    {
      id: "faq-3",
      question: "Wie oft werden neue Geschichten veröffentlicht?",
      answer:
        "Auch wenn es keinen festen Veröffentlichungszeitplan gibt, bemühen wir uns, in etwa wöchentlich neue Geschichten hinzuzufügen. Doch keine Sorge, von Beginn an steht bereits eine beeindruckende Auswahl an Geschichten zur Verfügung, die deine Entdeckungsreise spannend und abwechslungsreich gestalten.",
    },
    {
      id: "faq-4",
      question: "Kann ich eine Geschichte vor dem Kauf probelesen?",
      answer:
        "Sicher, nach Abschluss eines Abos hast du die Möglichkeit, Geschichten Probe zu lesen. Solange du nicht zur zweiten Seite wechselst, wird die Geschichte nicht als gelesen gewertet. Du kannst also stets die erste Seite einer Geschichte als Probe lesen.",
    },
    {
      id: "faq-5",
      question: "Wie kann ich ein Abonnement bezahlen?",
      answer:
        "Um dein Abonnement zu bezahlen, kannst du verschiedene Zahlungsmethoden verwenden, darunter Kreditkarte, PayPal, Apple Pay oder Google Pay.",
    },
    {
      id: "faq-16",
      question: "Habt ihr eine Geld zurück Garantie?",
      answer:
        "Ja. Du bekommst dein Geld zurück wenn es dir doch nicht gefallen sollte. Schreib uns einfach eine E-Mail an <a href='mailto:besteskinderbuch@gmail.com?subject=Geld-zurück'>besteskinderbuch@gmail.com</a>.",
    },
    {
      id: "faq-6",
      question: "Ist es möglich, das Abonnement jederzeit zu kündigen?",
      answer:
        "Ja, es ist absolut möglich, dein Abonnement jederzeit zu kündigen. Wir schätzen die Flexibilität und verstehen, dass sich die Bedürfnisse und Umstände ändern können. Um dein Abonnement zu kündigen, musst du dich lediglich in dein Konto einloggen und die entsprechenden Schritte in den Einstellungen durchführen. Nach der Kündigung bleibt dein Zugang bis zum Ende des aktuellen Abrechnungszeitraums bestehen. Wir würden uns freuen, wenn du uns das Feedback geben könntest, was wir besser machen könnten und hoffen, dich in der Zukunft wieder bei uns begrüßen zu dürfen.",
    },
    {
      id: "faq-7",
      question: "Kann ich Geschichten für später speichern oder favorisieren?",
      answer: "Noch nicht. Aber wir arbeiten daran.",
    },
    {
      id: "faq-8",
      question:
        "Gibt es auch Geschichten für Nicht-Muttersprachler oder mehrsprachige Kinder?",
      answer:
        "Noch nicht, wir planen auch Geschichten für Nicht-Muttersprachler oder mehrsprachige Kinder.",
    },
    {
      id: "faq-9",
      question:
        "Sind die Geschichten interaktiv oder enthalten sie Illustrationen?",
      answer:
        "Premium-Geschichten sind illustriert. Interaktive Geschichten sind in Planung.",
    },
    {
      id: "faq-10",
      question:
        "Wie kann ich als Elternteil den Fortschritt oder die Aktivität meines Kindes überwachen?",
      answer:
        "Wir planen einen Elternbereich, in dem du den Fortschritt deines Kindes sehen kannst.",
    },
    {
      id: "faq-11",
      question:
        "Ist es möglich, ein Geschenk-Abo für jemand anderen zu kaufen?",
      answer: "Nein",
    },
    {
      id: "faq-12",
      question:
        "Welche Maßnahmen werden ergriffen, um die Online-Sicherheit von Kindern auf der Plattform zu gewährleisten?",
      answer:
        "Die Plattform setzt auf hohe Sicherheitsstandards und ist DSGVO-konform.",
    },
    {
      id: "faq-13",
      question:
        "Gibt es eine Begrenzung für die Anzahl der Geschichten, die mein Kind pro Tag lesen kann?",
      answer: "Nein, es gelten nur die Abo-Bedingungen.",
    },
    {
      id: "faq-14",
      question: "Welche Geräte oder Betriebssysteme werden unterstützt?",
      answer: "Alle gängigen Geräte und Betriebssysteme werden unterstützt.",
    },
    {
      id: "faq-15",
      question: "Kann ich Ideen für neue Geschichten vorschlagen?",
      answer:
        "Ja, wir freuen uns sehr über Vorschläge für neue Geschichten! Unser Ziel ist es, eine breite Palette von Inhalten zu bieten, die die Vorstellungskraft unserer kleinen Leser anregen, und wir schätzen deine Beiträge, um dieses Ziel zu erreichen. Wenn du eine Geschichte oder eine Idee hast, die du gerne mit uns teilen möchtest, kannst du uns diese per E-Mail an <a href='mailto:besteskinderbuch@gmail.com?subject=Idee'>besteskinderbuch@gmail.com</a> senden. Unser engagiertes Team wird jede Einsendung sorgfältig prüfen. Wenn deine Geschichte ausgewählt und veröffentlicht wird, bieten wir auch eine Art Anerkennung dafür an. Wir freuen uns darauf, von dir zu hören und sind gespannt auf deine kreativen Ideen!",
    },
    {
      id: "faq-17",
      question:
        "Sind die Inhalte kindersicher und geeignet für alle Altersgruppen?",
      answer:
        "Ja, alle Inhalte auf unserer Plattform sind absolut kindersicher und speziell für Kinder konzipiert. Jede unserer Geschichten durchläuft einen gründlichen Überprüfungsprozess, um sicherzustellen, dass sie altersgerecht, pädagogisch wertvoll und unterhaltsam ist. Wir verstehen, dass jedes Kind unterschiedlich ist und sich in einem eigenen Entwicklungstempo befindet. Daher geben wir für jede Geschichte eine Altersempfehlung ab. Dies hilft den Eltern, Geschichten auszuwählen, die optimal auf den Entwicklungsstand und die Interessen ihres Kindes abgestimmt sind. Unser Ziel ist es, eine sichere, bereichernde und spaßige Leseumgebung für Kinder aller Altersgruppen zu schaffen. Dein Kind ist bei uns in guten Händen!",
    },
    {
      id: "faq-18",
      question: "Was ist, wenn ich technische Probleme auf der Plattform habe?",
      answer:
        "Solltest du auf technische Schwierigkeiten auf unserer Plattform stoßen, zögere bitte nicht, uns zu kontaktieren. Unser engagiertes Support-Team ist bereit und gewillt, dir bei jeglichen technischen Herausforderungen zur Seite zu stehen. Schicke uns einfach eine E-Mail an <a href='mailto:besteskinderbuch@gmail.com?subject=technisches Problem'>besteskinderbuch@gmail.com</a> mit einer Beschreibung deines Problems. Um dir noch besser helfen zu können, wäre es hilfreich, wenn du auch Screenshots oder andere relevante Informationen mitschicken könntest. Wir verstehen, dass technische Probleme frustrierend sein können und wir setzen alles daran, deine Probleme so schnell und effizient wie möglich zu lösen. Deine Zufriedenheit und ein reibungsloses Leseerlebnis haben für uns oberste Priorität.",
    },
  ];

  const faqs = faqsLong.slice(0, 5);

  const frequencies = [
    { value: "monthly", label: "Monatlich", priceSuffix: "/Monat" },
    {
      value: "annually",
      label: "Jährlich (2 Monate gratis)",
      priceSuffix: "/Jahr",
    },
  ];
  const tiers = [
    {
      name: "Buchwürmchen",
      id: "tier-littlebookworm",
      href: {
        monthly: "/login",
        annually: "/login",
      },
      priceSuffix: false,
      free: true,
      price: { monthly: "gratis", annually: "gratis" },
      description: "Du möchtest erst einen Einblick gewinnen? Kein Problem",
      features: [
        "Zugriff auf 5 von uns ausgesuchten Geschichten",
        "Vorlesefunktion",
      ],
      mostPopular: false,
    },
    {
      name: "Bücherwurm",
      id: "tier-bookworm",
      href: {
        monthly: "/abos/buecherwurm/monthly",
        annually: "/abos/buecherwurm/yearly",
      },
      priceSuffix: true,
      free: false,
      price: {
        monthly: { current: "6,99 €", discounted: "4,99 €" },
        annually: { current: "59,9 €", discounted: "49,9 €" },
      },
      description:
        "Bist du oder dein Kind ein leidenschaftlicher Leser? Dann heißen wir dich als unseren treuen Bücherwurm willkommen!",
      features: [
        "riesige Auswahl an Geschichten",
        "20 Geschichten/Monat lesbar",
        "1 Premiumgeschichte mit Bilder/Monat",
        "Vorlesefunktion",
        "Geschichtswünsche werden berücksichtigt",
      ],
      mostPopular: true,
    },
    {
      name: "Lesefuchs",
      id: "tier-readingfox",
      href: {
        monthly: "/abos/readingfox/monthly",
        annually: "/abos/readingfox/yearly",
      },
      free: false,
      priceSuffix: true,
      price: {
        monthly: { current: "17,99 €", discounted: "14,99" },
        annually: { current: "179,9", discounted: "149,9 €" },
      },
      description: "Das ultimative Leseerlebnis für wahre Bücherliebhaber!",
      features: [
        "riesige Auswahl an Geschichten",
        "65  Geschichten/Monat lesbar",
        "2 Premiumgeschichten mit Bilder/Monat",
        "Vorlesefunktion",
        "Wünsche werden mehr gewichtet",
        "bald verfügbar: Personalisierbarkeit der Geschichten",
      ],
      mostPopular: false,
    },
  ];

  const featuredTestimonial = {
    body: "Als Eltern sind wir ständig auf der Suche nach qualitativ hochwertigen, unterhaltsamen und lehrreichen Geschichten, um die Fantasie unserer Kinder anzuregen und ihre Liebe zum Lesen zu fördern. Auf 'bestes-kinderbuch.de' haben wir genau das gefunden. Die Auswahl an Geschichten ist einfach unglaublich - es gibt wirklich etwas für jeden Geschmack und jedes Alter. Ob es sich um lustige Abenteuergeschichten, berührende Erzählungen oder informative Sachbücher handelt, jede Geschichte fängt die Aufmerksamkeit unserer Kinder ein und hält sie bis zur letzten Seite gefesselt. Es ist schön zu sehen, wie sie durch diese Geschichten lernen, wachsen und ihre Welt entdecken. 'Bestes-kinderbuch.de' ist jetzt unsere erste Anlaufstelle, wenn wir neue Geschichten für unsere Kinder suchen. Wir können diese Webseite jedem Elternteil nur wärmstens empfehlen!",
    author: {
      name: "Stefanie",
      image: {
        src: "/people/Stefanie.jpeg",
        alt: "Stefanie",
      },
    },
  };
  const testimonials = [
    [
      [
        {
          body: "Als Vater von drei Bücherwürmern habe ich bereits viele Kinderbücher gelesen, aber diese Reihe ist unschlagbar! Jedes Buch ist einzigartig, fesselnd und voller lehrreicher Momente. Die Qualität der Illustrationen und die Tiefe der Geschichten haben uns alle beeindruckt. Ich kann diese Bücher jedem Vater empfehlen, der eine unvergessliche Lesezeit mit seinen Kindern haben möchte.",
          author: {
            name: "Tobias",
            image: {
              src: "/people/Tobias.jpeg",
              alt: "Tobias",
            },
          },
        },
      ],
      /*  [
        {
          body: "Das Kindergeschichten-Abo ist ein echter Gewinn für unsere Familie. Jedes mal freuen sich meine Kinder auf die neuen Geschichten und ich schätze die Qualität und Vielfalt. Es ist als ob wir einen Schatz an Wissen und Fantasie direkt zu uns nach Hause geliefert bekommen. Ich kann dieses Abo nur wärmstens empfehlen - es ist das Geschenk, das immer weiter gibt",
          author: {
            name: "Maria",
            image:{
              src: "/people/Maria.jpeg",
              alt: "Maria",
            }
          },
        },
      ], */
    ],
    [
      /* [
        {
          body: "Unser Abo für die bildlosen Kindergeschichten ist ein wahrer Segen! Es fördert die Vorstellungskraft unserer Kinder, da sie die Bilder in ihren Köpfen selbst malen. Jede Geschichte ist sorgfältig ausgewählt und hervorragend geschrieben. Als Elternteil schätze ich die Fähigkeit dieses Abo, das kreative Denken meiner Kinder zu fördern und ihre Liebe zur Literatur zu vertiefen.",
          author: {
            name: "Jürgen",
            image:{
              src: "/people/Jürgen.jpeg",
              alt: "Jürgen",
            }
          },
        },
      ], */
      [
        {
          body: "Die Geschichten von bestes-kinderbuch hat unsere Abendroutine bereichert und unseren Kindern eine Welt voller Fantasie und Abenteuer eröffnet. Durch die sorgfältig ausgewählten Geschichten fördern wir nicht nur ihre Lesekompetenz, sondern auch ihre Kreativität und Vorstellungskraft. Wir sind mehr als zufrieden und empfehlen es allen Eltern, die die Liebe zum Lesen bei ihren Kindern wecken möchten.",
          author: {
            name: "Sandra",
            image: {
              src: "/people/Sandra.jpeg",
              alt: "Sandra",
            },
          },
        },
      ],
    ],
  ];

  const features = [
    {
      name: "Weniger Gewicht",
      description:
        "Vergiss das mühsame Schleppen von schweren Büchern. Mit unserem Geschichten-Abo hast du deinen persönlichen Zugang zu einer riesigen digitalen Bibliothek immer dabei - ohne zusätzliches Gewicht.",
      icon: "game-icons:weight-lifting-up",
    },
    {
      name: "Platzsparend",
      description:
        "Dein Bücherregal ist schon überfüllt? Kein Problem. Unser Abo bietet dir unendlichen Lesestoff, ohne zusätzlichen Platz zu beanspruchen. Genieße deine Bücher digital und schaffe Raum in deinem Zuhause.",
      icon: "streamline:interface-content-book-2-library-content-books-book-shelf-stack",
    },
    {
      name: "Mitgestalten",
      description:
        "Deine Meinung ist uns wichtig! Bei uns hast du die Möglichkeit, aktiv an der Gestaltung der Inhalte mitzuwirken. Bewerte Geschichten, teile Feedback und äußere per E-Mail deine Wünsche zu künftigen Geschichten. Wir freuen uns, von dir zu hören!",
      icon: "mdi:brush",
    },
    {
      name: "Filtermöglichkeiten",
      comingSoon: true,
      description:
        "Verbringe weniger Zeit mit Suchen und mehr mit Lesen. Nutze unsere Filterfunktion, um genau die Geschichten zu finden, die deinen Vorlieben und Interessen entsprechen.",
      icon: "icon-park-outline:setting-config",
    },
    {
      name: "Schriftgröße & Hellikeit anpassbar",
      comingSoon: true,
      description:
        "Deine Augen werden es dir danken. Pass die Schriftgröße und Helligkeit nach deinen Wünschen an und schaffe dir so ein individuelles und angenehmes Leseerlebnis.",
      icon: "ph:text-aa-bold",
    },
    {
      name: "Probelesen",
      description:
        "Du bist dir nicht sicher, ob eine Geschichte das Richtige für dich ist? Kein Problem. Mit unserer Probelese-Funktion kannst du in jede Geschichte hineinschnuppern, bevor du dich entscheidest. Unser Ziel ist es, dass du jede Minute des Lesens genießt.",
      icon: "material-symbols:search",
    },
  ];

  const books = [
    {
      id: "schlummerland-zaubereien-fantastische-geschichten-zum-einschlafen",
      name: "Schlummerland-Zaubereien: Fantastische Geschichten zum Einschlafen",
      description: `Entdecken Sie "Schlummerland-Zaubereien: Fantastische Geschichten zum Einschlafen", eine Sammlung von zehn zauberhaften Gute-Nacht-Geschichten für Kinder im Alter von 0 bis 11 Jahren. In diesem liebevoll gestalteten Buch finden Sie magische Abenteuer und bezaubernde Charaktere, die Ihre Kleinen auf eine Reise in das Land der Träume begleiten und für süße Träume sorgen.
        Jede der zehn Geschichten ist so konzipiert, dass sie Kinder in eine Welt voller Fantasie und Wunder entführt und gleichzeitig beruhigende und entspannende Elemente beinhaltet, die den Übergang in den Schlaf erleichtern. Dabei sind die Geschichten in einer leicht verständlichen und kindgerechten Sprache verfasst, sodass sie für alle Altersgruppen geeignet sind.
        In "Schlummerland-Zaubereien" begegnen Ihre Kinder liebenswerten Charaktesren wie dem Mondlicht-Zauberer oder der mutigen Eule. Jede Geschichte hat eine moralische Botschaft und fördert Werte wie Freundschaft, Mut und Zusammenhalt, die für die persönliche Entwicklung Ihrer Kinder wichtig sind. Das Buch regt die Vorstellungskraft und Kreativität der jungen Leser an und unterstützt sie dabei, ihre Ängste und Sorgen vor dem Schlafengehen abzubauen.
        Die wunderschönen Illustrationen, die jede Geschichte begleiten, verleihen den Erzählungen zusätzlichen Charme. "Schlummerland-Zaubereien: Fantastische Geschichten zum Einschlafen" ist das perfekte Geschenk für alle jungen Träumer und bietet die ideale Möglichkeit, die abendliche Routine zu bereichern und gemeinsame, wertvolle Momente mit Ihren Kindern zu genießen.
        Lassen Sie sich und Ihre Kinder von den "Schlummerland-Zaubereien" verzaubern und entdecken Sie gemeinsam die Welt der Fantasie und Träume. Schaffen Sie wundervolle Erinnerungen, indem Sie diese Geschichten gemeinsam lesen, und fördern Sie einen gesunden Schlaf für Ihre Kinder.`,
      image: {
        src: "/books/schlummerland-zaubereien-fantastische-geschichten-zum-einschlafen.jpeg",
        alt: "Cover - Schlummerland-Zaubereien",
      },
      price: "€13,90",
      href: "https://amzn.eu/d/4oznkoi",
    },
    {
      id: "reise-durch-das-tierreich-100-mandalas-fuer-junge-kuenstler-innen",
      name: "Reise durch das Tierreich: 100 Mandalas für junge Künstler/-innen",
      description: `Tauchen Sie ein in eine Welt der Kreativität und Entdeckung mit 'Reise durch das Tierreich: 100 Mandalas für junge Künstler/-innen'! Dieses liebevoll gestaltete Malbuch von den renommierten Kinderbuchautoren Reinhard und Dennis bietet jungen Künstlern die Möglichkeit, die Vielfalt des Tierreichs auf eine ganz neue und farbenfrohe Weise zu entdecken.
      Mit 100 einzigartigen, detailreichen Tiermandalas bietet dieses Buch endlose Stunden kreativen Vergnügens und Lernens. Ob Ihr Kind ein Fan von flauschigen Kaninchen, majestätischen Löwen oder exotischen Tukanen ist, es wird sicher ein Mandala finden, das seine Fantasie beflügelt.
      Dieses Buch fördert nicht nur die künstlerischen Fähigkeiten und die Feinmotorik Ihres Kindes, sondern hilft ihm auch, ein tieferes Verständnis und eine Wertschätzung für die Tiere unserer Welt zu entwickeln.
      Von der ersten bis zur letzten Seite ist 'Reise durch das Tierreich: 100 Mandalas für junge Künstler/-innen' ein Abenteuer, das Ihre Kinder immer wieder erleben wollen. Es ist mehr als nur ein Malbuch – es ist ein Tor zur Natur, zur Kreativität und zur Entdeckungsreise. Sichern Sie sich Ihr Exemplar noch heute und starten Sie die kreative Reise!`,
      image: {
        src: "books/reise-durch-das-tierreich-100-mandalas-fuer-junge-kuenstler-innen.jpg",
        alt: "Cover - Reise durch das Tierreich",
      },
      price: "€12,97",
      href: "https://amzn.eu/d/hvV43aB",
    },
    {
      id: "kleine-schritte-grosse-spuren-zwanzig-geschichten-den-kindern-den-weg-weisen",
      name: "Kleine Schritte, große Spuren: Zwanzig Geschichten den Kindern den Weg weisen",
      description: `Tauche ein in eine Welt voller Abenteuer, Lektionen und Fantasie mit diesen zauberhaften Kurzgeschichten, die speziell auf Kinder im Alter von 6 Jahren abgestimmt sind. Von Lena, die durch ihren unsichtbaren Freund Tom lernt, Empathie zu zeigen, bis hin zu Max, der sein Selbstvertrauen entdeckt und zum kleinen Helden seiner Stadt wird. Verfolge die Geschwister Lisa und Tim, die die Schönheit der Vielfalt in ihrer bunten Stadt entdecken und Ben, der eine wichtige Lektion über Verantwortung lernt, als er seine Schultasche verliert.
      Jede Geschichte ist so gestaltet, dass sie sowohl unterhaltsam als auch lehrreich ist, und bietet eine Vielfalt von Themen, die Kindern dabei helfen, wichtige Werte und Fähigkeiten zu verstehen und zu entwickeln. Von der Bedeutung von Zusammenarbeit und guten Manieren über die Kunst des Teilens bis hin zur Wertschätzung von Unterschieden und der Kraft der Fantasie - diese Sammlung von Kurzgeschichten enthält eine Fülle von Lektionen, die in aufregenden und fesselnden Geschichten verpackt sind.
      Ob es nun das Abenteuer von Lilly ist, die die Kraft der Dankbarkeit entdeckt, oder die Reise von Leon und Lea, die lernen, Unterschiede zu akzeptieren und zu schätzen - jedes Kind wird sicherlich eine Geschichte finden, die es liebt und die es dazu inspiriert, zu wachsen und zu lernen. Mit farbenfrohen Illustrationen und fesselnden Erzählungen ist dieses Buch das perfekte Geschenk für jeden jungen Leser und eine Bereicherung für jede Kinderbibliothek.`,
      image: {
        src: "books/kleine-schritte-grosse-spuren-zwanzig-geschichten-den-kindern-den-weg-weisen.jpeg",
        alt: "Cover - Kleine Schritte, große Spuren",
      },
      price: "€12,99",
      href: "https://amzn.eu/d/3Z4epyK",
    },
  ];

  /*  {
    id: "sonnenblumen-sams-gartenabenteuer",
    title: "Sonnenblumen-Sam's Gartenabenteuer",
    href: "/stories/sonnenblumen-sams-gartenabenteuer",
    image: {
      src:"/stories/sonnenblumen-sams-gartenabenteuer.png",
      alt: "Cover - Sonnenblumen-Sam's Gartenabenteuer",
    },
    rating: 4,
    age: {
      start: 2,
      end: 6,
    },
    description: "",
    premium: false,
    audio: {
      src: null,
    },
    date: "21. April 2023",
    datetime: "2023-04-21",
    tags: ["Kinderbücher", "Fantasie", "Kreativität"],
    category: { title: "", href: "" },
    author: {
      name: "",
      role: "",
      href: "",
      imageUrl: "",
    },
    content: `
    <h2>Sam's geliebter Garten</h2>
    <p>Es war einmal ein kleiner Junge namens Sam. Mit seinen funkelnden blauen Augen und strahlendem Lächeln konnte er jeden Raum erhellen. Aber es war nicht ein Zimmer, sondern ein besonderer Ort, an dem er sein strahlendstes Lächeln zeigte - sein geliebter Garten.</p>
    <p>Sam war nicht wie andere Kinder. Er hatte eine ganz besondere Liebe: seine Sonnenblumen. Diese riesigen gelben Blumen, die wie kleine Sonnen aussahen, zogen seine Aufmerksamkeit mehr als alles andere auf der Welt an. Sein Garten war voll von ihnen, und jeder Sonnenblumenkopf war größer und leuchtender als der andere. Sam mochte es, seine kleinen Hände in die Luft zu strecken und die Sonnenblumenblätter sanft zu berühren, als würde er die Sonnenstrahlen selbst streicheln.</p>
    <p>Jeden Morgen, nachdem er aufgestanden war und sein Frühstück gegessen hatte, rannte Sam zu seinem geliebten Garten. Dort begrüßte er jeden seiner grünen Freunde. Er sprach mit den Sonnenblumen, erzählte ihnen Geschichten und lachte mit ihnen. Und manchmal, wenn er ganz still war, schwor er, dass er sie zurücklächeln hörte.</p>
    <p>Im Garten war Sam nicht nur ein Gärtner, sondern auch ein Entdecker. Er beobachtete die kleinen Käfer, die in den Blättern krochen, und die Schmetterlinge, die sanft von Blume zu Blume tänzelten. Er liebte es, das Summen der Bienen zu hören, die von den Sonnenblumen angezogen wurden und fleißig Nektar sammelten. Jedes kleine Lebewesen und jede Pflanze hatte in Sam's Garten seinen Platz, und er sorgte dafür, dass es ihnen gut ging.</p>
    <p>In Sams Garten war immer etwas los. Manchmal pflanzte er neue Samen und freute sich darauf, wie sie wuchsen und sich zu wunderschönen Pflanzen entwickelten. Andere Male nahm er seine kleine Gießkanne und goss liebevoll Wasser auf jede Pflanze, so dass sie in der Sonne glitzerte.</p>
    <p>Obwohl Sam noch jung war, verstand er, dass der Garten seine Pflege brauchte, genau wie er die Pflege seiner Eltern brauchte. Und so kümmerte er sich liebevoll und sorgfältig um seine Pflanzen, genauso wie seine Eltern sich um ihn kümmerten.</p>
    <p>Es war ein besonderer Garten, und Sam war ein besonderer Junge. Mit seinen Sonnenblumen und der Natur um ihn herum hatte er einen Ort, den er liebte und der ihm Liebe zurückgab. Es war ein Garten voller Freude, Abenteuer und Leben. Und das war erst der Anfang von Sams Gartenabenteuern.</p>
    <p>So beginnt die Geschichte von Sonnenblumen-Sam, dem kleinen Jungen mit dem großen Herzen und dem geliebten Garten, der voller Wunder und Freude steckt.</p>
    
    <h2>Ein seltsames Problem</h2>
    <p>Eines schönen Morgens, als die ersten Sonnenstrahlen die Blätter kitzelten, ging Sam wie immer zu seinem Garten. Aber etwas stimmte nicht. Seine geliebten Sonnenblumen sahen nicht mehr so strahlend aus. Ihre leuchtend gelben Blätter waren etwas blasser als sonst, und ihre Köpfe schienen traurig zur Erde zu neigen.</p>
    <p>Sam wusste, dass seine Freunde, die Sonnenblumen, Hilfe brauchten. "Ich muss herausfinden, was los ist," sagte er fest zu sich selbst. Er betrachtete die Sonnenblumen genauer und berührte sanft ihre Blätter. "Mach dir keine Sorgen, meine Freunde. Ich werde euch helfen," flüsterte er.</p>
    <p>Er erinnerte sich daran, wie seine Mama immer sagte, dass Probleme dazu da sind, gelöst zu werden. Und so machte sich Sam an die Arbeit. Er überprüfte, ob die Sonnenblumen genug Wasser und Sonnenlicht hatten. Aber alles schien in Ordnung zu sein. Die Sonnenblumen hatten genug zu trinken, und die Sonne schien hell und warm auf sie herab.</p>
    <p>Es war ein Rätsel. Warum waren seine geliebten Sonnenblumen nicht mehr so strahlend wie sonst? Was war passiert? Aber Sam war entschlossen, das Geheimnis zu lösen. Er würde nicht zulassen, dass seinen Freunden etwas Schlimmes passiert.</p>
    <p>Schließlich entschied Sam, dass er vielleicht Hilfe brauchte. Vielleicht gab es jemanden, der mehr über Pflanzen und Blumen wusste als er. Vielleicht konnte diese Person ihm helfen, das Rätsel zu lösen und seine Sonnenblumen wieder zum Strahlen zu bringen.</p>
    <p>Also packte er seinen kleinen Rucksack, nahm seine Lupe und bereitete sich auf ein großes Abenteuer vor. Es war Zeit für Sam, einige Nachforschungen anzustellen. Er würde Antworten finden und seinen Sonnenblumen helfen, wieder so strahlend und fröhlich zu sein wie zuvor.</p>

    <h2>Sam's Nachforschungen</h2>
    <p>Am nächsten Morgen, ausgestattet mit seiner Lupe und einem großen Sinn für Abenteuer, begann Sam seine Nachforschungen. Er hatte viele Fragen, und er war bereit, Antworten zu finden.</p>
    <p>Zuerst ging er zu seiner Mama. Mit seinen funkelnden blauen Augen blickte er zu ihr auf und fragte: "Mama, weißt du, warum meine Sonnenblumen nicht mehr so strahlend sind?" Seine Mama schaute sich die Blumen an und runzelte die Stirn. "Ich bin mir nicht sicher, Sam," antwortete sie. "Aber ich weiß, dass du herausfinden wirst, was los ist."</p>
    <p>Als nächstes fragte er seine Freunde. Sie kamen vorbei, um im Garten zu spielen, und Sam zeigte ihnen seine Sonnenblumen. Aber keiner von ihnen wusste, was das Problem sein könnte.</p>
    <p>Doch Sam ließ sich nicht entmutigen. Er wusste, dass Nachforschungen manchmal Geduld erfordern. Und so begann er, noch genauer im Garten zu suchen. Er untersuchte die Sonnenblumen mit seiner Lupe, beobachtete die Insekten und studierte das Muster des Sonnenlichts. Er stellte Fragen, notierte seine Beobachtungen und war geduldig.</p>
    <p>Es waren Tage der Suche und des Lernens für Sam. Er entdeckte, dass es manchmal Zeit braucht, um Antworten zu finden. Und er verstand, wie wichtig es ist, geduldig und neugierig zu sein. Mit jedem Tag wuchs seine Liebe zu seinem Garten und seinen Sonnenblumen noch mehr.</p>
    <p>Aber das Rätsel war immer noch ungelöst. Die Sonnenblumen waren immer noch nicht so strahlend wie sonst. Doch Sam gab nicht auf. Er wusste, dass er bald eine Antwort finden würde. Er musste nur weiter suchen und lernen.</p>

    <h2>Die Entdeckung</h2>
    <p>Nach vielen Tagen der Suche und des Lernens machte Sam endlich eine wichtige Entdeckung. Als er eines Morgens im Garten war, bemerkte er eine Bewegung auf einer seiner Sonnenblumen. Mit seiner treuen Lupe bewaffnet, ging er näher ran und sah... einen kleinen Käfer!</p>
    <p>Der Käfer war klein, aber er war es, der Sams geliebten Sonnenblumen Schaden zufügte. Aber Sam war nicht wütend. Stattdessen fühlte er Mitgefühl. "Der Käfer weiß nicht, dass er den Blumen schadet," sagte er leise.</p>
    <p>Jetzt, da er das Problem gefunden hatte, konnte Sam eine Lösung suchen. Er wusste, dass er etwas tun musste, um seine Sonnenblumen zu retten. Aber er wollte dem Käfer nicht schaden. Er wollte eine Lösung finden, die allen helfen würde.</p>
    <p>Und so begann Sam seine Recherche. Er sprach mit seiner Familie, las Bücher über Käfer und Pflanzen und stellte viele Fragen. Es war eine schwierige Aufgabe, aber Sam war entschlossen. Er fühlte eine große Verantwortung für seinen Garten und seine grünen Freunde.</p>
    <p>Mit der Zeit fand Sam eine Lösung. Er entdeckte, dass Käfer bestimmte Pflanzen mochten, die den Sonnenblumen keinen Schaden zufügten. Also beschloss er, einige dieser Pflanzen in seinem Garten anzupflanzen. Auf diese Weise konnte der Käfer seinen Hunger stillen, ohne die Sonnenblumen zu beschädigen.</p>
    <p>Während dieser Zeit lernte Sam viel über Mitgefühl und Verantwortung. Er verstand, dass jeder in seinem Garten einen Platz hatte, auch der kleine Käfer. Und er erkannte, dass es seine Aufgabe war, dafür zu sorgen, dass jeder in Harmonie miteinander lebte.</p>
    <p>Sam war stolz auf seine Entdeckung und seine Lösung. Er wusste, dass er seinem Garten geholfen hatte. Und er freute sich darauf, seine Sonnenblumen wieder strahlen zu sehen.</p>

    <h2>Der Natur eine Hand reichen</h2>
    <p>Nachdem Sam seine Entdeckung gemacht hatte, machte er sich bereit, der Natur eine Hand zu reichen. Er wusste jetzt, was er tun musste, aber er konnte es nicht allein. Also rief er seine Freunde und Familie zu Hilfe.</p>
    <p>Mit der Unterstützung von allen begann Sam, die neuen Pflanzen in seinem Garten zu pflanzen. Es war ein aufregender Tag, an dem alle ihre Hände in den Boden steckten, Löcher gruben und Samen pflanzten. Sie lachten und erzählten Geschichten, während sie arbeiteten, und sogar der kleine Käfer schien neugierig zu beobachten, was sie taten.</p>
    <p>Es dauerte nicht lange, bis die neuen Pflanzen zu sprießen begannen. Sie waren schön und farbenfroh und zogen den kleinen Käfer sofort an. Er kroch auf ihnen herum, kaute an den Blättern und schien glücklich in seinem neuen Zuhause zu sein.</p>
    <p>Die Sonnenblumen begannen sich auch zu erholen. Sie sahen gesünder aus, ihre Blätter waren wieder leuchtend gelb, und ihre Köpfe streckten sich der Sonne entgegen. Sam beobachtete sie mit einem Lächeln auf dem Gesicht. Er wusste, dass er das Richtige getan hatte.</p>
    <p>In diesem Prozess lernte Sam eine wichtige Lektion. Er verstand, dass jedes Lebewesen in seinem Garten einen Platz hatte und dass sie alle zusammenarbeiten mussten, um das Gleichgewicht zu bewahren. Er erkannte, dass es seine Aufgabe war, der Natur zu helfen und sie zu schützen.</p>
    <p>Sam's Garten war jetzt mehr als nur ein Garten. Es war ein Ort, an dem jedes Lebewesen, ob groß oder klein, seinen Platz hatte. Es war ein Ort, an dem man lernen, wachsen und sich um die Natur kümmern konnte. Es war ein Ort der Freude, des Lernens und der Harmonie.</p>

    <h2>Ein Garten voller Freude</h2>
    <p>Es war ein wunderschöner Tag in Sams Garten. Die Sonne schien hell und warm, und überall waren Farben zu sehen. Die neuen Pflanzen blühten in den schönsten Farben und der kleine Käfer kroch fröhlich auf ihnen herum. Aber das Schönste von allem waren Sams Sonnenblumen. Sie erstrahlten wieder in vollem Glanz, ihre leuchtend gelben Blätter strahlten vor Freude und ihre Köpfe streckten sich stolz in den Himmel.</p>
    <p>Sam stand mitten in seinem Garten und blickte sich um. Er konnte sein Glück kaum fassen. Seine geliebten Sonnenblumen waren gerettet, und der kleine Käfer hatte ein neues Zuhause gefunden. "Wir haben es geschafft," flüsterte er, ein breites Lächeln auf seinem Gesicht.</p>
    <p>Es war ein langer Weg gewesen, und es hatte viel Arbeit gekostet. Aber Sam hatte gelernt, dass mit Liebe, Geduld und Zusammenarbeit jedes Problem gelöst werden kann. Er war stolz auf sich selbst und auf alle, die ihm geholfen hatten. Er wusste jetzt, dass er nicht nur ein Gärtner war, sondern auch ein Freund und Beschützer der Natur.</p>
    <p>Um seinen Erfolg zu feiern, beschloss Sam, ein großes Gartenfest zu veranstalten. Er lud seine Familie, seine Freunde und alle Tiere im Garten ein. Es gab Spiele, Lieder und leckeres Essen. Sie lachten, spielten und tanzten bis zum Sonnenuntergang. Selbst der kleine Käfer schien zu feiern, indem er auf und ab hüpfte.</p>
    <p>Am Ende des Tages saß Sam erschöpft, aber glücklich, auf einer Bank in seinem Garten. Er sah sich um und konnte nicht anders, als zu lächeln. Sein Garten war voller Freude, und er war ein Teil davon. Er hatte gelernt, wie man Probleme löst, wie man der Natur hilft und wie man feiert. Er wusste jetzt, dass sein Garten ein Ort voller Wunder und Abenteuer war.</p>
    <p>Und so endet die Geschichte von Sonnenblumen-Sam's Gartenabenteuer. Aber das war nur der Anfang. Denn in Sams Garten gibt es immer etwas zu entdecken, zu lernen und zu feiern. Und wer weiß, welches Abenteuer als nächstes auf ihn wartet? Denn mit Liebe, Geduld und Zusammenarbeit ist alles möglich. Und in Sams Garten ist jeder Tag ein neues, aufregendes Abenteuer.</p>
    `,
  } */
  /* {
    id: "das-verzauberte-floetenmaennchen",
    title: "Das verzauberte Flötenmännchen",
    href: "/stories/das-verzauberte-floetenmaennchen",
    image: {
      src:"/stories/das-verzauberte-floetenmaennchen.png",
      alt: "Cover - Das verzauberte Flötenmännchen",
    },
    rating: 4,
    age: {
      start: 2,
      end: 6,
    },
    description: "",
    premium: false,
    audio: {
      src: null,
    },
    date: "9. Mai 2023",
    datetime: "2023-05-09",
    tags: ["Kinderbücher", "Fantasie", "Kreativität"],
    category: { title: "", href: "" },
    author: {
      name: "",
      role: "",
      href: "",
      imageUrl: "",
    },
    content: `
    <h2>Die geheimnisvolle Flöte</h2>
    <p>Es war ein sonniger Frühlingstag, als der kleine Jonas auf Entdeckungstour durch den nahegelegenen Wald ging. Die Vögel sangen fröhliche Lieder und das sanfte Rascheln der Blätter war wie Musik in seinen Ohren. Jonas liebte diese Ausflüge mehr als alles andere. Er war neugierig und voller Entdeckerfreude. Jeder Stein, jeder Baum und jeder kleine Bach war ein neues Abenteuer für ihn.</p>
    <p>Während Jonas behutsam durch das Unterholz stieg, fiel sein Blick auf etwas, das seltsam aus der gewöhnlichen Waldlandschaft hervorstach. Es war ein schimmerndes Objekt, halb versteckt unter einem dicken Blätterteppich. Jonas stürzte sich sofort darauf, sein Herz klopfte vor Aufregung.</p>
    <p>Als er die Blätter beiseiteschob, kam ein langer, dünn geformter Gegenstand zum Vorschein, der im Sonnenlicht funkelte. Es war eine Flöte, prächtig gearbeitet und mit kunstvollen Mustern verziert. Jonas hatte noch nie so etwas Schönes gesehen. Er hob sie behutsam auf und hielt sie in der Sonne hoch. Die Flöte schien fast zu leuchten.</p>
    <p>Eine merkwürdige Faszination ergriff Jonas. Er konnte seinen Blick nicht von dem verzaubert aussehenden Instrument abwenden. Er fühlte sich von der Flöte angezogen, fast als würde sie ihn rufen. Ohne weiter darüber nachzudenken, steckte Jonas die Flöte in seinen Rucksack. Er spürte eine unerklärliche Wärme und eine Art Verbindung zu ihr.</p>
    <p>Der Tag neigte sich dem Ende zu und Jonas beschloss, nach Hause zurückzukehren. Während er den Waldpfad entlang ging, konnte er kaum an etwas anderes denken als an die geheimnisvolle Flöte. Sie hatte etwas Magisches an sich, und er konnte es kaum erwarten, sie zu Hause genauer zu untersuchen.</p>
    <p>Und so begann das unglaubliche Abenteuer von Jonas und dem verzauberten Flötenmännchen, das noch viele Überraschungen bereithalten sollte.</p>
    
    <h2>Das Erwachen des Flötenmännchens</h2>
    <p>Nach dem Abendessen, als die Dämmerung hereinbrach, zog Jonas sich in sein Zimmer zurück. Er zog die wunderschöne Flöte aus seinem Rucksack und betrachtete sie erneut. Ihre Einzigartigkeit verzauberte ihn immer noch. Beinahe instinktiv setzte er sie an seine Lippen und blies vorsichtig hinein.</p>
    <p>Die Töne, die die Flöte von sich gab, waren wunderschön und hallten im Raum wider. Es war, als hätte Jonas sein ganzes Leben lang Flöte gespielt. Doch während er spielte, passierte etwas Unerwartetes.</p>
    <p>Mit dem letzten Ton, den Jonas spielte, erschien vor ihm eine kleine, schimmernde Gestalt. Jonas sprang erschrocken zurück und starrte die Gestalt an. Es war ein kleines Männchen, nicht größer als die Flöte selbst, gekleidet in seltsame Kleidung, die an eine andere Zeit erinnerte. Das Männchen trug eine Flöte in der Hand, die genauso aussah wie die, die Jonas gefunden hatte.</p>
    <p>"Danke, junger Mann", begann das Männchen mit einer weichen, melodischen Stimme. "Ich bin das Flötenmännchen. Ein alter Zauber bannte mich in diese Flöte, und nur die Musik konnte mich erwecken."</p>
    <p>Jonas war sprachlos, aber zugleich fasziniert. Er hatte so viele Fragen, doch bevor er sprechen konnte, lächelte das Flötenmännchen. "Ich sehe, du bist verwirrt. Keine Sorge, alles wird mit der Zeit erklärt."</p>
    <p>Dann zog das Flötenmännchen seine eigene Flöte hervor und begann eine Melodie zu spielen. Die Noten, die er spielte, waren anders als alles, was Jonas je gehört hatte. Sie schienen in der Luft zu tanzen und erfüllten den Raum mit einer seltsamen, aber angenehmen Energie.</p>
    <p>"Das", sagte das Flötenmännchen, als die Melodie endete, "ist die magische Melodie. Sie ist der Schlüssel zu allem. Aber Vorsicht, sie ist mächtiger, als du dir vorstellen kannst..."</p>
    <p>Und damit gab das Flötenmännchen einen verheißungsvollen Vorgeschmack auf die unglaublichen Abenteuer, die Jonas in nächsten Kapitel erwarten würden.</p>

    <h2>Die magische Melodie</h2>
    <p>Jonas beobachtete das Flötenmännchen fasziniert, während es die magische Melodie spielte. Es war, als ob die Töne in der Luft tanzen und sich zu fantastischen Formen zusammenfügen würden. Die Noten strahlten eine wundervolle Energie aus und ließen das Zimmer in einem sanften Glanz erstrahlen.</p>
    <p>Das Flötenmännchen beendete die Melodie und sah Jonas erwartungsvoll an. "Jetzt bist du an der Reihe, Jonas", sagte es und reichte ihm die Flöte.</p>
    <p>Zögernd setzte Jonas die Flöte an seine Lippen und versuchte, die magische Melodie nachzuspielen. Anfangs war es schwierig, die Noten richtig zu treffen, aber das Flötenmännchen ermutigte ihn weiterzumachen. Nach ein paar Versuchen gelang es Jonas schließlich, die Melodie zu spielen.</p>
    <p>Als er die Melodie spielte, passierten wundersame Dinge. Die Töne, die Jonas spielte, erfüllten den Raum mit einer unsichtbaren Energie. Die Bilder an den Wänden begannen sich zu bewegen, und sein kleiner Zimmerfarn wuchs und blühte wie noch nie zuvor.</p>
    <p>"Sehr gut, Jonas!", rief das Flötenmännchen aus und klatschte in die Hände. "Die magische Melodie hat die Kraft, das Unmögliche möglich zu machen. Aber sei vorsichtig, sie muss weise genutzt werden."</p>
    <p>Das Flötenmännchen schien plötzlich ernst und nachdenklich zu werden. "Jonas", sagte es leise, "es gibt Probleme im Dorf. Die Felder sind vertrocknet, die Ernte ist in Gefahr. Deine Melodie könnte die Lösung sein."</p>
    <p>Jonas starrte das Flötenmännchen ungläubig an. Konnte seine Musik wirklich das Dorf retten? Würde er in der Lage sein, die magische Melodie zu nutzen, um zu helfen? Er war unsicher, aber entschlossen, es zu versuchen. Er war bereit, das nächste Abenteuer zu bestreiten.</p>

    <h2>Probleme im Dorf</h2>
    <p>Am nächsten Morgen machten Jonas und das Flötenmännchen sich auf den Weg ins Dorf. Während sie den verschlungenen Pfad hinuntergingen, konnten sie schon von weitem die Sorgenfalten auf den Gesichtern der Dorfbewohner erkennen.</p>
    <p>Sie erreichten die Felder, die normalerweise zu dieser Jahreszeit in voller Blüte stehen sollten, aber stattdessen war die Erde trocken und rissig. Die Pflanzen waren welk und die Ernte schien verloren.</p>
    <p>"Es hat seit Wochen nicht mehr geregnet", erklärte Bauer Müller, ein alter Mann mit verhärmtem Gesicht. "Wir haben alles versucht, aber es scheint, als hätte Mutter Natur uns vergessen."</p>
    <p>Jonas sah das Flötenmännchen an, das nickte und ihm die Flöte reichte. Es war Zeit für die magische Melodie. Jonas hob die Flöte an seine Lippen und fing an zu spielen. Doch diesmal spielte er nicht nur für sich selbst, sondern für das ganze Dorf.</p>
    <p>Während er spielte, begann die Luft um sie herum zu vibrieren. Die Noten tanzten in der Luft, und es war, als ob sich die Natur selbst zu Jonas' Melodie bewegte. Doch dann passierte etwas Unerwartetes: Ein Windstoß fegte über die Felder und blies Jonas' Flöte aus der Hand. Die Melodie brach ab.</p>
    <p>Jonas und das Flötenmännchen starrten entsetzt auf die Flöte, die jetzt einige Meter entfernt auf dem Boden lag. Jonas wollte gerade danach greifen, als Bauer Müller ein lautes "Nein!" rief und auf eine dunkle Wolke am Himmel zeigte, die sich schnell näherte.</p>
    <p>Würde Jonas es schaffen, die Flöte rechtzeitig zu erreichen und die magische Melodie zu vollenden? Würde die drohende Gefahr das Dorf und seine Ernte retten oder zerstören? Diese Fragen würde im nächsten Kapitel beantwortet werden.</p>

    <h2>Die rettende Melodie</h2>
    <p>Die dunkle Wolke näherte sich schnell und ein kalter Wind fegte über das Dorf. Jonas schaute zum Himmel und dann zurück zur Flöte, die ein paar Meter entfernt lag. Er zögerte einen Moment, dann fasste er sich ein Herz und rannte los.</p>
    <p>Mit all seiner Kraft hob Jonas die Flöte auf und begann erneut, die magische Melodie zu spielen. Die Noten schienen mit dem Wind zu tanzen und die dunkle Wolke über ihnen zu berühren. Trotz der schwierigen Umstände ließ Jonas nicht los. Er spielte weiter, den Blick fest auf die Wolke gerichtet.</p>
    <p>Und dann passierte das Unglaubliche. Die dunkle Wolke begann zu schrumpfen, und ein sanfter Regen fiel auf die trockenen Felder. Die Pflanzen schienen fast augenblicklich aufzuleben. Die Blätter wurden wieder grün und die Blüten öffneten sich.</p>
    <p>Das gesamte Dorf hielt den Atem an, als sie das Wunder beobachteten, das sich vor ihren Augen entfaltete. Die Felder waren gerettet und das dank der magischen Melodie und Jonas' mutigem Einsatz.</p>
    <p>"Du hast es geschafft, Jonas", rief das Flötenmännchen aus und klatschte vor Freude in die Hände. "Du hast den Mut gefunden, weiterzumachen, auch wenn die Situation schwierig war. Du hast gelernt, dass die wahre Magie in dir selbst liegt."</p>
    <p>Jonas lächelte und schaute auf die Flöte in seiner Hand. Er hatte nicht nur die Felder gerettet, sondern auch etwas Wichtiges über sich selbst gelernt. Er hatte den Mut gefunden, die Herausforderungen anzugehen, und erkannte die Kraft der Musik. Er hatte gelernt, dass er, auch wenn er noch so klein war, Großes bewirken konnte. Und das war die größte Magie von allen.</p>

    <h2Die Verabschiedung des Flötenmännchens</h2>
    <p>Nachdem die Aufregung des Tages nachgelassen hatte und das Dorf endlich zur Ruhe kam, fanden Jonas und das Flötenmännchen sich am Rand der wieder blühenden Felder wieder. Sie saßen nebeneinander und blickten auf die Sterne, die hell am Himmelszelt funkelten.</p>
    <p>"Jonas", begann das Flötenmännchen, "es ist an der Zeit für mich, wieder in die Flöte zurückzukehren. Meine Aufgabe hier ist erfüllt."</p>
    <p>Jonas blickte traurig auf das Flötenmännchen. "Aber ich werde dich vermissen", antwortete er.</p>
    <p>Das Flötenmännchen lächelte und legte seine kleine Hand auf Jonas'. "Ich werde immer bei dir sein, Jonas. Jedes Mal, wenn du die magische Melodie spielst, werde ich bei dir sein. In deinem Herzen, in deiner Musik."</p>
    <p>Mit diesen Worten begann das Flötenmännchen langsam zu schrumpfen, bis es nicht größer war als die Flöte selbst. Dann verschwand es in einem Schimmer von Licht und verschmolz wieder mit der Flöte.</p>
    <p>Jonas hielt die Flöte fest in seinen Händen und blickte auf sie herunter. Sie glänzte im Mondlicht und Jonas konnte das Flötenmännchen in der Flöte sehen, lächelnd und winkend.</p>
    <p>"Danke, Flötenmännchen", flüsterte Jonas und hob die Flöte an seine Lippen. Er spielte die magische Melodie, die nun ein Teil von ihm war. Und obwohl er alleine war, fühlte er sich nicht einsam. Er wusste, dass er einen Freund hatte, der immer bei ihm sein würde, in der Magie der Musik und in seinem Herzen.</p>
    <p>Und so endete das Abenteuer von Jonas und dem Flötenmännchen, aber es war nur der Anfang von vielen weiteren magischen Geschichten, die noch erzählt werden würden. Denn wie das Flötenmännchen ihm gezeigt hatte, lag die wahre Magie in Jonas selbst, in seinem Mut und in seiner Musik. Und das war etwas, was er nie vergessen würde.</p>
    `,
  }, */

  return {
    title,
    subtitle,
    navigation,
    importantNavigation,
    nonImportantNavigation,
    userNavigation,
    frequencies,
    faqsLong,
    faqs,
    tiers,
    testimonials,
    featuredTestimonial,
    features,
    footerNavigation,
    books,
  };
});
