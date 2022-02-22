import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Landing.scss';
import { connect, useDispatch } from "react-redux";
import { enableCorporateTheme } from "../../redux/actions/themeActions";
import { useHistory} from "react-router-dom";

//image & video
import Avatar from "../../assets/img/avatars/man1.png";
import Travel_1 from "../../assets/img/photos/travel1.jpg";
import Travel_ChauAu from "../../assets/img/photos/chauau.jpg"
import Travel_HaLong3 from "../../assets/img/photos/halong2.jpg"
import TravelForest from '../../assets/img/videos/travel_forest.mp4'
import Travel from '../../assets/img/videos/travel.mp4'

//logo
import Logo from "../../assets/img/brands/logo.png";

//carousel
import { Carousel } from 'react-responsive-carousel';

//react-icons
import { BsArrowRightCircle,BsArrowLeftCircle } from "react-icons/bs";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Container,
  Media,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  InputGroupAddon
} from "reactstrap";

import { FastField, Form, Formik } from "formik";
import { ReactstrapInput } from "reactstrap-formik";

import {
  Box,
  User,
  Send,
  ArrowRight,
  ArrowLeft

} from "react-feather";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

import screenshotThemeCorporate from "../../assets/img/screenshots/theme-corporate.jpg";
import Dropdown from "reactstrap/lib/Dropdown";




const Navigation = (props) => {
  const [navbar, setNavbar] = useState(false);

  const changeBackGround = () => {
    if(window.scrollY >= 80) {
      setNavbar(true);
    }else {
      setNavbar(false)
    }
  }
  window.addEventListener('scroll',changeBackGround)


  return(
    <Navbar dark expand="md" className={navbar ? "navbar-landing active" : "navbar-landing"}>
      <Container>
        <NavbarBrand href="/" className="navbar-brand">
          <img src={Logo} alt="logo" height={40}/>
          Travel
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem className="d-none d-md-inline-block">
            <NavLink href="/" active className="navbar-link">
              Travel
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/" active className="navbar-link">
              Services
            </NavLink>
          </NavItem>
          <NavItem className="d-none d-md-inline-block">
            <NavLink href="" active className="navbar-link">
              About Us
            </NavLink>
          </NavItem>
          <NavItem className="d-none d-md-inline-block">
            <NavLink href="" active className="navbar-link">
              Contact
            </NavLink>
          </NavItem>
        </Nav>
        <Button
          href="https://themes.getbootstrap.com/product/appstack-react-admin-dashboard-template/"
          target="_blank"
          rel="noopener noreferrer"
          color="warning"
          className="ml-2"
          size="lg"
        >
          
          Book Now
          <Send size={16} style={{marginLeft: 4}}/>
        </Button>
      
        <div>
          {props.showMenu()}
        </div>
    </Container>
  </Navbar>
  );
}


