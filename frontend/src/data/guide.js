import heroBg from '../assets/3.jpg';
import monsteraImg from "../assets/5.jpg";
import GoldenPothos from "../assets/9.jpg";
import zz from "../assets/zz.jpg";
import SpiderPlant from "../assets/15.jpg";
import peaceLilyImg from "../assets/14.jpg";
import air from "../assets/air.jpg";
import bostern from "../assets/bostern.jpg";
import rubber from "../assets/rubber.jpg";
import ArecaPalm from "../assets/16.jpg";
import low from "../assets/low.jpg";
import alovera from "../assets/13.jpg";
import a from "../assets/1D.jpg";
import cast from "../assets/cast.jpg";
import palm from "../assets/palm.jpg";
import office from "../assets/office.jpg";
import luckybamboo from "../assets/19.jpg";
import ParlorPalm from "../assets/8.jpg";
import Fittonia from "../assets/22.jpg";
import leaf from "../assets/leaf.jpg";
import pet from "../assets/pet.jpg";
import CalatheaOrbifolia from "../assets/CalatheaOrbifolia.jpg";
import prayer from "../assets/prayer.jpg";
import baby from "../assets/baby.jpg";
import HoyaCarnosa from "../assets/HoyaCarnosa.jpg";
import beg from "../assets/beg.jpg";

