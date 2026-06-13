

import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

// ─── DESIGN TOKENS (match Leaf & Loom) ──────────────────────
const T = {
  bg:        '#F0EFE9',   // warm off-white page bg
  white:     '#FFFFFF',
  green:     '#2D6A4F',   // primary dark green
  greenMid:  '#40916C',
  greenLight:'#74C69D',
  greenPale: '#D8F3DC',
  greenTint: '#F0FFF4',
  amber:     '#E07A1F',   // watering accent (matches existing cards)
  sky:       '#2196A5',   // clock icon accent
  text:      '#1A2E1A',   // near-black body
  textSub:   '#4A5E4A',
  textMuted: '#7A8E7A',
  border:    '#E4E8E0',
  shadow:    '0 2px 12px rgba(45,106,79,0.08)',
  shadowMd:  '0 4px 24px rgba(45,106,79,0.12)',
  shadowLg:  '0 8px 40px rgba(45,106,79,0.16)',
  radius:    '16px',
  radiusSm:  '10px',
  font:      "'Georgia', 'Times New Roman', serif",        // display
  fontSans:  "'Inter', 'Helvetica Neue', Arial, sans-serif", // body
};

// ─── GUIDE DATA ──────────────────────────────────────────────
export const guideData = [
  {
    id: 'snake-plant',
    title: 'Snake Plant',
    latinName: 'Sansevieria trifasciata',
    category: 'Beginner Plants',
    difficulty: 'Easy',
    readingTime: '8 min read',
    shortDesc: 'The ultimate beginner plant — nearly indestructible. Thrives on neglect, tolerates low light, and purifies your air around the clock.',
    tags: ['Air Purifier'],
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=900&q=80',
    stats: {
      size: 'Up to 4 ft',
      light: 'Low to Bright Indirect',
      water: 'Every 2–3 weeks',
      humidity: '30–50%',
      temperature: '60–80°F (15–27°C)',
      growth: 'Slow',
    },
    intro: `The Snake Plant (Sansevieria trifasciata) is one of the most adaptable houseplants on the planet. Whether you're a first-time plant owner or a seasoned collector looking for a low-maintenance addition, this resilient beauty is your answer. Its bold, upright leaves — banded with silvery-green patterns — bring a sculptural quality to any interior.`,
    overview: `Native to West Africa, snake plants have evolved to survive in tough, arid conditions. This evolutionary history means they tolerate drought, low humidity, and poor lighting far better than most houseplants. They're also one of the few plants that continue producing oxygen overnight, making them a popular choice for bedrooms.`,
    careInstructions: [
      'Allow soil to dry completely between waterings.',
      'Water even less in winter — once a month is often enough.',
      'Plant in well-draining soil to prevent root rot.',
      'Avoid placing in full direct sun for extended periods — leaves may scorch.',
      'Wipe leaves occasionally with a damp cloth to remove dust.',
    ],
    wateringGuide: `Snake plants are succulent-adjacent in their water needs. Overwatering is the number one killer. Always check the soil by pushing your finger 2 inches deep — if it feels moist, wait. In active growing months (spring and summer), water every 2–3 weeks. In winter dormancy, stretch this to once a month or less.`,
    lightRequirements: `Snake plants are incredibly forgiving about light. They survive in near-dark corners but truly thrive in bright indirect light. Avoid harsh afternoon sun on south or west-facing windows — the leaves can yellow or scorch. A spot 3–6 feet from a bright window is ideal.`,
    soilRecommendations: `Use a fast-draining cactus or succulent mix. If using standard potting soil, add a generous amount of perlite (about 50%) to improve drainage. The key is avoiding waterlogged roots, which quickly leads to root rot in this species.`,
    fertilizingTips: `Feed sparingly — once a month during spring and summer with a balanced liquid fertiliser diluted to half strength. Never fertilise in autumn or winter when the plant is resting. Over-fertilising can cause leaf tips to brown.`,
    seasonalCare: `In spring and summer, your snake plant may produce new shoots from the base — this is a sign of happy, healthy growth. Resume regular watering and monthly feeding. In autumn, start reducing water frequency and stop fertilising entirely. Winter is a rest period; keep the plant in a bright spot and water only when the soil has been bone dry for a week or more.`,
    problems: [
      {
        problem: 'Yellowing Leaves',
        symptoms: 'Leaves turn yellow, may become soft or mushy at the base.',
        cause: 'Overwatering or poor drainage leading to root rot.',
        solution: 'Remove affected leaves, let soil dry completely. Repot into fresh, well-draining mix if roots are brown and mushy.',
      },
      {
        problem: 'Brown Leaf Tips',
        symptoms: 'Crispy brown tips on otherwise healthy-looking leaves.',
        cause: 'Low humidity, over-fertilising, or fluoride in tap water.',
        solution: 'Use filtered or rain water. Flush soil to remove fertiliser buildup. Trim brown tips with clean scissors at a slight angle.',
      },
      {
        problem: 'Pale or Washed-Out Leaves',
        symptoms: 'Leaves lose their vibrant green banding, look faded.',
        cause: 'Too much direct sunlight.',
        solution: 'Move plant to a spot with bright but filtered light. New growth should return to normal colour.',
      },
      {
        problem: 'No New Growth',
        symptoms: 'Plant appears stagnant, no new leaves for months.',
        cause: 'Insufficient light or temperature too cold.',
        solution: 'Move to a brighter location. Ensure temperature stays above 50°F (10°C). Resume watering if it was paused too long.',
      },
    ],
  },
  {
    id: 'golden-pothos',
    title: 'Golden Pothos',
    latinName: 'Epipremnum aureum',
    category: 'Beginner Plants',
    difficulty: 'Easy',
    readingTime: '7 min read',
    shortDesc: 'The classic trailing plant that grows like crazy. Perfect for hanging baskets or shelves, and incredibly forgiving of missed waterings.',
    tags: ['Air Purifier'],
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=900&q=80',
    stats: {
      size: 'Trails up to 10 ft',
      light: 'Low to Bright Indirect',
      water: 'Every 1–2 weeks',
      humidity: '50–70%',
      temperature: '65–85°F (18–29°C)',
      growth: 'Fast',
    },
    intro: `Golden Pothos is often the first plant people buy — and for good reason. Its cascading heart-shaped leaves, splashed with golden-yellow variegation, are gorgeous in any setting. It climbs, it trails, it propagates with almost no effort.`,
    overview: `Originally from the Solomon Islands, Pothos vines climb up trees in tropical forests. In homes, they bring that same lush jungle energy to shelves, desks, and hanging planters. The name "devil's ivy" comes from its near-impossible-to-kill nature.`,
    careInstructions: [
      'Water when the top inch of soil feels dry.',
      'Provide bright indirect light for best variegation.',
      'Mist occasionally or place near a humidifier.',
      'Prune regularly to encourage bushier growth.',
      'Propagate cuttings in water for new plants.',
    ],
    wateringGuide: `Water Pothos when the top inch of soil dries out. They prefer consistent moisture but can tolerate a missed watering or two. Yellow leaves are usually a sign of overwatering; wilting or crispy edges signal underwatering.`,
    lightRequirements: `Pothos adapts to almost any lighting condition. In low light it survives but the golden variegation fades. For best colour, give it bright indirect light. Avoid harsh direct sun which can bleach the leaves.`,
    soilRecommendations: `A standard well-draining potting mix works well. Add perlite for extra drainage. Pothos is tolerant of various soil types but does not like to sit in waterlogged conditions.`,
    fertilizingTips: `Feed monthly in spring and summer with a balanced liquid fertiliser at half strength. The plant will grow vigorously even without feeding, but fertilising encourages faster, lusher growth.`,
    seasonalCare: `Growth slows significantly in winter. Reduce watering frequency and stop fertilising until spring. If leaves lose variegation in winter, move to a brighter spot. Resume normal care when you see new growth emerge in spring.`,
    problems: [
      {
        problem: 'Yellowing Leaves',
        symptoms: 'Multiple leaves turn yellow, often starting at the base.',
        cause: 'Overwatering is the most common cause. Can also be low light.',
        solution: 'Allow soil to dry more between waterings. Move to a brighter spot.',
      },
      {
        problem: 'Leggy, Sparse Growth',
        symptoms: 'Long stems with leaves spaced far apart.',
        cause: 'Insufficient light.',
        solution: 'Move closer to a light source. Prune back leggy stems to encourage bushier regrowth.',
      },
      {
        problem: 'Loss of Variegation',
        symptoms: 'New leaves emerge solid green with no golden pattern.',
        cause: 'Not enough light for the plant to maintain variegation.',
        solution: 'Relocate to a brighter position with indirect light.',
      },
      {
        problem: 'Root Rot',
        symptoms: 'Soil stays wet, base of stems turn black or mushy.',
        cause: 'Overwatering combined with poor drainage.',
        solution: 'Remove from pot, trim rotted roots, repot in fresh dry mix. Water far less frequently.',
      },
    ],
  },
  {
    id: 'zz-plant',
    title: 'ZZ Plant',
    latinName: 'Zamioculcas zamiifolia',
    category: 'Beginner Plants',
    difficulty: 'Easy',
    readingTime: '6 min read',
    shortDesc: 'Hands down the most drought-tolerant houseplant. Glossy dark leaves look like they require expert care, but they practically thrive on neglect.',
    tags: ['Air Purifier'],
    image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=900&q=80',
    stats: {
      size: 'Up to 3 ft',
      light: 'Low to Bright Indirect',
      water: 'Every 3–4 weeks',
      humidity: '40–60%',
      temperature: '65–79°F (18–26°C)',
      growth: 'Slow',
    },
    intro: `The ZZ Plant is the definition of effortless elegance. Its waxy, deep-green leaflets catch the light beautifully, giving it a polished, architectural look. Native to drought-prone regions of Eastern Africa, it has evolved remarkable drought resistance through thick rhizomes that store water underground.`,
    overview: `ZZ plants grow from rhizomes — thick, potato-like underground stems that store water and nutrients. This storage system lets them go weeks without water and survive in conditions that would kill most plants. They're often used in offices and commercial spaces precisely because they need so little attention.`,
    careInstructions: [
      'Water only when soil is completely dry — typically every 3–4 weeks.',
      'Tolerates low light but grows faster in medium to bright indirect light.',
      'Avoid overwatering at all costs — rhizomes rot easily.',
      'Wipe leaves with a damp cloth to keep them glossy.',
      'Wear gloves when handling — all parts are mildly toxic if ingested.',
    ],
    wateringGuide: `The rhizomes store water effectively, so ZZ plants are one of the easiest to underwater accidentally. Check by lifting the pot — if it feels light, it's time to water. Drench thoroughly and allow to drain completely. Never let it sit in standing water.`,
    lightRequirements: `ZZ plants tolerate dim light better than almost any other houseplant. However, they'll grow much faster and produce more leaves in medium to bright indirect light. Avoid direct sun which can cause leaf scorch.`,
    soilRecommendations: `A well-draining succulent or cactus mix is ideal. You can amend standard potting mix with perlite or coarse sand to improve drainage. The roots must never sit in water.`,
    fertilizingTips: `ZZ plants are light feeders. Apply a balanced liquid fertiliser once every 2 months during the growing season. Over-fertilising will cause rapid leggy growth and leaf burn.`,
    seasonalCare: `ZZ plants enter a semi-dormant state in winter and may not produce new growth. Reduce watering to once every 5–6 weeks. Keep in a warm spot away from cold drafts. Growth picks up again in spring — you may notice new bright green shoots emerging from the soil.`,
    problems: [
      {
        problem: 'Yellowing Stems & Leaves',
        symptoms: 'Whole stems or clusters of leaves turn yellow and fall.',
        cause: 'Overwatering and root/rhizome rot.',
        solution: 'Remove from pot, trim rotted rhizomes, let dry for 1–2 days before repotting in dry, fast-draining mix.',
      },
      {
        problem: 'Wrinkled Stems',
        symptoms: 'Stems look slightly shrivelled or deflated.',
        cause: 'Underwatering — the rhizomes are depleted.',
        solution: 'Water thoroughly and allow to drain. Stems should firm up within a day or two.',
      },
      {
        problem: 'Slow or No Growth',
        symptoms: 'No new leaves for many months.',
        cause: 'Too dark, too cold, or dormancy period.',
        solution: 'Move to a brighter location. Ensure temperature is consistently above 65°F (18°C). Be patient — ZZ plants are naturally slow growers.',
      },
      {
        problem: 'Leaf Drop',
        symptoms: 'Leaves drop unexpectedly, often healthy-looking.',
        cause: 'Sudden environmental change — temperature shock, draft, or relocation stress.',
        solution: 'Keep in a stable environment. Avoid placing near heating/cooling vents or exterior doors.',
      },
    ],
  },
  {
    id: 'peace-lily',
    title: 'Peace Lily',
    latinName: 'Spathiphyllum wallisii',
    category: 'Air Purifiers',
    difficulty: 'Moderate',
    readingTime: '9 min read',
    shortDesc: 'Elegant white blooms and glossy dark leaves make this a stunning air purifier. Known to remove mold spores and toxins from the air.',
    tags: ['Pet-Safe', 'Air Purifier'],
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=900&q=80',
    stats: {
      size: 'Up to 3 ft',
      light: 'Low to Medium Indirect',
      water: 'Every 1 week',
      humidity: '50–60%',
      temperature: '65–80°F (18–27°C)',
      growth: 'Moderate',
    },
    intro: `Peace Lilies are one of the most rewarding houseplants to care for. Their dramatic white spathes — which aren't actually flowers but modified leaves — create an elegant, serene aesthetic. Beyond their beauty, they're powerhouse air purifiers that remove benzene, formaldehyde, and mold spores from indoor spaces.`,
    overview: `Native to the tropical Americas and Southeast Asia, peace lilies are understory plants that grow in the filtered light of forest floors. This background makes them well-suited to indoor environments where light is limited. They're among the few flowering plants that thrive in low-light conditions.`,
    careInstructions: [
      'Keep soil evenly moist — not waterlogged.',
      'High humidity is beneficial; mist regularly.',
      'Feed monthly with a balanced fertiliser in spring and summer.',
      'Repot every 1–2 years when roots become crowded.',
      'Note: mildly toxic to pets and humans if ingested.',
    ],
    wateringGuide: `Peace lilies are dramatic — they'll visibly droop when they need water (their way of asking). This drooping is harmless but ideally you should water before they reach that stage. Check soil weekly; water when the top inch is dry. Always use room-temperature water as cold water can cause leaf spots.`,
    lightRequirements: `Peace lilies are among the best plants for low-light spaces. They bloom best in medium indirect light. Direct sun will scorch the leaves. An ideal spot is near a north or east-facing window, or set back from a bright south or west window.`,
    soilRecommendations: `Use a rich, well-draining potting mix with some organic matter. Peace lilies like moisture-retentive soil — a mix with peat or coco coir works well. Ensure the pot has drainage holes.`,
    fertilizingTips: `Feed monthly in spring and summer with a balanced liquid fertiliser. To encourage blooming, you can use a fertiliser higher in phosphorus once in early spring. Avoid over-fertilising — too much causes brown leaf tips and can inhibit flowering.`,
    seasonalCare: `Peace lilies typically bloom in spring and sometimes again in autumn. After flowering, remove spent blooms at the base. Reduce watering slightly in winter. If the plant isn't blooming, try moving it to a slightly brighter location — lack of light is the most common cause of no flowers.`,
    problems: [
      {
        problem: 'Brown Leaf Tips',
        symptoms: 'Tips and edges of leaves turn brown and papery.',
        cause: 'Low humidity, fluoride in tap water, or overfertilisation.',
        solution: 'Use filtered water, mist regularly, reduce fertiliser frequency.',
      },
      {
        problem: 'Drooping Despite Watering',
        symptoms: 'Plant continues to droop after watering.',
        cause: 'Root rot from overwatering, or root-bound pot.',
        solution: 'Check roots — trim any brown mushy roots and repot. Ensure pot has drainage.',
      },
      {
        problem: 'No Blooms',
        symptoms: 'Healthy foliage but no flowers.',
        cause: 'Insufficient light or needs repotting.',
        solution: 'Move to slightly brighter indirect light. Try a phosphorus-rich fertiliser boost in early spring.',
      },
      {
        problem: 'Yellow Leaves',
        symptoms: 'Leaves gradually yellow from base.',
        cause: 'Overwatering or natural ageing of older leaves.',
        solution: 'If lower leaves only, it is natural ageing — remove them. If widespread, check watering habits and drainage.',
      },
    ],
  },
  {
    id: 'monstera',
    title: 'Monstera Deliciosa',
    latinName: 'Monstera deliciosa',
    category: 'Statement Plants',
    difficulty: 'Easy',
    readingTime: '10 min read',
    shortDesc: "The internet's favourite plant. Those iconic split leaves make a bold statement in any room, and it's easier to care for than it looks.",
    tags: ['Air Purifier'],
    image: 'https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?w=900&q=80',
    stats: {
      size: 'Up to 8 ft indoors',
      light: 'Medium to Bright Indirect',
      water: 'Every 1–2 weeks',
      humidity: '60–80%',
      temperature: '65–85°F (18–29°C)',
      growth: 'Fast',
    },
    intro: `Monstera Deliciosa — the "Swiss cheese plant" — is arguably the most photographed houseplant of the modern era. Its enormous, glossy leaves with their characteristic fenestrations (holes and splits) have become a symbol of the indoor jungle movement. And despite its dramatic presence, it's surprisingly easy to grow.`,
    overview: `In its native Mexican and Central American rainforests, Monstera is a climbing plant that grows up trees toward dappled light. The holes in its leaves are thought to allow wind to pass through and improve light distribution in its forest habitat. Indoors, it can become a stunning focal point given the right conditions.`,
    careInstructions: [
      'Water when the top 1–2 inches of soil are dry.',
      'Provide a moss pole or support for climbing growth.',
      'Wipe large leaves to remove dust and allow better light absorption.',
      'Prune aerial roots if they become unruly, or tuck into the soil.',
      'Rotate occasionally for even growth toward the light.',
    ],
    wateringGuide: `Monstera prefer to dry out slightly between waterings. Water thoroughly until it drains from the bottom, then wait until the top couple of inches are dry again. They can tolerate brief periods of drought but dislike sitting in wet soil.`,
    lightRequirements: `Bright indirect light brings out the best in Monstera — leaves grow larger and develop more fenestrations. It tolerates medium light but growth slows. Avoid direct harsh sun which burns the leaves. A spot 2–5 feet from a bright east or south-facing window is ideal.`,
    soilRecommendations: `A chunky, well-aerated mix works best — add orchid bark, perlite, and some coco coir to a base of potting mix. Good aeration around roots mimics the loosely packed jungle floor the plant evolved on.`,
    fertilizingTips: `Feed every 2 weeks in summer with a balanced liquid fertiliser at half strength. Monthly feeding in spring is sufficient. Stop fertilising in autumn and winter when growth slows. Monstera are hungry plants and respond well to regular feeding.`,
    seasonalCare: `Summer is when Monstera really shines — you may see a new leaf unfurling every 1–2 weeks in peak growing conditions. Increase watering and feeding frequency. In autumn, growth slows — reduce feeding and water less. Winter care is minimal; just maintain warmth and light.`,
    problems: [
      {
        problem: 'No Fenestrations (Splits) on Leaves',
        symptoms: 'New leaves emerge small and without holes or splits.',
        cause: 'Plant is young, or not receiving enough light.',
        solution: 'Move to a brighter spot. Fenestrations develop as the plant matures — typically after a year or two of good conditions.',
      },
      {
        problem: 'Yellow Leaves',
        symptoms: 'Leaves turn yellow, often soft.',
        cause: 'Overwatering is the primary cause. Can also be root bound.',
        solution: 'Reduce watering frequency. Check drainage. Repot if roots are circling the pot.',
      },
      {
        problem: 'Brown Patches on Leaves',
        symptoms: 'Brown, crispy patches appear, especially in the centre of leaves.',
        cause: 'Direct sun exposure or low humidity.',
        solution: 'Move away from direct sun. Increase humidity by misting or using a pebble tray with water.',
      },
      {
        problem: 'Leggy Growth (Long Stems, Small Leaves)',
        symptoms: 'Long stems reaching in one direction with small leaves.',
        cause: 'Reaching for light — insufficient light in current position.',
        solution: 'Move to a brighter spot and rotate the plant regularly for balanced growth.',
      },
    ],
  },
  {
    id: 'boston-fern',
    title: 'Boston Fern',
    latinName: 'Nephrolepis exaltata',
    category: 'Humidity Lovers',
    difficulty: 'Moderate',
    readingTime: '8 min read',
    shortDesc: 'The ultimate natural humidifier — releases moisture into the air while filtering toxins. Lush, feathery fronds that look incredible in a hanging basket.',
    tags: ['Pet-Safe', 'Air Purifier'],
    image: 'https://images.unsplash.com/photo-1632387423894-b32e8e6b6a5e?w=900&q=80',
    stats: {
      size: 'Up to 3 ft wide',
      light: 'Medium to Bright Indirect',
      water: 'Every 3–4 days',
      humidity: '70–80%',
      temperature: '60–75°F (15–24°C)',
      growth: 'Moderate',
    },
    intro: `Boston Ferns are the royalty of hanging plants. Their dense, arching fronds create a lush waterfall of green that's nearly unmatched in its natural beauty. They're also one of the most effective air-purifying houseplants, actively removing formaldehyde and xylene from indoor air.`,
    overview: `Native to humid tropical forests, Boston Ferns need consistent moisture and humidity to thrive. They're a bit more demanding than low-maintenance plants, but the payoff — those magnificent cascading fronds — is worth the extra attention. They're one of the oldest houseplants, popular since the Victorian era.`,
    careInstructions: [
      'Keep soil consistently moist — never let it dry out completely.',
      'Mist daily or use a humidifier nearby.',
      'Avoid drafts and air conditioning vents.',
      'Remove yellow or brown fronds regularly.',
      'Shower the plant monthly to clean fronds and boost humidity.',
    ],
    wateringGuide: `Boston Ferns need consistent watering — soil should always feel slightly moist. In warm months, this may mean watering every 2–3 days. In cooler months, reduce slightly but never let the soil dry out. Brown, crispy fronds are a sign of underwatering or low humidity.`,
    lightRequirements: `Boston Ferns prefer bright but filtered light. East-facing windows are ideal — morning sun with afternoon shade. Avoid direct afternoon sun which dries them out quickly. They can tolerate medium light but may grow slower.`,
    soilRecommendations: `Use a peat-based or coco coir potting mix that retains some moisture. Good drainage is still important — waterlogged roots will rot. A mix of coco coir, perlite, and potting mix works well.`,
    fertilizingTips: `Feed monthly in spring and summer with a balanced liquid fertiliser at half strength. Ferns are sensitive to over-fertilising — burnt frond tips are a sign of too much fertiliser. Stop completely in winter.`,
    seasonalCare: `Boston Ferns go through a natural rest period in winter. Growth slows, and you may see some browning fronds. Cut back to maintain shape and reduce watering slightly. Humidity is the key factor year-round — homes with central heating in winter can get very dry, so a humidifier is a worthwhile investment if you grow Boston Ferns.`,
    problems: [
      {
        problem: 'Brown, Crispy Fronds',
        symptoms: 'Fronds dry out and turn papery brown.',
        cause: 'Low humidity or underwatering.',
        solution: 'Increase watering frequency and mist daily. Consider a humidifier or pebble tray.',
      },
      {
        problem: 'Yellowing Fronds',
        symptoms: 'Fronds turn yellow, may fall off.',
        cause: 'Overwatering, low light, or natural ageing.',
        solution: 'Check soil moisture — if waterlogged, improve drainage. Move to brighter light.',
      },
      {
        problem: 'Entire Plant Looks Dry & Wilted',
        symptoms: 'Fronds droop heavily, soil is dry.',
        cause: 'Severe underwatering or drying from heating vents.',
        solution: 'Soak pot in water for 30 minutes to rehydrate. Move away from heat sources. Increase misting.',
      },
      {
        problem: 'Scale or Mealybugs',
        symptoms: 'Sticky residue on fronds, white cottony deposits or bumps.',
        cause: 'Common pests — thrive in dry conditions.',
        solution: 'Wipe with isopropyl alcohol on a cotton swab. Use neem oil spray weekly. Quarantine from other plants.',
      },
    ],
  },
];

