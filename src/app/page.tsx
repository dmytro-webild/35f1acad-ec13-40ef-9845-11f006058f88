"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="medium"
        sizing="medium"
        background="noiseDiagonalGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Shop",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Dr Chaudhari Herbals"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Herbal Beauty, Proven Results Since 1995"
      description="Discover Dr Chaudhari's natural skin creams and hair oils formulated with pure botanical ingredients. Trusted by thousands for radiant skin and healthy hair."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/modern-helathy-ingredients-composition_23-2147859435.jpg",
          imageAlt: "natural hair oil bottle amber",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-green-liquid-wallpaper_23-2148823552.jpg",
          imageAlt: "organic skin cream texture",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/selfcare-products-flowers-arrangement_23-2149249576.jpg",
          imageAlt: "natural hair oil bottle amber",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/white-paint-texture-with-pattern_23-2148402344.jpg",
          imageAlt: "organic skin cream texture",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/serum-bottle-butterfly-pea-flower-oil-put-wooden-tray_1150-28105.jpg",
          imageAlt: "natural hair oil bottle amber",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/horizontal-banner-beauty-products-with-copy-space_23-2149446552.jpg",
          imageAlt: "organic skin cream texture",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/natural-cbd-oil-dropper-composition_23-2149013565.jpg",
          imageAlt: "natural hair oil bottle amber",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cbd-treatment-arrangement-still-life_23-2151160278.jpg",
          imageAlt: "organic skin cream texture",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-bowl-with-small-stones-oils_23-2148268449.jpg",
          imageAlt: "natural hair oil bottle amber",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-cream-leaf-with-white-background_23-2148241826.jpg",
          imageAlt: "organic skin cream texture",
        },
      ]}
      buttons={[
        {
          text: "Shop Now",
          href: "#products",
        },
        {
          text: "Explore Range",
          href: "#about",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-young-woman-surrounded-by-plants_23-2150522492.jpg",
          alt: "Medium shot young woman surrounded by plants",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-holding-flowers_23-2149247541.jpg",
          alt: "Medium shot smiley woman holding flowers",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-doing-her-selfcare-ritual_23-2149186862.jpg",
          alt: "Woman doing her selfcare ritual",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-happy-cheerful-sweet-lovely-smiling-woman-enjoy-bouquet-white-fresh-flowers_158595-8197.jpg",
          alt: "Young happy cheerful sweet lovely smiling woman enjoy a bouquet of white fresh flowers",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiled-mulatto-woman-with-curly-hair-big-wireless-headphones-is-dancing-with-her-eyes-closed-kitchen_8353-10298.jpg",
          alt: "Smiled mulatto woman with curly hair in big wireless headphones is dancing with her eyes closed in the kitchen",
        },
      ]}
      avatarText="Loved by over 10,000+ happy customers worldwide"
      marqueeItems={[
        {
          type: "image",
          src: "http://img.b2bpic.net/free-vector/100-organic-product-green-label-sticker_1017-26204.jpg",
          alt: "organic certification badge",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-vector/flat-slow-fashion-badge-collection_23-2148818724.jpg",
          alt: "herbal ingredients mark",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-vector/herbs-logo-design-icon-template_474888-3861.jpg",
          alt: "clean beauty certification",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-vector/collection-eco-friendly-organic-product-green-label-badge-design-vector_1017-48048.jpg",
          alt: "vegan herbal product label",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/happy-woman-showing-cotton-pad_23-2147656961.jpg",
          alt: "dermatologically tested seal",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Our Heritage"
      title="Dr Chaudhari's Philosophy"
      description="We believe in the power of traditional Ayurveda combined with modern scientific precision to deliver natural beauty solutions that work."
      subdescription="Every formulation is crafted with locally sourced, organic ingredients, free from harmful chemicals, ensuring your skin and hair get only the best nature has to offer."
      icon={Shield}
      imageSrc="http://img.b2bpic.net/free-photo/medium-shot-woman-smelling-flower_23-2149247554.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardEight
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "100% Botanical",
          description: "Pure plant-based ingredients.",
          imageSrc: "http://img.b2bpic.net/free-photo/herbal-medicine-with-plants-assortment-high-angle_23-2149339738.jpg",
          imageAlt: "botanical leaf symbol icon",
        },
        {
          title: "Traditional Wisdom",
          description: "Ancient Ayurvedic recipes.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-onion-close-up_23-2148893665.jpg",
          imageAlt: "pure herbal hair infusion",
        },
        {
          title: "Chemical Free",
          description: "No harsh synthetics ever.",
          imageSrc: "http://img.b2bpic.net/free-vector/hand-drawn-cruelty-free-badge-set_23-2148812901.jpg",
          imageAlt: "chemical-free organic seal icon",
        },
      ]}
      title="Why Choose Natural?"
      description="Our commitment to quality ensures you receive products that prioritize your wellness and beauty."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          name: "Glow Cream",
          price: "$25",
          imageSrc: "http://img.b2bpic.net/free-photo/skin-care-product-with-tropical-leaf-shadow_23-2148761455.jpg",
          imageAlt: "herbal cream jar e-commerce",
        },
        {
          id: "2",
          name: "Revive Oil",
          price: "$30",
          imageSrc: "http://img.b2bpic.net/free-photo/macadamia-oil-relaxing-treatment_1150-42747.jpg",
          imageAlt: "hair oil amber bottle e-commerce",
        },
        {
          id: "3",
          name: "Botanical Blend",
          price: "$28",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-bottle-natural-oil_23-2148678042.jpg",
          imageAlt: "natural cosmetic set product",
        },
        {
          id: "4",
          name: "Hair Serum",
          price: "$35",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-beauty-products-based-regenerative-agriculture_23-2150721475.jpg",
          imageAlt: "organic hair care serum",
        },
        {
          id: "5",
          name: "Night Cream",
          price: "$22",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hands-holding-cream-container_23-2149168519.jpg",
          imageAlt: "night skin cream natural",
        },
        {
          id: "6",
          name: "Growth Elixir",
          price: "$40",
          imageSrc: "http://img.b2bpic.net/free-photo/green-abstract-background-dropper-bottle-with-yellow-solution-wallpaper_53876-137329.jpg",
          imageAlt: "premium herbal hair growth oil",
        },
      ]}
      title="Our Collection"
      description="Premium herbal products for complete care."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          handle: "@sarahj",
          testimonial: "My skin has never felt this hydrated. Simply natural!",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-portrait-blonde-young-woman-holding-white-fresh-flowers-against-colored-background_23-2148048838.jpg",
        },
        {
          id: "2",
          name: "Mike R.",
          handle: "@miker",
          testimonial: "The hair oil really helped with my thinning hairline.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-doing-his-face-care-routine_23-2149288059.jpg",
        },
        {
          id: "3",
          name: "Emily P.",
          handle: "@emilyp",
          testimonial: "Best natural beauty investment for my daily routine.",
          imageSrc: "http://img.b2bpic.net/free-photo/beauty-vlogger-preparing-video-blog_23-2148916315.jpg",
        },
        {
          id: "4",
          name: "David W.",
          handle: "@davidw",
          testimonial: "Visible results in just a few weeks of consistent use.",
          imageSrc: "http://img.b2bpic.net/free-photo/sideways-shot-pleasant-looking-female-with-afro-hairstyle-listens-audio-track-headphones-looks-happily-down-has-good-rest-enjoys-calm-atmosphere-home-people-leisure-concept_273609-2239.jpg",
        },
        {
          id: "5",
          name: "Clara M.",
          handle: "@claram",
          testimonial: "Gentle, effective, and truly authentic.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-cheerful-happy-woman-smiles-broadly-has-perfect-white-teeth-covers-eye-with-green-calla-lily-applies-hydrogel-patches-reducing-wrinkles-poses-indoor-women-beauty-concept_273609-57061.jpg",
        },
      ]}
      title="Trusted by Thousands"
      description="See what our community says about their transformation."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Organic Cert",
        "Heritage Mark",
        "Clean Beauty",
        "Vegan Certified",
        "Dermatology Tested",
        "Sustainable Source",
        "Ayurvedic Legacy",
      ]}
      title="Certified Quality"
      description="Quality assurance and sustainable standards."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Are products vegan?",
          content: "Yes, we are 100% plant-based.",
        },
        {
          id: "f2",
          title: "Do you ship worldwide?",
          content: "Yes, we ship across the globe.",
        },
        {
          id: "f3",
          title: "How long until results?",
          content: "Most users see visible results within 4 weeks.",
        },
      ]}
      sideTitle="Questions?"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient",
      }}
      text="Ready to embrace natural beauty? Contact us today for personalized recommendations."
      buttons={[
        {
          text: "Contact Support",
          href: "mailto:support@drchaudhari.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "Skin Care",
              href: "#products",
            },
            {
              label: "Hair Oil",
              href: "#products",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Dr Chaudhari Herbals"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
