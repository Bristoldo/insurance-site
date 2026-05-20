import { useTranslation } from "react-i18next";

export default function Services() {
    const { t } = useTranslation();
    return (
        <main>
            <div className="container-fluid service py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
                        <h4 className="text-primary">{t("services.subtitle")}</h4>
                        <h1 className="display-4 mb-4">{t("services.title")}</h1>
                        <p className="mb-0">{t("services.description")}
                        </p>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="img/blog-1.png" className="img-fluid rounded-top w-100" alt="" />
                                    <div className="service-icon p-3">
                                        <i className="fa fa-users fa-2x"></i>
                                    </div>
                                </div>
                                <div className="service-content p-4">
                                    <div className="service-content-inner">
                                        <a href="#" className="d-inline-block h4 mb-4">{t("services.service1")}</a>
                                        <p className="mb-4">{t("services.description1")}</p>
                                        <a className="btn btn-primary rounded-pill py-2 px-4" href="#">{t("services.readMore")}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="img/blog-2.png" className="img-fluid rounded-top w-100" alt="" />
                                    <div className="service-icon p-3">
                                        <i className="fa fa-hospital fa-2x"></i>
                                    </div>
                                </div>
                                <div className="service-content p-4">
                                    <div className="service-content-inner">
                                        <a href="#" className="d-inline-block h4 mb-4">{t("services.service2")}</a>
                                        <p className="mb-4">{t("services.description2")}</p>
                                        <a className="btn btn-primary rounded-pill py-2 px-4" href="#">{t("services.readMore")}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="img/blog-3.png" className="img-fluid rounded-top w-100" alt="" />
                                    <div className="service-icon p-3">
                                        <i className="fa fa-car fa-2x"></i>
                                    </div>
                                </div>
                                <div className="service-content p-4">
                                    <div className="service-content-inner">
                                        <a href="#" className="d-inline-block h4 mb-4">{t("services.service3")}</a>
                                        <p className="mb-4">{t("services.description3")}</p>
                                        <a className="btn btn-primary rounded-pill py-2 px-4" href="#">{t("services.readMore")}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="img/blog-4.png" className="img-fluid rounded-top w-100" alt="" />
                                    <div className="service-icon p-3">
                                        <i className="fa fa-home fa-2x"></i>
                                    </div>
                                </div>
                                <div className="service-content p-4">
                                    <div className="service-content-inner">
                                        <a href="#" className="d-inline-block h4 mb-4">{t("services.service4")}</a>
                                        <p className="mb-4">{t("services.description4")}</p>
                                        <a className="btn btn-primary rounded-pill py-2 px-4" href="#">{t("services.readMore")}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
                            <a className="btn btn-primary rounded-pill py-3 px-5" href="#">{t("services.moreServices")}</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
