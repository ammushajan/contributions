import React, { Component } from "react";
import {
  Section,
  Heading,
  DIV,
  Fundname,
  Background
} from "../components/style";
import "./App.css";
import Balancecard from "../components/balancecard";
import Button from "../components/button";
import Tab from "../components/tabcomponent";
import Feature from "../components/feature";
import { Line } from "react-chartjs-2";
import Contribution from "../components/completedcontributions"
export default class App extends Component {
  state = {
    account: [
      { balancename: "Current Balance", balance: "$120,000", cta: false },
      { balancename: "Available Balance", balance: "$30,000.00", cta: true },
      { balancename: "Contributions YTD", balance: "$60,000", cta: true }
    ],
    primarybutton: "View Transaction Summary",
    secondarybutton: "MAKE A CONTRIBUTION",
    solidbutton: "primary",
    data: {
      labels: [1,2,3,4,5],
      datasets: [
        {
          backgroundColor: "#006778",
          data: [0,22,18,24,23.5,22.5,24]
        }
      ]
    }
  };

  getChartData = canvas =>
  {
    const data= this.state.data
    return data
  }
  render() {
    return (
      <div>
        <Section>
          <Heading>Contributions Overview</Heading>
          <DIV>
            <Fundname>The Church Fund - A1050919</Fundname>
            <label>Balances as of 12/12/2012</label>
          </DIV>
        </Section>
        <Background primary>
          <Section className="contribution-container">
            <DIV>
              <Balancecard
                balancearray={this.state.account}
                balancebutton={this.state.primarybutton}
              ></Balancecard>
              <Button balancebutton={this.state.secondarybutton}></Button>
            </DIV>
            <DIV>
              <Tab></Tab>
              <Feature></Feature>
            </DIV>
          </Section>
        </Background>
        <Line
          options={{
            responsive: true
          }}
          data={this.getChartData}
        />
        <Contribution></Contribution>
      </div>
    );
  }
}
