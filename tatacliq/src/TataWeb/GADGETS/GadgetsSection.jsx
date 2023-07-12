import React from 'react'
import './../MENS/MensSection.css'
import { useNavigate } from 'react-router-dom';

const GadgetsSection = () => {

  const router = useNavigate();
    function gadget(){
        router('/gadgetsmultiple')
    }

  return (
    <div id="home">
      <div id="slide">
        <img onClick={gadget} src='https://assets.tatacliq.com/medias/sys_master/images/44583183417374.jpg'/>
      </div>
      <div id="cate">
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/44583182565406.jpg'/>
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/44583182630942.jpg'/>
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/45331207880734.jpg'/>
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/44583182762014.jpg'/>
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/45331207946270.jpg'/>
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/45331208077342.jpg'/>
        </div>

      </div>
      <div id="pay">
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47636191477790.jpg'/>
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47596855787550.jpg'/>
        </div>
      </div>
      <div>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396043882526.jpg'/>
      </div>
      <div id="top">
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47396043948062.jpg'/>
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47396044013598.jpg'/>
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47396044079134.jpg'/>
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47396044144670.jpg'/>
        </div>
      </div>
      <div>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396044210206.jpg'/>
      </div>
      <div id="central">
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47396044275742.jpg'/>
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47396044341278.jpg'/>
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47396044406814.jpg'/>
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47396044472350.jpg'/>
        </div>
      </div>
      <div>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396044865566.jpg'/>
      </div>
      <div id="offers">
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47396044931102.jpg'/>
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47396044996638.jpg'/>
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47396045062174.jpg'/>
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47396045127710.jpg'/>
        </div>
      </div>
      <div>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396045193246.jpg'/>
      </div>
      <div id="collection">
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47396047781918.jpg'/>
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47396047847454.jpg'/>
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47396047912990.jpg'/>
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47396047978526.jpg'/>
        </div>
      </div>
      <div>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396048699422.jpg'/>
      </div>
      <div id="top">
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47396048764958.jpg'/>
        </div>
        <div>
          <img src='https://assets.tatacliq.com/medias/sys_master/images/47396048830494.jpg'/>
        </div>
      </div>
    </div>
  )
}
  

export default GadgetsSection