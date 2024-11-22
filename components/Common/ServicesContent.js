import React from "react";
import Link from "next/link";

const ServicesContent = () => {
  return (
    <>
      <section className="services-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Layanan</span>
            <h3>Bagaimana Kami Dapat Membantu?</h3>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-faddd4">
                  <i className="flaticon-landing-page"></i>
                </div>
                <h3>
                  <Link href="/single-service/">Optimisasi Mesin Pencari (SEO)</Link>
                </h3>
                <p>
                  Kami membantu Anda meningkatkan peringkat website Anda di mesin pencari melalui strategi SEO yang teruji dan efektif.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-cafbf1">
                  <i className="flaticon-goal"></i>
                </div>
                <h3>
                  <Link href="/single-service/">Strategi Media Sosial</Link>
                </h3>
                <p>
                  Meningkatkan kehadiran brand Anda melalui strategi media sosial yang tepat dan efektif untuk menarik audiens yang lebih luas.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-ddd5fb">
                  <i className="flaticon-contract"></i>
                </div>
                <h3>
                  <Link href="/single-service/">Analisis dan Data Real-Time</Link>
                </h3>
                <p>
                  Menggunakan data analitik untuk memantau dan mengevaluasi kinerja website Anda secara real-time, membantu Anda membuat keputusan yang lebih baik.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-fcdeee">
                  <i className="flaticon-application"></i>
                </div>
                <h3>
                  <Link href="/single-service/">Manajemen Media Online</Link>
                </h3>
                <p>
                  Kami membantu mengelola dan memaksimalkan keberadaan online Anda dengan menggunakan berbagai platform media sosial untuk mencapai tujuan bisnis.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-c5ebf9">
                  <i className="flaticon-seo"></i>
                </div>
                <h3>
                  <Link href="/single-service/">Pelaporan & Analisis</Link>
                </h3>
                <p>
                  Menyediakan laporan dan analisis mendalam untuk memantau kinerja SEO dan strategi pemasaran Anda agar dapat disesuaikan dengan tujuan bisnis Anda.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box">
                <div className="icon bg-f8fbd5">
                  <i className="flaticon-data-recovery"></i>
                </div>
                <h3>
                  <Link href="/single-service/">Pemulihan dari Penalti</Link>
                </h3>
                <p>
                  Kami membantu Anda untuk mengatasi penalti dari mesin pencari dan memulihkan peringkat website Anda dengan teknik SEO yang tepat.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="default-animation">
          <div className="shape-img1">
            <img src="/images/shape/12.svg" alt="image" />
          </div>
          <div className="shape-img2">
            <img src="/images/shape/13.svg" alt="image" />
          </div>
          <div className="shape-img3">
            <img src="/images/shape/14.png" alt="image" />
          </div>
          <div className="shape-img4">
            <img src="/images/shape/15.png" alt="image" />
          </div>
          <div className="shape-img5">
            <img src="/images/shape/2.png" alt="image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesContent;
