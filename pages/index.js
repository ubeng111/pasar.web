import React from "react";
import Head from "next/head"; // Impor Head dari Next.js
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/HomeThree/MainBanner";
import Features from "../components/HomeThree/Features";
import AboutContent from "../components/HomeThree/AboutContent";
import ServicesCard from "../components/HomeThree/ServicesCard";
import WhyChooseUs from "../components/HomeThree/WhyChooseUs";
import Testimonials from "../components/Common/Testimonials";
import AnalysisFormContent from "../components/HomeThree/AnalysisFormContent";
import PartnerLogos from "../components/Common/PartnerLogos";
import FaqSection from "../components/HomeThree/FaqSection";
import PricingContent from "../components/PricingPlans/PricingContent";
import Footer from "../components/Layouts/Footer";

const Index = () => {
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Product", // Menggunakan Product untuk layanan SEO
    "name": "Jasa SEO Profesional Indonesia", // Nama layanan
    "description": "Layanan SEO terbaik untuk membantu bisnis Anda mencapai peringkat teratas di Google.",
    "brand": {
      "@type": "Brand",
      "name": "Pasar.Web.id"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5", // Nilai rating
      "bestRating": "5",  // Nilai rating terbaik (misalnya 5)
      "ratingCount": "8911" // Jumlah rating
    },
    "offers": {
      "@type": "Offer",
      "url": "https://pasar.web.id/jasa-seo", // URL layanan SEO
      "priceCurrency": "IDR",
      "price": "3399000", // Harga layanan
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "priceCurrency": "IDR",
        "priceRange": "750000-10199000" // Rentang harga layanan
      }
    }
  };

  return (
    <>
      {/* Menambahkan Title dan Meta Description */}
      <Head>
        <meta name="google-site-verification" content="YZ0Oul8XC-Linh3djeSvZODJEnEA5_8g68V8SKnLvdI" />
        <title>Jasa SEO Profesional Terbaik di Indonesia</title>
        <meta
          name="description"
          content="Kami menyediakan jasa SEO profesional untuk membantu bisnis Anda mencapai peringkat teratas di mesin pencari Google. Meningkatkan visibilitas, trafik, dan penjualan online Anda."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Jasa SEO Profesional - Meningkatkan Visibilitas Website Anda" />
        <meta
          property="og:description"
          content="Dapatkan layanan SEO terbaik untuk bisnis Anda. Meningkatkan peringkat website Anda dan menarik pelanggan lebih banyak melalui teknik SEO terbaru dan terpercaya."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/logo.png" /> {/* Ganti dengan URL gambar yang sesuai */}
        <meta property="og:url" content="https://pasar.web.id" />
        <link rel="canonical" href="https://pasar.web.id" />

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
