import React from "react";
import Head from "next/head"; // Import Head from Next.js
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/Bandung/MainBanner"; // Ganti Surabaya dengan Bandung
import Features from "../components/Bandung/Features"; // Ganti Surabaya dengan Bandung
import AboutContent from "../components/Bandung/AboutContent"; // Ganti Surabaya dengan Bandung
import ServicesCard from "../components/Bandung/ServicesCard"; // Ganti Surabaya dengan Bandung
import WhyChooseUs from "../components/Bandung/WhyChooseUs"; // Ganti Surabaya dengan Bandung
import Testimonials from "../components/Common/Testimonials";
import AnalysisFormContent from "../components/Bandung/AnalysisFormContent"; // Ganti Surabaya dengan Bandung
import PartnerLogos from "../components/Common/PartnerLogos";
import FaqSection from "../components/Bandung/FaqSection"; // Ganti Surabaya dengan Bandung
import PricingContent from "../components/PricingPlans/PricingContent";
import Footer from "../components/Layouts/Footer";

const Index = () => {
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Jasa SEO Bandung", // Nama layanan
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5", // Nilai rating
      "bestRating": "5",  // Nilai rating terbaik (misalnya 5)
      "reviewCount": "112" // Jumlah review
    },
    "offers": {
      "@type": "Offer",
      "url": "https://pasar.web.id/jasa-seo-bandung", // URL penawaran
      "priceCurrency": "IDR",
      "price": "750000"
    }
  };

  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Jasa SEO Bandung", // Nama layanan
    "offers": {
      "@type": "Offer",
      "url": "https://pasar.web.id/jasa-seo-bandung", // Ganti Surabaya dengan Bandung
      "priceCurrency": "IDR", // Mata uang harga
      "price": "750000", // Harga satuan
      "priceValidUntil": "2025-12-31", // Tanggal sampai harga ini berlaku
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "priceCurrency": "IDR",
        "price": "750000", // Harga untuk satu unit
        "unitCode": "H87", // Ini adalah kode unit untuk layanan
        "name": "Harga Layanan SEO" // Nama layanan untuk harga
      }
    }
  };

  return (
    <>
      {/* Menambahkan Title dan Meta Description */}
      <Head>
        <title>Jasa SEO Bandung Profesional Murah Terbaik - Pasar.Web.id</title> {/* Ganti Surabaya dengan Bandung */}
        <meta
          name="description"
          content="Jasa SEO Bandung dari Pasar.Web.id untuk membantu bisnis Anda mencapai peringkat tertinggi di mesin pencari Google. Meningkatkan visibilitas, trafik, dan penjualan online Anda." // Ganti Surabaya dengan Bandung
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Jasa SEO Bandung - Tingkatkan Visibilitas Website Anda di Google" /> {/* Ganti Surabaya dengan Bandung */}
        <meta
          property="og:description"
          content="Dapatkan layanan SEO profesional terbaik di Bandung dari Pasar.Web.id. Gunakan teknik SEO terbaru untuk membawa website Anda ke peringkat teratas di Google." // Ganti Surabaya dengan Bandung
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/logo.png" /> {/* Ganti dengan URL gambar yang sesuai */}
        <meta property="og:url" content="https://pasar.web.id/jasa-seo-bandung" /> {/* Ganti Surabaya dengan Bandung */}
        <link rel="canonical" href="https://pasar.web.id/jasa-seo-bandung" /> {/* Ganti Surabaya dengan Bandung */}

        {/* Schema.org untuk Aggregate Rating */}
        <script type="application/ld+json">
          {JSON.stringify(aggregateRatingSchema)}
        </script>

        {/* Schema.org untuk Pricing (Perbaikan) */}
        <script type="application/ld+json">
          {JSON.stringify(pricingSchema)}
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
