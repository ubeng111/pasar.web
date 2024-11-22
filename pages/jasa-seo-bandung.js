import React from "react";
import Head from "next/head"; // Import Head from Next.js
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/Bandung/MainBanner"; // Changed Surabaya to Bandung
import Features from "../components/Bandung/Features"; // Changed Surabaya to Bandung
import AboutContent from "../components/Bandung/AboutContent"; // Changed Surabaya to Bandung
import ServicesCard from "../components/Bandung/ServicesCard"; // Changed Surabaya to Bandung
import WhyChooseUs from "../components/Bandung/WhyChooseUs"; // Changed Surabaya to Bandung
import Testimonials from "../components/Common/Testimonials";
import AnalysisFormContent from "../components/Bandung/AnalysisFormContent"; // Changed Surabaya to Bandung
import PartnerLogos from "../components/Common/PartnerLogos";
import FaqSection from "../components/Bandung/FaqSection"; // Changed Surabaya to Bandung
import PricingContent from "../components/PricingPlans/PricingContent";
import Footer from "../components/Layouts/Footer";

const Index = () => {
  const aggregateRating = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Jasa SEO Bandung", // Changed Surabaya to Bandung
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "112"
    }
  };

  const pricing = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Jasa SEO Bandung", // Changed Surabaya to Bandung
    "offers": {
      "@type": "Offer",
      "url": "https://pasar.web.id/jasa-seo-bandung", // Changed Surabaya to Bandung
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
        <title>Jasa SEO Bandung Profesional Murah Terbaik - Pasar.Web.id</title> {/* Changed Surabaya to Bandung */}
        <meta
          name="description"
          content="Jasa SEO Bandung dari Pasar.Web.id untuk membantu bisnis Anda mencapai peringkat tertinggi di mesin pencari Google. Meningkatkan visibilitas, trafik, dan penjualan online Anda." // Changed Surabaya to Bandung
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Jasa SEO Bandung - Tingkatkan Visibilitas Website Anda di Google" /> {/* Changed Surabaya to Bandung */}
        <meta
          property="og:description"
          content="Dapatkan layanan SEO profesional terbaik di Bandung dari Pasar.Web.id. Gunakan teknik SEO terbaru untuk membawa website Anda ke peringkat teratas di Google." // Changed Surabaya to Bandung
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/logo.png" /> {/* Change with appropriate image URL */}
        <meta property="og:url" content="https://pasar.web.id/jasa-seo-bandung" /> {/* Changed Surabaya to Bandung */}
        <link rel="canonical" href="https://pasar.web.id/jasa-seo-bandung" /> {/* Changed Surabaya to Bandung */}

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
      <FaqSection />
      <div className="pb-100">
        <PartnerLogos />
      </div>
      <Footer />
    </>
  );
};

export default Index;
