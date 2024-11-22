import React from "react";
import Head from "next/head"; // Import Head from Next.js
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/Bali/MainBanner"; // Changed Surabaya to Bali
import Features from "../components/Bali/Features"; // Changed Surabaya to Bali
import AboutContent from "../components/Bali/AboutContent"; // Changed Surabaya to Bali
import ServicesCard from "../components/Bali/ServicesCard"; // Changed Surabaya to Bali
import WhyChooseUs from "../components/Bali/WhyChooseUs"; // Changed Surabaya to Bali
import Testimonials from "../components/Common/Testimonials";
import AnalysisFormContent from "../components/Bali/AnalysisFormContent"; // Changed Surabaya to Bali
import BlogCardSection from "../components/Common/BlogCardSection";
import PartnerLogos from "../components/Common/PartnerLogos";
import FaqSection from "../components/Bali/FaqSection"; // Changed Surabaya to Bali
import PricingContent from "../components/PricingPlans/PricingContent";
import Footer from "../components/Layouts/Footer";

const Index = () => {
  const aggregateRating = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Jasa SEO Bali", // Changed Surabaya to Bali
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "172"
    }
  };

  const pricing = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Jasa SEO Bali", // Changed Surabaya to Bali
    "offers": {
      "@type": "Offer",
      "url": "https://pasar.web.id/jasa-seo-bali", // Changed Surabaya to Bali
      "priceCurrency": "IDR",
      "price": "750000",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "priceCurrency": "IDR",
        "priceRange": "750000-33600000"
      }
    }
  };

  return (
    <>
      {/* Adding Title and Meta Description */}
      <Head>
        <title>Jasa SEO Profesional Bali Terbaik - Pasar.Web.id</title> {/* Changed Surabaya to Bali */}
        <meta
          name="description"
          content="Jasa SEO Bali dari Pasar.Web.id untuk membantu bisnis Anda mencapai peringkat tertinggi di mesin pencari Google. Meningkatkan visibilitas, trafik, dan penjualan online Anda." // Changed Surabaya to Bali
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Jasa SEO Bali - Tingkatkan Visibilitas Website Anda di Google" /> {/* Changed Surabaya to Bali */}
        <meta
          property="og:description"
          content="Dapatkan layanan SEO profesional terbaik di Bali dari Pasar.Web.id. Gunakan teknik SEO terbaru untuk membawa website Anda ke peringkat teratas di Google." // Changed Surabaya to Bali
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/logo.png" /> {/* Change with appropriate image URL */}
        <meta property="og:url" content="https://pasar.web.id/jasa-seo-bali" /> {/* Changed Surabaya to Bali */}
        <link rel="canonical" href="https://pasar.web.id/jasa-seo-bali" /> {/* Changed Surabaya to Bali */}

        {/* Schema.org for Aggregate Rating */}
        <script type="application/ld+json">
          {JSON.stringify(aggregateRating)}
        </script>

        {/* Schema.org for Pricing */}
        <script type="application/ld+json">
          {JSON.stringify(pricing)}
        </script>
      </Head>

      <NavbarTwo />
      <MainBanner />
      <Features />
      <AboutContent />
      <ServicesCard />
      <WhyChooseUs />
      <AnalysisFormContent />
      <PricingContent />
      <Testimonials />
      <BlogCardSection />
      <FaqSection />
      <div className="pb-100">
        <PartnerLogos />
      </div>
      <Footer />
    </>
  );
};

export default Index;
