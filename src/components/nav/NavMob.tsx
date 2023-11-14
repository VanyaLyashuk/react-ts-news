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
    "pb-8 pt-[94px] w-0 bg-white transition-all overflow-x-hidden overflow-y-scroll duration-300 absolute h-full let-0 top-0 lg:hidden flex flex-col items-center z-20",
    {
      "w-[270px] md:w-[300px] transition-all border-r-4 border-black": isOpened,
    }
  );
  const navLogoClasses = classNames("fixed top-5 opacity-0 transition-opacity delay-[55ms]", {"opacity-100": isOpened});

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
