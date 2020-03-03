import React from 'react';
import { Row, Col } from 'reactstrap';

export default function Main(props){
    return(
        <Row>
            <Col md="3"
            style={{backgroundColor:'red',
                    position:'fix'
        }}
            >
                <h1>kiri</h1>
            </Col>
            <Col md="9"
            style={{backgroundColor:'yellow'}}
            ><h1>kanan</h1></Col>
        </Row>
    )
}