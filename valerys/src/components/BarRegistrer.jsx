import React from "react";
import Facebook from '../assets/img/facebook_icon-icons.com_53612.png'
import Instagram from '../assets/img/instagram_icon-icons.com_53610.png'
import Twitter from '../assets/img/twitter_icon-icons.com_53611.png'
import Pinteres from '../assets/img/pinterest_icon-icons.com_53605.png'
import Youtube from '../assets/img/youtube_icon-icons.com_53607.png'


const BarRegistrer = () => {

  return (
    <div className="containerBarRegistrer">
      <div className="titleBarRegistrer">
        <h3>¡Regístrate y recibe las mejores ofertas!</h3>
      </div>
      <div className="inputBarRegistrer">
        <div >
          <input type="email" />
          <button>Suscribirme</button>
        </div>
        <div>
          <p>Al registrarse estas aceptando los términos y condiciones</p>
        </div>
      </div>
      <div>
        <div className="containerSocialNetwork">
          <h3>Síguenos en nuestras redes sociales</h3>
        </div>
        <div>
            <img src={Facebook} alt="" className="imgMediaSocial"/>
            <img src={Instagram} alt=""className="imgMediaSocial"/>
            <img src={Twitter} alt="" className="imgMediaSocial"/>
            <img src={Pinteres} alt="" className="imgMediaSocial"/>
            <img src={Youtube} alt="" className="imgMediaSocial"/>
        </div>
      </div>
    </div>
  );
};

export default BarRegistrer;
