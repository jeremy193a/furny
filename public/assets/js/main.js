const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const translations = {
  en: {
    text: {
      ".menu-toggle": "Menu",
      ".site-nav .nav-link[href='new-home-page.html']": "Home",
      ".site-nav .nav-link[href='new-about-page.html']": "About",
      ".site-nav .nav-link[href='new-expertise-page.html']": "Expertise",
      ".site-nav .nav-link[href='projects.html']": "Projects",
      ".site-nav .nav-link-social": "LinkedIn",
      ".site-nav .button[href='contact.html']": "Start a Project",
      ".footer-note": "Hospitality furniture manufacturing and selected FF&E supply for global projects.",
      ".footer-links a[href='new-home-page.html']": "Home",
      ".footer-links a[href='new-about-page.html']": "About",
      ".footer-links a[href='new-expertise-page.html']": "Expertise",
      ".footer-links a[href='projects.html']": "Projects",
      ".footer-links a[href='contact.html']": "Contact",
      ".footer-links a[href^='https://www.linkedin.com']": "LinkedIn",
      ".footer-contact-label-email": "Email",
      ".footer-contact-label-phone": "Phone",
      ".footer-contact-label-singapore": "Singapore Registered Address",
      ".footer-contact-label-vietnam": "Vietnam Office, Showroom & Operations",
      ".contact-detail-label-email": "Email",
      ".contact-detail-label-phone": "Phone",
      ".contact-detail-label-linkedin": "LinkedIn",
      ".new-home-body .hero-copy .eyebrow": "Vietnam-based hospitality furniture manufacturing",
      ".new-home-body .hero-copy h1": "End-to-end hospitality furniture solution from design to delivery",
      ".new-home-body .hero-actions a[href='contact.html']": "Start a Project",
      ".new-home-body .hero-actions a[href='#programs']": "See What We Build",
      ".new-home-body .hero-lead-centered":
        "FURNY ASIA works closely with High-end interior designers & architects, hotel operators and owners to manufacture custom loose furniture and coordinate selected FF&E for high-end hospitality and branded residential projects around the world.",
      ".new-home-body .client-label": "Our clients",
      ".new-home-body .client-grid .client-card:nth-of-type(1)": "High-end Interior Designers",
      ".new-home-body .client-grid .client-card:nth-of-type(2)": "International hospitality operators and owners",
      ".new-home-body .manufacturing-section .section-head .eyebrow": "Our Expertise",
      ".new-home-body .manufacturing-title": "Hospitality Loose Furniture Manufacturing",
      ".new-home-body .category-item:nth-of-type(1) span:last-child": "Hotel guestrooms",
      ".new-home-body .category-item:nth-of-type(2) span:last-child": "Public areas and lobbies",
      ".new-home-body .category-item:nth-of-type(3) span:last-child": "Restaurants and bars",
      ".new-home-body .category-item:nth-of-type(4) span:last-child": "Outdoor hospitality environments",
      ".new-home-body .category-item:nth-of-type(5) span:last-child": "Branded residential developments",
      ".new-home-body .manufacturing-grid .icon-card:nth-of-type(1) p":
        "E0 and E1 low-formaldehyde panels available when required.",
      ".new-home-body .manufacturing-grid .icon-card:nth-of-type(2) p":
        "Fire-resistant foam and OEKO-TEX 100 standards available according to projects' request.",
      ".new-home-body .manufacturing-grid .icon-card:nth-of-type(3) p":
        "Engineering, material selection, and QC protect both design intent and durability.",
      ".new-home-body .supply-section .eyebrow": "Selected FF&E Supply",
      ".new-home-body .supply-title": "FF&E product categories",
      ".new-home-body .supply-tile:nth-of-type(1) .supply-caption": "Loose furniture",
      ".new-home-body .supply-tile:nth-of-type(2) .supply-caption": "Decorative lightings",
      ".new-home-body .supply-tile:nth-of-type(3) .supply-caption": "Chandeliers",
      ".new-home-body .supply-tile:nth-of-type(4) .supply-caption": "Curtains",
      ".new-home-body .supply-tile:nth-of-type(5) .supply-caption": "Carpets & Rugs",
      ".new-home-body .supply-tile:nth-of-type(6) .supply-caption": "Artworks",
      ".new-about-body .hero-copy .eyebrow": "About Furny Asia",
      ".new-about-body .hero-copy h1": "Hospitality manufacturing shaped by project experience.",
      ".new-about-body .hero-copy .lead":
        "Registered in Singapore and operating in Ho Chi Minh City, Vietnam, FURNY ASIA is a manufacturer and exporter of furniture and FF&E for high-end hospitality projects around the world.",
      ".new-about-body .hero-actions a[href='contact.html']": "Start a Project",
      ".new-about-body .hero-actions a[href='new-expertise-page.html']": "View Expertise",
      ".new-about-body .hero-lead-centered":
        "Founded on more than 10 years of hospitality project management experience, FURNY ASIA combines international coordination with Vietnam-based manufacturing follow-through. Some of our factory partners have been established since 1994.",
      ".new-about-body .about-stat-card:nth-of-type(1) strong": "Registered in Singapore",
      ".new-about-body .about-stat-card:nth-of-type(1) p":
        "A structure set up for international project coordination and export work.",
      ".new-about-body .about-stat-card:nth-of-type(2) strong": "Operating in Ho Chi Minh City",
      ".new-about-body .about-stat-card:nth-of-type(2) p":
        "Close day-to-day factory follow-up where production decisions actually happen.",
      ".new-about-body .about-stat-card:nth-of-type(3) strong":
        "Built on 10+ years of project management experience",
      ".new-about-body .about-stat-card:nth-of-type(3) p":
        "Hospitality knowledge informs how we assess design intent, quality, and timing.",
      ".new-about-body .about-stat-card:nth-of-type(4) strong": "Factory partners established since 1994",
      ".new-about-body .about-stat-card:nth-of-type(4) p":
        "Long-standing manufacturing capability supports demanding hospitality programs.",
      ".new-about-body .section:nth-of-type(2) .eyebrow": "Vision",
      ".new-about-body .vision-statement":
        "To be the leading partner for high-end hospitality projects in Asia, delivering integrated loose furniture and FF&E solutions through world-class manufacturing and execution excellence.",
      ".new-about-body .section:nth-of-type(3) .eyebrow": "Core Values",
      ".new-about-body .section:nth-of-type(3) h2":
        "Flexibility, trust, and professionalism guide every assignment.",
      ".new-about-body .about-value-card:nth-of-type(1) h3": "Flexibility",
      ".new-about-body .about-value-card:nth-of-type(1) p":
        "We adapt the manufacturing and supply approach to the project's scope, standards, and timeline instead of forcing a one-size-fits-all solution.",
      ".new-about-body .about-value-card:nth-of-type(2) h3": "Trust",
      ".new-about-body .about-value-card:nth-of-type(2) p":
        "Long-term relationships are built through transparency, reliability, and clear communication with both clients and manufacturing partners.",
      ".new-about-body .about-value-card:nth-of-type(3) h3": "Professionalism",
      ".new-about-body .about-value-card:nth-of-type(3) p":
        "We manage project requirements with the rigor expected on high-end hospitality and branded residential developments.",
      ".new-expertise-body .hero-copy .eyebrow": "Our Expertise",
      ".new-expertise-body .hero-copy h1":
        "Elevating Hospitality: Custom FF&E Design & Detailed Manufacturing",
      ".new-expertise-body .hero-copy .lead":
        "Custom loose furniture and selected FF&E supply, managed with clear production and quality control.",
      ".new-expertise-body .hero-actions a[href='contact.html']": "Start a Project",
      ".new-expertise-body .hero-actions a[href='#manufacturing']": "Explore Expertise",
      ".new-expertise-body .manufacturing-section .section-head .eyebrow": "Our Expertise",
      ".new-expertise-body .manufacturing-title": "Hospitality Loose Furniture Manufacturing",
      ".new-expertise-body .category-item:nth-of-type(1) span:last-child": "Hotel guestrooms",
      ".new-expertise-body .category-item:nth-of-type(2) span:last-child": "Public areas and lobbies",
      ".new-expertise-body .category-item:nth-of-type(3) span:last-child": "Restaurants and bars",
      ".new-expertise-body .category-item:nth-of-type(4) span:last-child": "Outdoor hospitality environments",
      ".new-expertise-body .category-item:nth-of-type(5) span:last-child": "Branded residential developments",
      ".new-expertise-body .manufacturing-grid .icon-card:nth-of-type(1) p":
        "E0 and E1 low-formaldehyde panels available when required.",
      ".new-expertise-body .manufacturing-grid .icon-card:nth-of-type(2) p":
        "Fire-resistant foam and OEKO-TEX 100 standards available according to projects' request.",
      ".new-expertise-body .manufacturing-grid .icon-card:nth-of-type(3) p":
        "Engineering, material selection, and QC protect both design intent and durability.",
      ".new-expertise-body .vietnam-copy .eyebrow": "Manufacturing in Vietnam",
      ".new-expertise-body .vietnam-copy h2":
        "A strong mix of craftsmanship, production capability, and manufacturing value.",
      ".new-expertise-body .vietnam-copy > p":
        "Vietnam offers a strong combination of craftsmanship, production capability, and manufacturing value for hospitality loose furniture projects.",
      ".new-expertise-body .supply-section .eyebrow": "Selected FF&E Supply",
      ".new-expertise-body .supply-title": "FF&E product categories",
      ".new-expertise-body .supply-tile:nth-of-type(1) .supply-caption": "Loose furniture",
      ".new-expertise-body .supply-tile:nth-of-type(2) .supply-caption": "Decorative lightings",
      ".new-expertise-body .supply-tile:nth-of-type(3) .supply-caption": "Chandeliers",
      ".new-expertise-body .supply-tile:nth-of-type(4) .supply-caption": "Curtains",
      ".new-expertise-body .supply-tile:nth-of-type(5) .supply-caption": "Carpets & Rugs",
      ".new-expertise-body .supply-tile:nth-of-type(6) .supply-caption": "Artworks",
      ".new-expertise-body .expertise-process-section .section-head .eyebrow": "Project Delivery Process",
      ".new-expertise-body .expertise-process-section .section-head h2":
        "Seven controlled steps keep approvals, production, and delivery on track.",
      ".new-expertise-body .process-detail-card:nth-of-type(1) .process-step-title":
        "Design Review & Technical Assessment",
      ".new-expertise-body .process-detail-card:nth-of-type(1) > p:last-child":
        "Drawings, specs, and feasibility are aligned before production starts.",
      ".new-expertise-body .process-detail-card:nth-of-type(2) .process-step-title":
        "Shop Drawings & Engineering",
      ".new-expertise-body .process-detail-card:nth-of-type(2) > p:last-child":
        "Construction methods, dimensions, and finishes are confirmed in detail.",
      ".new-expertise-body .process-detail-card:nth-of-type(3) .process-step-title":
        "Material & Finish Sampling",
      ".new-expertise-body .process-detail-card:nth-of-type(3) > p:last-child":
        "Finishes, fabrics, hardware, and details are reviewed for approval.",
      ".new-expertise-body .process-detail-card:nth-of-type(4) .process-step-title": "Prototyping",
      ".new-expertise-body .process-detail-card:nth-of-type(4) > p:last-child":
        "Key pieces are validated before moving into full production.",
      ".new-expertise-body .process-detail-card:nth-of-type(5) .process-step-title":
        "Production Management",
      ".new-expertise-body .process-detail-card:nth-of-type(5) > p:last-child":
        "Timeline, workmanship, finish quality, and sample compliance are monitored.",
      ".new-expertise-body .process-detail-card:nth-of-type(6) .process-step-title": "Quality Control",
      ".new-expertise-body .process-detail-card:nth-of-type(6) > p:last-child":
        "Inspections continue during production and again before shipment.",
      ".new-expertise-body .process-detail-card:nth-of-type(7) .process-step-title":
        "Logistics & Delivery",
      ".new-expertise-body .process-detail-card:nth-of-type(7) > p:last-child":
        "Packing, consolidation, and delivery are coordinated to the project site.",
      ".projects-body .hero-copy .eyebrow": "Projects",
      ".projects-body .hero-copy h1": "Selected hospitality interiors and furniture moments.",
      ".projects-body .hero-copy .lead":
        "Browse Furny Asia's project gallery featuring hospitality furniture and FF&E supply imagery.",
      ".contact-body .hero-copy .eyebrow": "Start a Project",
      ".contact-body .hero-copy h1": "Tell us about your hospitality furniture or FF&E scope.",
      ".contact-body .hero-copy .lead":
        "Use the form below to share project type, location, approximate quantities, required standards, and desired timeline. You can also contact us directly if you prefer not to use the form.",
      ".contact-body .hero-actions a[href='#contact-form']": "Open Form",
      ".contact-body .hero-actions a[href='new-expertise-page.html']": "See Expertise",
      ".contact-body .contact-info-card-primary .card-kicker": "What to include",
      ".contact-body .contact-direct-card .card-kicker": "Direct contact",
      ".contact-body .contact-form-intro .eyebrow": "Project Inquiry Form",
      ".contact-body .contact-form-intro h2": "Share the essentials and we can continue from there.",
      ".contact-body .contact-section-copy":
        "The form keeps the same inquiry content, but the layout is now tuned to match the rest of the redesigned Furny Asia pages.",
      ".contact-body label[for='name']": "Name",
      ".contact-body label[for='email']": "Email",
      ".contact-body label[for='company']": "Company",
      ".contact-body label[for='location']": "Project location",
      ".contact-body label[for='service']": "Service needed",
      ".contact-body label[for='timeline']": "Timeline",
      ".contact-body label[for='message']": "Project message",
      ".contact-body #service option:nth-of-type(1)": "Custom furniture manufacturing",
      ".contact-body #service option:nth-of-type(2)": "Selected FF&E supply",
      ".contact-body #service option:nth-of-type(3)": "Furniture + FF&E",
      ".contact-body #service option:nth-of-type(4)": "Still defining scope",
      ".contact-body #timeline option:nth-of-type(1)": "Within 3 months",
      ".contact-body #timeline option:nth-of-type(2)": "3-6 months",
      ".contact-body #timeline option:nth-of-type(3)": "6-12 months",
      ".contact-body #timeline option:nth-of-type(4)": "Planning stage",
      ".contact-body .contact-form-actions .button": "Send Inquiry"
    },
    html: {
      ".new-expertise-body .vietnam-list li:nth-of-type(1)":
        "<strong>Skilled production</strong>Established craftsmanship supported by modern factory capabilities.",
      ".new-expertise-body .vietnam-list li:nth-of-type(2)":
        "<strong>Competitive value</strong>Strong manufacturing efficiency for hospitality and residential projects.",
      ".new-expertise-body .vietnam-list li:nth-of-type(3)":
        "<strong>Local control</strong>Operations based in Ho Chi Minh City for direct factory coordination.",
      ".contact-body .contact-checklist li:nth-of-type(1)":
        "<strong>Project type and location</strong>Hotel, resort, branded residence, or another hospitality-led development.",
      ".contact-body .contact-checklist li:nth-of-type(2)":
        "<strong>Scope needed</strong>Custom furniture only, selected FF&amp;E supply, or a combined package.",
      ".contact-body .contact-checklist li:nth-of-type(3)":
        "<strong>Timeline and standards</strong>Lead time, delivery target, and any operator or specification requirements."
    },
    attr: {
      ".language-picker": { "aria-label": "Select language" },
      ".language-select": { "aria-label": "Select language" },
      ".contact-body #name": { placeholder: "Your name" },
      ".contact-body #email": { placeholder: "name@company.com" },
      ".contact-body #company": { placeholder: "Company name" },
      ".contact-body #location": { placeholder: "Country / city" },
      ".contact-body #message": {
        placeholder: "Share project scope, quantities, design stage, and any specification requirements."
      }
    },
    status: (name) =>
      `Thank you${name ? `, ${name}` : ""}. This form is ready for your email or CRM integration. Update the submit handler in assets/js/main.js when you want to connect it.`
  },
  fr: {
    text: {
      ".menu-toggle": "Menu",
      ".site-nav .nav-link[href='new-home-page.html']": "Accueil",
      ".site-nav .nav-link[href='new-about-page.html']": "À propos",
      ".site-nav .nav-link[href='new-expertise-page.html']": "Expertise",
      ".site-nav .nav-link[href='projects.html']": "Projets",
      ".site-nav .nav-link-social": "LinkedIn",
      ".site-nav .button[href='contact.html']": "Démarrer un projet",
      ".footer-note":
        "Fabrication de mobilier d'hospitalité et fourniture sélective de FF&E pour des projets internationaux.",
      ".footer-links a[href='new-home-page.html']": "Accueil",
      ".footer-links a[href='new-about-page.html']": "À propos",
      ".footer-links a[href='new-expertise-page.html']": "Expertise",
      ".footer-links a[href='projects.html']": "Projets",
      ".footer-links a[href='contact.html']": "Contact",
      ".footer-links a[href^='https://www.linkedin.com']": "LinkedIn",
      ".footer-contact-label-email": "E-mail",
      ".footer-contact-label-phone": "Téléphone",
      ".footer-contact-label-singapore": "Adresse enregistrée à Singapour",
      ".footer-contact-label-vietnam": "Bureau, showroom et opérations au Vietnam",
      ".contact-detail-label-email": "E-mail",
      ".contact-detail-label-phone": "Téléphone",
      ".contact-detail-label-linkedin": "LinkedIn",
      ".new-home-body .hero-copy .eyebrow": "Fabrication de mobilier d'hospitalité basée au Vietnam",
      ".new-home-body .hero-copy h1":
        "Solution de mobilier d'hospitalité de bout en bout, du design à la livraison",
      ".new-home-body .hero-actions a[href='contact.html']": "Démarrer un projet",
      ".new-home-body .hero-actions a[href='#programs']": "Découvrir notre savoir-faire",
      ".new-home-body .hero-lead-centered":
        "FURNY ASIA travaille en étroite collaboration avec des architectes et designers d'intérieur haut de gamme, des opérateurs hôteliers et des propriétaires pour fabriquer du mobilier loose sur mesure et coordonner une sélection de FF&E pour des projets hôteliers et résidentiels de marque dans le monde entier.",
      ".new-home-body .client-label": "Nos clients",
      ".new-home-body .client-grid .client-card:nth-of-type(1)": "Designers d'intérieur haut de gamme",
      ".new-home-body .client-grid .client-card:nth-of-type(2)":
        "Opérateurs hôteliers internationaux et propriétaires",
      ".new-home-body .manufacturing-section .section-head .eyebrow": "Notre expertise",
      ".new-home-body .manufacturing-title": "Fabrication de mobilier loose pour l'hospitalité",
      ".new-home-body .category-item:nth-of-type(1) span:last-child": "Chambres d'hôtel",
      ".new-home-body .category-item:nth-of-type(2) span:last-child": "Espaces publics et lobbies",
      ".new-home-body .category-item:nth-of-type(3) span:last-child": "Restaurants et bars",
      ".new-home-body .category-item:nth-of-type(4) span:last-child": "Espaces extérieurs d'hospitalité",
      ".new-home-body .category-item:nth-of-type(5) span:last-child": "Résidences de marque",
      ".new-home-body .manufacturing-grid .icon-card:nth-of-type(1) p":
        "Panneaux à faible émission de formaldéhyde E0 et E1 disponibles si nécessaire.",
      ".new-home-body .manufacturing-grid .icon-card:nth-of-type(2) p":
        "Mousses ignifuges et normes OEKO-TEX 100 disponibles selon les demandes du projet.",
      ".new-home-body .manufacturing-grid .icon-card:nth-of-type(3) p":
        "L'ingénierie, le choix des matériaux et le contrôle qualité protègent l'intention du design et la durabilité.",
      ".new-home-body .supply-section .eyebrow": "Fourniture FF&E sélectionnée",
      ".new-home-body .supply-title": "Catégories de produits FF&E",
      ".new-home-body .supply-tile:nth-of-type(1) .supply-caption": "Mobilier loose",
      ".new-home-body .supply-tile:nth-of-type(2) .supply-caption": "Éclairages décoratifs",
      ".new-home-body .supply-tile:nth-of-type(3) .supply-caption": "Lustres",
      ".new-home-body .supply-tile:nth-of-type(4) .supply-caption": "Rideaux",
      ".new-home-body .supply-tile:nth-of-type(5) .supply-caption": "Tapis et moquettes",
      ".new-home-body .supply-tile:nth-of-type(6) .supply-caption": "Œuvres d'art",
      ".new-about-body .hero-copy .eyebrow": "À propos de Furny Asia",
      ".new-about-body .hero-copy h1": "Une fabrication hôtelière portée par l'expérience projet.",
      ".new-about-body .hero-copy .lead":
        "Enregistrée à Singapour et opérant à Ho Chi Minh-Ville, au Vietnam, FURNY ASIA est un fabricant et exportateur de mobilier et de FF&E pour des projets hôteliers haut de gamme dans le monde entier.",
      ".new-about-body .hero-actions a[href='contact.html']": "Démarrer un projet",
      ".new-about-body .hero-actions a[href='new-expertise-page.html']": "Voir l'expertise",
      ".new-about-body .hero-lead-centered":
        "Fondée sur plus de 10 ans d'expérience en gestion de projets hôteliers, FURNY ASIA associe coordination internationale et suivi de fabrication au Vietnam. Certains de nos partenaires industriels sont établis depuis 1994.",
      ".new-about-body .about-stat-card:nth-of-type(1) strong": "Enregistrée à Singapour",
      ".new-about-body .about-stat-card:nth-of-type(1) p":
        "Une structure pensée pour la coordination internationale des projets et l'export.",
      ".new-about-body .about-stat-card:nth-of-type(2) strong": "Opérant à Ho Chi Minh-Ville",
      ".new-about-body .about-stat-card:nth-of-type(2) p":
        "Un suivi quotidien des usines, là où les décisions de production se prennent réellement.",
      ".new-about-body .about-stat-card:nth-of-type(3) strong":
        "Fondée sur plus de 10 ans d'expérience en gestion de projets",
      ".new-about-body .about-stat-card:nth-of-type(3) p":
        "Cette expérience hôtelière guide notre lecture du design, de la qualité et du timing.",
      ".new-about-body .about-stat-card:nth-of-type(4) strong": "Partenaires industriels établis depuis 1994",
      ".new-about-body .about-stat-card:nth-of-type(4) p":
        "Une capacité de fabrication durable pour des projets hôteliers exigeants.",
      ".new-about-body .section:nth-of-type(2) .eyebrow": "Vision",
      ".new-about-body .vision-statement":
        "Être le partenaire de référence pour les projets hôteliers haut de gamme en Asie, en livrant des solutions intégrées de mobilier loose et de FF&E grâce à une fabrication de classe mondiale et à une excellence d'exécution.",
      ".new-about-body .section:nth-of-type(3) .eyebrow": "Valeurs clés",
      ".new-about-body .section:nth-of-type(3) h2":
        "Flexibilité, confiance et professionnalisme guident chaque mission.",
      ".new-about-body .about-value-card:nth-of-type(1) h3": "Flexibilité",
      ".new-about-body .about-value-card:nth-of-type(1) p":
        "Nous adaptons l'approche de fabrication et de fourniture au périmètre, aux standards et au calendrier du projet au lieu d'imposer une solution unique.",
      ".new-about-body .about-value-card:nth-of-type(2) h3": "Confiance",
      ".new-about-body .about-value-card:nth-of-type(2) p":
        "Des relations durables se construisent par la transparence, la fiabilité et une communication claire avec les clients comme avec les partenaires industriels.",
      ".new-about-body .about-value-card:nth-of-type(3) h3": "Professionnalisme",
      ".new-about-body .about-value-card:nth-of-type(3) p":
        "Nous gérons les exigences projet avec la rigueur attendue pour des développements hôteliers et résidentiels de marque haut de gamme.",
      ".new-expertise-body .hero-copy .eyebrow": "Notre expertise",
      ".new-expertise-body .hero-copy h1":
        "Élever l'hospitalité : conception FF&E sur mesure et fabrication détaillée",
      ".new-expertise-body .hero-copy .lead":
        "Mobilier loose sur mesure et fourniture FF&E sélectionnée, pilotés avec un contrôle clair de la production et de la qualité.",
      ".new-expertise-body .hero-actions a[href='contact.html']": "Démarrer un projet",
      ".new-expertise-body .hero-actions a[href='#manufacturing']": "Explorer l'expertise",
      ".new-expertise-body .manufacturing-section .section-head .eyebrow": "Notre expertise",
      ".new-expertise-body .manufacturing-title": "Fabrication de mobilier loose pour l'hospitalité",
      ".new-expertise-body .category-item:nth-of-type(1) span:last-child": "Chambres d'hôtel",
      ".new-expertise-body .category-item:nth-of-type(2) span:last-child": "Espaces publics et lobbies",
      ".new-expertise-body .category-item:nth-of-type(3) span:last-child": "Restaurants et bars",
      ".new-expertise-body .category-item:nth-of-type(4) span:last-child": "Espaces extérieurs d'hospitalité",
      ".new-expertise-body .category-item:nth-of-type(5) span:last-child": "Résidences de marque",
      ".new-expertise-body .manufacturing-grid .icon-card:nth-of-type(1) p":
        "Panneaux à faible émission de formaldéhyde E0 et E1 disponibles si nécessaire.",
      ".new-expertise-body .manufacturing-grid .icon-card:nth-of-type(2) p":
        "Mousses ignifuges et normes OEKO-TEX 100 disponibles selon les demandes du projet.",
      ".new-expertise-body .manufacturing-grid .icon-card:nth-of-type(3) p":
        "L'ingénierie, le choix des matériaux et le contrôle qualité protègent l'intention du design et la durabilité.",
      ".new-expertise-body .vietnam-copy .eyebrow": "Fabrication au Vietnam",
      ".new-expertise-body .vietnam-copy h2":
        "Un solide équilibre entre savoir-faire, capacité de production et valeur industrielle.",
      ".new-expertise-body .vietnam-copy > p":
        "Le Vietnam offre une combinaison solide de savoir-faire, de capacité de production et de valeur industrielle pour les projets de mobilier loose pour l'hospitalité.",
      ".new-expertise-body .supply-section .eyebrow": "Fourniture FF&E sélectionnée",
      ".new-expertise-body .supply-title": "Catégories de produits FF&E",
      ".new-expertise-body .supply-tile:nth-of-type(1) .supply-caption": "Mobilier loose",
      ".new-expertise-body .supply-tile:nth-of-type(2) .supply-caption": "Éclairages décoratifs",
      ".new-expertise-body .supply-tile:nth-of-type(3) .supply-caption": "Lustres",
      ".new-expertise-body .supply-tile:nth-of-type(4) .supply-caption": "Rideaux",
      ".new-expertise-body .supply-tile:nth-of-type(5) .supply-caption": "Tapis et moquettes",
      ".new-expertise-body .supply-tile:nth-of-type(6) .supply-caption": "Œuvres d'art",
      ".new-expertise-body .expertise-process-section .section-head .eyebrow": "Processus de livraison du projet",
      ".new-expertise-body .expertise-process-section .section-head h2":
        "Sept étapes maîtrisées maintiennent approbations, production et livraison sur les rails.",
      ".new-expertise-body .process-detail-card:nth-of-type(1) .process-step-title":
        "Revue du design et évaluation technique",
      ".new-expertise-body .process-detail-card:nth-of-type(1) > p:last-child":
        "Les dessins, spécifications et faisabilité sont alignés avant le lancement de la production.",
      ".new-expertise-body .process-detail-card:nth-of-type(2) .process-step-title":
        "Plans d'exécution et ingénierie",
      ".new-expertise-body .process-detail-card:nth-of-type(2) > p:last-child":
        "Les méthodes de construction, dimensions et finitions sont confirmées en détail.",
      ".new-expertise-body .process-detail-card:nth-of-type(3) .process-step-title":
        "Échantillons matériaux et finitions",
      ".new-expertise-body .process-detail-card:nth-of-type(3) > p:last-child":
        "Les finitions, tissus, quincailleries et détails sont revus pour approbation.",
      ".new-expertise-body .process-detail-card:nth-of-type(4) .process-step-title": "Prototype",
      ".new-expertise-body .process-detail-card:nth-of-type(4) > p:last-child":
        "Les pièces clés sont validées avant le passage à la production complète.",
      ".new-expertise-body .process-detail-card:nth-of-type(5) .process-step-title":
        "Gestion de la production",
      ".new-expertise-body .process-detail-card:nth-of-type(5) > p:last-child":
        "Le planning, la qualité d'exécution, les finitions et la conformité des échantillons sont suivis.",
      ".new-expertise-body .process-detail-card:nth-of-type(6) .process-step-title": "Contrôle qualité",
      ".new-expertise-body .process-detail-card:nth-of-type(6) > p:last-child":
        "Les inspections se poursuivent pendant la production puis à nouveau avant l'expédition.",
      ".new-expertise-body .process-detail-card:nth-of-type(7) .process-step-title":
        "Logistique et livraison",
      ".new-expertise-body .process-detail-card:nth-of-type(7) > p:last-child":
        "L'emballage, la consolidation et la livraison sont coordonnés jusqu'au site du projet.",
      ".projects-body .hero-copy .eyebrow": "Projets",
      ".projects-body .hero-copy h1": "Sélection d'intérieurs et de mobilier pour l'hospitalité.",
      ".projects-body .hero-copy .lead":
        "Parcourez la galerie Furny Asia présentant des images de mobilier d'hospitalité et de fourniture FF&E.",
      ".contact-body .hero-copy .eyebrow": "Démarrer un projet",
      ".contact-body .hero-copy h1": "Parlez-nous de votre périmètre mobilier ou FF&E pour l'hospitalité.",
      ".contact-body .hero-copy .lead":
        "Utilisez le formulaire ci-dessous pour partager le type de projet, le lieu, les quantités approximatives, les normes requises et le calendrier souhaité. Vous pouvez aussi nous contacter directement si vous préférez ne pas utiliser le formulaire.",
      ".contact-body .hero-actions a[href='#contact-form']": "Ouvrir le formulaire",
      ".contact-body .hero-actions a[href='new-expertise-page.html']": "Voir l'expertise",
      ".contact-body .contact-info-card-primary .card-kicker": "À inclure",
      ".contact-body .contact-direct-card .card-kicker": "Contact direct",
      ".contact-body .contact-form-intro .eyebrow": "Formulaire de demande de projet",
      ".contact-body .contact-form-intro h2": "Partagez l'essentiel et nous pourrons avancer à partir de là.",
      ".contact-body .contact-section-copy":
        "Le contenu de la demande reste le même, mais la mise en page est désormais alignée sur le reste du site Furny Asia redesigné.",
      ".contact-body label[for='name']": "Nom",
      ".contact-body label[for='email']": "E-mail",
      ".contact-body label[for='company']": "Société",
      ".contact-body label[for='location']": "Lieu du projet",
      ".contact-body label[for='service']": "Service souhaité",
      ".contact-body label[for='timeline']": "Calendrier",
      ".contact-body label[for='message']": "Message projet",
      ".contact-body #service option:nth-of-type(1)": "Fabrication de mobilier sur mesure",
      ".contact-body #service option:nth-of-type(2)": "Fourniture FF&E sélectionnée",
      ".contact-body #service option:nth-of-type(3)": "Mobilier + FF&E",
      ".contact-body #service option:nth-of-type(4)": "Périmètre en cours de définition",
      ".contact-body #timeline option:nth-of-type(1)": "Sous 3 mois",
      ".contact-body #timeline option:nth-of-type(2)": "3 à 6 mois",
      ".contact-body #timeline option:nth-of-type(3)": "6 à 12 mois",
      ".contact-body #timeline option:nth-of-type(4)": "Phase de planification",
      ".contact-body .contact-form-actions .button": "Envoyer la demande"
    },
    html: {
      ".new-expertise-body .vietnam-list li:nth-of-type(1)":
        "<strong>Production qualifiée</strong>Un savoir-faire établi soutenu par des capacités industrielles modernes.",
      ".new-expertise-body .vietnam-list li:nth-of-type(2)":
        "<strong>Valeur compétitive</strong>Une forte efficacité industrielle pour les projets hôteliers et résidentiels.",
      ".new-expertise-body .vietnam-list li:nth-of-type(3)":
        "<strong>Contrôle local</strong>Des opérations basées à Ho Chi Minh-Ville pour une coordination directe des usines.",
      ".contact-body .contact-checklist li:nth-of-type(1)":
        "<strong>Type de projet et lieu</strong>Hôtel, resort, résidence de marque ou autre développement à dominante hôtelière.",
      ".contact-body .contact-checklist li:nth-of-type(2)":
        "<strong>Périmètre souhaité</strong>Mobilier sur mesure uniquement, fourniture FF&amp;E sélectionnée ou package combiné.",
      ".contact-body .contact-checklist li:nth-of-type(3)":
        "<strong>Calendrier et standards</strong>Délais, objectif de livraison et exigences opérateur ou de spécification."
    },
    attr: {
      ".language-picker": { "aria-label": "Choisir la langue" },
      ".language-select": { "aria-label": "Choisir la langue" },
      ".contact-body #name": { placeholder: "Votre nom" },
      ".contact-body #email": { placeholder: "nom@societe.com" },
      ".contact-body #company": { placeholder: "Nom de la société" },
      ".contact-body #location": { placeholder: "Pays / ville" },
      ".contact-body #message": {
        placeholder: "Partagez le périmètre, les quantités, l'état du design et les éventuelles exigences de spécification."
      }
    },
    status: (name) =>
      `Merci${name ? `, ${name}` : ""}. Ce formulaire est prêt pour votre e-mail ou votre CRM. Mettez à jour le gestionnaire d'envoi dans assets/js/main.js lorsque vous souhaiterez le connecter.`
  },
  ja: {
    text: {
      ".menu-toggle": "メニュー",
      ".site-nav .nav-link[href='new-home-page.html']": "ホーム",
      ".site-nav .nav-link[href='new-about-page.html']": "会社情報",
      ".site-nav .nav-link[href='new-expertise-page.html']": "専門分野",
      ".site-nav .nav-link[href='projects.html']": "プロジェクト",
      ".site-nav .nav-link-social": "LinkedIn",
      ".site-nav .button[href='contact.html']": "プロジェクトを始める",
      ".footer-note": "世界のハイエンドホスピタリティ案件向けの家具製造と厳選FF&E供給。",
      ".footer-links a[href='new-home-page.html']": "ホーム",
      ".footer-links a[href='new-about-page.html']": "会社情報",
      ".footer-links a[href='new-expertise-page.html']": "専門分野",
      ".footer-links a[href='projects.html']": "プロジェクト",
      ".footer-links a[href='contact.html']": "お問い合わせ",
      ".footer-links a[href^='https://www.linkedin.com']": "LinkedIn",
      ".footer-contact-label-email": "メール",
      ".footer-contact-label-phone": "電話",
      ".footer-contact-label-singapore": "シンガポール登記住所",
      ".footer-contact-label-vietnam": "ベトナム オフィス・ショールーム・オペレーション",
      ".contact-detail-label-email": "メール",
      ".contact-detail-label-phone": "電話",
      ".contact-detail-label-linkedin": "LinkedIn",
      ".new-home-body .hero-copy .eyebrow": "ベトナム拠点のホスピタリティ家具製造",
      ".new-home-body .hero-copy h1": "デザインから納品まで一貫したホスピタリティ家具ソリューション",
      ".new-home-body .hero-actions a[href='contact.html']": "プロジェクトを始める",
      ".new-home-body .hero-actions a[href='#programs']": "対応内容を見る",
      ".new-home-body .hero-lead-centered":
        "FURNY ASIAは、ハイエンドのインテリアデザイナー・建築家、ホテルオペレーター、オーナーと緊密に連携し、世界中の高級ホスピタリティおよびブランドレジデンス案件向けに特注のルース家具製造と厳選FF&Eの調整を行っています。",
      ".new-home-body .client-label": "主なクライアント",
      ".new-home-body .client-grid .client-card:nth-of-type(1)": "ハイエンド インテリアデザイナー",
      ".new-home-body .client-grid .client-card:nth-of-type(2)": "国際的なホテルオペレーターとオーナー",
      ".new-home-body .manufacturing-section .section-head .eyebrow": "当社の専門分野",
      ".new-home-body .manufacturing-title": "ホスピタリティ向けルース家具製造",
      ".new-home-body .category-item:nth-of-type(1) span:last-child": "ホテル客室",
      ".new-home-body .category-item:nth-of-type(2) span:last-child": "パブリックエリアとロビー",
      ".new-home-body .category-item:nth-of-type(3) span:last-child": "レストランとバー",
      ".new-home-body .category-item:nth-of-type(4) span:last-child": "屋外ホスピタリティ空間",
      ".new-home-body .category-item:nth-of-type(5) span:last-child": "ブランドレジデンス開発",
      ".new-home-body .manufacturing-grid .icon-card:nth-of-type(1) p":
        "必要に応じてE0・E1低ホルムアルデヒドパネルに対応可能です。",
      ".new-home-body .manufacturing-grid .icon-card:nth-of-type(2) p":
        "難燃フォームおよびOEKO-TEX 100基準は案件要件に応じて対応可能です。",
      ".new-home-body .manufacturing-grid .icon-card:nth-of-type(3) p":
        "設計、材料選定、品質管理によりデザイン意図と耐久性の両方を守ります。",
      ".new-home-body .supply-section .eyebrow": "厳選されたFF&E供給",
      ".new-home-body .supply-title": "FF&E製品カテゴリー",
      ".new-home-body .supply-tile:nth-of-type(1) .supply-caption": "ルース家具",
      ".new-home-body .supply-tile:nth-of-type(2) .supply-caption": "装飾照明",
      ".new-home-body .supply-tile:nth-of-type(3) .supply-caption": "シャンデリア",
      ".new-home-body .supply-tile:nth-of-type(4) .supply-caption": "カーテン",
      ".new-home-body .supply-tile:nth-of-type(5) .supply-caption": "カーペット・ラグ",
      ".new-home-body .supply-tile:nth-of-type(6) .supply-caption": "アートワーク",
      ".new-about-body .hero-copy .eyebrow": "Furny Asiaについて",
      ".new-about-body .hero-copy h1": "プロジェクト経験に支えられたホスピタリティ製造。",
      ".new-about-body .hero-copy .lead":
        "FURNY ASIAはシンガポールで登記され、ベトナム・ホーチミン市で運営される、世界のハイエンドホスピタリティ案件向け家具およびFF&Eの製造・輸出企業です。",
      ".new-about-body .hero-actions a[href='contact.html']": "プロジェクトを始める",
      ".new-about-body .hero-actions a[href='new-expertise-page.html']": "専門分野を見る",
      ".new-about-body .hero-lead-centered":
        "FURNY ASIAは10年以上のホスピタリティプロジェクトマネジメント経験を基盤に設立され、国際的な調整とベトナムでの製造フォローを組み合わせています。提携工場の中には1994年創業の工場もあります。",
      ".new-about-body .about-stat-card:nth-of-type(1) strong": "シンガポールで登記",
      ".new-about-body .about-stat-card:nth-of-type(1) p":
        "国際案件の調整と輸出業務に適した体制です。",
      ".new-about-body .about-stat-card:nth-of-type(2) strong": "ホーチミン市で運営",
      ".new-about-body .about-stat-card:nth-of-type(2) p":
        "生産判断が行われる現場で日々工場フォローを行います。",
      ".new-about-body .about-stat-card:nth-of-type(3) strong":
        "10年以上のプロジェクトマネジメント経験を基盤",
      ".new-about-body .about-stat-card:nth-of-type(3) p":
        "ホスピタリティ分野の知見が設計意図、品質、スケジュール判断を支えます。",
      ".new-about-body .about-stat-card:nth-of-type(4) strong": "1994年創業の提携工場",
      ".new-about-body .about-stat-card:nth-of-type(4) p":
        "要求の高いホスピタリティ案件を支える長年の製造力があります。",
      ".new-about-body .section:nth-of-type(2) .eyebrow": "ビジョン",
      ".new-about-body .vision-statement":
        "アジアにおけるハイエンドホスピタリティ案件の主要パートナーとなり、世界水準の製造力と実行力を通じて、統合されたルース家具およびFF&Eソリューションを提供すること。",
      ".new-about-body .section:nth-of-type(3) .eyebrow": "コアバリュー",
      ".new-about-body .section:nth-of-type(3) h2":
        "柔軟性、信頼、プロフェッショナリズムがすべての案件を支えます。",
      ".new-about-body .about-value-card:nth-of-type(1) h3": "柔軟性",
      ".new-about-body .about-value-card:nth-of-type(1) p":
        "案件ごとの範囲、基準、スケジュールに合わせて製造・供給アプローチを調整し、画一的な方法を押し付けません。",
      ".new-about-body .about-value-card:nth-of-type(2) h3": "信頼",
      ".new-about-body .about-value-card:nth-of-type(2) p":
        "透明性、信頼性、明確なコミュニケーションを通じて、顧客と製造パートナーの双方と長期的な関係を築きます。",
      ".new-about-body .about-value-card:nth-of-type(3) h3": "プロフェッショナリズム",
      ".new-about-body .about-value-card:nth-of-type(3) p":
        "ハイエンドのホスピタリティおよびブランドレジデンス案件に求められる厳格さで要件を管理します。",
      ".new-expertise-body .hero-copy .eyebrow": "当社の専門分野",
      ".new-expertise-body .hero-copy h1":
        "ホスピタリティを高める：特注FF&Eデザインと詳細製造",
      ".new-expertise-body .hero-copy .lead":
        "特注ルース家具と厳選FF&E供給を、明確な生産・品質管理のもとで進行します。",
      ".new-expertise-body .hero-actions a[href='contact.html']": "プロジェクトを始める",
      ".new-expertise-body .hero-actions a[href='#manufacturing']": "専門分野を見る",
      ".new-expertise-body .manufacturing-section .section-head .eyebrow": "当社の専門分野",
      ".new-expertise-body .manufacturing-title": "ホスピタリティ向けルース家具製造",
      ".new-expertise-body .category-item:nth-of-type(1) span:last-child": "ホテル客室",
      ".new-expertise-body .category-item:nth-of-type(2) span:last-child": "パブリックエリアとロビー",
      ".new-expertise-body .category-item:nth-of-type(3) span:last-child": "レストランとバー",
      ".new-expertise-body .category-item:nth-of-type(4) span:last-child": "屋外ホスピタリティ空間",
      ".new-expertise-body .category-item:nth-of-type(5) span:last-child": "ブランドレジデンス開発",
      ".new-expertise-body .manufacturing-grid .icon-card:nth-of-type(1) p":
        "必要に応じてE0・E1低ホルムアルデヒドパネルに対応可能です。",
      ".new-expertise-body .manufacturing-grid .icon-card:nth-of-type(2) p":
        "難燃フォームおよびOEKO-TEX 100基準は案件要件に応じて対応可能です。",
      ".new-expertise-body .manufacturing-grid .icon-card:nth-of-type(3) p":
        "設計、材料選定、品質管理によりデザイン意図と耐久性の両方を守ります。",
      ".new-expertise-body .vietnam-copy .eyebrow": "ベトナムでの製造",
      ".new-expertise-body .vietnam-copy h2":
        "職人技、生産能力、製造価値のバランスに優れています。",
      ".new-expertise-body .vietnam-copy > p":
        "ベトナムは、ホスピタリティ向けルース家具案件において、職人技、生産能力、製造価値を兼ね備えています。",
      ".new-expertise-body .supply-section .eyebrow": "厳選されたFF&E供給",
      ".new-expertise-body .supply-title": "FF&E製品カテゴリー",
      ".new-expertise-body .supply-tile:nth-of-type(1) .supply-caption": "ルース家具",
      ".new-expertise-body .supply-tile:nth-of-type(2) .supply-caption": "装飾照明",
      ".new-expertise-body .supply-tile:nth-of-type(3) .supply-caption": "シャンデリア",
      ".new-expertise-body .supply-tile:nth-of-type(4) .supply-caption": "カーテン",
      ".new-expertise-body .supply-tile:nth-of-type(5) .supply-caption": "カーペット・ラグ",
      ".new-expertise-body .supply-tile:nth-of-type(6) .supply-caption": "アートワーク",
      ".new-expertise-body .expertise-process-section .section-head .eyebrow": "プロジェクト納品プロセス",
      ".new-expertise-body .expertise-process-section .section-head h2":
        "承認、生産、納品を確実に進める7つの管理ステップ。",
      ".new-expertise-body .process-detail-card:nth-of-type(1) .process-step-title":
        "デザインレビューと技術評価",
      ".new-expertise-body .process-detail-card:nth-of-type(1) > p:last-child":
        "図面、仕様、実現性を生産開始前に整合させます。",
      ".new-expertise-body .process-detail-card:nth-of-type(2) .process-step-title":
        "製作図とエンジニアリング",
      ".new-expertise-body .process-detail-card:nth-of-type(2) > p:last-child":
        "構造方法、寸法、仕上げを詳細に確定します。",
      ".new-expertise-body .process-detail-card:nth-of-type(3) .process-step-title":
        "材料・仕上げサンプル",
      ".new-expertise-body .process-detail-card:nth-of-type(3) > p:last-child":
        "仕上げ、ファブリック、金物、細部を承認のために確認します。",
      ".new-expertise-body .process-detail-card:nth-of-type(4) .process-step-title": "試作",
      ".new-expertise-body .process-detail-card:nth-of-type(4) > p:last-child":
        "主要アイテムを本生産前に検証します。",
      ".new-expertise-body .process-detail-card:nth-of-type(5) .process-step-title": "生産管理",
      ".new-expertise-body .process-detail-card:nth-of-type(5) > p:last-child":
        "工程、仕上がり、品質、サンプル適合を継続的に確認します。",
      ".new-expertise-body .process-detail-card:nth-of-type(6) .process-step-title": "品質管理",
      ".new-expertise-body .process-detail-card:nth-of-type(6) > p:last-child":
        "検査は生産中および出荷前に継続して行われます。",
      ".new-expertise-body .process-detail-card:nth-of-type(7) .process-step-title": "物流と納品",
      ".new-expertise-body .process-detail-card:nth-of-type(7) > p:last-child":
        "梱包、集約、納品を現場まで調整します。",
      ".projects-body .hero-copy .eyebrow": "プロジェクト",
      ".projects-body .hero-copy h1": "ホスピタリティ空間と家具のセレクション。",
      ".projects-body .hero-copy .lead":
        "Furny Asiaのホスピタリティ家具およびFF&E供給のギャラリーをご覧ください。",
      ".contact-body .hero-copy .eyebrow": "プロジェクトを始める",
      ".contact-body .hero-copy h1": "ホスピタリティ家具またはFF&Eのご要望をお聞かせください。",
      ".contact-body .hero-copy .lead":
        "下記フォームから、案件種別、場所、概算数量、必要基準、希望スケジュールをご共有ください。フォームを使わず直接ご連絡いただくことも可能です。",
      ".contact-body .hero-actions a[href='#contact-form']": "フォームを開く",
      ".contact-body .hero-actions a[href='new-expertise-page.html']": "専門分野を見る",
      ".contact-body .contact-info-card-primary .card-kicker": "含めたい内容",
      ".contact-body .contact-direct-card .card-kicker": "直接連絡",
      ".contact-body .contact-form-intro .eyebrow": "プロジェクト問い合わせフォーム",
      ".contact-body .contact-form-intro h2": "必要事項をご共有いただければ、そこから進められます。",
      ".contact-body .contact-section-copy":
        "問い合わせ内容は同じまま、Furny Asiaの新しいサイトデザインに合わせてレイアウトを整えています。",
      ".contact-body label[for='name']": "お名前",
      ".contact-body label[for='email']": "メール",
      ".contact-body label[for='company']": "会社名",
      ".contact-body label[for='location']": "案件所在地",
      ".contact-body label[for='service']": "必要なサービス",
      ".contact-body label[for='timeline']": "スケジュール",
      ".contact-body label[for='message']": "案件メッセージ",
      ".contact-body #service option:nth-of-type(1)": "特注家具製造",
      ".contact-body #service option:nth-of-type(2)": "厳選FF&E供給",
      ".contact-body #service option:nth-of-type(3)": "家具 + FF&E",
      ".contact-body #service option:nth-of-type(4)": "まだ検討中",
      ".contact-body #timeline option:nth-of-type(1)": "3か月以内",
      ".contact-body #timeline option:nth-of-type(2)": "3〜6か月",
      ".contact-body #timeline option:nth-of-type(3)": "6〜12か月",
      ".contact-body #timeline option:nth-of-type(4)": "計画段階",
      ".contact-body .contact-form-actions .button": "問い合わせを送信"
    },
    html: {
      ".new-expertise-body .vietnam-list li:nth-of-type(1)":
        "<strong>熟練した生産体制</strong>確かな職人技を現代的な工場能力が支えます。",
      ".new-expertise-body .vietnam-list li:nth-of-type(2)":
        "<strong>高い製造価値</strong>ホスピタリティおよび住宅案件に対して高い製造効率を提供します。",
      ".new-expertise-body .vietnam-list li:nth-of-type(3)":
        "<strong>現地での管理</strong>ホーチミン市拠点により、工場との直接調整が可能です。",
      ".contact-body .contact-checklist li:nth-of-type(1)":
        "<strong>案件種別と所在地</strong>ホテル、リゾート、ブランドレジデンス、またはホスピタリティ中心の開発案件。",
      ".contact-body .contact-checklist li:nth-of-type(2)":
        "<strong>必要範囲</strong>特注家具のみ、厳選FF&amp;E供給、またはその両方。",
      ".contact-body .contact-checklist li:nth-of-type(3)":
        "<strong>スケジュールと基準</strong>希望納期、納品目標、およびオペレーターや仕様の要件。"
    },
    attr: {
      ".language-picker": { "aria-label": "言語を選択" },
      ".language-select": { "aria-label": "言語を選択" },
      ".contact-body #name": { placeholder: "お名前" },
      ".contact-body #email": { placeholder: "name@company.com" },
      ".contact-body #company": { placeholder: "会社名" },
      ".contact-body #location": { placeholder: "国 / 都市" },
      ".contact-body #message": {
        placeholder: "案件範囲、数量、デザインの進行状況、仕様要件をご共有ください。"
      }
    },
    status: (name) =>
      `${name ? `${name}様、` : ""}ありがとうございます。このフォームはメールやCRM連携に対応できる状態です。接続する際は assets/js/main.js の送信処理を更新してください。`
  },
  ko: {
    text: {
      ".menu-toggle": "메뉴",
      ".site-nav .nav-link[href='new-home-page.html']": "홈",
      ".site-nav .nav-link[href='new-about-page.html']": "회사 소개",
      ".site-nav .nav-link[href='new-expertise-page.html']": "전문 분야",
      ".site-nav .nav-link[href='projects.html']": "프로젝트",
      ".site-nav .nav-link-social": "LinkedIn",
      ".site-nav .button[href='contact.html']": "프로젝트 시작하기",
      ".footer-note": "글로벌 하이엔드 호스피탈리티 프로젝트를 위한 가구 제작 및 선별 FF&E 공급.",
      ".footer-links a[href='new-home-page.html']": "홈",
      ".footer-links a[href='new-about-page.html']": "회사 소개",
      ".footer-links a[href='new-expertise-page.html']": "전문 분야",
      ".footer-links a[href='projects.html']": "프로젝트",
      ".footer-links a[href='contact.html']": "문의",
      ".footer-links a[href^='https://www.linkedin.com']": "LinkedIn",
      ".footer-contact-label-email": "이메일",
      ".footer-contact-label-phone": "전화",
      ".footer-contact-label-singapore": "싱가포르 등록 주소",
      ".footer-contact-label-vietnam": "베트남 오피스, 쇼룸 및 운영",
      ".contact-detail-label-email": "이메일",
      ".contact-detail-label-phone": "전화",
      ".contact-detail-label-linkedin": "LinkedIn",
      ".new-home-body .hero-copy .eyebrow": "베트남 기반 호스피탈리티 가구 제조",
      ".new-home-body .hero-copy h1": "디자인부터 납품까지 엔드 투 엔드 호스피탈리티 가구 솔루션",
      ".new-home-body .hero-actions a[href='contact.html']": "프로젝트 시작하기",
      ".new-home-body .hero-actions a[href='#programs']": "제공 범위 보기",
      ".new-home-body .hero-lead-centered":
        "FURNY ASIA는 세계 각지의 하이엔드 호스피탈리티 및 브랜드 레지던스 프로젝트를 위해 하이엔드 인테리어 디자이너 및 건축가, 호텔 운영사와 오너와 긴밀히 협업하며 맞춤 루스 가구 제작과 선별 FF&E 조율을 수행합니다.",
      ".new-home-body .client-label": "주요 고객",
      ".new-home-body .client-grid .client-card:nth-of-type(1)": "하이엔드 인테리어 디자이너",
      ".new-home-body .client-grid .client-card:nth-of-type(2)": "국제 호텔 운영사 및 오너",
      ".new-home-body .manufacturing-section .section-head .eyebrow": "당사의 전문 분야",
      ".new-home-body .manufacturing-title": "호스피탈리티 루스 가구 제작",
      ".new-home-body .category-item:nth-of-type(1) span:last-child": "호텔 객실",
      ".new-home-body .category-item:nth-of-type(2) span:last-child": "공용 공간 및 로비",
      ".new-home-body .category-item:nth-of-type(3) span:last-child": "레스토랑 및 바",
      ".new-home-body .category-item:nth-of-type(4) span:last-child": "야외 호스피탈리티 공간",
      ".new-home-body .category-item:nth-of-type(5) span:last-child": "브랜드 레지던스 개발",
      ".new-home-body .manufacturing-grid .icon-card:nth-of-type(1) p":
        "필요 시 E0 및 E1 저포름알데히드 패널 적용이 가능합니다.",
      ".new-home-body .manufacturing-grid .icon-card:nth-of-type(2) p":
        "난연 폼 및 OEKO-TEX 100 기준은 프로젝트 요청에 따라 적용 가능합니다.",
      ".new-home-body .manufacturing-grid .icon-card:nth-of-type(3) p":
        "엔지니어링, 자재 선정, 품질 관리로 디자인 의도와 내구성을 함께 지킵니다.",
      ".new-home-body .supply-section .eyebrow": "선별 FF&E 공급",
      ".new-home-body .supply-title": "FF&E 제품 카테고리",
      ".new-home-body .supply-tile:nth-of-type(1) .supply-caption": "루스 가구",
      ".new-home-body .supply-tile:nth-of-type(2) .supply-caption": "장식 조명",
      ".new-home-body .supply-tile:nth-of-type(3) .supply-caption": "샹들리에",
      ".new-home-body .supply-tile:nth-of-type(4) .supply-caption": "커튼",
      ".new-home-body .supply-tile:nth-of-type(5) .supply-caption": "카펫 및 러그",
      ".new-home-body .supply-tile:nth-of-type(6) .supply-caption": "아트워크",
      ".new-about-body .hero-copy .eyebrow": "Furny Asia 소개",
      ".new-about-body .hero-copy h1": "프로젝트 경험이 뒷받침하는 호스피탈리티 제조.",
      ".new-about-body .hero-copy .lead":
        "FURNY ASIA는 싱가포르에 등록되어 있고 베트남 호치민시에서 운영되는 기업으로, 전 세계 하이엔드 호스피탈리티 프로젝트를 위한 가구 및 FF&E를 제조·수출합니다.",
      ".new-about-body .hero-actions a[href='contact.html']": "프로젝트 시작하기",
      ".new-about-body .hero-actions a[href='new-expertise-page.html']": "전문 분야 보기",
      ".new-about-body .hero-lead-centered":
        "FURNY ASIA는 10년 이상의 호스피탈리티 프로젝트 매니지먼트 경험을 기반으로 설립되었으며, 국제적인 조율과 베트남 현지 생산 관리를 결합합니다. 협력 공장 중 일부는 1994년부터 운영되고 있습니다.",
      ".new-about-body .about-stat-card:nth-of-type(1) strong": "싱가포르 등록 법인",
      ".new-about-body .about-stat-card:nth-of-type(1) p":
        "국제 프로젝트 조율과 수출 업무에 적합한 구조를 갖추고 있습니다.",
      ".new-about-body .about-stat-card:nth-of-type(2) strong": "호치민시 운영",
      ".new-about-body .about-stat-card:nth-of-type(2) p":
        "생산 의사결정이 이루어지는 현장에서 일상적으로 공장을 밀착 관리합니다.",
      ".new-about-body .about-stat-card:nth-of-type(3) strong": "10년 이상의 프로젝트 매니지먼트 경험 기반",
      ".new-about-body .about-stat-card:nth-of-type(3) p":
        "호스피탈리티 분야의 경험이 디자인 의도, 품질, 일정 판단을 뒷받침합니다.",
      ".new-about-body .about-stat-card:nth-of-type(4) strong": "1994년부터 운영된 협력 공장",
      ".new-about-body .about-stat-card:nth-of-type(4) p":
        "수준 높은 호스피탈리티 프로젝트를 지원하는 오랜 제조 역량을 보유하고 있습니다.",
      ".new-about-body .section:nth-of-type(2) .eyebrow": "비전",
      ".new-about-body .vision-statement":
        "세계적 수준의 제조 역량과 실행력을 바탕으로, 아시아 하이엔드 호스피탈리티 프로젝트를 위한 통합 루스 가구 및 FF&E 솔루션의 선도 파트너가 되는 것.",
      ".new-about-body .section:nth-of-type(3) .eyebrow": "핵심 가치",
      ".new-about-body .section:nth-of-type(3) h2":
        "유연성, 신뢰, 전문성이 모든 프로젝트를 이끕니다.",
      ".new-about-body .about-value-card:nth-of-type(1) h3": "유연성",
      ".new-about-body .about-value-card:nth-of-type(1) p":
        "획일적인 방식이 아니라 프로젝트의 범위, 기준, 일정에 맞춰 제조 및 공급 방식을 조정합니다.",
      ".new-about-body .about-value-card:nth-of-type(2) h3": "신뢰",
      ".new-about-body .about-value-card:nth-of-type(2) p":
        "투명성, 신뢰성, 명확한 커뮤니케이션을 통해 고객과 제조 파트너 모두와 장기적인 관계를 구축합니다.",
      ".new-about-body .about-value-card:nth-of-type(3) h3": "전문성",
      ".new-about-body .about-value-card:nth-of-type(3) p":
        "하이엔드 호스피탈리티 및 브랜드 레지던스 프로젝트에 요구되는 수준의 엄격함으로 요구사항을 관리합니다.",
      ".new-expertise-body .hero-copy .eyebrow": "당사의 전문 분야",
      ".new-expertise-body .hero-copy h1":
        "호스피탈리티를 높이다: 맞춤 FF&E 디자인과 디테일한 제조",
      ".new-expertise-body .hero-copy .lead":
        "맞춤 루스 가구와 선별 FF&E 공급을 명확한 생산 및 품질 관리 아래 진행합니다.",
      ".new-expertise-body .hero-actions a[href='contact.html']": "프로젝트 시작하기",
      ".new-expertise-body .hero-actions a[href='#manufacturing']": "전문 분야 보기",
      ".new-expertise-body .manufacturing-section .section-head .eyebrow": "당사의 전문 분야",
      ".new-expertise-body .manufacturing-title": "호스피탈리티 루스 가구 제작",
      ".new-expertise-body .category-item:nth-of-type(1) span:last-child": "호텔 객실",
      ".new-expertise-body .category-item:nth-of-type(2) span:last-child": "공용 공간 및 로비",
      ".new-expertise-body .category-item:nth-of-type(3) span:last-child": "레스토랑 및 바",
      ".new-expertise-body .category-item:nth-of-type(4) span:last-child": "야외 호스피탈리티 공간",
      ".new-expertise-body .category-item:nth-of-type(5) span:last-child": "브랜드 레지던스 개발",
      ".new-expertise-body .manufacturing-grid .icon-card:nth-of-type(1) p":
        "필요 시 E0 및 E1 저포름알데히드 패널 적용이 가능합니다.",
      ".new-expertise-body .manufacturing-grid .icon-card:nth-of-type(2) p":
        "난연 폼 및 OEKO-TEX 100 기준은 프로젝트 요청에 따라 적용 가능합니다.",
      ".new-expertise-body .manufacturing-grid .icon-card:nth-of-type(3) p":
        "엔지니어링, 자재 선정, 품질 관리로 디자인 의도와 내구성을 함께 지킵니다.",
      ".new-expertise-body .vietnam-copy .eyebrow": "베트남 제조",
      ".new-expertise-body .vietnam-copy h2":
        "장인정신, 생산 역량, 제조 가치의 강력한 조합.",
      ".new-expertise-body .vietnam-copy > p":
        "베트남은 호스피탈리티 루스 가구 프로젝트에 적합한 장인정신, 생산 역량, 제조 가치를 함께 제공합니다.",
      ".new-expertise-body .supply-section .eyebrow": "선별 FF&E 공급",
      ".new-expertise-body .supply-title": "FF&E 제품 카테고리",
      ".new-expertise-body .supply-tile:nth-of-type(1) .supply-caption": "루스 가구",
      ".new-expertise-body .supply-tile:nth-of-type(2) .supply-caption": "장식 조명",
      ".new-expertise-body .supply-tile:nth-of-type(3) .supply-caption": "샹들리에",
      ".new-expertise-body .supply-tile:nth-of-type(4) .supply-caption": "커튼",
      ".new-expertise-body .supply-tile:nth-of-type(5) .supply-caption": "카펫 및 러그",
      ".new-expertise-body .supply-tile:nth-of-type(6) .supply-caption": "아트워크",
      ".new-expertise-body .expertise-process-section .section-head .eyebrow": "프로젝트 납품 프로세스",
      ".new-expertise-body .expertise-process-section .section-head h2":
        "승인, 생산, 납품을 안정적으로 유지하는 7단계 관리 프로세스.",
      ".new-expertise-body .process-detail-card:nth-of-type(1) .process-step-title":
        "디자인 검토 및 기술 평가",
      ".new-expertise-body .process-detail-card:nth-of-type(1) > p:last-child":
        "생산 시작 전 도면, 사양, 실현 가능성을 정렬합니다.",
      ".new-expertise-body .process-detail-card:nth-of-type(2) .process-step-title":
        "제작도 및 엔지니어링",
      ".new-expertise-body .process-detail-card:nth-of-type(2) > p:last-child":
        "구성 방식, 치수, 마감재를 상세하게 확정합니다.",
      ".new-expertise-body .process-detail-card:nth-of-type(3) .process-step-title":
        "자재 및 마감 샘플링",
      ".new-expertise-body .process-detail-card:nth-of-type(3) > p:last-child":
        "마감, 패브릭, 하드웨어, 디테일을 승인용으로 검토합니다.",
      ".new-expertise-body .process-detail-card:nth-of-type(4) .process-step-title": "프로토타이핑",
      ".new-expertise-body .process-detail-card:nth-of-type(4) > p:last-child":
        "핵심 품목을 본생산 전에 검증합니다.",
      ".new-expertise-body .process-detail-card:nth-of-type(5) .process-step-title": "생산 관리",
      ".new-expertise-body .process-detail-card:nth-of-type(5) > p:last-child":
        "일정, 시공 품질, 마감 품질, 샘플 적합성을 지속적으로 관리합니다.",
      ".new-expertise-body .process-detail-card:nth-of-type(6) .process-step-title": "품질 관리",
      ".new-expertise-body .process-detail-card:nth-of-type(6) > p:last-child":
        "검사는 생산 중과 출하 전 모두 계속 진행됩니다.",
      ".new-expertise-body .process-detail-card:nth-of-type(7) .process-step-title": "물류 및 납품",
      ".new-expertise-body .process-detail-card:nth-of-type(7) > p:last-child":
        "포장, 통합, 현장 납품까지 전 과정을 조율합니다.",
      ".projects-body .hero-copy .eyebrow": "프로젝트",
      ".projects-body .hero-copy h1": "호스피탈리티 인테리어와 가구 셀렉션.",
      ".projects-body .hero-copy .lead":
        "Furny Asia의 호스피탈리티 가구 및 FF&E 공급 갤러리를 살펴보세요.",
      ".contact-body .hero-copy .eyebrow": "프로젝트 시작하기",
      ".contact-body .hero-copy h1": "호스피탈리티 가구 또는 FF&E 범위를 알려주세요.",
      ".contact-body .hero-copy .lead":
        "아래 양식을 통해 프로젝트 유형, 위치, 예상 수량, 필요한 기준, 희망 일정을 공유해 주세요. 원하시면 양식 없이 직접 연락하실 수도 있습니다.",
      ".contact-body .hero-actions a[href='#contact-form']": "양식 열기",
      ".contact-body .hero-actions a[href='new-expertise-page.html']": "전문 분야 보기",
      ".contact-body .contact-info-card-primary .card-kicker": "포함할 정보",
      ".contact-body .contact-direct-card .card-kicker": "직접 문의",
      ".contact-body .contact-form-intro .eyebrow": "프로젝트 문의 양식",
      ".contact-body .contact-form-intro h2": "핵심 정보를 공유해 주시면 그다음 단계로 이어가겠습니다.",
      ".contact-body .contact-section-copy":
        "문의 내용은 그대로 유지하면서, 새롭게 디자인된 Furny Asia 사이트와 어울리도록 레이아웃을 조정했습니다.",
      ".contact-body label[for='name']": "이름",
      ".contact-body label[for='email']": "이메일",
      ".contact-body label[for='company']": "회사명",
      ".contact-body label[for='location']": "프로젝트 위치",
      ".contact-body label[for='service']": "필요 서비스",
      ".contact-body label[for='timeline']": "일정",
      ".contact-body label[for='message']": "프로젝트 메시지",
      ".contact-body #service option:nth-of-type(1)": "맞춤 가구 제작",
      ".contact-body #service option:nth-of-type(2)": "선별 FF&E 공급",
      ".contact-body #service option:nth-of-type(3)": "가구 + FF&E",
      ".contact-body #service option:nth-of-type(4)": "범위 협의 중",
      ".contact-body #timeline option:nth-of-type(1)": "3개월 이내",
      ".contact-body #timeline option:nth-of-type(2)": "3-6개월",
      ".contact-body #timeline option:nth-of-type(3)": "6-12개월",
      ".contact-body #timeline option:nth-of-type(4)": "기획 단계",
      ".contact-body .contact-form-actions .button": "문의 보내기"
    },
    html: {
      ".new-expertise-body .vietnam-list li:nth-of-type(1)":
        "<strong>숙련된 생산</strong>축적된 장인정신을 현대적인 공장 역량이 뒷받침합니다.",
      ".new-expertise-body .vietnam-list li:nth-of-type(2)":
        "<strong>경쟁력 있는 가치</strong>호스피탈리티 및 주거 프로젝트를 위한 높은 제조 효율을 제공합니다.",
      ".new-expertise-body .vietnam-list li:nth-of-type(3)":
        "<strong>현지 관리</strong>호치민시 기반 운영으로 공장과 직접 조율합니다.",
      ".contact-body .contact-checklist li:nth-of-type(1)":
        "<strong>프로젝트 유형 및 위치</strong>호텔, 리조트, 브랜드 레지던스 또는 호스피탈리티 중심 개발 프로젝트.",
      ".contact-body .contact-checklist li:nth-of-type(2)":
        "<strong>필요 범위</strong>맞춤 가구만, 선별 FF&amp;E 공급 또는 결합 패키지.",
      ".contact-body .contact-checklist li:nth-of-type(3)":
        "<strong>일정 및 기준</strong>납기, 목표 납품 시점, 운영사 또는 사양 요구사항."
    },
    attr: {
      ".language-picker": { "aria-label": "언어 선택" },
      ".language-select": { "aria-label": "언어 선택" },
      ".contact-body #name": { placeholder: "이름" },
      ".contact-body #email": { placeholder: "name@company.com" },
      ".contact-body #company": { placeholder: "회사명" },
      ".contact-body #location": { placeholder: "국가 / 도시" },
      ".contact-body #message": {
        placeholder: "프로젝트 범위, 수량, 디자인 단계, 사양 요구사항을 알려주세요."
      }
    },
    status: (name) =>
      `${name ? `${name}님, ` : ""}감사합니다. 이 양식은 이메일 또는 CRM 연동을 위한 준비가 되어 있습니다. 연결할 때 assets/js/main.js의 제출 처리 부분을 업데이트해 주세요.`
  }
};

