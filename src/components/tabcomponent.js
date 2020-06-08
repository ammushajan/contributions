import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../container/App.css";
import { Background} from "./style";
import Button from "../components/button";
export default function tabcomponent(props) {
  return (
    <Tabs>
      <TabList>
        <Tab>Pending Contributions</Tab>
        <Tab>Completed Contributions</Tab>
      </TabList>
      <Background>
        <TabPanel>
          <div className="contribution-wrapper">
            <h3>Transaction ID: 3341123</h3>
            <p>Vanguard New Jersey Long-Term Tax-Exempt Fund Admiral Shares</p>
            <div className="contribution-section">
              <div className="contribution-details">
                <h4>User Name:</h4>
                <h4>John Adam</h4>
              </div>
              <div className="contribution-details">
                <h4>Entered date</h4>
                <h4>10/4/2019</h4>
              </div>
              <div className="contribution-details">
                <h4>Received date</h4>
                <h4>10/4/2019</h4>
              </div>
              <div className="contribution-details">
                <h4>Number of shares</h4>
                <h4>50</h4>
              </div>
            </div>
            <div className="contribution-section">
              <div className="contribution-details">
                <h4>Type</h4>
                <h4>VBS Security</h4>
              </div>
              <div className="contribution-details">
                <h4>Amount</h4>
                <h4>$50,000.00</h4>
              </div>
              <div className="contribution-details">
                <h4>Status</h4>
                <h4>Entered</h4>
              </div>
            </div>
            <h3>Transaction ID: 3341123</h3>
            <p>Vanguard New Jersey Long-Term Tax-Exempt Fund Admiral Shares</p>
            <div className="contribution-section">
              <div className="contribution-details">
                <h4>User Name:</h4>
                <h4>John Adam</h4>
              </div>
              <div className="contribution-details">
                <h4>Entered date</h4>
                <h4>10/4/2019</h4>
              </div>
              <div className="contribution-details">
                <h4>Received date</h4>
                <h4>10/4/2019</h4>
              </div>
              <div className="contribution-details">
                <h4>Number of shares</h4>
                <h4>50</h4>
              </div>
            </div>

            <div className="contribution-section">
              <div className="contribution-details">
                <h4>Type</h4>
                <h4>VBS Security</h4>
              </div>
              <div className="contribution-details">
                <h4>Amount</h4>
                <h4>$50,000.00</h4>
              </div>
              <div className="contribution-details">
                <h4>Status</h4>
                <h4>Entered</h4>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <h3>Transaction ID: 3341123</h3>
          <p>Vanguard New Jersey Long-Term Tax-Exempt Fund Admiral Shares</p>
          <div className="contribution-section">
            <div className="contribution-details">
              <h4>User Name:</h4>
              <h4>John Adam</h4>
            </div>
            <div className="contribution-details">
              <h4>Entered date</h4>
              <h4>10/4/2019</h4>
            </div>
            <div className="contribution-details">
              <h4>Received date</h4>
              <h4>10/4/2019</h4>
            </div>
            <div className="contribution-details">
              <h4>Number of shares</h4>
              <h4>50</h4>
            </div>
          </div>
          <div className="contribution-section">
            <div className="contribution-details">
              <h4>Type</h4>
              <h4>VBS Security</h4>
            </div>
            <div className="contribution-details">
              <h4>Amount</h4>
              <h4>$50,000.00</h4>
            </div>
            <div className="contribution-details">
              <h4>Status</h4>
              <h4>Entered</h4>
            </div>
          </div>
        </TabPanel>
        <Button balancebutton={"VIEW CONTRIBUTION ACTIVITY"}></Button>
      </Background>
    </Tabs>
  );
}
