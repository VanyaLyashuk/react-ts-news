import classNames from "classnames";
import Hamburger from "../UI/Hamburger";
import Logo from "../UI/Logo";
import NavDesk from "../nav/NavDesk";

interface IProps {
  isOpened: boolean;
  toggleNav: () => void;
  categories: string[];
}

const Header = ({ isOpened, toggleNav, categories }: IProps) => {
  const headerClasses = classNames(
    "py-5 w-full fixed bg-white border-b-4 border-black z-10 lg:overflow-hidden"
  );

  return (
    <header className={headerClasses}>
      <div className="container m-auto">
        <div className="flex justify-between item-center 2xl:relative">
          <Logo />
          <Hamburger isOpened={isOpened} toggleNav={toggleNav} />
          <NavDesk categories={categories}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
