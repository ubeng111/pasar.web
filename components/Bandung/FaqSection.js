import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

// Menambahkan schema markup untuk FAQ
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Apa yang dimaksud dengan layanan SEO dan bagaimana cara kerjanya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Layanan SEO (Search Engine Optimization) adalah serangkaian teknik yang diterapkan pada website untuk meningkatkan visibilitasnya di hasil pencarian mesin pencari, seperti Google. Proses SEO mencakup riset kata kunci, pengoptimalan halaman web, serta pembuatan dan pengelolaan konten berkualitas untuk menarik pengunjung dan meningkatkan peringkat situs."
      }
    },
    {
      "@type": "Question",
      "name": "Kenapa bisnis perlu menggunakan jasa SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO membantu bisnis agar lebih mudah ditemukan oleh pelanggan yang mencari produk atau layanan yang relevan dengan apa yang ditawarkan. Dengan menggunakan SEO, website Anda bisa muncul di hasil pencarian mesin pencari seperti Google, meningkatkan jumlah pengunjung yang datang dan potensi penjualan."
      }
    },
    {
      "@type": "Question",
      "name": "Apa yang harus dipertimbangkan saat memilih penyedia jasa SEO yang tepat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pilih penyedia jasa SEO yang memiliki rekam jejak yang terbukti dalam meningkatkan peringkat di mesin pencari. Pastikan mereka memiliki pemahaman yang baik tentang strategi SEO yang sesuai dengan pedoman Google, serta pengalaman dalam bekerja dengan industri serupa dengan bisnis Anda."
      }
    },
    {
      "@type": "Question",
      "name": "Apa perbedaan antara SEO umum dan SEO lokal untuk bisnis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO lokal fokus pada peningkatan visibilitas bisnis di area geografis tertentu. Ini melibatkan penggunaan kata kunci yang lebih spesifik dengan lokasi, seperti nama kota atau wilayah, agar website bisnis muncul di hasil pencarian lokal. SEO untuk bisnis lokal juga dapat melibatkan pengoptimalan di Google My Business untuk menjangkau audiens yang lebih dekat dengan lokasi fisik bisnis."
      }
    },
    {
      "@type": "Question",
      "name": "Seberapa cepat hasil SEO dapat terlihat pada website bisnis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Biasanya, hasil SEO mulai terlihat dalam waktu 3 hingga 6 bulan setelah strategi diterapkan. Kecepatan hasil dapat bervariasi tergantung pada kompetisi dalam industri dan seberapa efektif teknik SEO yang digunakan. Hasil yang lebih cepat bisa terlihat jika SEO dilakukan dengan benar dan di pasar yang lebih terfokus atau lokal."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa biaya yang diperlukan untuk menggunakan jasa SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Biaya jasa SEO bervariasi tergantung pada berbagai faktor, seperti tingkat persaingan pasar, ukuran dan kompleksitas bisnis, serta jenis layanan yang diperlukan. Umumnya, biaya mencakup analisis situs, optimasi SEO on-page dan off-page, link building, serta pembuatan konten yang relevan."
      }
    }
  ]
};

const FaqSection = () => {
  return (
    <>
      <section className="faq-section ptb-100">
        <div className="container">
          <div className="faq-area-content">
            <span>FAQ</span>
            <h3>Pertanyaan yang Sering Diajukan tentang SEO untuk Bisnis Lokal</h3> {/* Generalized heading */}
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-accordion">
                <Accordion preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Apa yang dimaksud dengan layanan SEO dan bagaimana cara kerjanya?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Layanan SEO (Search Engine Optimization) adalah serangkaian teknik yang diterapkan pada website untuk meningkatkan visibilitasnya di hasil pencarian mesin pencari, seperti Google. Proses SEO mencakup riset kata kunci, pengoptimalan halaman web, serta pembuatan dan pengelolaan konten berkualitas untuk menarik pengunjung dan meningkatkan peringkat situs.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Kenapa bisnis perlu menggunakan jasa SEO?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        SEO membantu bisnis agar lebih mudah ditemukan oleh pelanggan yang mencari produk atau layanan yang relevan dengan apa yang ditawarkan. Dengan menggunakan SEO, website Anda bisa muncul di hasil pencarian mesin pencari seperti Google, meningkatkan jumlah pengunjung yang datang dan potensi penjualan.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Apa yang harus dipertimbangkan saat memilih penyedia jasa SEO yang tepat?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Pilih penyedia jasa SEO yang memiliki rekam jejak yang terbukti dalam meningkatkan peringkat di mesin pencari. Pastikan mereka memiliki pemahaman yang baik tentang strategi SEO yang sesuai dengan pedoman Google, serta pengalaman dalam bekerja dengan industri serupa dengan bisnis Anda.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Apa perbedaan antara SEO umum dan SEO lokal untuk bisnis?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        SEO lokal fokus pada peningkatan visibilitas bisnis di area geografis tertentu. Ini melibatkan penggunaan kata kunci yang lebih spesifik dengan lokasi, seperti nama kota atau wilayah, agar website bisnis muncul di hasil pencarian lokal. SEO untuk bisnis lokal juga dapat melibatkan pengoptimalan di Google My Business untuk menjangkau audiens yang lebih dekat dengan lokasi fisik bisnis.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Seberapa cepat hasil SEO dapat terlihat pada website bisnis?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Biasanya, hasil SEO mulai terlihat dalam waktu 3 hingga 6 bulan setelah strategi diterapkan. Kecepatan hasil dapat bervariasi tergantung pada kompetisi dalam industri dan seberapa efektif teknik SEO yang digunakan. Hasil yang lebih cepat bisa terlihat jika SEO dilakukan dengan benar dan di pasar yang lebih terfokus atau lokal.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="f">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Berapa biaya yang diperlukan untuk menggunakan jasa SEO Bandung?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Biaya jasa SEO Bandung bervariasi tergantung pada berbagai faktor, seperti tingkat persaingan pasar, ukuran dan kompleksitas bisnis, serta jenis layanan yang diperlukan. Umumnya, biaya mencakup analisis situs, optimasi SEO on-page dan off-page, link building, serta pembuatan konten yang relevan.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="faq-image">
                <img src="/images/faq-image.png" alt="FAQ tentang SEO untuk Bisnis Lokal" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup untuk FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      ></script>
    </>
  );
};

export default FaqSection;
