import React from 'react';
import {Button} from 'reactstrap';

export default function LogoutBtn(props){
    return(
        <Button className="primeBtn"
        style={{
            background: '#F67280',
            borderRadius: '4px',
            borderStyle:'none',
            width: '113px',
            height: '49px'
        }}
        >
            {props.btnText}
        </Button>
    )
}

