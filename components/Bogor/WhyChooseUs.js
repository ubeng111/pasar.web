import React from "react";
import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <>
      <div className="choose-section pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="choose-content-warp">
                <span>Kenapa Memilih Kami</span>
                <h3>Jasa SEO Terbaik di Bogor</h3>
                <p>
                  Kami menawarkan solusi SEO terbaik untuk membantu bisnis Anda mendapatkan lebih banyak perhatian di mesin pencari. Dengan pengalaman mendalam dan pendekatan yang terbukti efektif, kami pastikan website Anda mendapatkan peringkat terbaik dan menarik lebih banyak pengunjung dari Bogor dan sekitarnya.
                </p>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Proses SEO yang Terbukti Membawa Hasil</h4>
                  <p>
                    Kami menggunakan strategi SEO yang telah terbukti untuk meningkatkan visibilitas website Anda. Dari riset kata kunci hingga optimasi teknis, kami fokus pada hasil yang maksimal, membantu bisnis Anda untuk lebih terlihat di dunia digital.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Tim Ahli SEO yang Berkomitmen</h4>
                  <p>
                    Tim kami terdiri dari para ahli SEO yang berpengalaman dan sangat berdedikasi. Kami memahami seluk-beluk pasar digital, terutama di Bogor, dan siap membantu Anda mencapai tujuan SEO bisnis Anda.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Support 24/7 untuk Kepuasan Klien</h4>
                  <p>
                    Kami memberikan dukungan penuh 24 jam sehari, 7 hari seminggu, untuk memastikan setiap kebutuhan SEO Anda dilayani dengan cepat dan tepat, mendukung pertumbuhan bisnis Anda di pasar digital.
                  </p>
                </div>

                <div className="choose-btn">
                  <Link href="/about-us" className="default-btn-one">
                    Temukan Lebih Lanjut
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="choose-warp"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
