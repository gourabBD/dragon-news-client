import React from 'react';
import Header from '../component/Shared/Header/Header';
import {Outlet } from "react-router-dom";
import {Container,Row,Col} from 'react-bootstrap'
import LeftSideNav from '../component/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from './../component/Shared/RightSideNav/RightSideNav';
import Footer from '../component/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>

            <Header></Header>
        <Container>
            <Row>
                <Col lg={2} className='d-none d-lg-block'>
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg={7}>
                    <Outlet></Outlet>
                </Col>
                <Col lg={3}>
                    <RightSideNav></RightSideNav>
                </Col>

            </Row>
          
        </Container>
        <Footer></Footer>
        </div>
    );
};

export default Main;