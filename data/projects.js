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
    imageAlt: "Animated figure: training centers are assigned whole to three folds and a holdout, intensities are clipped and z-scored to train three 3D deep-learning models, and their ensemble outlines the stroke lesion on MRI",
    summary: "Our team’s submission to the <a href=\"https://isles-26.grand-challenge.org/\">ISLES’26 challenge</a> at MICCAI 2026 segments ischemic stroke lesions on T1-weighted brain MRI, from the acute to the chronic stage. On about 500 unseen test scans, it had one of the six lowest lesion-volume errors among 46 international teams (AVD 0.752), with a Dice of 0.712, within 0.03 of the top ten.",
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
    imageAlt: "Animated figure: radiological features from the admission CT and clinical features (age, GCS, blood pressure and more) are combined in a model that places the patient on a 30-day mortality risk scale, P(death ≤ 30 d | x)",
    summary: "With the Brest Stroke Registry (BSR), a population-based registry of 14,000+ stroke patients, I combine what the CT shows, hematoma volume and location, with what clinicians record at admission. The model outputs a probability of death within 30 days, which places each patient on a low / moderate / high risk scale (best AUROC 0.92).",
    details: "Imaging and clinical data together predict better than either alone, across machine-learning and foundation models. Within the Horizon Europe project <a href=\"https://stratif-ai.eu/\"><b>STRATIF-AI</b></a> (15 partners, 8 hospitals), modeling work package.",
    funding: { logos: ["assets/img/logos/eu.svg", "assets/img/logos/stratif.png"], text: "Funded by the European Union · grant agreement No 101080875" },
    tags: ["Research", "Engineering", "2025 – now"],
    tools: ["scikit-learn", "gradient boosting", "foundation models", "risk stratification"],
  },
  {
    title: "Getting stroke data out of the hospital’s systems",
    ongoing: true,
    sortDate: "2025-07",
    image: "assets/anim/registry.svg",
    imageAlt: "Animated pipeline: once access is approved, CT and MRI exams are retrieved from the hospital PACS, anonymized, the right series is selected and converted to NIfTI; blood tests from two lab systems are extracted, cleaned, harmonized and merged; both are linked to the patient episode, one registry row per episode",
    summary: "Models are only as good as the data behind them. For the brain hemorrhage patients of the Brest Stroke Registry, I built from scratch the pipeline that gets their data out of the hospital’s systems. The pipeline now retrieves 95.8% of the blood samples taken within 48 h of admission.",
    details: [
      "It retrieves CT and MRI exams from the PACS, anonymizes them, and picks the series the models need out of the many in each exam: for CT, the original non-contrast scan, not a reconstruction. It links more than a million blood test results from two lab systems to the right patient episode, after mapping each test, whose code and unit changed over the years, to a single name and unit.",
      "Before writing any code, I found the people in the hospital who could grant access and approvals. I wrote it to scale to the whole registry, and it is now being extended beyond the brain hemorrhage patients, building on my code.",
    ],
    funding: { logos: ["assets/img/logos/eu.svg", "assets/img/logos/stratif.png"], text: "Developed within STRATIF-AI · Funded by the European Union · grant agreement No 101080875" },
    tags: ["Engineering", "2025 – now"],
    tools: ["Python", "PACS", "DICOM server", "SQL", "dcm2niix", "SimpleITK", "Pandas"],
    note: "Internal hospital tool.",
  },
  {
    title: "Does a model from Berlin work in Brest?",
    ongoing: true,
    sortDate: "2025-07",
    image: "assets/anim/charite.svg",
    imageAlt: "Animated figure: a baseline CT and clinical variables condition a latent diffusion model that predicts the follow-up CT; several illustrative simulations are turned into a probability map of hematoma growth",
    summary: "Charité CLAIM built a diffusion model that predicts how a brain hematoma will grow. I lead its external validation at our hospital: I curated 274 baseline and follow-up CT pairs and set up a local pipeline that runs their model on our data.",
    details: [
      "To find these pairs, I searched the whole registry for patients with a primary brain hemorrhage who had both a baseline and a follow-up CT, and inspected every pair visually to exclude patients who had surgery after the stroke. I segmented the hematomas automatically, then trained a neurology resident to check and refine each segmentation.",
      "I set up the local pipeline that runs the whole validation in our center, and improved its preprocessing. With <a href=\"https://claim.charite.de/en/\">CLAIM, Charité – Universitätsmedizin Berlin</a>.",
    ],
    funding: { logos: ["assets/img/logos/eu.svg", "assets/img/logos/stratif.png"], text: "Developed within STRATIF-AI · Funded by the European Union · grant agreement No 101080875" },
    tags: ["Research", "Engineering", "2025 – now"],
    tools: ["Python", "PyTorch", "diffusion models", "3D registration", "external validation", "longitudinal CT"],
  },
  {
    title: "Learning anatomical shape, from whole organs to thin vessels",
    sortDate: "2023-06",
    featured: true,
    image: "assets/anim/phd-socae.svg",
    imageAlt: "Animated diagram: an abdominal CT slice goes through a segmentation model; an illustrative predicted vessel mask and the ground-truth mask pass through a shape encoder with an undercomplete branch for the global shape and an overcomplete branch for fine detail; the distance between their codes is sent back to the model as a shape loss",
    summary: "Segmentation networks miss thin vessels and small organs because their receptive field grows with depth. I designed S-OCAE, a semi-overcomplete auto-encoder that gives the network a shape prior able to keep fine detail. Averaged over three vessel datasets, it raised a U-Net’s Dice from 60.8% to 64.9% and cut the Hausdorff distance from 52.6 to 40.4 mm.",
    details: [
      "During training, S-OCAE encodes both the predicted and the ground-truth masks, and the distance between their codes is added to the segmentation loss. An undercomplete branch captures the global shape; an overcomplete branch keeps a small receptive field for thin structures. The encoder is dropped at inference.",
      "Trained and evaluated with 5-fold cross-validation on six public datasets (20 to 303 cases per task): MSD, LiTS, KiTS19, CHAOS (CT and MR), 3D-IRCADb and DRIVE (retina). On abdominal organs in CT, average Dice rose from 91.5% to 92.5%.",
      "Published in Computerized Medical Imaging and Graphics, 2024. PhD work supervised by <a href=\"https://www.imt-atlantique.fr/fr/personne/pierre-henri-conze\">Pierre-Henri Conze</a> (IMT Atlantique), <a href=\"https://www.bogdanbadic.com/\">Pr Bogdan Badic</a> (MD, PhD, Brest University Hospital) and Pascal Ballet (UBO).",
    ],
    tags: ["Research", "PhD", "2021 – 2023"],
    tools: ["PyTorch", "U-Net", "convolutional auto-encoders", "overcomplete representations", "shape priors", "CT & MR segmentation"],
    links: [
      { label: "ICIP 2022 paper", url: "https://ieeexplore.ieee.org/abstract/document/9897188" },
      { label: "CMIG 2024 paper", url: "https://doi.org/10.1016/j.compmedimag.2024.102356" },
    ],
  },
  {
    title: "Learning liver vessels at multiple scales",
    sortDate: "2022-10",
    image: "assets/anim/phd-contrastive.svg",
    imageAlt: "Animated diagram: multi-scale clustering splits a liver vessel tree into large, medium and small vessels; a 3D multi-task network with a shared encoder predicts the whole tree and each scale, trained jointly with a contrastive loss that pulls features of the same scale together and pushes the scales apart",
    summary: "Liver vessels range from a thick trunk to hair-thin branches, and one network struggles to segment them all on CT. I designed a scale-specific multi-task contrastive network that learns large, medium and small vessels as separate auxiliary tasks. It raised vessel connectivity (clDice) from 46.8% to 48.1% over a 3D ResUNet baseline.",
    details: [
      "Each ground-truth tree is split into three scales by clustering its branches on their estimated radius. A shared 3D encoder feeds a main vessel decoder and one decoder per scale, trained jointly with a contrastive loss that keeps the scales apart; only the main decoder runs at inference.",
      "Trained and evaluated on the public 3D-IRCADb dataset with 5-fold cross-validation. Dice rose from 54.3% to 55.0%, and without the contrastive loss clDice stayed at the baseline level.",
      "Published in IEEE International Symposium on Biomedical Imaging (ISBI), 2023. PhD work supervised by <a href=\"https://www.imt-atlantique.fr/fr/personne/pierre-henri-conze\">Pierre-Henri Conze</a> (IMT Atlantique), <a href=\"https://www.bogdanbadic.com/\">Pr Bogdan Badic</a> (MD, PhD, Brest University Hospital) and Pascal Ballet (UBO).",
    ],
    tags: ["Research", "PhD", "2022"],
    tools: ["3D U-Net", "multi-task learning", "contrastive learning", "vessel scale clustering", "clDice", "PyTorch", "MONAI", "Python"],
    links: [
      { label: "View on GitHub", url: "https://github.com/asadikine/vessel-scale-clustering", github: true },
      { label: "ISBI 2023 paper", url: "https://ieeexplore.ieee.org/abstract/document/10230364" },
    ],
  },
  {
    title: "Spotting oil slicks from space",
    sortDate: "2020-03",
    image: "assets/anim/sar.svg",
    imageAlt: "Animated schematic: a window slides over a Sentinel-1 radar scene, a deep-learning classifier labels each patch as oil or not, and the detection map lights up a slick trailing a ship and a dark low-wind area; the wind map then removes the low-wind false alarm",
    summary: "At CLS, I built a detector for oil slicks on Sentinel-1 radar images. A deep network scans each scene patch by patch and returns a detection map; wind speed then removes the calm, low-wind areas that look like oil on radar, which cut the false alarms by about 40% without losing a single detected slick.",
    details: "CLS runs the VIGISAT satellite station in Brest and contributes to Europe’s CleanSeaNet pollution monitoring. From 1,822 scenes labeled by CLS analysts, I built a patch dataset, choosing as negative examples the sea patches that look most like a slick (by structural similarity). I fine-tuned an InceptionV3 and wrote the pipeline that turns it into detection maps over full-size scenes, tested on 24 of them. Small slicks were often missed, which pointed to the next step: training on more of them. Six-month M.Sc. internship supervised by Cyril Chailloux, PhD (CLS).",
    // Several pictures: they change every few seconds, and a click shows the next one.
    media: [
      { src: "assets/img/projects/cls-vigisat.jpg", alt: "Amine Sadikine in front of the radome of the VIGISAT satellite receiving station at CLS in Brest", caption: "At the VIGISAT satellite station, CLS, Brest." },
      { src: "assets/img/projects/vigisat-station.jpg", alt: "The VIGISAT receiving station in Brest: a white radome on a small building", caption: "The VIGISAT receiving station. Photo: Amine Sadikine." },
    ],
    tags: ["Internship", "Engineering", "2020"],
    tools: ["Sentinel-1 SAR", "InceptionV3", "transfer learning", "hard negative mining", "sliding-window detection", "wind filtering", "Python"],
  },
  {
    title: "Untangling overlapping galaxy spectra for ESA’s Euclid mission",
    sortDate: "2019-03",
    image: "assets/anim/euclid.svg",
    imageAlt: "Animated figure from simulated Euclid data: a galaxy in the direct image, its spectrum overlapping its neighbors’ in the slitless image, the 2D spectra from four grism directions reduced to 1D, and the separated spectrum with its H-alpha line used for the redshift",
    summary: "Euclid measures galaxy redshifts from near-infrared spectra taken without slits. In the slitless image each galaxy becomes a streak of dispersed light that can overlap its neighbors’ streaks, and this contamination is the main source of redshift errors. At IRAP I treated it as a source-separation problem.",
    details: [
      "The figure walks through the pipeline on simulated data. A galaxy located in the direct image (a) becomes a streak in the slitless image (b), overlapping the streaks of its neighbors. For a target galaxy, the 2D spectrum is extracted in each of four grism exposures and reduced to 1D (c): dispersion at 0°, at 180°, and twice at 90° with a shifted pointing, the configuration planned at the time (since 2020 Euclid uses its 0° and 180° grisms, each also tilted by 4°). Each exposure is contaminated differently: bright neighbors’ continua at 0° and 180°, another galaxy’s emission line at 90°.",
      "In the <a href=\"https://www.irap.omp.eu/sisu/\">SISU</a> signal-processing team, I modeled each row of a 2D spectrum as a weighted sum of the 1D spectra of the overlapping objects, with weights measured on the direct images, and fused the four exposures into one estimation problem. I then compared non-blind least-squares estimators, with and without a positivity constraint, with blind NMF methods (alternating least squares and multiplicative updates). In the NMF methods, a sparse mixing matrix encodes which neighbor contaminates which exposure, and each was tested over 100 random initializations.",
      "The separated spectrum (d) recovers the Hα emission line used to measure the redshift. Non-blind methods did best when direct images and spectra were perfectly aligned, while blind methods stayed robust to sub-pixel position offsets. All data come from the Euclid instrument simulator. Six-month Master’s internship funded by CNES, supervised by Shahram Hosseini (PhD, HDR, IRAP – Université de Toulouse III).",
    ],
    media: {
      src: "assets/img/projects/euclid-perseus.jpg",
      alt: "Euclid’s view of the Perseus cluster of galaxies",
      caption: "Euclid’s view of the Perseus cluster (first images, 2023). Credit: ESA/Euclid/Euclid Consortium/NASA, image processing by J.-C. Cuillandre (CEA Paris-Saclay), G. Anselmi, <a href=\"https://creativecommons.org/licenses/by-sa/3.0/igo/\">CC BY-SA 3.0 IGO</a>. Cropped.",
    },
    tags: ["Internship", "Signal processing", "2019"],
    tools: ["blind source separation", "NMF", "constrained least squares", "multi-view data fusion", "slitless spectroscopy", "MATLAB"],
    links: [{ label: "Euclid at CNES", url: "https://cnes.fr/en/projects/euclid" }],
  },
];
