import classNames from "classnames";
import { useAppSelector } from "../../hooks/hook";
import Logo from "../UI/Logo";
import NavDesk from "./NavDesk";
import NavList from "./NavList";

const NavMob = () => {
  const { isOpened } = useAppSelector((state) => state.navigation);

  const navClasses = classNames(
    "pt-5 landscape:pb-[80px] w-0 bg-white transition-all duration-300 overflow-x-hidden overflow-y-scroll  absolute h-full let-0 top-0 lg:hidden flex flex-col items-center z-20",
    {
      "w-[270px] md:w-[320px] transition-all border-r-4 border-black scrollbar-hide landscape:scrollbar-default":
        isOpened,
    }
  );
  const navLogoClasses = classNames(
    "sticky z-50 bg-white top-0 opacity-0 mb-5 transition-opacity delay-[55ms]",
    { "opacity-100": isOpened }
  );

  return (
    <nav className={navClasses}>
      <div className={navLogoClasses}>
        <Logo />
        <NavDesk />
      </div>
      <NavList />
    </nav>
  );
};

export default NavMob;
