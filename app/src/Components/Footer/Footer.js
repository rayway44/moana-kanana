
import './Footer.css';

function Footer() {
    return (
        <div className="App">
            <div className="footer-body-container">
                <div className="footer-container">
                    <div className="footer-container-left-content">
                        <div className="footer-container-left-content-title-container">
                            <div className="footer-container-left-content-title">OUR SUPPORT</div>
                        </div>
                        <div className="footer-container-left-content-text-1">
                            Kanana’s mission is to help Pacific people build a better future with job prospects, education for their children and a high quality of life through programs devoted to financial management, basic computer skills, health, and well-being.</div>
                        <div className="footer-container-left-content-text-2">
                            FIll in the form on the right and one of our consultants will contact you discuss how we can achieve your goals.</div>
                    </div>
                    {/*--------- comment break between sections for readability ----------*/}

                    <div className="footer-container-right-content">
                        <form className="footer-container-right-content-form">
                            <input
                                placeholder="Full Name"
                                className="footer-container-right-content-form-input"
                            ></input>
                            <input
                                placeholder="Email"
                                className="footer-container-right-content-form-input"
                            ></input>
                            <input
                                placeholder="Mobile"
                                className="footer-container-right-content-form-input"
                            ></input>
                            <textarea
                                placeholder="Notes"
                                className="footer-container-right-content-form-text-area"
                                rows="10"
                            ></textarea>
                            <button className="footer-container-right-content-form-submit-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
