import React from 'react';
import Content from '../ContentSection';
import { Breadcrumb, BreadcrumbItem,Col } from 'reactstrap';

export default function BC(props){
  return (
    <Col lg="9" md="9">
      <Breadcrumb
      style={{
        background: 'rgba(115, 53, 114, 0.15)',
        borderRadius: '4px'
      }}>
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>
      <Content/>
    </Col>
  );
};

 