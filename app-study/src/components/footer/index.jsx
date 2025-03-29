import './style.sass';
import packageJson from '/package.json';



const Footer = () => {

    return (
        <div className="footer">
            <div className="footer__content">
                {packageJson.version}
            </div>
            <div className="footer__content">
                Powered by <a href="https://www.instagram.com/jevyanj" target="_blank" rel="noreferrer">JevyanJ</a>
            </div>
        </div>


    );
}

export default Footer;
