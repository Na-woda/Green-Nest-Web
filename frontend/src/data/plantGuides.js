import monsteraImg from "../assets/5.jpg";

export const plantGuidesData = {
  "monstera": {
    slug: "monstera",
    name: "Monstera Deliciosa",
    scientificName: "Monstera deliciosa",
    difficulty: "Easy",
    type: "Indoor Plant",
    description: "Iconic and dramatic, the Monstera Deliciosa is famous for its striking natural leaf fenestrations. Originating from the tropical rainforests of southern Mexico, this vibrant climber adds an instant premium aesthetic to any interior space while remaining remarkably resilient.",
    origin: "Tropical rainforests of southern Mexico and Central America.",
    growthHabit: "Climbing evergreen perennial utilizing aerial roots to scale trees.",
    benefits: "Excellent air purifier, boosts indoor humidity, and dramatically enhances visual space.",
    commonUses: "Statement floor plant, living room focal point, or office accent.",
    summary: {
      watering: "Every 7–10 days",
      sunlight: "Bright indirect light",
      temperature: "18°C – 28°C",
      humidity: "60% + High",
      growthRate: "Fast Growing",
      petFriendly: false
    },
    careSections: {
      watering: {
        title: "Watering Guide",
        frequency: "Water thoroughly when the top 2-3 inches of soil feel dry—typically every 7-10 days during spring and summer, extending to 14 days in winter.",
        overwatering: "Yellowing lower leaves, mushy stems, and a distinct musty smell from the soil indicate root rot.",
        underwatering: "Drooping leaves, crisp brown edges, and curling foliage."
      },
      light: {
        title: "Light Requirements",
        ideal: "Thrives in bright, dappled indirect sunlight. Position near an east-facing window or a few feet back from a bright south/west window.",
        avoid: "Harsh direct midday sun which scorches the leaves, or deep dark corners which halt growth and reduce leaf splitting."
      },
      soil: {
        title: "Soil & Drainage",
        ideal: "A well-aerated, chunky potting mix. Combine standard premium potting soil with 20% perlite and 20% orchid bark.",
        drainage: "Crucial. Always use a pot with unobstructed bottom drainage holes to prevent standing water."
      },
      fertilizing: {
        title: "Fertilizing Guide",
        type: "Balanced liquid organic fertilizer diluted to half-strength (NPK 20-20-20 or similar).",
        frequency: "Feed once a month during the active growing seasons (Spring and Summer). Do not fertilize in late Autumn or Winter."
      }
    },
    problems: [
      {
        id: "prob-1",
        title: "Yellowing Lower Leaves",
        symptoms: "Older leaves turn a pale, uniform yellow and eventually drop.",
        causes: "Consistently overwatered soil leading to suffocated roots.",
        solutions: "Allow the soil to dry out completely. Check potting drainage and reduce your watering frequency."
      },
      {
        id: "prob-2",
        title: "Brown Tips and Crisp Edges",
        symptoms: "The crisping margins on leaf tips and fenestrations.",
        causes: "Low ambient humidity or dry drafts from HVAC vents.",
        solutions: "Group plants together, introduce a humidifier, or regularly mist the aerial root network."
      },
      {
        id: "prob-3",
        title: "Lack of Leaf Splits (Fenestrations)",
        symptoms: "New leaves grow large but remain entirely solid without characteristic splits.",
        causes: "Insufficient light exposure; the plant cannot produce enough energy to support complex leaf designs.",
        solutions: "Gradually relocate the plant closer to a brighter, indirect light source."
      }
    ],
    seasonalCare: {
      spring: "Repot if rootbound. Resume regular feeding and wipe leaves down with a damp cloth to optimize light absorption.",
      summer: "Peak growth phase. Monitor moisture levels closely as soil dries out faster. Shield from direct midday sun.",
      autumn: "Gradually taper off watering frequencies. Halt all fertilizer applications as growth naturally decelerates.",
      winter: "Keep away from cold window glass and heaters. Water sparingly—only when soil is almost entirely dry."
    },
    gallery: [
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&w=800&q=80"
    ],
    faq: [
      {
        question: "How do I get my Monstera to grow larger leaves?",
        answer: "Provide a sturdy moss pole or wooden trellis for its aerial roots to climb. Vertical support mimics its natural habitat, signaling the plant to produce larger, highly fenestrated leaves."
      },
      {
        question: "Are Monstera plants safe for cats and dogs?",
        answer: "No, Monsteras contain calcium oxalate crystals which are toxic to pets. Ingestion can cause oral irritation, excessive drooling, swelling, and vomiting."
      },
      {
        question: "Should I prune the aerial roots?",
        answer: "It is best not to cut them as they absorb moisture and support the plant, but you can safely tuck them back down into the potting soil or wrap them gently around a moss pole."
      }
    ]
  },
  "snake-plant": {
    slug: "snake-plant",
    name: "Snake Plant",
    scientificName: "Sansevieria trifasciata",
    difficulty: "Easy",
    type: "Indoor Plant",
    description: "Virtually indestructible, the Snake Plant features striking architectural sword-like leaves. It is an exceptional choice for beginners and modern interiors alike.",
    origin: "West Africa",
    growthHabit: "Upright rosettes of stiff, fleshy leaves.",
    benefits: "Converts CO2 to oxygen at night; highly drought tolerant.",
    commonUses: "Bedroom decor, low-light corners, and modern minimalist settings.",
    summary: {
      watering: "Every 2–3 weeks",
      sunlight: "Low to bright indirect",
      temperature: "15°C – 30°C",
      humidity: "Any (Low tolerant)",
      growthRate: "Slow",
      petFriendly: false
    },
    careSections: {
      watering: { title: "Watering Guide", frequency: "Allow soil to dry completely between waterings.", overwatering: "Mushy base, wrinkling leaves.", underwatering: "Leaves puckering or becoming brittle." },
      light: { title: "Light Requirements", ideal: "Thrives in bright indirect light, but tolerates very low light gracefully.", avoid: "Extended, blazing direct summer sun." },
      soil: { title: "Soil & Drainage", ideal: "Cactus or succulent gritty mix.", drainage: "Must drain immediately; hates sitting water." },
      fertilizing: { title: "Fertilizing Guide", type: "Succulent food at half strength.", frequency: "Once or twice during spring/summer only." }
    },
    problems: [],
    seasonalCare: { spring: "Minimal care change.", summer: "Water slightly more.", autumn: "Reduce watering.", winter: "Water once a month max." },
    gallery: ["https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=800&q=80"],
    faq: []
  },
  "peace-lily": {
    slug: "peace-lily",
    name: "Peace Lily",
    scientificName: "Spathiphyllum",
    difficulty: "Moderate",
    type: "Indoor Plant",
    description: "Graceful and communicative, the Peace Lily boasts glossy deep-green foliage topped by elegant white spathes. It clearly signals its watering needs by dramatically drooping when thirsty.",
    origin: "Tropical regions of the Americas",
    growthHabit: "Clump-forming herbaceous perennial.",
    benefits: "Top-tier air filtration properties, removes volatile organic compounds.",
    commonUses: "Tabletop accent, sympathy gift, floor plant.",
    summary: {
      watering: "Every 5–7 days",
      sunlight: "Medium indirect light",
      temperature: "18°C – 26°C",
      humidity: "High preferred",
      growthRate: "Medium",
      petFriendly: false
    },
    careSections: {
      watering: { title: "Watering Guide", frequency: "Keep soil consistently damp but not soggy.", overwatering: "Consistently yellowing leaves and mold.", underwatering: "Severe dramatic drooping of the entire plant." },
      light: { title: "Light Requirements", ideal: "Medium indirect light; blooms best with adequate light exposure.", avoid: "Direct afternoon sun which easily bleaches foliage." },
      soil: { title: "Soil & Drainage", ideal: "Rich, organic, well-draining potting soil.", drainage: "Standard drainage required to prevent root suffocation." },
      fertilizing: { title: "Fertilizing Guide", type: "Standard houseplant fertilizer.", frequency: "Every 6 weeks during growth seasons." }
    },
    problems: [],
    seasonalCare: { spring: "Expect blooms; keep moist.", summer: "Mist regularly to manage high heat.", autumn: "Wipe down leaves.", winter: "Protect from structural cold drafts." },
    gallery: ["https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=800&q=80"],
    faq: []
  }
};