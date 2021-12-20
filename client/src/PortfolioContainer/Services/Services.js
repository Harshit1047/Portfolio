import React from "react"
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading"
import ScrollService from "../../utilities/ScrollService"
import Animations from "../../utilities/Animations"
import './Services.css'
import shape from "../../../src/assets/Testimonial/shape-bg.png";
export default function Services(props) {
    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    const options={
        loop: true,
        margin:0,
        nav : true,
        animateIn:"bounceInRight",
        animateOut:"bounceOutRight",
        dots:true,
        autoplay:true,
        smartSpeed : 1000,
        responsive :{
            0:{
                items:1,
            },
            768:{
                items:1,
            },
            1000:{
                items:3,
            },
        },
    };
    return (
        <div>
            <ScreenHeading title={"Services"} subHeading={"What I do"} />

            <section className='testimonial-section' id={props.id || ""}>
                <div className="container">
                    <div className="row">
                        <OwlCarousel className="owl-carousel" id="testimonial-carousel" {...options}>

                            <div className="col-lg-12">
                            <div className="client-info">
                                            <img src="https://www.teahub.io/photos/full/336-3369055_software-development.jpg" alt="no internet"></img>
                                        </div>
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        

                                            <h4>Software Developer</h4>

                                        
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                            <div className="client-info">
                                            <img src="https://www.teahub.io/photos/full/22-221879_-net-full-stack-developer.jpg" alt="no internet"></img>
                                        </div>
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        

                                            <h4>Full Stack Developer</h4>

                                       
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                            <div className="client-info">
                                            <img src="https://www.qtsolv.com/wp-content/uploads/2020/08/Custom-Software-Development.jpg" alt="no internet"></img>
                                        </div>
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        
                                            <h4>MERN Stack Developer</h4>

                                        
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                            <div className="client-info">
                                            <img src="https://wallpaperaccess.com/full/4391661.jpg" alt="no internet"></img>
                                        </div>
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        

                                            <h4>Java Developer</h4>

                                        
                                        
                                    </div>
                                </div>
                            </div>

                        </OwlCarousel>
                    </div>
                </div>
            </section>
            <div className="footer-image">
        <img src={shape} alt="image not responding" />
      </div>
        </div>
    )
}