import { useTranslation } from "react-i18next";


export default function Team() {

    const { t } = useTranslation();

    return (
        <div className="container-fluid team py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
                        <h4 className="text-danger">{t("team.subtitle")}</h4>
                        <h1 className="display-4 mb-4">{t("team.title")}</h1>
                        <p className="mb-0">{t("team.description")}
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="img/team-1.jpg" className="img-fluid rounded-top w-100" alt="" />
                                    <div className="team-icon">
                                        <a className="btn btn-danger btn-sm-square rounded-pill mb-2" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-danger btn-sm-square rounded-pill mb-2" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-danger btn-sm-square rounded-pill mb-2" href=""><i className="fab fa-linkedin-in"></i></a>
                                        <a className="btn btn-danger btn-sm-square rounded-pill mb-0" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="team-title p-4">
                                    <h4 className="mb-0">David James</h4>
                                    <p className="mb-0">{t("team.profession1")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="img/team-2.jpg" className="img-fluid rounded-top w-100" alt="" />
                                    <div className="team-icon">
                                        <a className="btn btn-danger btn-sm-square rounded-pill mb-2" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-danger btn-sm-square rounded-pill mb-2" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-danger btn-sm-square rounded-pill mb-2" href=""><i className="fab fa-linkedin-in"></i></a>
                                        <a className="btn btn-danger btn-sm-square rounded-pill mb-0" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="team-title p-4">
                                    <h4 className="mb-0">David James</h4>
                                    <p className="mb-0">{t("team.profession2")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="img/team-3.jpg" className="img-fluid rounded-top w-100" alt="" />
                                    <div className="team-icon">
                                        <a className="btn btn-danger btn-sm-square rounded-pill mb-2" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-danger btn-sm-square rounded-pill mb-2" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-danger btn-sm-square rounded-pill mb-2" href=""><i className="fab fa-linkedin-in"></i></a>
                                        <a className="btn btn-danger btn-sm-square rounded-pill mb-0" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="team-title p-4">
                                    <h4 className="mb-0">David James</h4>
                                    <p className="mb-0">{t("team.profession3")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="img/team-4.jpg" className="img-fluid rounded-top w-100" alt="" />
                                    <div className="team-icon">
                                        <a className="btn btn-danger btn-sm-square rounded-pill mb-2" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-danger btn-sm-square rounded-pill mb-2" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-danger btn-sm-square rounded-pill mb-2" href=""><i className="fab fa-linkedin-in"></i></a>
                                        <a className="btn btn-danger btn-sm-square rounded-pill mb-0" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                                <div className="team-title p-4">
                                    <h4 className="mb-0">David James</h4>
                                    <p className="mb-0">{t("team.profession4")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}