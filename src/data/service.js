import siteData from "./site";

const serviceData = {
  heading: {
    label: "LUXURY SPA & WELLNESS IN DUBAI",
    title: "Massage & Spa Treatments in Dubai",
    description:
      "Explore nine treatments at Royal Prime Spa in Deira, from full-body relaxation massage and traditional Thai stretching to Moroccan hammam.",
    background: "/images/services/spa-hero.webp",
  },
  services: [
    {
      id: "moroccan-royal-hammam",
      title: "Traditional Moroccan Royal Hammam",
      seoTitle: "Moroccan Hammam in Deira, Dubai",
      description:
        "A traditional Moroccan bathing ritual combines warm steam with a full-body exfoliation.",
      details: [
        "Warm steam is followed by a body scrub and rinse. The scrub is the defining part of the hammam ritual, so tell the team if you prefer gentler exfoliation or have sensitive areas.",
        "Ask how the session is arranged, what to bring and how much time to allow if you plan to book a massage during the same visit.",
      ],
      image: "/images/therapist/12.png",
      imageAlt: "Prepared treatment table in a warmly lit spa room",
    },
    {
      id: "four-hand-massage",
      title: "Four-Hand Synchronised Massage",
      seoTitle: "Four-Hand Massage in Dubai",
      description:
        "Two therapists work in sync, using coordinated strokes in a full-body massage.",
      details: [
        "The therapists coordinate their pace and pressure as they work on different areas at the same time. The resulting rhythm feels different from a massage with a single therapist.",
        "You can share your preferred pressure and mention any areas you would like the therapists to avoid before they begin. Ask about availability when you book so the team can arrange both therapists.",
      ],
      image: "/images/therapist/13.png",
      imageAlt: "Two massage tables in a softly lit treatment suite",
    },
    {
      id: "hot-stone-massage",
      title: "Hot Stone & Volcanic Basalt Massage",
      seoTitle: "Hot Stone Massage in Dubai",
      description:
        "Smooth, warmed volcanic basalt stones add gentle heat to a relaxing massage.",
      details: [
        "The therapist combines warmed stones with slow massage strokes. The stones retain warmth, giving the session a steady, unhurried feel.",
        "Mention your preferred warmth before the session and let the therapist know if the stones feel too hot. If you prefer a similar pace without added heat, ask about Swedish massage.",
      ],
      image: "/images/services/hot-stone-massage.webp",
      imageAlt: "Smooth basalt stones arranged on a folded towel",
    },
    {
      id: "aromatherapy-massage",
      title: "Traditional Balinese Aromatherapy Massage",
      seoTitle: "Balinese Aromatherapy Massage in Dubai",
      description:
        "Balinese massage pairs rhythmic strokes and kneading with fragrant oils.",
      details: [
        "Expect a steady mix of flowing strokes and kneading, with scented oil used during the massage. Tell the team how much pressure you prefer and whether you enjoy lighter or more noticeable scents.",
        "Ask which oils are available when booking, especially if you have fragrance sensitivities or prefer an unscented session.",
      ],
      image: "/images/services/aromatherapy-massage.webp",
      imageAlt: "Amber massage oil bottles beside a sprig of lavender",
    },
    {
      id: "thai-massage",
      title: "Traditional Thai Deep-Stretching Massage",
      seoTitle: "Traditional Thai Massage in Dubai",
      description:
        "Traditional Thai massage combines guided stretches and rhythmic pressure in a movement-focused session.",
      details: [
        "Your therapist guides you through changes of position and controlled stretches, with rhythmic pressure between movements. You can ask for a smaller range of movement or a slower pace throughout.",
        "Check what clothing is recommended and mention any movements or areas you would like to avoid before the session starts.",
      ],
      image: "/images/services/thai-massage.webp",
      imageAlt: "Therapist guiding an assisted stretch during a massage",
    },
    {
      id: "deep-tissue-massage",
      title: "Deep Tissue Lymphatic Drainage Massage",
      seoTitle: "Deep Tissue Massage in Dubai",
      description:
        "This session pairs targeted deep tissue pressure with lighter, rhythmic lymphatic massage strokes.",
      details: [
        "The therapist adjusts the pressure as the session moves between firmer work on selected areas and gentler strokes. Let the team know which areas you want to focus on and how much pressure feels comfortable.",
        "Ask the team how the firmer and lighter parts of the session are arranged. If you prefer gentle pressure throughout, explore Swedish massage.",
      ],
      image: "/images/services/deep-tissue-massage.webp",
      imageAlt: "Therapist applying focused pressure during a massage",
    },
    {
      id: "swedish-massage",
      title: "Swedish Therapeutic Massage",
      seoTitle: "Swedish Massage in Dubai",
      description:
        "Gentle pressure and long, flowing strokes offer a calming full-body massage.",
      details: [
        "Swedish massage uses flowing strokes and gentle kneading. Its steady pace suits guests who want a full-body relaxation massage and an opportunity to unwind.",
        "Let the therapist know whether you prefer softer or more moderate pressure and which areas you want them to focus on. Ask about available session lengths when booking.",
      ],
      image: "/images/heroimages/7.png",
      imageAlt: "Therapist applying a palm stroke during a massage",
    },
    {
      id: "lomi-lomi-massage",
      title: "Lomi Lomi Hawaiian Massage",
      seoTitle: "Lomi Lomi Massage in Dubai",
      description:
        "Long, flowing strokes using the hands and forearms are characteristic of this Hawaiian massage.",
      details: [
        "Lomi Lomi has a continuous rhythm. Broad strokes often travel across a longer section of the body, with the therapist alternating between the palms and forearms.",
        "Share your preferred pressure before the session. If you are choosing between Lomi Lomi and Swedish massage, ask the team to describe the difference in rhythm and stroke length.",
      ],
      image: "/images/heroimages/6.png",
      imageAlt: "Therapist applying a palm stroke during a massage",
    },
    {
      id: "shiatsu-massage",
      title: "Shiatsu Acupressure Massage",
      seoTitle: "Shiatsu Acupressure Massage in Dubai",
      description:
        "This Japanese massage uses steady pressure from the fingers and palms at specific points on the body.",
      details: [
        "During Shiatsu, the therapist applies steady pressure, releases it and moves on to the next point. The treatment has a measured pace with short pauses between areas.",
        "Ask what to wear and tell your therapist if you prefer lighter pressure or want them to avoid a particular area.",
      ],
      image: "/images/services/spa-hero.webp",
      imageAlt: "Prepared treatment table in a warmly lit spa room",
    },
  ],
  contact: {
    phone: siteData.phone,
    whatsapp: siteData.whatsapp,
  },
};

export default serviceData;
