import classNames from "classnames";
import { useEffect } from "react";
import Header from "./components/header/Header";
import NavMob from "./components/nav/NavMob";

import NewsCarousel from './components/news-carousel/NewsCarousel';
import { useAppSelector } from './hooks/hook';

const App = () => {
  const {isOpened} = useAppSelector(state => state.navigation);

  useEffect(() => {
    if (isOpened) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpened]);

  const mainClasses = classNames("h-full pt-[98px] transition-padding duration-300", {
    "h-screen overflow-y-scroll": isOpened
  });

  return (
    <>
      <Header />
      <NavMob />
      <main className={mainClasses}>
        <NewsCarousel category="Business" reversed={false}/>
        <NewsCarousel category="Entertainment" reversed={true}/>
        <NewsCarousel category="General" reversed={false}/>
        <NewsCarousel category="Health" reversed={true}/>
        <NewsCarousel category="Science" reversed={false}/>
        <NewsCarousel category="Sports" reversed={true}/>
        <NewsCarousel category="Technology" reversed={false}/>
      </main>
    </>
  );
};

export default App;