// ─── UTILITY ─────────────────────────────────────────────────
const difficultyColors = {
  Easy:     { bg: '#D8F3DC', text: '#2D6A4F' },
  Moderate: { bg: '#FFF3CD', text: '#856404' },
  Hard:     { bg: '#FFE4E4', text: '#B91C1C' },
};

const lightIcon  = '☀️';
const waterIcon  = '💧';
const tempIcon   = '🌡️';
const humidIcon  = '💨';
const growthIcon = '🌱';
const sizeIcon   = '📏';

const statIcons = {
  light:       lightIcon,
  water:       waterIcon,
  temperature: tempIcon,
  humidity:    humidIcon,
  growth:      growthIcon,
  size:        sizeIcon,
};
const statLabels = {
  size:        'Size',
  light:       'Light',
  water:       'Water',
  humidity:    'Humidity',
  temperature: 'Temperature',
  growth:      'Growth Speed',
};

// ─── STYLES OBJECT ───────────────────────────────────────────
const s = {
  // page wrapper
  page: {
    fontFamily: T.fontSans,
    background: T.bg,
    minHeight: '100vh',
    color: T.text,
    animation: 'pageIn 0.4s ease both',
  },

  // sticky top bar (back nav)
  topBar: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    background: 'rgba(240,239,233,0.92)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderBottom: `1px solid ${T.border}`,
    padding: '12px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontFamily: T.fontSans,
    fontSize: 14,
    fontWeight: 600,
    color: T.green,
    padding: '8px 0',
    letterSpacing: 0.3,
    transition: 'opacity 0.2s',
  },
  topActions: {
    display: 'flex',
    gap: 8,
  },
  iconBtn: {
    width: 38,
    height: 38,
    borderRadius: '50%',
    background: T.white,
    border: `1px solid ${T.border}`,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    transition: 'all 0.2s',
    boxShadow: T.shadow,
  },

  // hero
  hero: {
    position: 'relative',
    overflow: 'hidden',
  },
  heroImg: {
    width: '100%',
    height: 'clamp(300px, 50vw, 520px)',
    objectFit: 'cover',
    display: 'block',
  },
  heroGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '65%',
    background: 'linear-gradient(to top, rgba(26,46,26,0.85) 0%, transparent 100%)',
    pointerEvents: 'none',
  },
  heroContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 'clamp(24px, 5vw, 48px)',
    color: '#fff',
  },
  heroCategoryRow: {
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap',
    marginBottom: 12,
    alignItems: 'center',
  },
  categoryPill: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    color: T.greenLight,
    background: 'rgba(116,198,157,0.18)',
    border: '1px solid rgba(116,198,157,0.4)',
    borderRadius: 20,
    padding: '4px 12px',
  },
  diffBadge: (diff) => ({
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: 0.8,
    borderRadius: 20,
    padding: '4px 12px',
    background: difficultyColors[diff]?.bg || T.greenPale,
    color: difficultyColors[diff]?.text || T.green,
  }),
  heroTitle: {
    fontFamily: T.font,
    fontSize: 'clamp(28px, 5vw, 52px)',
    fontWeight: 700,
    margin: '6px 0 4px',
    lineHeight: 1.1,
    textShadow: '0 2px 8px rgba(0,0,0,0.3)',
  },
  heroLatin: {
    fontStyle: 'italic',
    fontSize: 'clamp(14px, 2vw, 18px)',
    opacity: 0.8,
    marginBottom: 10,
    fontFamily: T.font,
  },
  heroMeta: {
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap',
    alignItems: 'center',
    fontSize: 13,
    opacity: 0.88,
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 5,
  },

  // content layout
  contentWrap: {
    maxWidth: 860,
    margin: '0 auto',
    padding: 'clamp(24px, 5vw, 48px) clamp(16px, 4vw, 32px)',
  },

  // summary stat cards
  statGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: 12,
    margin: '32px 0',
  },
  statCard: {
    background: T.white,
    borderRadius: T.radius,
    padding: '18px 14px',
    border: `1px solid ${T.border}`,
    boxShadow: T.shadow,
    textAlign: 'center',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  statIcon: {
    fontSize: 26,
    marginBottom: 6,
    display: 'block',
  },
  statLabel: {
    fontSize: 10,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    color: T.textMuted,
    marginBottom: 4,
  },
  statValue: {
    fontSize: 13,
    fontWeight: 600,
    color: T.green,
    lineHeight: 1.3,
  },

  // sections
  section: {
    marginBottom: 36,
  },
  sectionHeading: {
    fontFamily: T.font,
    fontSize: 'clamp(20px, 3vw, 26px)',
    fontWeight: 700,
    color: T.text,
    marginBottom: 14,
    paddingBottom: 10,
    borderBottom: `2px solid ${T.greenPale}`,
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 1.8,
    color: T.textSub,
  },
  bullet: {
    listStyle: 'none',
    padding: 0,
    margin: '12px 0',
  },
  bulletItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 10,
    padding: '7px 0',
    fontSize: 15,
    lineHeight: 1.6,
    color: T.textSub,
    borderBottom: `1px solid ${T.border}`,
  },
  bulletDot: {
    width: 7,
    height: 7,
    borderRadius: '50%',
    background: T.green,
    marginTop: 7,
    flexShrink: 0,
  },

  // callout boxes
  calloutTip: {
    background: T.greenTint,
    border: `1px solid ${T.greenLight}`,
    borderLeft: `4px solid ${T.green}`,
    borderRadius: T.radiusSm,
    padding: '14px 18px',
    margin: '16px 0',
    fontSize: 14,
    lineHeight: 1.7,
    color: T.green,
    display: 'flex',
    gap: 10,
    alignItems: 'flex-start',
  },
  calloutWarn: {
    background: '#FFFBEB',
    border: '1px solid #FDE68A',
    borderLeft: '4px solid #F59E0B',
    borderRadius: T.radiusSm,
    padding: '14px 18px',
    margin: '16px 0',
    fontSize: 14,
    lineHeight: 1.7,
    color: '#92400E',
    display: 'flex',
    gap: 10,
    alignItems: 'flex-start',
  },

  // problems grid
  problemsGrid: {
    display: 'grid',
    gap: 16,
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  },
  problemCard: {
    background: T.white,
    borderRadius: T.radius,
    border: `1px solid ${T.border}`,
    boxShadow: T.shadow,
    padding: 20,
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  problemTitle: {
    fontWeight: 700,
    fontSize: 16,
    color: T.text,
    marginBottom: 10,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  problemRow: {
    marginBottom: 8,
  },
  problemLabel: {
    fontSize: 10,
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    color: T.textMuted,
    marginBottom: 2,
  },
  problemText: {
    fontSize: 13,
    lineHeight: 1.6,
    color: T.textSub,
  },
  solutionBox: {
    background: T.greenTint,
    borderRadius: 8,
    padding: '8px 12px',
    marginTop: 10,
    fontSize: 13,
    color: T.green,
    lineHeight: 1.6,
  },

  // related guides
  relatedGrid: {
    display: 'grid',
    gap: 16,
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
  },
  relatedCard: {
    background: T.white,
    borderRadius: T.radius,
    border: `1px solid ${T.border}`,
    boxShadow: T.shadow,
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
  },
  relatedImg: {
    width: '100%',
    height: 140,
    objectFit: 'cover',
    display: 'block',
  },
  relatedBody: {
    padding: '14px 16px',
  },
  relatedName: {
    fontFamily: T.font,
    fontWeight: 700,
    fontSize: 16,
    color: T.text,
    marginBottom: 2,
  },
  relatedLatin: {
    fontStyle: 'italic',
    fontSize: 12,
    color: T.textMuted,
    marginBottom: 8,
  },
  relatedDiff: (diff) => ({
    display: 'inline-block',
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 0.6,
    borderRadius: 20,
    padding: '3px 10px',
    background: difficultyColors[diff]?.bg || T.greenPale,
    color: difficultyColors[diff]?.text || T.green,
  }),

  // floating sidebar (desktop)
  floatSidebar: {
    position: 'sticky',
    top: 80,
    background: T.white,
    borderRadius: T.radius,
    border: `1px solid ${T.border}`,
    boxShadow: T.shadowMd,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  sidebarBtn: (primary) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: '11px 18px',
    borderRadius: 50,
    fontFamily: T.fontSans,
    fontSize: 14,
    fontWeight: 700,
    cursor: 'pointer',
    border: primary ? 'none' : `2px solid ${T.green}`,
    background: primary ? T.green : 'transparent',
    color: primary ? '#fff' : T.green,
    transition: 'all 0.2s',
    letterSpacing: 0.3,
  }),

  // sticky mobile bar
  mobileBar: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    background: T.white,
    borderTop: `1px solid ${T.border}`,
    padding: '12px 16px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 10,
    boxShadow: '0 -4px 20px rgba(45,106,79,0.1)',
    zIndex: 90,
  },
  mobileBtn: (primary) => ({
    padding: '12px',
    borderRadius: 50,
    fontFamily: T.fontSans,
    fontSize: 14,
    fontWeight: 700,
    cursor: 'pointer',
    border: primary ? 'none' : `2px solid ${T.green}`,
    background: primary ? T.green : 'transparent',
    color: primary ? '#fff' : T.green,
    transition: 'all 0.2s',
    letterSpacing: 0.3,
  }),

  // loading / error
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    gap: 16,
    padding: 32,
    textAlign: 'center',
  },
  loadSpinner: {
    width: 48,
    height: 48,
    border: `4px solid ${T.greenPale}`,
    borderTop: `4px solid ${T.green}`,
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
  },
};

