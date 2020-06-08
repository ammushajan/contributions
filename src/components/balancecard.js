import React from "react";
import { Card, BalanceName, Balance } from "./style";
import Button from "./button"
export default function balancecard(props) {
  return (
    <div>
      {props.balancearray.map((data, index) => (
        <Card>
          <BalanceName>
            {data.balancename}
            <i class="fa fa-info-circle" aria-hidden="true"></i>
          </BalanceName>
          <Balance>{data.balance}</Balance>
          {data.cta === true ? (
            <Button balancebutton={props.balancebutton}>
              {" "}
              
             
            </Button>
          ) : null}
        </Card>
      ))}
    </div>
  );
}
