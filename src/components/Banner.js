import "../styles/Banner.scss";
import logo from '../assets/logo.png'

function Banner() {
  const title = 'Canisports';
    return (
      <div className="banner">
        <img src={logo} alt='Canisports' className='banner__logo'/>
        <h1 className='banner__title'>{title}</h1>
      </div>
    );
}

export default Banner;