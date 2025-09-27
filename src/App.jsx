import styles from './App.module.scss';

import CommonButton from './components/ui/buttons/CommonButton/CommonButton';
import LinkButton from './components/ui/buttons/LinkButton/LinkButton';
import BodyWrapper from './components/ui/wrapper/BodyWrapper/BodyWrapper';
import FooterWrapper from './components/ui/wrapper/FooterWrapper/FooterWrapper';
import HeaderWrapper from './components/ui/wrapper/HeaderWrapper/HeaderWrapper';
import MainBlockWrapper from './components/ui/wrapper/mainBlockWrapper/MainBlockWrapper';
import ServicesCard from './components/ui/cards/ServicesCard/ServicesCard';
import NavList from './components/ui/footer/NavList/NavList';

import logoimg from './assets/image/logo.png';
import mainimg from './assets/image/main-icon.png'
import lightimg from './assets/image/IMAGE.png'
import moneyimg from './assets/image/moneyicon.png'
import okimg from './assets/image/okicon.png'

function App() {


  return (
    <div className={`${styles.app}`}>
      <HeaderWrapper>
        <div className={styles.logonavwrapper}>
          <img src={logoimg} alt="" />
          <nav className={styles.navheader}>
            <ul>
              <li><a href="">Features</a></li>
              <li><a href="">Pricing</a></li>
              <li><a href="">Integrations</a></li>
              <li><a href="">Learn</a></li>
            </ul>
          </nav>
        </div>
       <div className={styles.buttonsWrapper}>
        <LinkButton href="#">Sign In</LinkButton>
        <CommonButton width="139px" height="36px">Book a demo</CommonButton>
       </div>
      </HeaderWrapper>
      <BodyWrapper>
        <MainBlockWrapper>
          <div className={styles.textwithbtn}>
              <h1>
                Your everyday <br/>
                tasks, automated. 
              </h1>
              <p>
                Whirl lets you design and streamline <br /> your everyday tasks and workflows <br /> in just a few clicks.
              </p>
              <div className={styles.btnwrapper}>
                <CommonButton width="174px" height="43px">Book a demo</CommonButton>
                <LinkButton style="arrow">Learn more</LinkButton>
              </div>
          </div>
          <div className={styles.imagemainblock}>
            <img src={mainimg} alt="" />
          </div>
        </MainBlockWrapper>
         <MainBlockWrapper>
          <ServicesCard title="Fast. Really fast." description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." style="yellow" url={lightimg}/>
          <ServicesCard title="More bang for buck." description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." style="blue" url={moneyimg}/>
          <ServicesCard title="Safe and secure." description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." style="pink" url={okimg}/>
         </MainBlockWrapper>
      </BodyWrapper>
      <FooterWrapper>
        <div className={styles.logofooter}>
          <img src={logoimg} alt="" />
        </div>
        <div className={styles.navfooter}>
        <NavList title="Info" value1="Features" value2="Pricing" value3="Blog" value4="Support" value5="Terms & Conditions" value6="Privacy Policy"/>
        <NavList title="Admin" value1="Style Guide" value2="Licenses" value3="Instructions" value4="Changelog" value5="Password" value6="404"/>
        <div className={styles.newsletter}> 
          <p>
            Newsletter
          </p>
          <p>Sign up for the latest <br /> news, company insights, <br /> and Whirl updates.</p>
          <input type="email" className={styles.inputNewsletter} placeholder='Your email'/>
        </div>
        </div>
        
      </FooterWrapper>
    </div>
  )
}

export default App
