import TopIntro from "./topIntro";
import Categories from "./categories";
import MoreInfo from "../../components/moreInfo";
import Contact from "./contact";

function HomePage() {
  return (
    <section>
      <TopIntro />
      <Categories />
      <MoreInfo />
      <Contact />
    </section>
  );
}

export default HomePage;