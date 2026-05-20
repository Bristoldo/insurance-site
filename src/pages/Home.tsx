import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroCarousel from "../components/home/HeroCarousel";
import Team from "../components/about/Team";

export default function Home() {

    return (
        <main>
            <HeroCarousel />
            <Team />
        </main>
    );
}
