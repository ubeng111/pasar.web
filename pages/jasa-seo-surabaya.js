import React from "react";
import Head from "next/head"; // Import Head from Next.js
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/Surabaya/MainBanner"; // Changed Jakarta to Surabaya
import Features from "../components/Surabaya/Features"; // Changed Jakarta to Surabaya
import AboutContent from "../components/Surabaya/AboutContent"; // Changed Jakarta to Surabaya
import ServicesCard from "../components/Surabaya/ServicesCard"; // Changed Jakarta to Surabaya
import WhyChooseUs from "../components/Surabaya/WhyChooseUs"; // Changed Jakarta to Surabaya
import Testimonials from "../components/Common/Testimonials";
import AnalysisFormContent from "../components/Surabaya/AnalysisFormContent"; // Changed Jakarta to Surabaya
import BlogCardSection from "../components/Common/BlogCardSection";
import PartnerLogos from "../components/Common/PartnerLogos";
import FaqSection from "../components/Surabaya/FaqSection"; // Changed Jakarta to Surabaya
import PricingContent from "../components/PricingPlans/PricingContent";
import Footer from "../components/Layouts/Footer";

const Index = () => {
  const aggregateRating = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Jasa SEO Surabaya", // Changed Jakarta to Surabaya
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "14"
    }
  };

  const pricing = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Jasa SEO Surabaya", // Changed Jakarta to Surabaya
    "offers": {
      "@type": "Offer",
      "url": "https://pasar.web.id/jasa-seo-surabaya", // Changed Jakarta to Surabaya
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
        <title>Jasa SEO Profesional Surabaya Terbaik - Pasar.Web.id</title> {/* Changed Jakarta to Surabaya */}
        <meta
          name="description"
          content="Jasa SEO Surabaya dari Pasar.Web.id untuk membantu bisnis Anda mencapai peringkat tertinggi di mesin pencari Google. Meningkatkan visibilitas, trafik, dan penjualan online Anda." // Changed Jakarta to Surabaya
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Jasa SEO Surabaya - Tingkatkan Visibilitas Website Anda di Google" /> {/* Changed Jakarta to Surabaya */}
        <meta
          property="og:description"
          content="Dapatkan layanan SEO profesional terbaik di Surabaya dari Pasar.Web.id. Gunakan teknik SEO terbaru untuk membawa website Anda ke peringkat teratas di Google." // Changed Jakarta to Surabaya
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/logo.png" /> {/* Change with appropriate image URL */}
        <meta property="og:url" content="https://pasar.web.id/jasa-seo-surabaya" /> {/* Changed Jakarta to Surabaya */}
        <link rel="canonical" href="https://pasar.web.id/jasa-seo-surabaya" /> {/* Changed Jakarta to Surabaya */}

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
