import classNames from 'classnames';
interface IProps {
  categories: string[];
  isOpened: boolean;
}

const NavMob = ({categories, isOpened}: IProps) => {
  const navClasses = classNames("pt-8 w-0 bg-white overflow-hidden transition-all duration-300	 min-h-screen  absolute left-0 top-[97px] lg:hidden", {" w-[270px] md:w-[300px] transition-all border-r-4 border-black": isOpened});
  
  return (
    <nav className={navClasses}>
      <ul>
        {categories.map((category: string) => {
          const linkClasses = "block py-3 text-2xl tracking-wider text-center font-medium";
          const capitalizedFirstLetter = category.charAt(0).toUpperCase() + category.slice(1);

          return (
            <li key={`key-${category}`}>
              <a href="" className={linkClasses}>{capitalizedFirstLetter}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMob;
