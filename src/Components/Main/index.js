import React from 'react';
import { Row, Container } from 'reactstrap';
import Header from '../HeaderNav';
import SideMenu from '../SideNav';
import BreadCrumb from '../Breadcrumb';
import Content from '../ContentSection';
export default function Main(props){
    return(
        <div>
            
            <Container fluid>
                <Header
                    username="Budi Handoko"
                    role= "Candidate"
                />
                <Row>
                    <SideMenu/>
                    <BreadCrumb/>
                </Row>
            </Container>
        </div>
    )
}