import { Link } from 'react-router-dom';
import '../scss/App.scss';

const HeaderLink = ({ page }) => {
  const title = page.charAt(0).toUpperCase() + page.slice(1);
  return <Link to={`/${page}`}>{title}</Link>;
}

const Header = () => {
  return (
    <div className='header'>
      <div className='nav'>
        <HeaderLink page='home' />
        <HeaderLink page='about' />
        <HeaderLink page='site' />
      </div>
    </div>
  )
}

export default Header;