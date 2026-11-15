// ============================================================
//  PUBLICATIONS
//  Newest first. "short" is the label used on the home page.
//  badges: small grey labels, for example ["oral"].
//  links: doi, arxiv, hal (leave out the ones you do not have).
//  bibtex: paste the entry between the backticks ` `; it is shown by the BibTeX button.
//  Your name (SITE.me in data/site.js) is put in bold automatically.
// ============================================================

window.PUBLICATIONS = {
  papers: [
    {
      title: "Improving abdominal image segmentation with overcomplete shape priors",
      authors: "A. Sadikine, B. Badic, J.-P. Tasu, V. Noblet, P. Ballet, D. Visvikis, P.-H. Conze",
      venue: "Computerized Medical Imaging and Graphics, 113:102356, 2024",
      short: "CMIG 2024",
      links: { doi: "https://doi.org/10.1016/j.compmedimag.2024.102356" },
      bibtex: `@article{sadikine2024improving,
  title={Improving abdominal image segmentation with overcomplete shape priors},
  author={Sadikine, Amine and Badic, Bogdan and Tasu, Jean-Pierre and Noblet, Vincent and Ballet, Pascal and Visvikis, Dimitris and Conze, Pierre-Henri},
  journal={Computerized medical imaging and graphics},
  volume={113},
  pages={102356},
  year={2024},
  publisher={Elsevier}
}`,
    },
    {
      title: "Deep vessel segmentation with joint multi-prior encoding",
      authors: "A. Sadikine, B. Badic, E. Ferrante, V. Noblet, P. Ballet, D. Visvikis, P.-H. Conze",
      venue: "IEEE International Symposium on Biomedical Imaging (ISBI), Athens, 2024",
      short: "ISBI 2024",
      links: { doi: "https://doi.org/10.1109/ISBI56570.2024.10635835", arxiv: "https://arxiv.org/abs/2409.12334" },
      bibtex: `@inproceedings{sadikine2024deep,
  title={Deep vessel segmentation with joint multi-prior encoding},
  author={Sadikine, Amine and Badic, Bogdan and Ferrante, Enzo and Noblet, Vincent and Ballet, Pascal and Visvikis, Dimitris and Conze, P-H},
  booktitle={2024 IEEE International Symposium on Biomedical Imaging (ISBI)},
  pages={1--5},
  year={2024},
  organization={IEEE}
}`,
    },
    {
      title: "Scale-specific auxiliary multi-task contrastive learning for deep liver vessel segmentation",
      authors: "A. Sadikine, B. Badic, J.-P. Tasu, V. Noblet, P. Ballet, D. Visvikis, P.-H. Conze",
      venue: "IEEE International Symposium on Biomedical Imaging (ISBI), Cartagena, 2023",
      short: "ISBI 2023",
      badges: ["oral"],
      links: { ieee: "https://ieeexplore.ieee.org/abstract/document/10230364", arxiv: "https://arxiv.org/abs/2409.12333", github: "https://github.com/asadikine/vessel-scale-clustering" },
      bibtex: `@inproceedings{sadikine2023scale,
  title={Scale-specific auxiliary multi-task contrastive learning for deep liver vessel segmentation},
  author={Sadikine, Amine and Badic, Bogdan and Tasu, J-P and Noblet, Vincent and Ballet, Pascal and Visvikis, Dimitris and Conze, P-H},
  booktitle={2023 IEEE 20th International Symposium on Biomedical Imaging (ISBI)},
  pages={1--5},
  year={2023},
  organization={IEEE}
}`,
    },
    {
      title: "Semi-overcomplete convolutional auto-encoder embedding as shape priors for deep vessel segmentation",
      authors: "A. Sadikine, B. Badic, J.-P. Tasu, V. Noblet, D. Visvikis, P.-H. Conze",
      venue: "IEEE International Conference on Image Processing (ICIP), Bordeaux, 2022",
      short: "ICIP 2022",
      badges: ["oral"],
      links: { doi: "https://doi.org/10.1109/ICIP46576.2022.9897188", arxiv: "https://arxiv.org/abs/2409.13001" },
      bibtex: `@inproceedings{sadikine2022semi,
  title={Semi-overcomplete convolutional auto-encoder embedding as shape priors for deep vessel segmentation},
  author={Sadikine, Amine and Badic, Bogdan and Tasu, J-P and Noblet, Vincent and Visvikis, Dimitris and Conze, P-H},
  booktitle={2022 IEEE International Conference on Image Processing (ICIP)},
  pages={586--590},
  year={2022},
  organization={IEEE}
}`,
    },
    {
      title: "Intégration d’a priori de forme semi-surcomplets pour la segmentation automatique du système vasculaire",
      authors: "A. Sadikine et al.",
      venue: "RITS, 2022 (national conference)",
      short: "RITS 2022",
      badges: ["oral"],
      bibtex: `@inproceedings{sadikine2022integration,
  title={Int{\\'e}gration d'{\\\`a} priori de forme semi-surcomplets pour la segmentation automatique du syst{\\\`e}me vasculaire},
  author={Sadikine, Amine and Badic, Bogdan and Tasu, Jean-Pierre and Noblet, Vincent and Visvikis, Dimitris and Conze, Pierre-Henri},
  booktitle={RITS},
  year={2022}
}`,
    },
  ],

  // Software and datasets you released (newest first).
  software: [
    {
      title: "Ischaemic stroke lesion segmentation on T1-weighted MRI: STRATIF-AI-BRE submission to the ISLES’26 challenge",
      authors: "A. Sadikine",
      venue: "Zenodo, software v1.0.1, October 2026",
      links: { doi: "https://doi.org/10.5281/zenodo.23570376", github: "https://github.com/asadikine/isles26-stratif-ai-bre", weights: "https://doi.org/10.5281/zenodo.23595249" },
      bibtex: `@software{sadikine2026isles,
  title={Ischaemic stroke lesion segmentation on T1-weighted MRI: STRATIF-AI-BRE submission to the ISLES'26 challenge},
  author={Sadikine, Amine},
  year={2026},
  publisher={Zenodo},
  version={v1.0.1},
  doi={10.5281/zenodo.23570376}
}`,
    },
  ],

  thesis: [
    {
      title: "Deep vascular segmentation with geometric and topological constraints",
      authors: "Advisors: P.-H. Conze, B. Badic, P. Ballet",
      venue: "PhD thesis, Université de Bretagne Occidentale, defended July 10, 2024",
      links: { hal: "https://theses.hal.science/tel-04804481" },
      bibtex: `@phdthesis{sadikine2024thesis,
  title={Deep vascular segmentation with geometric and topological constraints},
  author={Sadikine, Mohamed Amine},
  year={2024},
  school={Universit{\\'e} de Bretagne occidentale-Brest}
}`,
    },
  ],

  // Newest first.
  talks: [
    { title: "Project presentation, STRATIF-AI consortium meeting 2026", where: "Faculty of Medicine, Brest, France · two sessions: consortium members, and a session open to the public" },
    { title: "Project presentation, STRATIF-AI consortium meeting 2025", where: "Linköping University, Sweden · presented remotely" },
    { title: "Poster, 15th IEEE EMBS-SPS International Summer School on Biomedical Imaging", where: "Cartagena, Colombia, 2023", link: { label: "Event", url: "https://conferences.imt-atlantique.fr/ieeess/index.php?pid=0" } },
    { title: "Poster, SVS Doctoral School scientific days", where: "Brest, France, 2023" },
    { title: "Poster, IMT Atlantique research seminar", where: "Brest, France, 2023" },
    { title: "Invited talk, CAMI Days 2022", where: "Faculty of Medicine of Montpellier, France", link: { label: "Event", url: "https://camidays2022.sciencesconf.org/" } },
    { title: "Invited talk, CAMI Days 2021", where: "Sorbonne University, Paris, France", link: { label: "Event", url: "https://camidays.sciencesconf.org/" } },
  ],
};
