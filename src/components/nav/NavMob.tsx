import classNames from "classnames";
import Logo from "../UI/Logo";
import NavDesk from './NavDesk';
import NavList from './NavList';

interface IProps {
  categories: string[];
  isOpened: boolean;
}

const NavMob = ({ categories, isOpened }: IProps) => {
  const navClasses = classNames(
    "pt-5 landscape:pb-[80px] w-0 bg-white transition-all duration-300 overflow-x-hidden overflow-y-scroll  absolute h-full let-0 top-0 lg:hidden flex flex-col items-center z-20",
    {
      "w-[270px] md:w-[300px] transition-all border-r-4 border-black scrollbar-hide landscape:scrollbar-default": isOpened,
    }
  );
  const navLogoClasses = classNames("sticky z-50 bg-white top-0 opacity-0 mb-5 transition-opacity delay-[55ms]", {"opacity-100": isOpened});

  return (
    <nav className={navClasses}>
      <div className={navLogoClasses}>
        <Logo />
        <NavDesk  categories={categories}/>
      </div>
      <NavList categories={categories}/>
    </nav>
  );
};

export default NavMob;
