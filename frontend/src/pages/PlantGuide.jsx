import PageWrapper from '../layouts/PageWrapper';
import Hero from '../components/plantGuideDetail/GuideHero';
import CategorySection from '../components/plantGuideDetail/GuideCategorySection';
//import CareTips from '../components/plantGuideDetail/GuideCareTips';
import CTABanner from '../components/plantGuideDetail/GuideCTABanner';
import { categories } from '../data/guide';



export default function PlantGuide() {
  return (
    <PageWrapper heroPage={true}>
      <Hero />
      {categories.map((cat, i) => (
        <CategorySection
          key={cat.id}
          category={cat}
          alt={i % 2 !== 0}
          reverse={i % 2 !== 0}
        />
      ))}
      {/* <CareTips /> */}
      <CTABanner />
    </PageWrapper>
  );
}