const Intro = (props) => {

  const [hoverArrow, setHoverArrow] = useState(false);

  return (
  <section className="intro"
    onMouseEnter={() => setHoverArrow(true)}
    onMouseLeave={() => setHoverArrow(false)}
  >
    <Carousel 
      showIndicators={true} 
      animationHandler="fade"
      // swipeable={false} 
      // autoPlay 
      showStatus={false} 
      showThumbs={false}
      infiniteLoop
      renderArrowNext={(onClickHandler,hasNext,label) => 
        hasNext && (
          <div onClick={onClickHandler} title={label} className="arrownext-custom ">
            <BsArrowRightCircle size={45} color={'#CADEE6'} fontWeight={100} className={hoverArrow ? "animate__animated animate__fadeInRight" : "animate__animated animate__fadeOutRight"}/>
            {/* <ArrowRight size={45} color={'white'} fontWeight={100} className={hoverArrow ? "animate__animated animate__fadeInRight" : "animate__animated animate__fadeOutRight"}/> */}
          </div>
        )
      }
      renderArrowPrev={(onClickHandler,hasPrev,label) => 
        hasPrev && (
          <div onClick={onClickHandler} title={label} className="arrowprev-custom ">
            <BsArrowLeftCircle size={45} color={'#CADEE6'} fontWeight={100} className={hoverArrow ? "animate__animated animate__fadeInLeft":"animate__animated animate__fadeOutLeft"}/>
            {/* <ArrowLeft size={45} color={'white'} fontWeight={100} className={hoverArrow ? "animate__animated animate__fadeInLeft":"animate__animated animate__fadeOutLeft"}/> */}
          </div>
        )
      }
      renderIndicator={(onClickHandler, isSelected, index, label) => {
          if(isSelected) {
            return (
              <li 
                style={{ width: 8, height: 8, display: 'inline-block', background: '#000' }}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}              
              />
            );
          }
          return(
            <li
                style={{ width: 8, height: 8, display: 'inline-block', background: '#fff' }}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                title={`${label} ${index + 1}`}
                aria-label={`${label} ${index + 1}`}
            />
        );
        }
        
      }
      className="intro-carousel"
      >
        <div className='intro-travel' key="content-0">
          <video src={TravelForest} type="video/mp4" controls={false} loop muted className="intro-background"/>
          <div className="intro-title">
              <p className="intro-text">La Petite Venise <br></br> Colmar, France </p>
              <button className="intro-button">Explore now</button>
              <div className="intro-info">
                  <div className="intro-info__price">
                    <p>Price<br/><span>1000$</span><br/>7 days on 4 persons </p>
                  </div>
                  <div className="intro-info__from">
                    <p>Departure from <br/> <span>Viet Nam</span></p>
                  </div>
                  <div className="intro-info__departureday">
                    <p>Flight day<br/> <span>20</span> <br/>February</p>
                  </div>

              </div>
          </div>
        </div>
        {/* <video src={Travel} type="video/mp4" controls={false}  loop muted className='travel-video'/> */}
        <div className="intro-travel">
          <img src={Travel_HaLong3} alt="travel" className="intro-background" />
          <div className="intro-title">
              <p className="intro-text">Vịnh Hạ Long <br></br> Việt Nam </p>
              <button className="intro-button">Explore now</button>
              <div className="intro-info">
                  <div className="intro-info__price">
                    <p>Price<br/><span>1000$</span><br/>7 days on 4 persons </p>
                  </div>
                  <div className="intro-info__from">
                    <p>Departure from <br/> <span>Viet Nam</span></p>
                  </div>
                  <div className="intro-info__departureday">
                    <p>Flight day<br/> <span>20</span> <br/>February</p>
                  </div>

              </div>
          </div>
        </div>
        <div className="intro-travel">
          <img src={Travel_ChauAu} alt="travel" className="intro-background" />
          <div className="intro-title">
              <p className="intro-text">La Petite Venise <br></br> Colmar, France </p>
              <button className="intro-button">Explore now</button>
              <div className="intro-info">
                  <div className="intro-info__price">
                    <p>Price<br/><span>1000$</span><br/>7 days on 4 persons </p>
                  </div>
                  <div className="intro-info__from">
                    <p>Departure from <br/> <span>Viet Nam</span></p>
                  </div>
                  <div className="intro-info__departureday">
                    <p>Flight day<br/> <span>20</span> <br/>February</p>
                  </div>

              </div>
          </div>
        </div>

        
    </Carousel>
  </section>
)};

const Styles = (props) => (
  <section id="demos" className="pt-3 pb-6">
    <Container className="position-relative z-3">
      <Row>
        {/* <div>
          <span>Destination</span>
          <input type="text" name="" id="" placeholder="Where are you going?"/>
        </div> */}
        <Formik
            key={Date.parse(new Date())}    // fix bug: not-re-render when initialValues changing
            enableReinitialize
            initialValues={
                {
                    search: props.search ? props.search : ''
                }
            }
            onSubmit={
                values => {
                    props.onSearch(values.search);
                }
            }
        >

            <Form>
                <div className="search-bar">
                  <Row style={{ alignItems: "center" }}>
                    <Col xs="auto">
                      Destination
                    </Col>
                    <Col >
                        <FastField
                            type="text"
                            bsSize="lg"
                            name="search"
                            placeholder="Where are you going?"
                            component={ReactstrapInput}
                        />
                    </Col>
                  </Row>
                  <Row style={{ alignItems: "center" }}>
                    <Col xs="auto">
                      Destination
                    </Col>
                    <Col >
                        <FastField
                            type="date"
                            bsSize="lg"
                            name="date"
                            placeholder="Where are you going?"
                            component={ReactstrapInput}
                        />
                    </Col>
                  </Row>
                  <Row style={{ alignItems: "center" }}>
                    <Col xs="auto">
                      Destination
                    </Col>
                    <Col >
                        <FastField
                            className="input"
                            type="select"
                            bsSize="lg"
                            name="date"
                            placeholder="Where are you going?"
                            // component={ReactstrapInput}
                        />
                    </Col>
                  </Row>
                  <Row style={{ alignItems: "center" }}>
                    <Col xs="auto">
                          <InputGroupAddon addonType="append" color="primary" >
                              <Button type='submit'>Tìm kiếm</Button>
                          </InputGroupAddon>
                      </Col>
                  </Row>
                </div>
            </Form>
        </Formik >
      </Row>
    </Container>
  </section>
);

