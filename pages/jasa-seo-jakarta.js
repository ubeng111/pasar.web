import React from "react";
import Head from "next/head"; // Import Head dari Next.js
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/Jakarta/MainBanner"; // Ganti Bogor dengan Jakarta
import Features from "../components/Jakarta/Features"; // Ganti Bogor dengan Jakarta
import AboutContent from "../components/Jakarta/AboutContent"; // Ganti Bogor dengan Jakarta
import ServicesCard from "../components/Jakarta/ServicesCard"; // Ganti Bogor dengan Jakarta
import WhyChooseUs from "../components/Jakarta/WhyChooseUs"; // Ganti Bogor dengan Jakarta
import Testimonials from "../components/Common/Testimonials";
import AnalysisFormContent from "../components/Jakarta/AnalysisFormContent"; // Ganti Bogor dengan Jakarta
import PartnerLogos from "../components/Common/PartnerLogos";
import FaqSection from "../components/Jakarta/FaqSection"; // Ganti Bogor dengan Jakarta
import PricingContent from "../components/PricingPlans/PricingContent";
import Footer from "../components/Layouts/Footer";

const Index = () => {
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Product", // Mengganti Service dengan Product
    "name": "Jasa SEO Jakarta", // Nama layanan tetap Jakarta
    "description": "Layanan SEO terbaik di Jakarta untuk meningkatkan peringkat website Anda di Google.",
    "brand": {
      "@type": "Brand",
      "name": "Pasar.Web.id"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5", // Nilai rating
      "bestRating": "5",  // Nilai rating terbaik (misalnya 5)
      "ratingCount": "5122" // Jumlah rating
    },
    "offers": {
      "@type": "AggregateOffer",
      "name": "Layanan Jasa SEO Jakarta", // Nama layanan tetap Jakarta
      "priceCurrency": "IDR",
      "lowPrice": "750000", // Harga terendah
      "highPrice": "33600000", // Harga tertinggi
      "offerCount": "1000", // Jumlah tawaran yang tersedia
      "url": "https://pasar.web.id/jasa-seo-jakarta", // URL penawaran tetap Jakarta
    }
  };

  return (
    <>
      {/* Menambahkan Title dan Meta Description */}
      <Head>
        <title>Jasa SEO Jakarta Profesional Murah Terbaik - Pasar.Web.id</title> {/* Ganti Bogor dengan Jakarta */}
        <meta
          name="description"
          content="Jasa SEO Jakarta dari Pasar.Web.id untuk membantu bisnis Anda mencapai peringkat tertinggi di mesin pencari Google. Meningkatkan visibilitas, trafik, dan penjualan online Anda." // Ganti Bogor dengan Jakarta
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Jasa SEO Jakarta - Tingkatkan Visibilitas Website Anda di Google" /> {/* Ganti Bogor dengan Jakarta */}
        <meta
          property="og:description"
          content="Dapatkan layanan SEO profesional terbaik di Jakarta dari Pasar.Web.id. Gunakan teknik SEO terbaru untuk membawa website Anda ke peringkat teratas di Google." // Ganti Bogor dengan Jakarta
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/logo.png" /> {/* Ganti dengan URL gambar yang sesuai */}
        <meta property="og:url" content="https://pasar.web.id/jasa-seo-jakarta" /> {/* Ganti Bogor dengan Jakarta */}
        <link rel="canonical" href="https://pasar.web.id/jasa-seo-jakarta" /> {/* Ganti Bogor dengan Jakarta */}

        {/* Schema.org untuk Aggregate Rating */}
        <script type="application/ld+json">
          {JSON.stringify(aggregateRatingSchema)}
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
