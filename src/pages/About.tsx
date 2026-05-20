import Team from "../components/about/Team";

import { useTranslation } from "react-i18next";
export default function About() {

    const { t } = useTranslation();

    return (
        <>
            <main>
                <div className="container-fluid bg-light about py-5">
                    <div className="container py-5">
                        <div className="row g-5">
                            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
                                <div className="about-item-content bg-white rounded p-5 h-100">
                                    <h4 className="text-primary">{t("about.subtitle")}</h4>
                                    <h1 className="display-4 mb-4">{t("about.title")}</h1>
                                    {t("about.description")}
                                    <p className="text-dark"><i className="fa fa-check text-primary me-3"></i>{t("about.q1")}</p>
                                    <p className="text-dark"><i className="fa fa-check text-primary me-3"></i>{t("about.q2")}</p>
                                    <p className="text-dark mb-4"><i className="fa fa-check text-primary me-3"></i>{t("about.q3")}</p>
                                    <a className="btn btn-primary rounded-pill py-3 px-5" href="#">{t("about.more")}</a>
                                </div>
                            </div>
                            <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
                                <div className="bg-white rounded p-5 h-100">
                                    <div className="row g-4 justify-content-center">
                                        <div className="col-12">
                                            <div className="rounded bg-light">
                                                <img src="img/about-1.png" className="img-fluid rounded w-100" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="counter-item bg-light rounded p-3 h-100">
                                                <div className="counter-counting">
                                                    <span className="text-primary fs-2 fw-bold" data-toggle="counter-up">129</span>
                                                    <span className="h1 fw-bold text-primary">+</span>
                                                </div>
                                                <h4 className="mb-0 text-dark">Insurance Policies</h4>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="counter-item bg-light rounded p-3 h-100">
                                                <div className="counter-counting">
                                                    <span className="text-primary fs-2 fw-bold" data-toggle="counter-up">99</span>
                                                    <span className="h1 fw-bold text-primary">+</span>
                                                </div>
                                                <h4 className="mb-0 text-dark">Awards WON</h4>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="counter-item bg-light rounded p-3 h-100">
                                                <div className="counter-counting">
                                                    <span className="text-primary fs-2 fw-bold" data-toggle="counter-up">556</span>
                                                    <span className="h1 fw-bold text-primary">+</span>
                                                </div>
                                                <h4 className="mb-0 text-dark">Skilled Agents</h4>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="counter-item bg-light rounded p-3 h-100">
                                                <div className="counter-counting">
                                                    <span className="text-primary fs-2 fw-bold" data-toggle="counter-up">967</span>
                                                    <span className="h1 fw-bold text-primary">+</span>
                                                </div>
                                                <h4 className="mb-0 text-dark">Team Members</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Team />
        </>
    );
}