import React from "react";
import {Container, Row} from "reactstrap";
import Travel_HaLong3 from "../../../assets/img/photos/halong2.jpg";
import {Calendar, Clock, Star} from "react-feather";
import {useHistory} from "react-router-dom";

const ViewList = () => {

    let history = useHistory();


    return (
        <section className="py-6 bg-white">
            <h1 className="section-title">Popular Tours</h1>
            <Container>
                <Row>
                    <div className="single-destination">
                        <div className="thumb-destination">
                            <img src={Travel_HaLong3} alt="destination" />
                        </div>
                        <div className="details-destination">
                            <div className="item-list">
                                <div className="day-start">
                                    <Calendar size={16} color={"#dc834e"} style={{marginRight: 3}}/>
                                    22Feb
                                </div>
                                <div className="schedule">
                                    <Clock size={16} color={"#dc834e"} style={{marginRight: 3}}/>
                                    8 days</div>
                                <div className="star">
                                    <Star size={16} color={"#dc834e"} style={{marginRight: 3}}/>
                                    5</div>
                            </div>
                            <h2 className="title">Ha Long Bay</h2>
                            <p className="location">Quang Ninh City, Viet Nam</p>
                            <div className="book-price">
                                <div className="price">1000$</div>
                                <button className="book" onClick={() => history.push(`/tour-detail/123`)}>Book now</button>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
}
export default ViewList;