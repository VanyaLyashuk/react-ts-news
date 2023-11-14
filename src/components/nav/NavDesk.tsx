import NavList from './NavList'

interface IProps {
  categories: string[]
}
const NavDesk = ({categories}: IProps) => {
  return (
    <nav className='hidden lg:flex 2xl:w-full'>
      <NavList categories={categories} />
    </nav>
  )
}

export default NavDesk
