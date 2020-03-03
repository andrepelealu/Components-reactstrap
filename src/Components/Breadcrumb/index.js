import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default function BC(props){
  return (
    <div>
      <Breadcrumb
      style={{
        background: 'rgba(115, 53, 114, 0.15)',
        borderRadius: '4px'
      }}>
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">Library</a></BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

 