const Dashboards = () => (
  <section className="py-6 bg-white">
    <Container>
      <Row>
        
      </Row>
    </Container>
  </section>
);

const Features = () => (
  <section className="py-6">
    <Container>
      <Row>
        
      </Row>
    </Container>
  </section>
);

const Testimonials = () => (
  <section className="py-6 bg-white">
    <Container>
      

      <Row>
        
      </Row>
    </Container>
  </section>
);



const Footer = () => (
  <section className="landing-footer pb-6">
    <svg className="landing-footer-shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 220">
      <path fill="#F7F9FC" fill-opacity="1" d="M0,128L1440,256L1440,0L0,0Z"></path>
    </svg>
    <Container className="text-center landing-footer-container">
      <Row>
        <Col md="9" lg="8" xl="6" className="mx-auto">
          <h2 className="h1 text-white mb-3">
            Nhóm 4 Travel
          </h2>
          <Button
            color="light"
            size="lg"
            href="https://themes.getbootstrap.com/product/appstack-react-admin-dashboard-template/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-n1"
          >
            Purchase Now
          </Button>
        </Col>
      </Row>
    </Container>
  </section>
);

const Landing = (props) => {
  
  const [showDropdown, setShowDropdown] = useState(false);

  //get data user from redux
  const {userInfo} = props.userInfo;
  console.log(userInfo);
  const router = useHistory();
  const onClickSignIn = async () => {
    await router.push("/auth/sign-in");
  }
  const onClickLogOut = async () => {
    localStorage.clear();
    await router.push("/auth/sign-in");
  }

  //check Obj
  const checkEmptyObj = (obj) => {
      return Object.values(obj).every(value => {
      if(value === null){
        return true;
      }

      return false;
    });
  }
  

  const showDropDownMenu = () => {
    return (
      <UncontrolledDropdown inNavbar 
        isOpen={showDropdown}
        onFocus={() => setShowDropdown(true)}
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
        toggle={() => setShowDropdown(!showDropdown)}>
      <Dropdown 
        
      >
        
        <span className="d-none d-sm-inline-block">
          <DropdownToggle nav caret>
            <img
              src={Avatar}
              className="avatar img-fluid rounded-circle mr-1"
              alt="Chris Wood"
            />
            <span className="text-white">Hi, {userInfo.lastname + ' ' + userInfo.firstname}</span>
          </DropdownToggle>
        </span>
        <DropdownMenu right>
          <DropdownItem>
            <User size={18} className="align-middle mr-2" />
            Profile
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Settings & Privacy</DropdownItem>
          <DropdownItem>Help</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </DropdownMenu>
        
      </Dropdown>
      </UncontrolledDropdown>
    )
  }

  const showMenu = () => {
    if(checkEmptyObj(userInfo)){
      return (
      <Button onClick={onClickSignIn} color="primary"
        className="ml-6"
        size="lg">Sign in</Button>)
    }else {
      return (
        <div>
          <div className="management">
            {showDropDownMenu()}
          </div>
        </div>
      )
    }
  }


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(enableCorporateTheme());
  }, [dispatch]);

  return (
    <React.Fragment>
        <div className="main">
          <Navigation showMenu={showMenu}/>
          <Intro/>
        </div>
        <Styles />
        <Dashboards />
        <Features />
        <Testimonials />
        <Footer />

    </React.Fragment>
  )
}
const mapStateToProps = (state) => ({
  userInfo: state.userLoginInfo
});

const mapDispatchToProps = {};
export default connect(mapStateToProps,mapDispatchToProps)(Landing);