const applyTextMap = (map) => {
  Object.entries(map).forEach(([selector, value]) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.textContent = value;
    });
  });
};

const applyHtmlMap = (map) => {
  Object.entries(map).forEach(([selector, value]) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.innerHTML = value;
    });
  });
};

const applyAttributeMap = (map) => {
  Object.entries(map).forEach(([selector, attributes]) => {
    document.querySelectorAll(selector).forEach((element) => {
      Object.entries(attributes).forEach(([attribute, value]) => {
        element.setAttribute(attribute, value);
      });
    });
  });
};

const languageSelects = document.querySelectorAll(".language-select");
let currentLanguage = localStorage.getItem("furny-language") || "en";

if (!translations[currentLanguage]) {
  currentLanguage = "en";
}

const applyTranslations = (language) => {
  const bundle = translations[language] || translations.en;
  document.documentElement.lang = language;
  applyTextMap(bundle.text);
  applyHtmlMap(bundle.html);
  applyAttributeMap(bundle.attr);

  languageSelects.forEach((select) => {
    select.value = language;
  });
};

applyTranslations(currentLanguage);

languageSelects.forEach((select) => {
  select.addEventListener("change", (event) => {
    const nextLanguage = event.target.value;
    currentLanguage = translations[nextLanguage] ? nextLanguage : "en";
    localStorage.setItem("furny-language", currentLanguage);
    applyTranslations(currentLanguage);
  });
});

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealItems.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const footerYear = document.querySelector("[data-current-year]");

if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

const form = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");

if (form && formStatus) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name");
    const trimmedName = typeof name === "string" ? name.trim() : "";
    const statusBuilder = (translations[currentLanguage] || translations.en).status;

    formStatus.hidden = false;
    formStatus.textContent = statusBuilder(trimmedName);
    form.reset();
  });
}
