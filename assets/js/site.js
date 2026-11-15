/* Renders every page from the files in data/. You should not need to edit this file. */
(function () {
  "use strict";
  var S = window.SITE || {}, PROJ = window.PROJECTS || [], PUB = window.PUBLICATIONS || {},
      AB = window.ABOUT || {}, PH = window.PHOTOS || [], B = window.BUNDLE || null;

  var FILES = { home: "index.html", projects: "projects.html", publications: "publications.html", about: "about.html" };
  var TITLES = { home: "Home", projects: "Projects", publications: "Publications", about: "About" };
  function asset(p) { return (B && B.assets && B.assets[p]) || p; }
  function link(page) { return B ? "#" + page : FILES[page]; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function ext(url) { return /^https?:/.test(url) ? ' target="_blank" rel="noopener"' : ""; }

  var PATHS = {
    github: '<path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/>',
    scholar: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/>',
    orcid: '<circle cx="12" cy="12" r="9"/><circle cx="8.6" cy="8.4" r="0.9" fill="currentColor" stroke="none"/><path d="M8.6 10.4v5.2M11.4 9.6v6h1.9a3 3 0 0 0 0-6z"/>',
    linkedin: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    x: '<path d="M4 4h4.5L20 20h-4.5z"/><path d="M19.5 4l-6.6 7.4M11.1 12.6L4.5 20"/>',
    ext: '<path d="M14 4h6v6"/><path d="M20 4l-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    pause: '<path d="M9 6v12M15 6v12"/>', play: '<path d="M8 5.5v13l10.5-6.5z"/>',
    down: '<path d="M6 9l6 6 6-6"/>', left: '<path d="M15 6l-6 6 6 6"/>', right: '<path d="M9 6l6 6-6 6"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>', copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a1 1 0 0 1 1-1h10"/>',
    quote: '<path d="M7 7h4v4H8v3H5v-4zM15 7h4v4h-3v3h-3v-4z"/>', photo: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-8 8"/>'
  };
  function icon(n, size) { return '<svg class="ic ic-' + n + '" aria-hidden="true" width="' + (size || 16) + '" height="' + (size || 16) + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + PATHS[n] + "</svg>"; }
  function btn(label, url, opts) {
    opts = opts || {};
    if (opts.github) return '<a class="btn" href="' + esc(url) + '"' + ext(url) + ">" + icon("github") + esc(label) + "</a>";
    return '<a class="btn-o" href="' + esc(url) + '"' + ext(url) + ">" + esc(label) + icon("ext", 13) + "</a>";
  }
  function me(s) { return S.me ? String(s).split(S.me).join('<span class="me">' + S.me + "</span>") : s; }
  function monthYear(iso) {
    var d = new Date(iso); if (isNaN(d)) return iso;
    return d.toLocaleDateString("en-GB", { month: "long", year: "numeric" });
  }

  // ---------- shared blocks ----------
  function nav(page) {
    var items = ["home", "projects", "publications", "about"].map(function (p) {
      return '<a href="' + link(p) + '"' + (p === page ? ' class="on" aria-current="page"' : "") + ">" + TITLES[p] + "</a>";
    }).join("");
    var brand = '<a class="brandlink" href="' + link("home") + '" aria-label="' + esc(S.name) + ', home"><span class="monogram" aria-hidden="true">' + esc(S.initials || "") + "</span>" +
      (page === "home" ? "" : '<span class="brand">' + esc(S.name) + "</span>") + "</a>";
    return '<div class="nav">' + brand + '<nav aria-label="Main">' + items + "</nav></div>";
  }
  function profileLinks(onlyHero) {
    return (S.profiles || []).filter(function (p) { return !onlyHero || p.hero; }).map(function (p) {
      return '<a href="' + esc(p.url) + '"' + ext(p.url) + ">" + icon(p.icon, onlyHero ? 17 : 15) + esc(p.label) + "</a>";
    }).join("");
  }
  function footer() {
    return '<footer><div class="wrap"><nav aria-label="Profiles">' + profileLinks(false) + '</nav><span>© ' + new Date().getFullYear() + " " + esc(S.name) +
      ' · Last updated <span id="updated">' + esc(monthYear(S.lastUpdated)) + "</span></span></div></footer>";
  }
  function topBand(page, inner) { return '<div class="top"><div class="wrap">' + nav(page) + (inner || "") + "</div></div>"; }
  function pageTitle(t, lead) { return '<section class="page-title"><h1>' + t + '</h1><span class="rule" aria-hidden="true"></span>' + (lead ? "<p>" + lead + "</p>" : "") + "</section>"; }
  function tocBar(items) {
    return '<div class="toc" role="navigation" aria-label="On this page"><div class="wrap">' +
      items.map(function (t) { return '<a href="#' + t[0] + '" data-action="scroll" data-target="' + t[0] + '">' + t[1] + "</a>"; }).join("") + "</div></div>";
  }
  function chips(p) {
    return '<div class="chips">' + (p.tags || []).map(function (t) { return '<span class="chip kw">' + esc(t) + "</span>"; }).join("") +
      (p.tools || []).map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join("") + "</div>";
  }

  // ---------- projects ----------
  function sortedProjects() { return PROJ.slice().sort(function (a, b) { return (b.sortDate || "").localeCompare(a.sortDate || ""); }); }
  function mediaHtml(m) {
    var list = Array.isArray(m) ? m : [m], n = list.length;
    if (n === 1) return '<figure class="media"><img src="' + asset(list[0].src) + '" alt="' + esc(list[0].alt) + '" loading="lazy"><figcaption>' + list[0].caption + "</figcaption></figure>";
    return '<figure class="media slides" data-slides data-i="0">' +
      '<button type="button" class="slides-view" data-action="slide" aria-label="Next picture">' +
      list.map(function (x, i) { return '<img src="' + asset(x.src) + '" alt="' + esc(x.alt) + '" loading="lazy"' + (i ? "" : ' class="on"') + ">"; }).join("") + "</button>" +
      '<div class="slides-bar"><figcaption>' + list.map(function (x, i) { return "<span" + (i ? " hidden" : "") + ">" + x.caption + "</span>"; }).join("") + "</figcaption>" +
      '<span class="dots">' + list.map(function (x, i) { return '<button type="button" class="dot' + (i ? "" : " on") + '" data-action="slide" data-to="' + i + '" aria-label="Picture ' + (i + 1) + " of " + n + '"></button>'; }).join("") + "</span></div></figure>";
  }
  function showSlide(fig, i) {
    var imgs = fig.querySelectorAll(".slides-view img"), caps = fig.querySelectorAll("figcaption > span"), dots = fig.querySelectorAll(".dot");
    i = (i + imgs.length) % imgs.length; fig.dataset.i = i;
    for (var k = 0; k < imgs.length; k++) { imgs[k].classList.toggle("on", k === i); caps[k].hidden = k !== i; dots[k].classList.toggle("on", k === i); }
  }
  // Slideshows move on by themselves every few seconds while visible on screen.
  setInterval(function () {
    if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.querySelectorAll("[data-slides]").forEach(function (fig) {
      var r = fig.getBoundingClientRect();
      if (!fig.offsetParent || r.bottom < 0 || r.top > window.innerHeight || Date.now() - (+fig.dataset.touched || 0) < 8000) return;
      showSlide(fig, +fig.dataset.i + 1);
    });
  }, 4500);
  function card(p) {
    var more = "";
    // details: one paragraph (text) or several (a list of texts)
    if (p.details) more += [].concat(p.details).map(function (d) { return "<p>" + d + "</p>"; }).join("");
    if (p.funding) more += '<div class="funding-line">' + p.funding.logos.map(function (l) { return '<img src="' + asset(l) + '" alt="">'; }).join("") + "<span>" + p.funding.text + "</span></div>";
    if (p.media) more += mediaHtml(p.media);
    var foot = (p.links || []).map(function (l) { return btn(l.label, l.url, l); }).join("");
    if (p.note) foot += '<span class="note">' + esc(p.note) + "</span>";
    var animBtn = /\.svg$/i.test(p.image || "") ? '<button type="button" class="anim-toggle" data-action="anim" aria-pressed="false" aria-label="Pause animation" title="Pause animation">' + icon("pause", 14) + "</button>" : "";
    return '<article class="card"><div class="fig"><img src="' + asset(p.image) + '" alt="' + esc(p.imageAlt || p.title) + '" loading="lazy">' + animBtn + "</div>" +
      "<h3>" + esc(p.title) + (p.ongoing ? ' <span class="ongoing">(ongoing)</span>' : "") + "</h3>" +
      // The summary is always shown in full; "Read more" opens the details (and funding, pictures).
      '<p class="summary">' + p.summary + "</p>" +
      (more ? '<div class="clamp is-more is-clamped" data-clamp>' + more + "</div>" +
        '<button type="button" class="read-more" data-action="expand" aria-expanded="false" hidden><span>Read more</span>' + icon("down", 15) + "</button>" : "") +
      chips(p) + (foot ? '<div class="foot">' + foot + "</div>" : "") + "</article>";
  }

  // ---------- publications ----------
  function pubItem(p, i, group) {
    var id = group + "-" + i, L = p.links || {}, acts = "";
    if (L.doi) acts += btn("DOI", L.doi);
    if (L.ieee) acts += btn("IEEE Xplore", L.ieee);
    if (L.arxiv) acts += btn("arXiv", L.arxiv);
    if (L.hal) acts += btn("HAL", L.hal);
    if (L.github) acts += btn("GitHub", L.github);
    if (L.weights) acts += btn("Model weights", L.weights);
    if (p.bibtex) acts += '<button type="button" class="btn-o" data-action="bib" aria-expanded="false" aria-controls="bib-' + id + '">BibTeX' + icon("down", 13) + "</button>";
    return '<li class="pub"><span class="t">' + esc(p.title) + (p.badges || []).map(function (b) { return ' <span class="chip kw">' + esc(b) + "</span>"; }).join("") + "</span>" +
      '<span class="a">' + me(esc(p.authors)) + '</span><span class="m"><em>' + esc(p.venue) + "</em></span>" +
      (acts ? '<span class="acts">' + acts + "</span>" : "") +
      (p.bibtex ? '<div class="bib" id="bib-' + id + '" hidden><pre>' + esc(p.bibtex) + '</pre><button type="button" class="btn-o" data-action="copy">' + icon("copy", 13) + "Copy</button></div>" : "") + "</li>";
  }
  function pubRow(id, title, items) { return '<section class="row" id="' + id + '"><h2>' + title + '</h2><ul class="stack-list">' + items + "</ul></section>"; }

  // ---------- pages ----------
  function home() {
    var h = S.home || {};
    var hero = '<section class="hero"><img class="portrait" src="' + asset(S.portrait) + '" alt="Portrait of ' + esc(S.name) + '" width="200" height="200">' +
      '<div class="hero-text"><h1>' + esc(S.name) + '</h1><span class="rule" aria-hidden="true"></span><p class="sub">' + esc(h.subtitle) + "</p>" +
      (h.intro || []).map(function (t, i) { return "<p" + (i ? ' class="dim"' : "") + ">" + t + "</p>"; }).join("") +
      '<div class="links">' + profileLinks(true) + "</div></div></section>";
    var list = function (arr, cls) { return "<ul" + (cls ? ' class="' + cls + '"' : "") + ">" + (arr || []).map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>"; };
    var featured = sortedProjects().filter(function (p) { return p.featured; }).slice(0, 3);
    var highlights = (h.highlights || []).map(function (x) {
      return '<li><span class="k">' + esc(x.when) + '</span><span class="v">' + x.html + "</span></li>";
    }).join("");
    return topBand("home", hero) +
      '<div class="wrap">' +
      '<section class="row"><h2>In short</h2>' + list(h.inShort, "inline") + "</section></div>" +
      '<div class="band"><div class="wrap"><div class="sec-head"><h2>Selected projects</h2><a href="' + link("projects") + '">All projects</a></div><div class="grid">' + featured.map(card).join("") + "</div></div></div>" +
      '<div class="wrap">' +
      '<section class="row"><h2>What I work on</h2>' + list(h.workOn) + "</section>" +
      '<section class="row"><h2>Research interests</h2>' + list(h.interests || h.nextDirections) + "</section>" +
      (highlights ? '<section class="row"><h2>Recent highlights</h2><ol class="list">' + highlights + "</ol></section>" : "") +
      (S.contact ? '<section class="row last" id="contact"><h2>Contact</h2><div class="contact"><p>' + esc(S.contact.note || "The easiest way to reach me is by email.") + '</p><div class="acts">' +
        '<a class="btn" href="mailto:' + esc(S.contact.email) + '">' + icon("mail") + "Email me</a>" +
        (S.contact.mapUrl ? btn("Open in Google Maps", S.contact.mapUrl) : "") + "</div>" +
        '<p class="addr">' + esc(S.contact.email) + (S.contact.address ? "<br>" + esc(S.contact.address) : "") + "</p></div></section>" : "") + "</div>";
  }
  function projects() {
    return topBand("projects") + '<div class="wrap">' +
      pageTitle("Projects", "Most recent first. When the code can be public, it is on GitHub; projects built on patient data stay inside the hospital, so for those I describe the method and the result.") +
      '<div class="grid wide">' + sortedProjects().map(card).join("") + "</div></div>";
  }
  function publications() {
    var talks = (PUB.talks || []).map(function (t) {
      return '<li class="pub"><span class="t">' + esc(t.title) + '</span><span class="m">' + esc(t.where) + "</span>" + (t.link ? '<span class="acts">' + btn(t.link.label, t.link.url) + "</span>" : "") + "</li>";
    }).join("");
    var schol = (S.profiles || []).filter(function (p) { return p.icon === "scholar"; })[0];
    var toc = [["sec-papers", "Papers"]];
    if ((PUB.software || []).length) toc.push(["sec-software", "Software"]);
    toc.push(["sec-thesis", "Thesis"], ["sec-talks", "Talks and posters"]);
    return topBand("publications") + tocBar(toc) + '<div class="wrap">' +
      pageTitle("Publications", "Peer-reviewed papers, software, my thesis, talks and posters." + (schol ? ' Full list on <a href="' + esc(schol.url) + '"' + ext(schol.url) + ">Google Scholar</a>." : "")) +
      pubRow("sec-papers", "Journal and conference papers", (PUB.papers || []).map(function (p, i) { return pubItem(p, i, "p"); }).join("")) +
      ((PUB.software || []).length ? pubRow("sec-software", "Software", PUB.software.map(function (p, i) { return pubItem(p, i, "s"); }).join("")) : "") +
      pubRow("sec-thesis", "PhD thesis", (PUB.thesis || []).map(function (p, i) { return pubItem(p, i, "t"); }).join("")) +
      pubRow("sec-talks", "Talks and posters", talks) + "</div>";
  }
  function about() {
    var n = AB.pathVisible || 3, path = AB.path || [];
    var steps = path.map(function (s, i) {
      var logos = s.logos || (s.logo ? [s.logo] : []);
      var logo = logos.length ? logos.map(function (l) { return '<img src="' + asset(l) + '" alt="">'; }).join("") : esc(s.initials || "");
      return '<li class="' + (s.now ? "now " : "") + (i >= n ? "tl-extra" : "") + '"><span class="when">' + esc(s.when) + '</span><div class="body"><span class="dot" aria-hidden="true"></span><div class="inner"><span class="logo' + (logos.length > 1 ? " multi" : "") + '">' + logo + '</span><div>' +
        '<div class="role">' + s.role + '</div><div class="place">' + s.place + "</div><p>" + s.text + "</p>" +
        (s.supervision ? '<div class="sup"><b>Supervision:</b> ' + s.supervision + "</div>" : "") +
        (s.took ? '<div class="sup"><b>Took away:</b> ' + s.took + "</div>" : "") + "</div></div></div></li>";
    }).join("");
    var hidden = Math.max(0, path.length - n);
    var funding = (AB.funding || []).map(function (f) {
      return '<div class="fund"><span class="logo-box">' + (f.logos || []).map(function (l) { return '<img src="' + asset(l) + '" alt="">'; }).join("") + '</span><div class="txt"><div class="t">' + f.title + '</div><div class="m">' + f.text + "</div>" +
        (f.link ? '<div class="acts">' + btn(f.link.label, f.link.url) + "</div>" : "") + "</div></div>";
    }).join("");
    var certs = (AB.certificates || []).map(function (c) {
      return '<article class="cert"><div class="wall"><a class="thumb" href="' + esc(c.url) + '"' + ext(c.url) + ' aria-label="Open certificate: ' + esc(c.title) + '"><span class="mat"><img src="' + asset(c.img) + '" alt="" loading="lazy"></span></a></div>' +
        '<span class="t">' + esc(c.title) + '</span><span class="i">' + esc(c.issuer) + "</span>" + (c.note ? '<span class="i">' + esc(c.note) + "</span>" : "") +
        (c.more ? '<span class="acts">' + btn("More details", c.more) + "</span>" : "") + "</article>";
    }).join("");
    var outreach = (AB.outreach || []).map(function (o) {
      return '<li><span class="k">' + esc(o.when) + '</span><span class="v">' + o.html + ((o.links || []).length ? '<span class="acts">' + o.links.map(function (l) { return btn(l.label, l.url); }).join("") + "</span>" : "") + "</span></li>";
    }).join("");
    var events = PH.filter(function (e) { return (e.photos || []).length || window.PREVIEW_PHOTOS; });
    var nv = AB.photosVisible || 3, moreEv = Math.max(0, events.length - nv);
    var gallery = events.map(function (e, k) {
      var idx = PH.indexOf(e), cover = (e.photos || [])[0], c = (e.photos || []).length;
      return '<button type="button" class="event' + (k >= nv ? " ev-extra" : "") + '" data-action="lightbox" data-event="' + idx + '"' + (c ? "" : " disabled") + ">" +
        '<span class="cover">' + (cover ? '<img class="fill" src="' + asset(cover.src) + '" alt="" aria-hidden="true" loading="lazy"><img class="main" src="' + asset(cover.src) + '" alt="" loading="lazy">' : '<span class="ph">' + icon("photo", 28) + "</span>") +
        '<span class="count">' + (c ? c + (c > 1 ? " photos" : " photo") : "no photo yet") + "</span></span>" +
        '<span class="c1">' + esc(e.title) + '</span><span class="c2">' + esc(e.where) + " · " + esc(e.when) + "</span></button>";
    }).join("");
    var collabs = (AB.collaborations || []).map(function (o) {
      return '<div class="fund"><span class="logo-box">' + (o.logos || []).map(function (l) { return '<img src="' + asset(l) + '" alt="">'; }).join("") + '</span><div class="txt"><div class="t">' + o.title + '</div><div class="m where">' + esc(o.where) + '</div><div class="m">' + o.text + "</div></div></div>";
    }).join("");
    var toc = [["sec-path", "Path"], ["sec-funding", "Funding"]];
    if (collabs) toc.push(["sec-collab", "Collaborations"]);
    toc.push(["sec-training", "Training"], ["sec-teaching", "Teaching"], ["sec-outreach", "Outreach"]);
    if (events.length) toc.push(["sec-photos", "Photos"]);
    return topBand("about") + tocBar(toc) +
      '<div class="wrap">' + pageTitle("About", AB.intro) +
      '<section class="sec first" id="sec-path"><h2>How I got here</h2><ol class="tl">' + steps + "</ol>" +
      (hidden ? '<button type="button" class="show-more" data-action="timeline" aria-expanded="false"><span>Show ' + hidden + " earlier step" + (hidden > 1 ? "s" : "") + "</span>" + icon("down", 16) + "</button>" : "") + "</section>" +
      '<section class="sec" id="sec-funding"><h2>Funding and awards</h2><p class="lead">Programs that fund my work, and grants I obtained.</p>' + funding + "</section>" +
      (collabs ? '<section class="sec" id="sec-collab"><h2>International collaborations</h2><p class="lead">Teams I work or have worked with outside France.</p>' + collabs + "</section>" : "") +
      '<section class="sec" id="sec-training"><h2>Certificates and training</h2><p class="lead">Selected training in medical imaging, health data and AI. Click a certificate to open it.</p><div class="certs">' + certs + "</div></section>" +
      '<section class="sec" id="sec-teaching"><h2>Teaching and supervision</h2><ul class="plain">' + (AB.teaching || []).map(function (t) { return "<li>" + t + "</li>"; }).join("") + "</ul></section>" +
      '<section class="sec" id="sec-outreach"><h2>Outreach and press</h2><p class="lead">Talking about research outside the lab.</p><ol class="list">' + outreach + "</ol></section>" +
      (events.length ? '<section class="sec" id="sec-photos"><h2>Photos</h2><p class="lead">Conferences, talks and outreach. Click an event to see its photos.</p><div class="events">' + gallery + "</div>" + (moreEv ? '<button type="button" class="show-more left" data-action="events" aria-expanded="false"><span>Show ' + moreEv + " more event" + (moreEv > 1 ? "s" : "") + "</span>" + icon("down", 16) + "</button>" : "") + "</section>" : "") +
      "</div>";
  }

  // ---------- behaviour ----------
  function setupClamps(root) {
    root.querySelectorAll("[data-clamp]").forEach(function (c) {
      var b = c.nextElementSibling;
      if (c.scrollHeight > c.clientHeight + 6) { b.hidden = false; } else { c.classList.remove("is-clamped"); }
    });
  }
  var box;
  function lightbox(ev, i) {
    var e = PH[ev], photos = e.photos || []; if (!photos.length) return;
    if (!box) {
      box = document.createElement("div"); box.className = "lb"; box.setAttribute("role", "dialog"); box.setAttribute("aria-modal", "true");
      box.innerHTML = '<button type="button" class="lb-x" aria-label="Close">' + icon("close", 22) + '</button><button type="button" class="lb-p" aria-label="Previous photo">' + icon("left", 26) + '</button><figure><img alt=""><figcaption></figcaption></figure><button type="button" class="lb-n" aria-label="Next photo">' + icon("right", 26) + "</button>";
      document.body.appendChild(box);
      box.addEventListener("click", function (x) { if (x.target === box || x.target.closest(".lb-x")) close(); else if (x.target.closest(".lb-p")) step(-1); else if (x.target.closest(".lb-n")) step(1); });
      var sx = null; box.addEventListener("touchstart", function (t) { sx = t.touches[0].clientX; }, { passive: true });
      box.addEventListener("touchend", function (t) { if (sx == null) return; var d = t.changedTouches[0].clientX - sx; if (Math.abs(d) > 40) step(d < 0 ? 1 : -1); sx = null; });
      document.addEventListener("keydown", function (k) { if (!box.classList.contains("open")) return; if (k.key === "Escape") close(); if (k.key === "ArrowLeft") step(-1); if (k.key === "ArrowRight") step(1); });
    }
    box.dataset.ev = ev; box.dataset.i = i; show(); box.classList.add("open"); document.body.style.overflow = "hidden"; box.querySelector(".lb-x").focus();
  }
  function show() {
    var e = PH[+box.dataset.ev], ph = e.photos, i = +box.dataset.i, p = ph[i];
    box.querySelector("img").src = asset(p.src); box.querySelector("img").alt = p.caption || e.title;
    box.querySelector("figcaption").innerHTML = "<b>" + esc(e.title) + "</b>" + (p.caption ? " · " + esc(p.caption) : "") + '<span class="lb-c">' + (i + 1) + " / " + ph.length + "</span>";
    box.querySelector(".lb-p").hidden = box.querySelector(".lb-n").hidden = ph.length < 2;
  }
  function step(d) { var n = PH[+box.dataset.ev].photos.length; box.dataset.i = (+box.dataset.i + d + n) % n; show(); }
  function close() { box.classList.remove("open"); document.body.style.overflow = ""; }

  var stills = {};
  function stillOf(src, done) {
    if (stills[src]) return done(stills[src]);
    var make = function (text) {
      var re = /@media\s*\(\s*prefers-reduced-motion\s*:\s*reduce\s*\)/g;
      text = re.test(text) ? text.replace(re, "@media all") : text.replace(/<\/style>/, "*{animation:none!important}</style>");
      done(stills[src] = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(text));
    };
    if (/^data:/.test(src)) {
      var i = src.indexOf(","), meta = src.slice(0, i), body = src.slice(i + 1);
      if (/;base64/.test(meta)) {
        var bin = atob(body), bytes = new Uint8Array(bin.length);
        for (var k = 0; k < bin.length; k++) bytes[k] = bin.charCodeAt(k);
        make(new TextDecoder("utf-8").decode(bytes));
      } else make(decodeURIComponent(body));
    } else if (window.fetch) {
      fetch(src).then(function (r) { return r.text(); }).then(make).catch(function () { done(null); });
    } else done(null);
  }
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-action]"); if (!t) return;
    var a = t.dataset.action;
    if (a === "slide") {
      var fig = t.closest("[data-slides]"); fig.dataset.touched = Date.now();
      showSlide(fig, t.dataset.to != null ? +t.dataset.to : +fig.dataset.i + 1);
      return;
    }
    if (a === "anim") {
      // Pause = show the finished figure (the still version built into every animation); play = start again.
      var img = t.parentNode.querySelector("img"), paused = t.getAttribute("aria-pressed") === "true";
      if (!img.dataset.anim) img.dataset.anim = img.getAttribute("src");
      var setBtn = function (p) {
        t.setAttribute("aria-pressed", p); t.innerHTML = icon(p ? "play" : "pause", 14);
        t.setAttribute("aria-label", p ? "Play animation" : "Pause animation"); t.title = t.getAttribute("aria-label");
      };
      if (paused) { img.src = img.dataset.anim; setBtn(false); }
      else stillOf(img.dataset.anim, function (still) { if (still) { img.src = still; setBtn(true); } });
      return;
    }
    if (a === "expand") {
      var c = t.previousElementSibling, open = c.classList.toggle("is-clamped") === false;
      t.setAttribute("aria-expanded", open); t.querySelector("span").textContent = open ? "Show less" : "Read more"; t.classList.toggle("up", open);
    } else if (a === "timeline") {
      var tl = t.previousElementSibling, o = tl.classList.toggle("open"), k = tl.querySelectorAll(".tl-extra").length;
      t.setAttribute("aria-expanded", o); t.classList.toggle("up", o); t.querySelector("span").textContent = o ? "Show fewer steps" : "Show " + k + " earlier step" + (k > 1 ? "s" : "");
    } else if (a === "events") {
      var ev = t.previousElementSibling, eo = ev.classList.toggle("open"), m = ev.querySelectorAll(".ev-extra").length;
      t.setAttribute("aria-expanded", eo); t.classList.toggle("up", eo); t.querySelector("span").textContent = eo ? "Show fewer events" : "Show " + m + " more event" + (m > 1 ? "s" : "");
    } else if (a === "bib") {
      var panel = document.getElementById(t.getAttribute("aria-controls")); panel.hidden = !panel.hidden; t.setAttribute("aria-expanded", !panel.hidden); t.classList.toggle("up", !panel.hidden);
    } else if (a === "copy") {
      var txt = t.previousElementSibling.textContent;
      var done = function () { t.lastChild.textContent = "Copied"; setTimeout(function () { t.lastChild.textContent = "Copy"; }, 1500); };
      if (navigator.clipboard) navigator.clipboard.writeText(txt).then(done, function () {});
    } else if (a === "scroll") {
      e.preventDefault(); var el = document.getElementById(t.dataset.target);
      if (el) { forced = t.dataset.target; document.querySelectorAll(".toc a").forEach(function (x) { x.classList.toggle("active", x === t); }); el.scrollIntoView({ behavior: "smooth", block: "start" }); }
    } else if (a === "lightbox") {
      lightbox(+t.dataset.event, 0);
    }
  });

  var spyOff = null, forced = null;
  function setupSpy(app) {
    if (spyOff) spyOff();
    var links = Array.prototype.slice.call(app.querySelectorAll(".toc a[data-target]")); if (!links.length) return;
    var bar = links[0].parentNode, ticking = false;
    function mark(id) {
      links.forEach(function (a) {
        var on = a.dataset.target === id; a.classList.toggle("active", on);
        if (on && bar.scrollWidth > bar.clientWidth) bar.scrollTo({ left: a.offsetLeft - 20, behavior: "smooth" });
      });
    }
    function update() {
      ticking = false;
      if (forced) { mark(forced); return; }
      var current = links[0].dataset.target, offset = 120;
      links.forEach(function (a) { var el = document.getElementById(a.dataset.target); if (el && el.getBoundingClientRect().top <= offset) current = a.dataset.target; });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = links[links.length - 1].dataset.target;
      mark(current);
    }
    function onScroll() { if (!ticking) { ticking = true; setTimeout(update, 60); } }
    function release() { forced = null; }
    window.addEventListener("scroll", onScroll, { passive: true });
    ["wheel", "touchmove", "keydown"].forEach(function (ev) { window.addEventListener(ev, release, { passive: true }); });
    spyOff = function () { window.removeEventListener("scroll", onScroll); ["wheel", "touchmove", "keydown"].forEach(function (ev) { window.removeEventListener(ev, release); }); forced = null; };
    update();
  }
  function render(page) {
    var app = document.getElementById("app");
    var body = { home: home, projects: projects, publications: publications, about: about }[page] || home;
    app.innerHTML = body() + footer();
    if (B) document.title = S.name + (page === "home" ? "" : " — " + TITLES[page]);
    requestAnimationFrame(function () { setupClamps(app); setupSpy(app); });
    window.addEventListener("load", function () { setupClamps(app); }, { once: true });
    if (pushed) document.getElementById("updated").textContent = monthYear(pushed);
    else if (!B && !askedGithub && S.githubRepo && window.fetch && /^https?:/.test(location.protocol)) {
      askedGithub = true;
      fetch("https://api.github.com/repos/" + S.githubRepo).then(function (r) { return r.ok ? r.json() : null; }).then(function (j) {
        if (j && j.pushed_at && j.pushed_at > S.lastUpdated) { pushed = j.pushed_at; var u = document.getElementById("updated"); if (u) u.textContent = monthYear(pushed); }
      }).catch(function () {});
    }
  }
  var pushed = null, askedGithub = false;

  // Visit statistics (GoatCounter, no cookies).
  if (!B && S.goatcounter) {
    var g = document.createElement("script"); g.async = true; g.src = "https://gc.zgo.at/count.js";
    g.setAttribute("data-goatcounter", "https://" + S.goatcounter + ".goatcounter.com/count"); document.head.appendChild(g);
  }

  // Moving between pages without reloading, as in a single-page preview: the four
  // HTML files still exist (for sharing and search engines), but a click on an
  // internal link only swaps the content and updates the address bar.
  var current = null;
  function pageOf(path) {
    var f = path.split("/").pop() || "index.html";
    for (var k in FILES) if (FILES[k] === f) return k;
    return null;
  }
  function go(pg, push, hash, y) {
    if (push) {
      history.replaceState({ y: window.scrollY }, "");
      history.pushState({ y: 0 }, "", (pg === "home" ? "./" : FILES[pg]) + (hash ? "#" + hash : ""));
    }
    document.title = pg === "home" ? S.name : TITLES[pg] + " — " + S.name;
    var swap = function () {
      document.getElementById("app").dataset.page = pg; current = pg; render(pg);
      var el = hash && document.getElementById(hash);
      if (el) el.scrollIntoView(); else window.scrollTo(0, y || 0);
    };
    var calm = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (document.startViewTransition && !calm) {
      var vt = document.startViewTransition(swap);
      [vt.ready, vt.finished].forEach(function (pr) { if (pr && pr.catch) pr.catch(function () {}); });
    } else swap();
    if (push && window.goatcounter && window.goatcounter.count) window.goatcounter.count({ path: location.pathname });
  }
  if (!B && window.history && history.pushState) {
    history.scrollRestoration = "manual";
    document.addEventListener("click", function (e) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var a = e.target.closest("a[href]"); if (!a || a.target || a.hasAttribute("download") || a.origin !== location.origin) return;
      var pg = pageOf(a.pathname); if (!pg || !pageOf(location.pathname)) return;
      if (pg === current && a.hash) return; // a link to a section of the same page
      e.preventDefault(); go(pg, true, a.hash.slice(1));
    });
    window.addEventListener("popstate", function (e) {
      var pg = pageOf(location.pathname); if (!pg) return;
      if (pg === current && location.hash) return;
      go(pg, false, location.hash.slice(1), e.state && e.state.y);
    });
  }
  if (B) {
    var route = function () { var h = location.hash.slice(1); render(FILES[h] ? h : "home"); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", function () { if (FILES[location.hash.slice(1)]) route(); });
    route();
  } else {
    current = document.getElementById("app").dataset.page;
    render(current);
  }
})();
