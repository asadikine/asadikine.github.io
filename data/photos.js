// ============================================================
//  PHOTOS, grouped by event (newest first)
//  1. Put the pictures in a folder, e.g. assets/img/photos/isbi-2023/
//     (JPG, about 1600 px on the long side; iPhone HEIC must be converted to JPG).
//  2. List them below. The first one is the cover of the event.
//  Any format works: the whole photo is always shown, nothing is cropped.
//  An event without photos is hidden automatically.
//  Only the first 3 events show at first (photosVisible in data/about.js).
//  Avoid photos where children or people who did not agree can be recognized.
// ============================================================

window.PHOTOS = [
  {
    title: "STRATIF-AI consortium meeting",
    where: "Faculty of Medicine, Brest",
    when: "June 2026",
    photos: [
      { src: "assets/img/photos/stratif-2026/1.jpg", caption: "Consortium session at the Faculty of Medicine" },
    ],
  },
  {
    title: "PhD defense",
    where: "Université de Bretagne Occidentale, Brest",
    when: "July 2024",
    photos: [
      { src: "assets/img/photos/phd-defense-2024/1.jpg", caption: "With the thesis committee" },
    ],
  },
  {
    title: "IEEE ISBI 2024",
    where: "Athens, Greece",
    when: "May 2024",
    photos: [
      { src: "assets/img/photos/isbi-2024/1.jpg", caption: "Cultural tour organized by ISBI, below the Acropolis" },
    ],
  },
  {
    title: "IEEE ISBI 2023, oral presentation",
    where: "Cartagena, Colombia",
    when: "April 2023",
    photos: [
      { src: "assets/img/photos/isbi-2023/1.jpg", caption: "My oral presentation" },
      { src: "assets/img/photos/isbi-2023/2.jpg", caption: "With fellow attendees" },
    ],
  },
  {
    title: "IEEE EMBS-SPS Summer School on Biomedical Imaging",
    where: "Cartagena, Colombia",
    when: "April 2023",
    photos: [
      { src: "assets/img/photos/summer-school-2023/1.jpg", caption: "Participants and lecturers of the 15th edition" },
    ],
  },
  {
    title: "Invited talk, CAMI Days 2022",
    where: "Faculty of Medicine, Montpellier",
    when: "November 2022",
    photos: [
      { src: "assets/img/photos/cami-days-2022/1.jpg", caption: "Presenting my work on vessel segmentation" },
      { src: "assets/img/photos/cami-days-2022/2.jpg", caption: "The auditorium" },
      { src: "assets/img/photos/cami-days-2022/3.jpg", caption: "The new Faculty of Medicine of Montpellier" },
    ],
  },
  {
    title: "Fête de la Science",
    where: "Ateliers des Capucins, Brest",
    when: "October 2022",
    photos: [
      { src: "assets/img/photos/fete-science-2022/1.jpg", caption: "At our medical imaging stand" },
      { src: "assets/img/photos/fete-science-2022/2.jpg", caption: "Young visitors discovering anatomy and medical imaging (children’s faces blurred)" },
    ],
  },
  {
    title: "Science en Theizh",
    where: "Brest",
    when: "April 2022",
    photos: [
      { src: "assets/img/photos/science-en-theizh-2022/1.jpg", caption: "The DAKODOC organizing team on stage" },
    ],
  },
];
