import facebookLogo from "../../assets/footer/facebook.svg"
import instagramLogo from "../../assets/footer/instagram.svg"
import twitterLogo from "../../assets/footer/twitter.svg"
import telegramLogo from "../../assets/footer/telegram.svg"
import linkedinLogo from "../../assets/footer/linkedin.svg"


const LogosFooter = () => {
    return (
        <div className="logosFooter">
            <img className="logoFooter" src={facebookLogo} alt="logoFacebook" />
            <img className="logoFooter" src={instagramLogo} alt="logoInstagram" />
            <img className="logoFooter" src={twitterLogo} alt="logoTwitter" />
            <img className="logoFooter" src={telegramLogo} alt="logoTelegram" />
            <img className="logoFooter" src={linkedinLogo} alt="logoLinkedin" />
        </div>
    )
}

const LogosFooterMobile = () => {
    return (
        <div className="logosFooterMobile">
            <img className="logoFooter" src={facebookLogo} alt="logoFacebook" />
            <img className="logoFooter" src={instagramLogo} alt="logoInstagram" />
            <img className="logoFooter" src={twitterLogo} alt="logoTwitter" />
            <img className="logoFooter" src={telegramLogo} alt="logoTelegram" />
            <img className="logoFooter" src={linkedinLogo} alt="logoLinkedin" />
        </div>
    )
}

export { LogosFooter, LogosFooterMobile }