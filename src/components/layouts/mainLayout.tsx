import { Outlet, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Spinner from "./Spinner";
import Topbar from "./Topbar";
import BackToTop from "./BackToTop";

import WOW from "wow.js";


export default function MainLayout() {

    const location = useLocation();


    useEffect(() => {

        const wow = new WOW({
            live: false,
            mobile: true,
            resetAnimation: true,
        });

        wow.init();

    }, [location]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 700);

        return () => clearTimeout(timer);

    }, [location]);

    return (
        <>
            <Spinner loading={loading} />

            <Topbar />
            <Navbar />

            <Outlet />

            <Footer />
            <BackToTop />

        </>
    );
}