export const categories = [
  {
    id: 'beginner',
    number: 1,
    total: 5,
    label: 'Beginner Plants',
    description:
      'New to plant parenting? Start here. These resilient plants forgive missed waterings and thrive in a variety of conditions — no green thumb required.',
    careLevel: 'Easy',
    lightNeeds: 'Low to Bright Indirect',
    watering: 'Every 1–2 weeks',
    heroImage:
      beg,
    plants: [
      {
        id: 'snake-plant',
        name: 'Snake Plant',
        latinName: 'Sansevieria trifasciata',
        description:
          "The ultimate beginner plant — nearly indestructible. Thrives on neglect, tolerates low light, and purifies air whil...",
        size: 'Up to 4 ft',
        light: 'Low to Bright Indirect',
        watering: 'Every 2–3 weeks',
        tags: ['Air Purifier'],
        image:
          monsteraImg,
        bg: '#f5f5ef',
      },
      {
        id: 'golden-pothos',
        name: 'Golden Pothos',
        latinName: 'Epipremnum aureum',
        description:
          "The classic trailing plant that grows like crazy. Perfect for hanging baskets or shelves, and incredibly forgiving if you...",
        size: 'Trails up to 10 ft',
        light: 'Low to Bright Indirect',
        watering: 'Every 1–2 weeks',
        tags: ['Air Purifier'],
        image:
          GoldenPothos,
        bg: '#fdf6ee',
      },
      {
        id: 'zz-plant',
        name: 'ZZ Plant',
        latinName: 'Zamioculcas zamiifolia',
        description:
          "Hands down the most drought-tolerant houseplant. Glossy dark leaves look like they require constant attention — they...",
        size: 'Up to 3 ft',
        light: 'Low to Bright Indirect',
        watering: 'Every 3–4 weeks',
        tags: ['Air Purifier'],
        image:
          zz,
        bg: '#fdf6ee',
      },
      {
        id: 'spider-plant',
        name: 'Spider Plant',
        latinName: 'Chlorophytum comosum',
        description:
          "Produces baby plantlets that dangle from the mother plant like spiders on a web. Super fun to propagate and share...",
        size: 'Up to 2 ft',
        light: 'Bright Indirect',
        watering: 'Every 1 week',
        tags: ['Pet-Safe', 'Air Purifier'],
        image:
          SpiderPlant,
        bg: '#f5f5ef',
      },
    ],
  },
  {
    id: 'air-purifying',
    number: 2,
    total: 5,
    label: 'Air-Purifying Plants',
    description:
      'Breathe cleaner, healthier air with NASA-approved plants that naturally filter toxins, volatile organic compounds, and pollutants from your home.',
    careLevel: 'Easy to Moderate',
    lightNeeds: 'Low to Bright Indirect',
    watering: 'Every 1–2 weeks',
    heroImage:
      air,
    plants: [
      {
        id: 'peace-lily',
        name: 'Peace Lily',
        latinName: 'Spathiphyllum wallisii',
        description:
          'Elegant white blooms and glossy dark leaves make this a stunning air purifier. Known to remove mold spores from th...',
        size: 'Up to 3 ft',
        light: 'Low to Medium Indirect',
        watering: 'Every 1 week',
        tags: ['Air Purifier'],
        image:
          peaceLilyImg,
        bg: '#f5f5ef',
      },
      {
        id: 'boston-fern',
        name: 'Boston Fern',
        latinName: 'Nephrolepis exaltata',
        description:
          'The ultimate natural humidifier — releases moisture into the air while filtering toxins. Lush, feathery fronds...',
        size: 'Up to 3 ft wide',
        light: 'Medium to Bright Indirect',
        watering: 'Every 3–4 days',
        tags: ['Pet-Safe', 'Air Purifier'],
        image:
          bostern,
        bg: '#fdf6ee',
      },
      {
        id: 'rubber-plant',
        name: 'Rubber Plant',
        latinName: 'Ficus elastica',
        description:
          'Bold, burgundy-tinged leaves make a dramatic statement while working hard to clean your air. One of the most...',
        size: 'Up to 8 ft',
        light: 'Medium to Bright Indirect',
        watering: 'Every 1–2 weeks',
        tags: ['Air Purifier'],
        image:
          rubber,
        bg: '#fdf6ee',
      },
      {
        id: 'areca-palm',
        name: 'Areca Palm',
        latinName: 'Dypsis lutescens',
        description:
          'A tropical beauty that acts as a living humidifier. Soft, feathery fronds bring vacation vibes while scrubbing the air...',
        size: 'Up to 7 ft',
        light: 'Bright Indirect',
        watering: 'Every 1 week',
        tags: ['Pet-Safe', 'Air Purifier'],
        image:
          ArecaPalm,
        bg: '#f5f5ef',
      },
    ],
  },
  {
    id: 'low-maintenance',
    number: 3,
    total: 5,
    label: 'Low-Maintenance Plants',
    description:
      'Busy schedule? Frequent traveler? These resilient troopers thrive on minimal attention. Water them when you remember, and they will reward you with lush growth regardless.',
    careLevel: 'Very Easy',
    lightNeeds: 'Low to Bright Indirect',
    watering: 'Every 2–4 weeks',
    heroImage:
      low,
    plants: [
      {
        id: 'aloe-vera',
        name: 'Aloe Vera',
        latinName: 'Aloe barbadensis miller',
        description:
          "The ultimate multitasker — soothing gel for burns and cuts, plus a strikingly sculptural plant that asks for almost...",
        size: 'Up to 3 ft',
        light: 'Bright Direct to Indirect',
        watering: 'Every 3–4 weeks',
        tags: ['Air Purifier'],
        image:
          alovera,
        bg: '#f5f5ef',
      },
      {
        id: 'jade-plant',
        name: 'Jade Plant',
        latinName: 'Crassula ovata',
        description:
          "Symbol of good luck and prosperity. Its thick, glossy leaves store water like a camel, so it genuinely prefers you forg...",
        size: 'Up to 3 ft',
        light: 'Bright Indirect',
        watering: 'Every 3–4 weeks',
        tags: [],
        image:
          a,
        bg: '#fdf6ee',
      },
      {
        id: 'cast-iron-plant',
        name: 'Cast Iron Plant',
        latinName: 'Aspidistra elatior',
        description:
          "Lives up to its name — nearly indestructible. Tolerates low light, temperature swings, and irregular...",
        size: 'Up to 3 ft',
        light: 'Low to Medium Indirect',
        watering: 'Every 2–3 weeks',
        tags: ['Pet-Safe'],
        image:
          cast,
        bg: '#fdf6ee',
      },
      {
        id: 'ponytail-palm',
        name: 'Ponytail Palm',
        latinName: 'Beaucarnea recurvata',
        description:
          "Not actually a palm, but a succulent with a whimsical trunk that stores water. Its cascading curly leaves look like a...",
        size: 'Up to 6 ft',
        light: 'Bright Indirect',
        watering: 'Every 3–4 weeks',
        tags: ['Pet-Safe'],
        image:
          palm,
        bg: '#f5f5ef',
      },
    ],
  },
  {
    id: 'office-plants',
    number: 4,
    total: 5,
    label: 'Office Plants',
    description:
      'Transform your workspace into a productivity-boosting green oasis. These compact, low-light tolerant plants reduce stress, increase focus, and thrive under fluorescent office lighting.',
    careLevel: 'Very Easy',
    lightNeeds: 'Low to Medium Indirect',
    watering: 'Every 1–3 weeks',
    heroImage:
      office,
    plants: [
      {
        id: 'lucky-bamboo',
        name: 'Lucky Bamboo',
        latinName: 'Dracaena sanderiana',
        description:
          "Grows in just water and pebbles — no soil needed! Symbolizes good fortune in feng shui. The ultimate no-mess desk...",
        size: 'Up to 3 ft',
        light: 'Low to Medium Indirect',
        watering: 'Change water every 2 weeks',
        tags: [],
        image:
          luckybamboo,
        bg: '#fdf6ee',
      },
      {
        id: 'parlor-palm',
        name: 'Parlor Palm',
        latinName: 'Chamaedorea elegans',
        description:
          "A miniature palm that has been gracing desks and parlors since Victorian times. Compact, elegant, and surprisingly...",
        size: 'Up to 4 ft',
        light: 'Low to Medium Indirect',
        watering: 'Every 1–2 weeks',
        tags: ['Pet-Safe', 'Air Purifier'],
        image:
          ParlorPalm,
        bg: '#f5f5ef',
      },
      {
        id: 'nerve-plant',
        name: 'Nerve Plant',
        latinName: 'Fittonia albivenis',
        description:
          "Stunning pink or white veined leaves add a pop of color to any desk. Stays compact (under 6 inches tall), making i...",
        size: 'Up to 6 inches',
        light: 'Medium Indirect',
        watering: 'Every 3–4 days',
        tags: ['Pet-Safe'],
        image:
          Fittonia,
        bg: '#fdf6ee',
      },
      {
        id: 'philodendron-heartleaf',
        name: 'Philodendron Heartleaf',
        latinName: 'Philodendron hederaceum',
        description:
          "The sweetheart of office plants. Its cascading heart-shaped leaves trail beautifully from shelves or filing...",
        size: 'Trails up to 4 ft',
        light: 'Low to Medium Indirect',
        watering: 'Every 1–2 weeks',
        tags: ['Air Purifier'],
        image:
          leaf,
        bg: '#f5f5ef',
      },
    ],
  },
  {
    id: 'pet-safe',
    number: 5,
    total: 5,
    label: 'Pet-Safe Plants',
    description:
      "Love your plants and your furry friends! These beautiful, non-toxic varieties are 100% safe for cats, dogs, and other curious pets — no worrying about nibbled leaves.",
    careLevel: 'Easy to Moderate',
    lightNeeds: 'Low to Bright Indirect',
    watering: 'Every 1–2 weeks',
    heroImage:
      pet,
    plants: [
      {
        id: 'calathea-orbifolia',
        name: 'Calathea Orbifolia',
        latinName: 'Calathea orbifolia',
        description:
          "Gorgeous oversized round leaves with stunning silver-green stripes. Completely non-toxic, so no panic...",
        size: 'Up to 2 ft',
        light: 'Medium Indirect',
        watering: 'Every 1 week',
        tags: ['Pet-Safe'],
        image:
          CalatheaOrbifolia,
        bg: '#f5f5ef',
      },
      {
        id: 'prayer-plant',
        name: 'Prayer Plant',
        latinName: 'Maranta leuconeura',
        description:
          "Fascinating leaves that fold up at night like praying hands. Stunning red veins and bright green patterns. Safe for pet...",
        size: 'Up to 1 ft',
        light: 'Medium to Bright Indirect',
        watering: 'Every 1 week',
        tags: ['Pet-Safe'],
        image:
          prayer,
        bg: '#fdf6ee',
      },
      {
        id: 'baby-rubber-plant',
        name: 'Baby Rubber Plant',
        latinName: 'Peperomia obtusifolia',
        description:
          "Thick, glossy, spoon-shaped leaves on compact stems. Adorable and perfectly sized for shelves and side tables. Non-...",
        size: 'Up to 1 ft',
        light: 'Medium Indirect',
        watering: 'Every 1–2 weeks',
        tags: ['Pet-Safe'],
        image:
          baby,
        bg: '#fdf6ee',
      },
      {
        id: 'hoya-carnosa',
        name: 'Hoya Carnosa',
        latinName: 'Hoya carnosa',
        description:
          "The classic wax plant with thick, waxy leaves and clusters of fragrant star-shaped flowers. Safe for pets, stunning...",
        size: 'Trails up to 4 ft',
        light: 'Bright Indirect',
        watering: 'Every 2 weeks',
        tags: ['Pet-Safe'],
        image:
          HoyaCarnosa,
        bg: '#f5f5ef',
      },
    ],
  },
];

