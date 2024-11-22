import React from "react";
import Head from "next/head"; // Impor Head dari Next.js
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/Jakarta/MainBanner";
import Features from "../components/Jakarta/Features";
import AboutContent from "../components/Jakarta/AboutContent";
import ServicesCard from "../components/Jakarta/ServicesCard";
import WhyChooseUs from "../components/Jakarta/WhyChooseUs";
import Testimonials from "../components/Common/Testimonials";
import AnalysisFormContent from "../components/Jakarta/AnalysisFormContent";
import BlogCardSection from "../components/Common/BlogCardSection";
import PartnerLogos from "../components/Common/PartnerLogos";
import FaqSection from "../components/Jakarta/FaqSection";
import PricingContent from "../components/PricingPlans/PricingContent";
import Footer from "../components/Layouts/Footer";

const Index = () => {
  const aggregateRating = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Jasa SEO Jakarta",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "134"
    }
  };

  const pricing = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Jasa SEO Jakarta",
    "offers": {
      "@type": "Offer",
      "url": "https://pasar.web.id/jasa-seo-jakarta",
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
      {/* Menambahkan Title dan Meta Description */}
      <Head>
        <title>Jasa SEO Jakarta Terbaik - Pasar.Web.id</title>
        <meta
          name="description"
          content="Jasa SEO Jakarta dari Pasar.Web.id untuk membantu bisnis Anda mencapai peringkat tertinggi di mesin pencari Google. Meningkatkan visibilitas, trafik, dan penjualan online Anda."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Jasa SEO Jakarta - Tingkatkan Visibilitas Website Anda di Google" />
        <meta
          property="og:description"
          content="Dapatkan layanan SEO profesional terbaik di Jakarta dari Pasar.Web.id. Gunakan teknik SEO terbaru untuk membawa website Anda ke peringkat teratas di Google."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/logo.png" /> {/* Ganti dengan URL gambar yang sesuai */}
        <meta property="og:url" content="https://pasar.web.id/jasa-seo-jakarta" /> {/* Ganti dengan URL website Anda */}
        <link rel="canonical" href="https://pasar.web.id/jasa-seo-jakarta" /> {/* Ganti dengan URL halaman Anda */}

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
