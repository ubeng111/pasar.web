import React from "react";
import Head from "next/head"; // Import Head from Next.js
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/Bogor/MainBanner";
import Features from "../components/Bogor/Features";
import AboutContent from "../components/Bogor/AboutContent";
import ServicesCard from "../components/Bogor/ServicesCard";
import WhyChooseUs from "../components/Bogor/WhyChooseUs";
import Testimonials from "../components/Common/Testimonials";
import AnalysisFormContent from "../components/Bogor/AnalysisFormContent";
import BlogCardSection from "../components/Common/BlogCardSection";
import PartnerLogos from "../components/Common/PartnerLogos";
import FaqSection from "../components/Bogor/FaqSection";
import PricingContent from "../components/PricingPlans/PricingContent";
import Footer from "../components/Layouts/Footer";

const Index = () => {
  return (
    <>
      {/* Menambahkan Title dan Meta Description */}
      <Head>
        <title>Jasa SEO Bogor Terbaik - Pasar.Web.id</title>
        <meta
          name="description"
          content="Jasa SEO Bogor dari Pasar.Web.id untuk membantu bisnis Anda mencapai peringkat tertinggi di mesin pencari Google. Meningkatkan visibilitas, trafik, dan penjualan online Anda."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Jasa SEO Bogor - Tingkatkan Visibilitas Website Anda di Google" />
        <meta
          property="og:description"
          content="Dapatkan layanan SEO profesional terbaik di Bogor dari Pasar.Web.id. Gunakan teknik SEO terbaru untuk membawa website Anda ke peringkat teratas di Google."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/logo.png" /> {/* Ganti dengan URL gambar yang sesuai */}
        <meta property="og:url" content="https://pasar.web.id/jasa-seo-bogor" /> {/* Ganti dengan URL website Anda */}
        <link rel="canonical" href="https://pasar.web.id/jasa-seo-bogor" /> {/* Ganti dengan URL halaman Anda */}

        {/* Structured Data for Aggregate Rating */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Jasa SEO Bogor",
              "provider": {
                "@type": "Organization",
                "name": "Pasar.Web.id",
                "url": "https://pasar.web.id",
                "logo": "https://pasar.web.id/images/logo.png" // Adjust this to your logo URL
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "86"
              },
              "priceRange": "Rp750.000 - Rp2.800.000",
              "url": "https://pasar.web.id/jasa-seo-bogor",
              "description": "Layanan SEO terbaik di Bogor untuk membantu bisnis Anda berkembang dan mendapatkan peringkat terbaik di Google.",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "IDR",
                "price": "750000", // Price as an example
                "priceValidUntil": "2024-12-31",
                "url": "https://pasar.web.id/jasa-seo-bogor"
              }
            }),
          }}
        />
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
