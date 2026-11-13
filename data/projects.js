// ============================================================
//  PROJECTS
//  Sorted automatically, most recent first, using "sortDate" (YYYY-MM).
//  featured: true  -> also shown on the home page (the 3 most recent featured).
//  image: an animation (assets/anim/*.svg) or any picture (jpg, png, gif).
//  summary: always visible. details: shown when the visitor clicks "Read more".
//  To add a project: copy one block { ... }, paste it, and edit the fields.
// ============================================================

window.PROJECTS = [
  {
    title: "ISLES’26: finding stroke lesions on MRI",
    sortDate: "2026-09",
    featured: true,
    image: "assets/anim/isles.svg",
    imageAlt: "Animated summary of the method: center-disjoint split of the training data, percentile-clipped normalization, and an ensemble of three nnU-Net models",
    summary: "Our team’s submission (STRATIF-AI-BRE, “BRE SEG”) to the <a href=\"https://isles-26.grand-challenge.org/\">ISLES’26 challenge</a> at MICCAI 2026 segments ischemic stroke lesions on T1-weighted brain MRI, from the acute to the chronic stage. On about 500 unseen test scans, it had one of the six lowest lesion-volume errors among 46 international teams (AVD 0.752), with a Dice of 0.712, within 0.03 of the top ten.",
    details: "Three choices make the difference. Training centers are split into three folds and a holdout by mixed-integer linear programming, balancing lesion chronicity, volume and multifocality, so every validation score is measured on unseen hospitals. Intensities are clipped at the 0.5th and 99.5th percentiles before z-scoring inside the brain, which keeps the low-contrast range where acute lesions sit. The prediction is an ensemble of three 3D nnU-Net (ResEnc-L) fold models with mirroring test-time augmentation. Trained on a reduced schedule (500 epochs, 3-fold ensemble). Detecting small lesions one by one (F1 0.500) is the next thing to improve. Released as an open-source container with model weights on Zenodo; research software, not a medical device.",
    funding: { logos: ["assets/img/logos/eu.svg", "assets/img/logos/stratif.png"], text: "Developed within STRATIF-AI · Funded by the European Union · grant agreement No 101080875" },
    tags: ["Engineering", "Challenge", "2026"],
    tools: ["nnU-Net v2 ResEnc-L", "MILP", "PyTorch", "Docker / Podman"],
    links: [
      { label: "View on GitHub", url: "https://github.com/asadikine/isles26-stratif-ai-bre", github: true },
      { label: "Challenge", url: "https://isles-26.grand-challenge.org/" },
      { label: "Zenodo", url: "https://doi.org/10.5281/zenodo.23570376" },
      { label: "Model weights", url: "https://doi.org/10.5281/zenodo.23595249" },
    ],
  },
  {
    title: "Who is at risk after a brain bleed?",
    ongoing: true,
    sortDate: "2025-07",
    featured: true,
    image: "assets/anim/ich.svg",
    imageAlt: "Animated diagram: CT features and admission data enter a model that outputs a mortality probability placed on a low, moderate, high risk scale",
    summary: "With the Brest Stroke Registry (BSR), one of the largest population-based stroke registries in Europe (14,000+ patients), I combine what the CT shows, hematoma volume and location, with what clinicians record at admission. The model outputs a probability of death within 30 days, which places each patient on a low / moderate / high risk scale (best AUROC 0.92).",
    details: "Imaging and clinical data together predict better than either alone, across machine-learning and foundation models. Within the Horizon Europe project <a href=\"https://stratif-ai.eu/\"><b>STRATIF-AI</b></a> (15 partners, 8 hospitals), modeling work package. Supervised by <a href=\"https://www.researchgate.net/profile/Serge-Timsit\">Pr Serge Timsit</a> (MD, PhD, head of the Department of Neurology, Brest University Hospital) and <a href=\"https://bastienpasdeloup.github.io/\">Bastien Pasdeloup</a> (IMT Atlantique).",
    funding: { logos: ["assets/img/logos/eu.svg", "assets/img/logos/stratif.png"], text: "Funded by the European Union · grant agreement No 101080875" },
    tags: ["Research", "Engineering", "2025 – now"],
    tools: ["scikit-learn", "gradient boosting", "foundation models", "risk stratification"],
  },
  {
    title: "The plumbing behind the Brest Stroke Registry",
    ongoing: true,
    sortDate: "2025-07",
    image: "assets/anim/registry.svg",
    imageAlt: "Animated pipeline from PACS through DICOM and NIfTI conversion to linkage with lab results and feature extraction",
    summary: "Models are only as good as the data behind them. For the brain hemorrhage patients of the Brest Stroke Registry, I built the pipeline that pulls scans from the hospital PACS, converts them, and links more than a million blood test results, coming from two different lab systems, to the right patient episode.",
    details: "I wrote it to scale to the whole registry. The hospital then recruited a data engineer, whom I helped select and now co-supervise, to extend it to the rest of the registry, building on my code.",
    tags: ["Engineering", "2025 – now"],
    tools: ["Python", "PACS", "DICOM", "dcm2niix", "SimpleITK", "Pandas"],
    note: "Internal hospital tool.",
  },
  {
    title: "Does a model from Berlin work in Brest?",
    ongoing: true,
    sortDate: "2025-07",
    image: "assets/anim/charite.svg",
    imageAlt: "Animated pair of CT slices: the hematoma grows between baseline and follow-up",
    summary: "Charité CLAIM built a diffusion model that predicts how a brain hematoma will grow. I lead its external validation at our hospital: I curated 271 baseline and follow-up CT pairs and built the pipeline that runs their model on our data.",
    details: "With <a href=\"https://claim.charite.de/en/\">CLAIM, Charité – Universitätsmedizin Berlin</a>.",
    tags: ["Research", "Engineering", "2025 – now"],
    tools: ["diffusion models", "external validation", "longitudinal CT"],
  },
  {
    title: "Keeping vessels in one piece",
    sortDate: "2020-10",
    featured: true,
    image: "assets/anim/phd.svg",
    imageAlt: "Animated vessel tree: broken with a voxel-wise loss, drawn fully connected with a shape prior",
    summary: "Standard losses judge each voxel on its own, so thin vessels come out broken. During my PhD I taught 3D networks what vessels and organs should look like, using learned shape and topology priors. Fewer breaks, and a lighter model.",
    details: "Advisors: <a href=\"https://www.imt-atlantique.fr/fr/personne/pierre-henri-conze\">Pierre-Henri Conze</a> (IMT Atlantique), <a href=\"https://www.bogdanbadic.com/\">Pr Bogdan Badic</a> (MD, PhD, Brest University Hospital) and Pascal Ballet (UBO). Joint Multi-Prior Encoding with <a href=\"https://eferrante.github.io/index.html\">Enzo Ferrante</a> (CONICET, Argentina).",
    tags: ["Research", "PhD", "2020 – 2024"],
    tools: ["PyTorch", "3D CNNs", "auto-encoders", "contrastive learning", "Optuna"],
  },
  {
    title: "Spotting oil slicks from space",
    sortDate: "2020-03",
    image: "assets/anim/sar.svg",
    imageAlt: "Animated satellite radar image of the sea with a detected oil slick and wind arrows",
    summary: "At CLS, I built a detector for oil slicks on Sentinel-1 radar images. Adding wind speed as a second input halved the false alarms (AUC 0.91).",
    details: "CLS runs the VIGISAT satellite station in Brest and contributes to Europe’s CleanSeaNet pollution monitoring. I built a patch dataset annotated from operational images, fine-tuned an InceptionV3 validated by cross-validation, and wrote a pipeline that produces detection maps over full-size scenes. Six-month M.Sc. internship supervised by Cyril Chailloux, PhD (CLS).",
    tags: ["Internship", "Engineering", "2020"],
    tools: ["InceptionV3", "transfer learning", "Sentinel-1 SAR", "Python"],
  },
  {
    title: "Separating overlapping galaxy spectra for ESA’s Euclid mission",
    sortDate: "2019-03",
    image: "assets/anim/euclid.svg",
    imageAlt: "Animated diagram: spectra of nearby galaxies overlap differently in two grism directions and are separated",
    summary: "Euclid maps billions of galaxies to study dark energy. Its near-infrared spectrometer works without slits, so spectra of neighboring galaxies overlap on the detector. At IRAP I treated this as a source-separation problem.",
    details: "In the <a href=\"https://www.irap.omp.eu/sisu/\">SISU</a> signal-processing team, I built the mixing model, fused observations from the four grism dispersion directions, and compared non-blind least-squares estimators with blind NMF methods on simulated Euclid data, including robustness to position offsets. Six-month internship funded by CNES, supervised by Shahram Hosseini (PhD, HDR, IRAP – Université Toulouse III).",
    media: {
      src: "assets/img/projects/euclid-perseus.jpg",
      alt: "Euclid’s view of the Perseus cluster of galaxies",
      caption: "Euclid’s view of the Perseus cluster (first images, 2023). Credit: ESA/Euclid/Euclid Consortium/NASA, image processing by J.-C. Cuillandre (CEA Paris-Saclay), G. Anselmi, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/igo/\">CC BY-SA 3.0 IGO</a>. Cropped.",
    },
    tags: ["Internship", "Signal processing", "2019"],
    tools: ["source separation", "NMF", "least squares", "MATLAB", "slitless spectroscopy"],
    links: [{ label: "Euclid at CNES", url: "https://cnes.fr/en/projects/euclid" }],
  },
];