export const careTips = [
  {
    id: 'soil',
    icon: '🌱',
    iconSvg: 'sprout',
    title: 'Start with the Right Soil',
    description:
      "Most indoor plants thrive in well-draining potting mix. Avoid garden soil — it compacts in pots and suffocates roots. Look for mixes labeled specifically for indoor or container plants.",
  },
  {
    id: 'drainage',
    icon: '💧',
    iconSvg: 'droplet',
    title: 'Drainage is Everything',
    description:
      "Always use pots with drainage holes. Standing water rots roots faster than anything else. If you love a pot without holes, keep the plant in a nursery pot inside it.",
  },
  {
    id: 'light',
    icon: '☀️',
    iconSvg: 'sun',
    title: 'Light = Food for Plants',
    description:
      "Even low-light plants need some light. If your room has no windows, consider a small grow light. Yellow leaves often mean too little light, while brown crispy spots mean too much direct sun.",
  },
  {
    id: 'watering',
    icon: '🫧',
    iconSvg: 'water',
    title: "When in Doubt, Do not Water",
    description:
      "More plants die from overwatering than underwatering. Stick your finger 2 inches into the soil — if it feels moist, wait. If it is dry, water thoroughly until it drains from the bottom.",
  },
  {
    id: 'rotate',
    icon: '🔄',
    iconSvg: 'rotate',
    title: 'Rotate for Even Growth',
    description:
      "Plants naturally lean toward the light. Give your pot a quarter turn every week to keep growth even and symmetrical — otherwise you will end up with a lopsided plant.",
  },
  {
    id: 'leaves',
    icon: '✨',
    iconSvg: 'sparkle',
    title: 'Clean Those Leaves',
    description:
      "Dusty leaves cannot photosynthesize efficiently. Gently wipe leaves with a damp cloth every few weeks. Your plants will look shinier and grow faster — it is a win-win.",
  },
];
