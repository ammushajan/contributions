import React from 'react'
import {Button} from "./style"
export default function button(props) {
    return (
        <Button>
         {props.balancebutton}
         <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </Button>
    )
}
