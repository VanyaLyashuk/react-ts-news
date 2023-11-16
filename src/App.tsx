import classNames from "classnames";
import { useEffect } from "react";
import Header from "./components/header/Header";
import NavMob from "./components/nav/NavMob";
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
    "h-screen overflow-y-scroll pl-[270px] md:pl-[320px] lg:pl-0": isOpened
  });

  return (
    <>
      <Header />
      <NavMob />
      <main className={mainClasses}>
        <div className="container m-auto">

        </div>
      </main>
    </>
  );
};

export default App;
