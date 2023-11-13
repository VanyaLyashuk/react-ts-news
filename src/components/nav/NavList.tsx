interface IProps {
  categories: string[]
}

const NavList = ({categories}: IProps) => {
  return (
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
  );
};

export default NavList;
