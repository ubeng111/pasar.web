import React from "react";
import Link from "next/link";

const Features = () => {
  return (
    <>
      <div className="features-section bg-color">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-features-item-two">
                <div className="icon">
                  <i className="flaticon-seo"></i>
                </div>
                <h3>
                  <Link href="/single-service">Jasa SEO Profesional</Link>
                </h3>
                <p>
                  Kami menyediakan layanan jasa SEO profesional, dengan pakar SEO yang berpengalaman untuk meningkatkan
                  peringkat website Anda di halaman pertama Google. Gunakan jasa SEO murah kami untuk mendapatkan hasil yang optimal
                  dengan harga yang kompetitif.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-features-item-two">
                <div className="icon">
                  <i className="flaticon-analytics"></i>
                </div>
                <h3>
                  <Link href="/single-service">Analisis Kompetitor SEO</Link>
                </h3>
                <p>
                  Dengan analisis kompetitor SEO yang mendalam, kami membantu Anda memahami posisi pasar dan
                  strategi SEO yang lebih baik. Dapatkan jasa SEO berkualitas dengan hasil yang menjanjikan, termasuk
                  jasa SEO halaman satu Google yang terjamin.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-features-item-two">
                <div className="icon">
                  <i className="flaticon-laptop"></i>
                </div>
                <h3>
                  <Link href="/single-service">Pemasaran Media Sosial untuk SEO</Link>
                </h3>
                <p>
                  Kami juga menawarkan layanan jasa SEO untuk pemasaran media sosial. Meningkatkan visibilitas di media sosial adalah langkah penting
                  dalam mendukung optimasi website SEO Anda, serta meningkatkan traffic organik dan interaksi yang lebih baik.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
