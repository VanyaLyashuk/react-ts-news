import { useAppSelector } from '../../hooks/hook';

const NavList = () => {
  const {categories} = useAppSelector(state => state.navigation);
  return (
    <ul className="w-full lg:flex lg:items-center lg:gap-3 xl:gap-6 2xl:justify-end 2xl:gap-8">
      {categories.map((category: string) => {
        const linkClasses =
          "block py-3 text-2xl tracking-wider text-center font-medium lg:py-0 lg:px-1 lg:text-lg xl:text-xl 2xl:text-[22px] relative before:content-[''] before:bg-[#add8e6] before:w-0 before:h-2 before:left-0 before:bottom-[14px] lg:before:bottom-[3px] before:absolute before:z-[-1] before:transition-all before:duration-500 hover:before:w-full focus:before:w-full focus:outline-none 2xl:leading-[45px] 2xl:before:bottom-[11px]";
        const capitalizedFirstLetter =
          category.charAt(0).toUpperCase() + category.slice(1);

        return (
          <li key={`key-${category}`} className="flex justify-center">
            <a href="" className={linkClasses}>
              {capitalizedFirstLetter}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavList;
