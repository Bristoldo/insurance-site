
import { NavLink } from "react-router-dom";

import { useTranslation } from "react-i18next";

import logo from "../../assets/icons/logo.png";

export default function Navbar() {

    const { t } = useTranslation();
    return (
        <div className="container-fluid nav-bar px-0 px-lg-4 py-lg-0">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <NavLink to="/" className="navbar-brand p-0">
                        {/* <h1 className="text-danger mb-0"><i className="fab fa-slack me-2"></i>Sispens</h1> */}
                        <img src={logo} alt="Logo" className="img-fluid navbar-logo" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-0 mx-lg-auto">
                            <NavLink to="/" className={({ isActive }) => isActive
                                ? "nav-item nav-link active text-danger"
                                : "nav-item nav-link"
                            }>
                                {t("navBar.home")}
                            </NavLink>

                            <NavLink to="/services" className={({ isActive }) => isActive
                                ? "nav-item nav-link active text-danger"
                                : "nav-item nav-link"
                            }>
                                {t("navBar.services")}

                            </NavLink>

                            <NavLink to="/about" className={({ isActive }) => isActive
                                ? "nav-item nav-link active text-danger"
                                : "nav-item nav-link"
                            }>
                                {t("navBar.about")}
                            </NavLink>

                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link" data-bs-toggle="dropdown">
                                    <span className="dropdown-toggle">Pages</span>
                                </a>
                                <div className="dropdown-menu">
                                    <a href="/" className="dropdown-item">Our team</a>
                                    <a href="/" className="dropdown-item">FAQ's</a>
                                </div>
                            </div>

                            <a href="#" className="nav-item nav-link">{t("navBar.signIn")}</a>

                            <div className="nav-btn px-3">
                                <a href="/" className="btn btn-danger py-2 px-4 ms-3 flex-shrink-0"> {t("navBar.contact")}</a>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-xl-flex flex-shrink-0 ps-4">
                        <a href="#" className="btn btn-light btn-lg-square rounded-circle position-relative wow tada" data-wow-delay=".9s">
                            <i className="fa fa-phone fa-2x text-danger"></i>
                            <div className="position-absolute" style={{ top: '5px', right: '8px' }}>
                                <span><i className="fa fa-comment-dots text-danger"></i></span>
                            </div>
                        </a>
                        <div className="d-flex flex-column ms-3">
                            <span>{t("navBar.callOurExperts")}</span>
                            <a href="tel:+ 0123 456 7890"><span className="text-dark">{t("navBar.free")}: + 0123 456 7890</span></a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}