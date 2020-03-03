import React from 'react';
import {Button} from 'reactstrap';

export default function PrimeBtn(props){
    return(
        <Button className="primeBtn"
        style={{
            background: '#FFB32C',
            borderRadius: '4px',
            borderStyle:'none',
            width: '198px',
            height: '53px'
        }}
        >
            {props.btnText}
        </Button>
    )
}

