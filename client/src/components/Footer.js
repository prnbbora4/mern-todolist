import React from 'react'
import { NavLink } from 'react-router-dom'
import "./footer.css"

const Footer = () => {
    return (
        <>
            <div className="footer-dark">
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-3 item">
                                <h3>Services</h3>
                                <ul>
                                    <li><NavLink to="/">Web design</NavLink></li>
                                    <li><NavLink to="/">Development</NavLink></li>
                                    <li><NavLink to="/">Hosting</NavLink></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 item">
                                <h3>About</h3>
                                <ul>
                                    <li><NavLink to="/">Company</NavLink></li>
                                    <li><NavLink to="/">Team</NavLink></li>
                                    <li><NavLink to="/">Careers</NavLink></li>
                                </ul>
                            </div>
                            <div className="col-md-6 item text">
                                <h3>Anonymous Chat</h3>
                                <p>We are not responsible for any kind conversations. Thanking you !</p>
                            </div>
                            <div className="col item social"><NavLink to="#"><i className="icon ion-social-facebook"></i></NavLink><NavLink to="#"><i className="icon ion-social-twitter"></i></NavLink><NavLink to="#"><i className="icon ion-social-snapchat"></i></NavLink><NavLink to="#"><i className="icon ion-social-instagram"></i></NavLink></div>
                        </div>
                        <p className="copyright">Anonymous Chat © 2021</p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer
