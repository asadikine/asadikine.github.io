// ============================================================
//  SITE SETTINGS AND HOME PAGE TEXT
//  Text fields accept simple HTML: <b>bold</b>, <a href="...">link</a>.
//  After editing, commit the file: the site updates within a minute.
// ============================================================

window.SITE = {
  name: "Amine Sadikine",
  initials: "AS",
  // Your name as it appears in author lists: it is put in bold automatically.
  me: "A. Sadikine",
  siteUrl: "https://asadikine.github.io",

  // Shown in the footer. Updated automatically from GitHub when the site is
  // online; this date is only the fallback.
  lastUpdated: "2026-11-13",
  githubRepo: "asadikine/asadikine.github.io",

  // Visit statistics (optional). Create a free account on goatcounter.com,
  // pick a code (for example "asadikine") and write it here. Leave "" to disable.
  goatcounter: "asadikine",

  portrait: "assets/img/portrait.jpg",

  // Profile links. "hero: true" = also shown under your introduction on the home page.
  profiles: [
    { label: "GitHub", url: "https://github.com/asadikine", icon: "github", hero: true },
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=hUpgbI4AAAAJ", icon: "scholar", hero: true },
    { label: "ORCID", url: "https://orcid.org/0009-0001-4313-0476", icon: "orcid" },
    { label: "LinkedIn", url: "https://linkedin.com/in/amine-sadikine", icon: "linkedin", hero: true },
    { label: "X", url: "https://x.com/AmineSadikine", icon: "x" },
    { label: "Email", url: "mailto:sadikine@univ-brest.fr", icon: "mail", hero: true },
  ],

  // Contact block at the bottom of the home page.
  contact: {
    email: "sadikine@univ-brest.fr",
    address: "22 Rue Camille Desmoulins, 29200 Brest, France",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=22+Rue+Camille+Desmoulins+29200+Brest",
    note: "The easiest way to reach me is by email. My CV is available on request.",
  },

  home: {
    subtitle: "Medical imaging AI · 3D segmentation, multimodal prediction, model reliability",
    intro: [
      "Hi, I'm Amine. I develop deep learning methods that turn CT and MRI scans into measurements and predictions clinicians can trust, and I build the data pipelines that let those methods run on real hospital data. I have applied this to liver and vessel imaging during my PhD, and to stroke as a postdoc in Brest.",
      "Before medicine I worked on satellite radar images of the sea and, during an internship at IRAP, on the Euclid space mission. The habit has stayed the same: get numbers out of images that people can rely on.",
    ],
    inShort: [
      "PhD in medical image analysis (LaTIM, 2024)",
      "Postdoc in the Horizon Europe project STRATIF-AI, working with the Brest Stroke Registry (BSR)",
      "First-author papers in CMIG, IEEE ISBI and IEEE ICIP, including oral presentations",
      "Open-source stroke lesion segmentation software (ISLES’26)",
      "Collaborations with Charité Berlin and CONICET Argentina",
      "Supervision of interns and annotation training for clinicians",
    ],
    workOn: [
      "<b>Segmentation that respects anatomy.</b> 3D deep networks guided by shape and topology priors. Applied to organs and blood vessels in CT and MRI.",
      "<b>Multimodal, multi-source prediction.</b> Imaging combined with clinical and other patient data. Applied to stroke outcome in neurology.",
      "<b>Models that hold up elsewhere.</b> Generalization across hospitals and the data engineering that makes it possible, from hospital archives to large registries.",
    ],
    // "Research interests" on the home page: keep it general.
    interests: [
      "Quantitative imaging biomarkers from CT and MRI.",
      "Multimodal, multi-source modeling, across hospitals and over time.",
      "New organs and diseases, oncology among them.",
    ],
    // "Recent highlights" on the home page: newest first, 3 to 5 lines.
    // Keep only what is public; add a line at each paper, talk or result, and
    // remove lines older than about a year so the list never looks abandoned.
    highlights: [
      { when: "Nov 2026", html: "Now also affiliated with the <a href=\"https://www.imt-atlantique.fr/en/research-innovation/teams/brain\">BRAIN team</a> of Lab-STICC (CNRS UMR 6285) at IMT Atlantique." },
      { when: "Oct 2026", html: "Released the open-source ISLES’26 stroke lesion segmentation software and model weights (<a href=\"https://doi.org/10.5281/zenodo.23570376\">Zenodo</a>, <a href=\"https://github.com/asadikine/isles26-stratif-ai-bre\">GitHub</a>)." },
      { when: "Sep 2026", html: "ISLES’26 challenge, results announced at the SWITCH workshop, MICCAI 2026: one of the six lowest lesion-volume errors among 46 international teams, Dice 0.712." },
      { when: "Jun 2026", html: "Presented the modeling work of STRATIF-AI at the consortium meeting in Brest, including a session open to the public." },
      { when: "2025", html: "Started the external validation, on Brest data, of a hematoma-expansion model from Charité Berlin." },
    ],
  },
};
