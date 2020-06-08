import React from "react";
import { Background, Heading, Section,ContributionCard,ContributionWrapper} from "./style";
import "../container/App.css";
export default function completedcontributions() {
  return (
    <Background>
      <Heading>Completed Contributions</Heading>
      <Section>
          <ContributionWrapper>
        <ContributionCard>
          <h3>Transaction ID: 3341123</h3>
          <div>
            <span>User Name:</span>
            <span>John Adam</span>
          </div>
          <div className="completed-contribution-section">
            <div className="completed-contribution">
              <div>Entered date</div>
              <div>10/4/2019</div>
            </div>
            <div className="completed-contribution">
              <div>Received date</div>
              <div>10/4/2019</div>
            </div>
            <div className="completed-contribution">
              <div>Number of shares</div>
              <div>50</div>
            </div>
          </div>
          <div className="completed-contribution-section">
            <div className="completed-contribution">
              <div>Type</div>
              <div>VBS Security</div>
            </div>
            <div className="completed-contribution">
              <div>Amount</div>
              <div>$50,000.00</div>
            </div>
            <div className="completed-contribution">
              <div>Status</div>
              <div>Entered</div>
            </div>
          </div>
        </ContributionCard>
        <ContributionCard>
          <h3>Transaction ID: 3341123</h3>
          <div>
            <span>User Name:</span>
            <span>John Adam</span>
          </div>
          <div className="completed-contribution-section">
            <div className="completed-contribution">
              <div>Entered date</div>
              <div>10/4/2019</div>
            </div>
            <div className="completed-contribution">
              <div>Received date</div>
              <div>10/4/2019</div>
            </div>
            <div className="completed-contribution">
              <div>Number of shares</div>
              <div>50</div>
            </div>
          </div>
          <div className="completed-contribution-section">
            <div className="completed-contribution">
              <div>Type</div>
              <div>VBS Security</div>
            </div>
            <div className="completed-contribution">
              <div>Amount</div>
              <div>$50,000.00</div>
            </div>
            <div className="completed-contribution">
              <div>Status</div>
              <div>Entered</div>
            </div>
          </div>
        </ContributionCard>
        <ContributionCard>
          <h3>Transaction ID: 3341123</h3>
          <div>
            <span>User Name:</span>
            <span>John Adam</span>
          </div>
          <div className="completed-contribution-section">
            <div className="completed-contribution">
              <div>Entered date</div>
              <div>10/4/2019</div>
            </div>
            <div className="completed-contribution">
              <div>Received date</div>
              <div>10/4/2019</div>
            </div>
            <div className="completed-contribution">
              <div>Number of shares</div>
              <div>50</div>
            </div>
          </div>
          <div className="completed-contribution-section">
            <div className="completed-contribution">
              <div>Type</div>
              <div>VBS Security</div>
            </div>
            <div className="completed-contribution">
              <div>Amount</div>
              <div>$50,000.00</div>
            </div>
            <div className="completed-contribution">
              <div>Status</div>
              <div>Entered</div>
            </div>
          </div>
        </ContributionCard>
        
        </ContributionWrapper>
      </Section>
    </Background>
  );
}
