import React from "react";

const AnalysisFormContent = () => {
  return (
    <>
      <section className="analysis-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="analysis-area-content">
                <span>Analisis</span>
                <h3>Dapatkan Analisis SEO Gratis</h3>
                <p>
                  Tingkatkan visibilitas website Anda dengan analisis SEO gratis dari tim ahli kami. 
                  Isi form di bawah untuk mengetahui bagaimana kami dapat membantu bisnis Anda.
                </p>
              </div>

              <form className="contactForm">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Nama Anda *"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Email *"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="form-control"
                        placeholder="Telepon *"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="website"
                        id="website"
                        className="form-control"
                        placeholder="Website *"
                      />
                    </div>
                  </div>
                </div>

                <div className="send-btn">
                  <button type="submit" className="default-btn-one">
                    Kirim Pesan
                  </button>
                </div>
              </form>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="analysis-image right">
                <img src="/images/analysis-image.png" alt="SEO Analysis" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnalysisFormContent;
