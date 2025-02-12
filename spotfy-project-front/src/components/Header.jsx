import "react";
import logoSpotify from "../assets/logo/spotify-logo.png";

function Header() {
  return (
    <div className="header">
      <img src={logoSpotify} alt="Logo do Spotify" />
      <a className="header__link">
        <h1>Spotify</h1>
      </a>
    </div>
  );
}

export default Header;
