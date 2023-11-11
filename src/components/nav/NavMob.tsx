import classNames from "classnames";
import Logo from "../UI/Logo";

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
  const navLogoClasses = classNames("fixed top-6 opacity-0 transition-opacity delay-[55ms]", {"opacity-100": isOpened});

  return (
    <nav className={navClasses}>
      <div className={navLogoClasses}>
        <Logo />
      </div>
      <ul className="w-full">
        {categories.map((category: string) => {
          const linkClasses =
            "block py-3 text-2xl tracking-wider text-center font-medium";
          const capitalizedFirstLetter =
            category.charAt(0).toUpperCase() + category.slice(1);

          return (
            <li key={`key-${category}`}>
              <a href="" className={linkClasses}>
                {capitalizedFirstLetter}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMob;