// ─── MAIN COMPONENT ──────────────────────────────────────────
export default function GuideDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [guide, setGuide]       = useState(null);
  const [related, setRelated]   = useState([]);
  const [saved, setSaved]       = useState(false);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const topRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    setError(false);
    // Simulate async data load
    const timer = setTimeout(() => {
      const found = guideData.find((g) => g.id === id);
      if (!found) {
        setError(true);
      } else {
        setGuide(found);
        setRelated(guideData.filter((g) => g.id !== id).slice(0, 4));
      }
      setLoading(false);
    }, 420);
    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleRelatedClick = (relId) => {
    navigate(`/guides/${relId}`);
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: guide.title,
          text: guide.shortDesc,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setShowShare(true);
        setTimeout(() => setShowShare(false), 2500);
      }
    } catch (err) {
      console.error('Share failed:', err);
    }
  };

  const handleBack = () => navigate(-1);

  // ── Loading ──
  if (loading) {
    return (
      <>
        <GlobalStyles />
        <div style={s.page}>
          <div style={s.center}>
            <div style={s.loadSpinner} />
            <p style={{ color: T.textMuted, fontSize: 15 }}>Loading guide…</p>
          </div>
        </div>
      </>
    );
  }

  // ── Error ──
  if (error || !guide) {
    return (
      <>
        <GlobalStyles />
        <div style={s.page}>
          <div style={s.center}>
            <span style={{ fontSize: 52 }}>🌿</span>
            <h2 style={{ fontFamily: T.font, fontSize: 26, color: T.text }}>Guide not found</h2>
            <p style={{ color: T.textMuted, fontSize: 15, maxWidth: 340 }}>
              We couldn't find this plant guide. It may have been moved or the link is incorrect.
            </p>
            <button
              onClick={handleBack}
              style={{ ...s.sidebarBtn(true), width: 200 }}
            >
              ← Back to Guides
            </button>
          </div>
        </div>
      </>
    );
  }

  const diff = guide.difficulty;

  // ── Main render ──
  return (
    <>
      <GlobalStyles />
      <div style={s.page} ref={topRef}>

        {/* ── Top Bar ── */}
        <div style={s.topBar}>
          <button style={s.backBtn} onClick={handleBack} onMouseOver={e=>e.currentTarget.style.opacity=0.65} onMouseOut={e=>e.currentTarget.style.opacity=1}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Guides
          </button>
          <div style={s.topActions}>
            <button
              style={{ ...s.iconBtn, background: saved ? T.greenPale : T.white }}
              onClick={() => setSaved(!saved)}
              title="Save guide"
            >
              {saved ? '🔖' : '🏷️'}
            </button>
            <button
              style={s.iconBtn}
              onClick={handleShare}
              title="Share guide"
            >
              ↗
            </button>
          </div>
        </div>

        {/* ── Hero ── */}
        <div style={s.hero}>
          <img src={guide.image} alt={guide.title} style={s.heroImg} />
          <div style={s.heroGradient} />
          <div style={s.heroContent}>
            <div style={s.heroCategoryRow}>
              <span style={s.categoryPill}>{guide.category}</span>
              <span style={s.diffBadge(diff)}>{diff}</span>
              {guide.tags?.map(tag => (
                <span key={tag} style={{ ...s.categoryPill, color: '#a8e6cf', borderColor: 'rgba(168,230,207,0.4)' }}>
                  🌿 {tag}
                </span>
              ))}
            </div>
            <h1 style={s.heroTitle}>{guide.title}</h1>
            <p style={s.heroLatin}>{guide.latinName}</p>
            <div style={s.heroMeta}>
              <span style={s.metaItem}>📖 {guide.readingTime}</span>
              <span style={s.metaItem}>🌿 {guide.category}</span>
            </div>
          </div>
        </div>

        {/* ── Short description strip ── */}
        <div style={{ background: T.white, borderBottom: `1px solid ${T.border}`, padding: 'clamp(16px,3vw,24px) clamp(16px,4vw,32px)', maxWidth: '100%' }}>
          <p style={{ maxWidth: 780, margin: '0 auto', fontSize: 'clamp(15px,2.2vw,18px)', lineHeight: 1.7, color: T.textSub, textAlign: 'center' }}>
            {guide.shortDesc}
          </p>
        </div>

        {/* ── Two-column layout wrapper (main + sidebar) ── */}
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(24px,4vw,48px) clamp(16px,4vw,32px) 100px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 260px', gap: 32, alignItems: 'start' }}>

          {/* ── Main Content Column ── */}
          <div>

            {/* Plant Care Summary Cards */}
            <div style={s.statGrid}>
              {Object.entries(guide.stats).map(([key, val]) => (
                <div
                  key={key}
                  style={s.statCard}
                  onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = T.shadowMd; }}
                  onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = T.shadow; }}
                >
                  <span style={s.statIcon}>{statIcons[key] || '🌿'}</span>
                  <div style={s.statLabel}>{statLabels[key] || key}</div>
                  <div style={s.statValue}>{val}</div>
                </div>
              ))}
            </div>

            {/* Introduction */}
            <div style={s.section}>
              <h2 style={s.sectionHeading}>Introduction</h2>
              <p style={s.sectionText}>{guide.intro}</p>
            </div>

            {/* Overview */}
            <div style={s.section}>
              <h2 style={s.sectionHeading}>Plant Overview</h2>
              <p style={s.sectionText}>{guide.overview}</p>
            </div>

            {/* Care Instructions */}
            <div style={s.section}>
              <h2 style={s.sectionHeading}>Care Instructions</h2>
              <ul style={s.bullet}>
                {guide.careInstructions.map((item, i) => (
                  <li key={i} style={s.bulletItem}>
                    <span style={s.bulletDot} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Watering */}
            <div style={s.section}>
              <h2 style={s.sectionHeading}>💧 Watering Guide</h2>
              <p style={s.sectionText}>{guide.wateringGuide}</p>
              <div style={s.calloutTip}>
                <span>💡</span>
                <span><strong>Pro tip:</strong> Push your finger 2 inches into the soil. If it feels moist, wait. Always water thoroughly until it drains from the bottom, then let the excess drain completely.</span>
              </div>
            </div>

            {/* Light */}
            <div style={s.section}>
              <h2 style={s.sectionHeading}>☀️ Light Requirements</h2>
              <p style={s.sectionText}>{guide.lightRequirements}</p>
            </div>

            {/* Soil */}
            <div style={s.section}>
              <h2 style={s.sectionHeading}>🪴 Soil Recommendations</h2>
              <p style={s.sectionText}>{guide.soilRecommendations}</p>
              <div style={s.calloutWarn}>
                <span>⚠️</span>
                <span><strong>Watch out:</strong> Poor drainage is the leading cause of houseplant death. Always ensure your pot has drainage holes and never leave standing water in the saucer for more than 30 minutes.</span>
              </div>
            </div>

            {/* Fertilising */}
            <div style={s.section}>
              <h2 style={s.sectionHeading}>🌾 Fertilising Tips</h2>
              <p style={s.sectionText}>{guide.fertilizingTips}</p>
            </div>

            {/* Seasonal care */}
            <div style={s.section}>
              <h2 style={s.sectionHeading}>🍂 Seasonal Care</h2>
              <p style={s.sectionText}>{guide.seasonalCare}</p>
            </div>

            {/* Common Problems */}
            <div style={s.section}>
              <h2 style={s.sectionHeading}>🔍 Common Problems & Troubleshooting</h2>
              <div style={s.problemsGrid}>
                {guide.problems.map((prob, i) => (
                  <div
                    key={i}
                    style={s.problemCard}
                    onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = T.shadowMd; }}
                    onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = T.shadow; }}
                  >
                    <div style={s.problemTitle}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#F87171', flexShrink: 0, display: 'inline-block' }} />
                      {prob.problem}
                    </div>
                    <div style={s.problemRow}>
                      <div style={s.problemLabel}>Symptoms</div>
                      <div style={s.problemText}>{prob.symptoms}</div>
                    </div>
                    <div style={s.problemRow}>
                      <div style={s.problemLabel}>Cause</div>
                      <div style={s.problemText}>{prob.cause}</div>
                    </div>
                    <div style={s.solutionBox}>
                      <strong>✅ Solution:</strong> {prob.solution}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Guides */}
            <div style={{ ...s.section, marginBottom: isMobile ? 80 : 36 }}>
              <h2 style={s.sectionHeading}>More Plant Guides</h2>
              <div style={s.relatedGrid}>
                {related.map((rel) => (
                  <div
                    key={rel.id}
                    style={s.relatedCard}
                    onClick={() => handleRelatedClick(rel.id)}
                    onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = T.shadowLg; }}
                    onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = T.shadow; }}
                  >
                    <img src={rel.image} alt={rel.title} style={s.relatedImg} />
                    <div style={s.relatedBody}>
                      <div style={s.relatedName}>{rel.title}</div>
                      <div style={s.relatedLatin}>{rel.latinName}</div>
                      <span style={s.relatedDiff(rel.difficulty)}>{rel.difficulty}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>{/* /main column */}

          {/* ── Sidebar (desktop) ── */}
          {!isMobile && (
            <div>
              <div style={s.floatSidebar}>
                <h3 style={{ fontFamily: T.font, fontSize: 16, fontWeight: 700, color: T.text, marginBottom: 4 }}>
                  {guide.title} Guide
                </h3>
                <p style={{ fontSize: 12, color: T.textMuted, marginBottom: 8, lineHeight: 1.5 }}>
                  Save this guide to your collection or share it with a fellow plant lover.
                </p>
                <button
                  style={s.sidebarBtn(true)}
                  onClick={() => setSaved(!saved)}
                  onMouseOver={e => e.currentTarget.style.opacity = '0.85'}
                  onMouseOut={e => e.currentTarget.style.opacity = '1'}
                >
                  {saved ? '🔖 Saved!' : '🏷️ Save Guide'}
                </button>
                <button
                  style={s.sidebarBtn(false)}
                  onClick={() => { if (navigator.share) navigator.share({ title: guide.title, url: window.location.href }); else navigator.clipboard.writeText(window.location.href); }}
                  onMouseOver={e => { e.currentTarget.style.background = T.green; e.currentTarget.style.color = '#fff'; }}
                  onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = T.green; }}
                >
                  ↗ Share Guide
                </button>
                <hr style={{ border: 'none', borderTop: `1px solid ${T.border}`, margin: '4px 0' }} />
                <div style={{ fontSize: 12, color: T.textMuted }}>
                  <div style={{ marginBottom: 6, fontWeight: 600, color: T.textSub }}>Quick Stats</div>
                  {Object.entries(guide.stats).map(([k, v]) => (
                    <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: `1px solid ${T.border}` }}>
                      <span>{statIcons[k]} {statLabels[k]}</span>
                      <span style={{ fontWeight: 600, color: T.green, textAlign: 'right', maxWidth: '55%', lineHeight: 1.3 }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>{/* /two-column */}

        {/* ── Sticky Mobile Bar ── */}
        {isMobile && (
          <div style={s.mobileBar}>
            <button
              style={s.mobileBtn(true)}
              onClick={() => setSaved(!saved)}
            >
              {saved ? '🔖 Saved!' : '🏷️ Save Guide'}
            </button>
            <button
              style={s.mobileBtn(false)}
              onClick={handleShare}
            >
              ↗ Share
            </button>
          </div>
        )}

        {/* Share Toast Notification */}
        {showShare && (
          <div style={{
            position: 'fixed',
            top: 32,
            left: '50%',
            transform: 'translateX(-50%)',
            background: T.green,
            color: '#fff',
            padding: '12px 20px',
            borderRadius: T.radiusSm,
            fontSize: 14,
            fontWeight: 600,
            zIndex: -1000,
            boxShadow: T.shadowMd,
            animation: 'fadeInDown 0.3s ease-out',
            whiteSpace: 'nowrap',
          }}>
            ✓ Link copied to clipboard!
          </div>
        )}

      </div>
    </>
  );
}

// ─── GLOBAL STYLES ───────────────────────────────────────────
function GlobalStyles() {
  return (
    <style>{`
      @keyframes pageIn {
        from { opacity: 0; transform: translateY(12px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeInDown {
        from { opacity: 0; transform: translateY(-20px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { background: ${T.bg}; }
    `}</style>
  );
}

// ─── GUIDE CARD WRAPPER (convenience export) ─────────────────
/**
 * Use this to make your existing guide cards navigate to the details page.
 * Wrap your existing <GuideCard> component:
 *
 *   import { GuideCardLink } from './GuideDetailsPage';
 *   <GuideCardLink guide={guide}><YourExistingGuideCard guide={guide} /></GuideCardLink>
 */
export function GuideCardLink({ guide, children }) {
  const navigate = useNavigate();
  return (
    <div
      style={{ cursor: 'pointer' }}
      onClick={() => navigate(`/guides/${guide.id}`)}
    >
      {children}
    </div>
  );
}