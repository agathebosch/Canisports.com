import "../styles/Banner.scss";

function Banner() {
  const title = 'Canisports';
    return (
      <div className="banner">
        <img src='./assets/logo.png' alt='Canisports' className='banner__logo'/>
        <h1 className='banner__title'>{title}</h1>
      </div>
    );
}

export default Banner;