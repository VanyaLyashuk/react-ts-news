import classNames from 'classnames';
import Hamburger from '../UI/Hamburger';
import Logo from '../UI/Logo';

interface IProps {
  isOpened: boolean;
  toggleNav: () => void;
}

const Header = ({isOpened, toggleNav}: IProps) => {
  const headerClasses = classNames("py-6 w-full fixed bg-white border-b-4 border-black sm:py-6 z-10");
  return (
    <header className={headerClasses}>
      <div className="container m-auto">
        <div className='flex justify-between item-center'>
          <Logo />
          <Hamburger isOpened={isOpened} toggleNav={toggleNav}/>
        </div>
      </div>
    </header>
  )
}

export default Header
