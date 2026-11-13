// ============================================================
//  ABOUT PAGE
//  Lists are shown in the order written here: keep the newest first.
// ============================================================

window.ABOUT = {
  intro: "I speak French, English, Arabic, Moroccan Darija and Tachelhit, and my path has crossed several fields: astrophysics, Earth observation, then medicine. What links them is images, and one recurring question: how much can you trust what a model reads in them?",

  // How many steps of "How I got here" are visible before "Show earlier steps".
  pathVisible: 3,
  // logo: an image path (or logos: [two paths]); leave it out and "initials" is shown instead.
  path: [
    {
      when: "2025 – now", now: true, logo: "assets/img/logos/chu.svg",
      role: "Postdoctoral researcher",
      place: "Brest University Hospital, Department of Neurology · INSERM U1078 · <a href=\"https://www.imt-atlantique.fr/fr/recherche-innovation/equipe/brain\">BRAIN team</a>, <a href=\"https://labsticc.fr/en\">Lab-STICC</a> (CNRS UMR 6285), IMT Atlantique",
      text: "Multimodal AI for stroke risk stratification within the Horizon Europe STRATIF-AI consortium, using the Brest Stroke Registry (BSR), one of the largest population-based stroke registries in Europe: outcome models, data pipelines, and close work with neurologists.",
      supervision: "<a href=\"https://www.researchgate.net/profile/Serge-Timsit\">Pr Serge Timsit</a>, MD, PhD (PU-PH), head of the Department of Neurology · <a href=\"https://bastienpasdeloup.github.io/\">Bastien Pasdeloup</a>, PhD (IMT Atlantique), AI",
      took: "retrieving and linking hospital data at scale, clinical data, external validation, working with clinicians.",
    },
    {
      when: "2020 – 2024", logo: "assets/img/logos/latim.png",
      role: "PhD in medical image analysis",
      place: "LaTIM, Inserm UMR 1101 · Université de Bretagne Occidentale",
      text: "Deep vascular segmentation with geometric and topological constraints. Defended on July 10, 2024.",
      supervision: "<a href=\"https://www.imt-atlantique.fr/fr/personne/pierre-henri-conze\">Pierre-Henri Conze</a>, PhD (IMT Atlantique) · <a href=\"https://www.bogdanbadic.com/\">Pr Bogdan Badic</a>, MD, PhD (PU-PH, Brest University Hospital) · Pascal Ballet, PhD (UBO)",
      took: "3D segmentation, representation learning, reproducible benchmarks, writing papers.",
    },
    {
      when: "Mar – Aug 2020", logo: "assets/img/logos/cls.png",
      role: "Research intern, AI for SAR remote sensing",
      place: "CLS Group, Brest",
      text: "Deep learning for oil-slick detection in satellite radar (SAR) images.",
      supervision: "Cyril Chailloux, PhD (CLS)",
      took: "deep learning on real data, building a dataset, a first multimodal model.",
    },
    {
      when: "2019 – 2020", logo: "assets/img/logos/ur1.png",
      role: "M.Sc. Signal and Image Processing",
      place: "Université de Rennes 1",
      text: "A broad, in-depth program in signal and image processing, computer vision and machine learning.",
      took: "the methods I still rely on every day.",
    },
    {
      when: "Mar – Aug 2019", logo: "assets/img/logos/irap.png",
      role: "Research intern, Euclid space mission (ESA)",
      place: "IRAP – CNRS / Université Toulouse III, <a href=\"https://www.irap.omp.eu/sisu/\">SISU team</a> · CNES-funded",
      text: "Separation of overlapping galaxy spectra from Euclid’s slitless spectrometer, by fusing the four grism directions and comparing least-squares and NMF methods on simulated data.",
      supervision: "Shahram Hosseini, PhD, HDR (IRAP)",
      took: "source separation, a first physical mixing model, working inside a large space mission.",
    },
    {
      when: "2018 – 2019", logo: "assets/img/logos/toulouse.png",
      role: "M.Sc. Space Imaging",
      place: "Université Toulouse III – Paul Sabatier, now Université de Toulouse",
      text: "Specialization in Earth and space observation imaging, within the master’s in signal, image and machine learning, taught alongside Toulouse’s space laboratories (IRAP, CESBIO). It led to my CNES-funded internship on the Euclid mission. <a href=\"https://www.utoulouse.fr/decouvrir-nos-diplomes/master-parcours-signal-image-et-apprentissage-automatique-sia2\">Program</a>",
      took: "satellite and astronomical imaging, the physics of how these images are formed, and machine learning applied to them.",
    },
  ],

  funding: [
    {
      logos: ["assets/img/logos/eu.svg", "assets/img/logos/stratif.png"],
      title: "Horizon Europe · <a href=\"https://stratif-ai.eu/\">STRATIF-AI</a> (2025 – now)",
      text: "Digital twins for stroke, 15 partners and 8 hospitals. My postdoctoral position is funded by the project; I work in the modeling work package (WP5), contribute to the progress reports, present at the biannual consortium meetings and take part in the European Commission reviews. Funded by the European Union, grant agreement No 101080875.",
    },
    {
      logos: ["assets/img/logos/ibsam.png"],
      title: "IBSAM travel grant (2023)",
      text: "Université de Bretagne Occidentale, €400 (maximum award), selected on a written application, for the oral presentation at IEEE ISBI 2023, Cartagena, Colombia.",
      link: { label: "Grantees page", url: "https://www.univ-brest.fr/ibsam/fr/page/soutien-ibsam-mobilite-congres-doctorants" },
    },
    {
      logos: ["assets/img/logos/cnes.png"],
      title: "CNES-funded internship, Euclid mission (2019)",
      text: "Six months at IRAP, Toulouse, on spectral separation for ESA’s Euclid space telescope.",
      link: { label: "Euclid at CNES", url: "https://cnes.fr/en/projects/euclid" },
    },
  ],

  // How many photo events are visible before "Show more events".
  photosVisible: 3,

  // International collaborations.
  collaborations: [
    {
      logos: ["assets/img/logos/charite.png"],
      title: "<a href=\"https://claim.charite.de/en/\">CLAIM, Charité – Universitätsmedizin Berlin</a>",
      where: "Berlin, Germany · 2025 – now",
      text: "External validation, on Brest data, of their diffusion model of hematoma expansion.",
    },
    {
      logos: ["assets/img/logos/eu.svg", "assets/img/logos/stratif.png"],
      title: "<a href=\"https://stratif-ai.eu/\">STRATIF-AI consortium</a>",
      where: "Europe · 2025 – now",
      text: "15 partners and 8 hospitals across Europe, Horizon Europe; modeling work package.",
    },
    {
      logos: ["assets/img/logos/conicet.png"],
      title: "<a href=\"https://eferrante.github.io/index.html\">Enzo Ferrante, CONICET</a>",
      where: "Argentina",
      text: "Joint shape and topology priors for vessel segmentation, published at IEEE ISBI 2024.",
    },
  ],

  // The image opens the certificate (url). "more" is an optional extra link.
  certificates: [
    {
      img: "assets/img/certs/citi-2026.jpg",
      title: "Human Research: Data or Specimens Only Research",
      issuer: "CITI Program · completed July 2026, valid until July 2029 · credentialed access to clinical research data",
      url: "https://www.citiprogram.org/verify/?weeaf38ad-4998-45ec-81ea-156ddafca586-78184893",
      more: "https://about.citiprogram.org/",
    },
    {
      img: "assets/img/certs/embs-2023.jpg",
      title: "15th IEEE EMBS-SPS International Summer School on Biomedical Imaging",
      issuer: "Cartagena, Colombia · April 2023 · 30 hours",
      note: "A selective, long-running IEEE school in biomedical imaging, with a poster presentation.",
      url: "https://drive.google.com/file/d/167oyjuc10mLCZCmbaKCcAyMYIzl8t8vK/view",
      more: "https://conferences.imt-atlantique.fr/ieeess/index.php?pid=0",
    },
    {
      img: "assets/img/certs/ai4health-2022.jpg",
      title: "AI4Health Winter School",
      issuer: "Health Data Hub, 3IA Côte d’Azur, PRAIRIE, MIAI · January 2022 · plenary and practical sessions",
      url: "https://drive.google.com/file/d/1zTuomlvYezkn10J1fVBOtfMiY0Q7Hm06/view",
      more: "https://www.health-data-hub.fr/ai4health-winter-school-2022",
    },
  ],

  teaching: [
    "Co-supervising the data engineer recruited for the Brest Stroke Registry (BSR), since October 2026.",
    "Trained two neurology residents to refine AI-generated hemorrhage segmentations on CT, with an annotation protocol and practitioner guide (2026).",
    "Recruitment committee for a Data Engineer position at Brest University Hospital: job description and interviews (2026).",
    "Co-supervised a six-month international intern on Vision Transformers for vessel segmentation (2022).",
    "Taught and supervised engineering student projects on medical image segmentation, interdisciplinary health track, IMT Atlantique (2021).",
  ],

  outreach: [
    {
      when: "Oct 2022",
      html: "<b>Fête de la Science</b> at the Ateliers des Capucins, Brest · outreach activities.",
      links: [{ label: "Event", url: "https://www.oceanopolis.com/fete-de-la-science-2022/" }],
    },
    {
      when: "Apr 2022",
      html: "<b>Science en Theizh</b>, 2nd edition, Brest · co-organizer · doctoral researchers present their work to the public.",
      links: [{ label: "Website", url: "https://www.scienceentheizh.fr/qui-sommes-nous" }, { label: "Video", url: "https://www.youtube.com/watch?v=jHaTh34pGUM" }],
    },
    {
      when: "Apr 2022",
      html: "<b>Le Télégramme</b> · “Science en Theizh présentera la diversité de la recherche à Brest le samedi 9 avril”. Press coverage of the 2022 edition, which I co-organized.",
      links: [{ label: "Article", url: "https://www.letelegramme.fr/finistere/brest-29200/science-en-theizh-presentera-la-diversite-de-la-recherche-a-brest-le-samedi-9-avril-227327.php" }],
    },
    {
      when: "2021 – 2022",
      html: "<b>DAKODOC</b>, doctoral researchers’ association of the Brest site · executive board, communications officer.",
    },
  ],
};
