import Hamburger from '../UI/Hamburger';
import Logo from '../UI/Logo';

const Header = () => {
  return (
    <header className='py-4 sm:py-6'>
      <div className="container m-auto">
        <div className='flex justify-between item-center'>
          <Logo />
          <Hamburger />
        </div>
      </div>
    </header>
  )
}

export default Header
