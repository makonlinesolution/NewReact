import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import Navmenu from '../components/nav';
// import Cofee from '../assets/cofee.png'
import Aim from '../assets/aim.svg'
import IconA from '../assets/196.svg'
import IconB from '../assets/197.svg'
import Path from '../assets/path.svg'
import iconC from '../assets/Group211.svg'
import iconD from '../assets/Group212.svg'
import iconE from '../assets/Group213.svg'
import ItemImg from '../assets/item.png'
import ServiceA from '../assets/Group218.svg'
import ServiceB from '../assets/Group749.svg'
import ServiceC from '../assets/Group750.svg'
import ServiceD from '../assets/Group751.svg'
import ServiceE from '../assets/Group752.svg'
import ServiceF from '../assets/Group753.svg'

///mobile images
import PathNew from '../assets/path_second.svg'

function About() { 
    const [isMobile, setIsMobile] = useState(false)
 
    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
            console.log(isMobile);
        } else {
            setIsMobile(false)
        }
    }
    // create an event listener
    useEffect(() => {
    window.addEventListener("resize", handleResize)
    })
    console.log(isMobile);
    if(isMobile){
        return(
            <mobileMain>
                <Navmenu/>
                <div><img className="mainImg " fluid /></div>
                {/* here section in mobile */}
                <Container>
                    {/* ////section */}
                    <Row className="aboutbox">
                        <Col>
                            <div className="">
                            <Row  className="mb-5">
                                <Col><h1 className="SuperText">About Us</h1></Col>
                            </Row>
                            <Row className="mb-3">
                                <Col className="bBox" >
                                    <Row>
                                        <Col xs={3}><img className="iconImg" src={Aim}/></Col>
                                        <Col><h1 className="iconName">Mission</h1> </Col>
                                    </Row>
                                    <Col >
                                        <h1 className="iconText">We foster an environment with unlimited opportunity to provide innovative software and services with the highest level of quality and excellence. </h1>
                                        </Col>
                                    </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col className="bBox" >
                                    <Row>
                                        <Col xs={3}><img className="iconImg" src={IconB}/></Col>
                                        <Col><h1 className="iconName">Vison</h1>  </Col>
                                    </Row>
                                    <Col >
                                        <h1 className="iconText">Bring high quality software to the world in a more efficient, affordable, and reliable way; software that creates more job opportunities and higher income for developers across the world. </h1>
                                        </Col>
                                    </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col className="bBox" >
                                    <Row>
                                        <Col xs={3}><img className="iconImg" src={IconA}/></Col>
                                        <Col><h1 className="iconName">Values</h1>  </Col>
                                    </Row>
                                    <Col >
                                        <h1 className="iconText">Hard work, growth, creativity, and honesty</h1>
                                        </Col>
                                    </Col>
                            </Row>
                            </div>
                        </Col>
                        <Col>
                            <div className="">
                            <Row>
                                <div class="leadership">
                                    <img src={PathNew}/>
                                </div>
                            </Row>
                            <Row className="FlotSection">
                                <Col className="ecliplsesection">
                                    <Row>
                                        <Col xs={3} >
                                            <div className="eclipse2"></div>
                                            <div className="eclipse"></div>
                                            <img className="eclipse4" src={ItemImg}/>
                                            <div className="eclipse3"></div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={{span: 2, offset: 4 }}>
                                        <h1 className="SuperText_B">OUR <br/> LEADERSHIP</h1>
                                    </Col>
                                    </Row>
                                </Col>
                            </Row>
                            {/* //// */}
                            <Row>
                               
                                <Col sx={12} className="lastsection">
                                        <Row className="mb-5">
                                            <Col xs={3}>
                                                <img src={iconC}/>
                                            </Col>
                                            <Col >
                                                <h1 class="pointText">Software Architect and Consultant </h1>
                                                <Row>
                                                    <Col>
                                                    <h1 class="iconText">Started and directed a software development department at an 8-figure student housing company and eventually grew the department from just one to lead a team of 5 software developers.</h1>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>  
                                        <Row className="mb-5" >
                                            <Col xs={3}>
                                                <img src={iconD}/>
                                            </Col>
                                            <Col>
                                                <h1 class="pointText">Senior Application Developer</h1>
                                                <Row>
                                                    <Col>
                                                        <h1 className="iconText">Senior web application developer partnering with a team of 25 in an agile scrum environment for LexisNexis Risk Solutions we developed the Risk Intelligence Network, a high-priority fraud platform for the U.S.</h1>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={3}>
                                                <img src={iconE}/>
                                            </Col>
                                            <Col>
                                                <h1 class="pointText">Director of Software Development</h1>
                                                <Row>
                                                    <Col>
                                                    <h1 className="iconText">Started and directed a software development department at an 8-figure student housing company and eventually grew the department from just one to lead a team of 5 software developers.</h1>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                            </Row>
                            </div>
                        </Col>
                    </Row>
                    {/* ////////////////////// */}
                    <div className="newfinalSec">

                    <Row className="justify-content-md-center mb-5">
                    <Col md="auto"><h1 className="SuperText_B">WE SPECIALIZE IN</h1></Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={3} className="serviceBox col">
                        <Row className="mb-4">
                            <Col><img 
                                src={ServiceA}
                            /></Col>
                        </Row>
                        <Row>
                            <h1 className="serviceText">WEB APPLICATION DEVELOPMENT & SOFTWARE ARCHITECTURE</h1>
                        </Row>
                    </Col>
                    <Col md={3} className="serviceBox">
                        <Row className="mb-4">
                            <Col><img 
                                src={ServiceB}
                            /></Col>
                        </Row>
                        <Row>
                            <h1 className="serviceText">AGILE SOFTWARE DEVELOPMENT & ANALYSIS</h1>
                        </Row>
                    </Col>
                    <Col md={3} className="serviceBox">
                        <Row className="mb-4">
                            <Col><img 
                                src={ServiceC}
                            /></Col>
                        </Row>
                        <Row>
                            <h1 className="serviceText">LEADERSHIP & PROBLEM SOLVING</h1>
                        </Row>
                    </Col>
                    <Col md={3} className="serviceBox">
                        <Row className="mb-4">
                            <Col><img 
                                src={ServiceD}
                            /></Col>
                        </Row>
                        <Row>
                            <h1 className="serviceText">SOFTWARE TESTING & DEBUGGING</h1>
                        </Row>
                    </Col>
                    <Col md={3} className="serviceBox">
                        <Row className="mb-4">
                            <Col><img 
                                src={ServiceE}
                            /></Col>
                        </Row>
                        <Row>
                            <h1 className="serviceText">DOCUMENTATION & CROSS-FUNCTIONAL COMMUNICATION</h1>
                        </Row>
                    </Col>
                    <Col md={3} className="serviceBox">
                        <Row className="mb-4">
                            <Col><img 
                                src={ServiceF}
                            /></Col>
                        </Row>
                        <Row>
                            <h1 className="serviceText">MOTIVATION & GROWTH</h1>
                        </Row>
                    </Col>
                </Row>
                    {/* ///////////////////// */}
                    <Row className="justify-content-md-center mt-4">
                    <Col>
                        <h1 className="finalText">Through Expanse we provide superior products and services with the highest level of quality and excellence.</h1>
                    </Col>
                </Row>
                    </div>
                </Container>
            </mobileMain>
        )
    }
    else{
    return(
        
       <main>
            <Navmenu/>
            <div><img className="mainImg " fluid /></div>
        <Container>
            <Row>
            <Col md={3}>
            <div className="aboutbox">
            <Row  className="mb-5">
                <Col><h1 className="SuperText">About Us</h1></Col>
            </Row>
            <Row className="mb-3">
                            <Col className="bBox" >
                                <Row>
                                    <Col md={3} xs={3}><img className="iconImg" src={Aim}/></Col>
                                    <Col >
                                    <h1 className="iconName">Mission</h1> 
                                    <h1 className="iconText">We foster an environment with unlimited opportunity to provide innovative software and services with the highest level of quality and excellence. </h1>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col className="bBox">
                                <Row>
                                    <Col xs={3}><img className="iconImg" src={IconB}/></Col>
                                    <Col >
                                    <h1 className="iconName">Vison</h1> 
                                    <h1 className="iconText">Bring high quality software to the world in a more efficient, affordable, and reliable way; software that creates more job opportunities and higher income for developers across the world. </h1>
                                    </Col>
                                </Row>
                            </Col>
                            </Row>
                        <Row className="mb-3" >
                            <Col className="bBox">
                                <Row>
                                    <Col xs={3}><img className="iconImg" src={IconA}/></Col>
                                    <Col >
                                    <h1 className="iconName">Values</h1> 
                                    <h1 className="iconText">Hard work, growth, creativity, and honesty</h1>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
            </div>
            </Col>
            {/* next section */}
            <Col>
            <div class="leadership">
                <Container>
                    
                <img className="pathImg" src={Path}/>
                    <Row className="mb-3">
                        <Col ><h1 className="SuperText_B">OUR <br/> LEADERSHIP</h1></Col>
                    </Row>
                    <Row className="mb-3" > <Col className="ourTextBox"><h1 className="iconText">Agile software development consultant and software architect for MDU Resources Group Inc. a fortune 1000 company. Introduced Agile Development, Agile Project Management, and Agile Roadmapping while rebuilding, and continuously deploying end-of-life applications from the ground up. </h1></Col></Row>
                    <Row className="mb-3" > <Col className="ourTextBox"><h1 className="iconText">Senior web application developer partnering with a team of 25 in an agile scrum environment for LexisNexis Risk Solutions we developed the Risk Intelligence Network, a high-priority fraud platform for the U.S.</h1></Col></Row>
                    <Row className="mb-3" > <Col className="ourTextBox"><h1 className="iconText">Started and directed a software development department at an 8-figure student housing company and eventually grew the department from just one to lead a team of 5 software developers.</h1></Col></Row>
                </Container>
            </div>
            </Col>
            {/* ??????????????? */}
            <Col className="lastsection">
                <Row className="mb-5">
                    <Col xs={3}>
                        <img src={iconC}/>
                    </Col>
                    <Col >
                        <h1 class="pointText">Software Architect and Consultant </h1>
                    </Col>
                </Row>
                <Row className="mb-5" >
                    <Col xs={3}>
                        <img src={iconD}/>
                    </Col>
                    <Col>
                        <h1 class="pointText">Senior Application Developer</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3}>
                        <img src={iconE}/>
                    </Col>
                    <Col>
                        <h1 class="pointText">Director of Software Development</h1>
                    </Col>
                </Row>
            </Col>
            </Row>
            {/* here the image section starts */}
                <Row className="FlotSection">
                    <Col className="ecliplsesection">
                        <Row>
                            <Col xs={3} >
                                <div className="eclipse2"></div>
                                <div className="eclipse"></div>
                                <img className="eclipse4" src={ItemImg}/>
                                <div className="eclipse3"></div>
                            </Col>
                            <Col xs={4} className="ceomain">
                                <h1 className="ceoText">Matthew McKeller</h1><br/>
                                <h1 className="ceoText2">CEO</h1>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                {/* here the service section start  */}
                <Row className="justify-content-md-center mb-5">
                    <Col md="auto"><h1 className="SuperText_B">WE SPECIALIZE IN</h1></Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={3} className="serviceBox col">
                        <Row className="mb-4">
                            <Col><img 
                                src={ServiceA}
                            /></Col>
                        </Row>
                        <Row>
                            <h1 className="serviceText">WEB APPLICATION DEVELOPMENT & SOFTWARE ARCHITECTURE</h1>
                        </Row>
                    </Col>
                    <Col md={3} className="serviceBox">
                        <Row className="mb-4">
                            <Col><img 
                                src={ServiceB}
                            /></Col>
                        </Row>
                        <Row>
                            <h1 className="serviceText">AGILE SOFTWARE DEVELOPMENT & ANALYSIS</h1>
                        </Row>
                    </Col>
                    <Col md={3} className="serviceBox">
                        <Row className="mb-4">
                            <Col><img 
                                src={ServiceC}
                            /></Col>
                        </Row>
                        <Row>
                            <h1 className="serviceText">LEADERSHIP & PROBLEM SOLVING</h1>
                        </Row>
                    </Col>
                    <Col md={3} className="serviceBox">
                        <Row className="mb-4">
                            <Col><img 
                                src={ServiceD}
                            /></Col>
                        </Row>
                        <Row>
                            <h1 className="serviceText">SOFTWARE TESTING & DEBUGGING</h1>
                        </Row>
                    </Col>
                    <Col md={3} className="serviceBox">
                        <Row className="mb-4">
                            <Col><img 
                                src={ServiceE}
                            /></Col>
                        </Row>
                        <Row>
                            <h1 className="serviceText">DOCUMENTATION & CROSS-FUNCTIONAL COMMUNICATION</h1>
                        </Row>
                    </Col>
                    <Col md={3} className="serviceBox">
                        <Row className="mb-4">
                            <Col><img 
                                src={ServiceF}
                            /></Col>
                        </Row>
                        <Row>
                            <h1 className="serviceText">MOTIVATION & GROWTH</h1>
                        </Row>
                    </Col>
                </Row>

                {/* here last section */}
                <Row className="justify-content-md-center">
                    <Col>
                        <h1 className="finalText">Through Expanse we provide superior products and services with the highest level of quality and excellence.</h1>
                    </Col>
                </Row>
        </Container>
       </main>
    )
}
}



export default About;