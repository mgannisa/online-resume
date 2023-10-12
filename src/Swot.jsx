import React, { useState } from "react";
import { Tabs, Tab, Card } from "react-bootstrap";
import { swotData } from "./data";

function Swot() {
  const [key, setKey] = useState(0);

  return (
    <div className="mt-5">
      <h5 className="text-bold">SWOT Analysis</h5>
      <p>
        In evaluating my professional profile, I've identified several key
        attributes that make up my SWOT (Strengths, Weaknesses, Opportunities,
        and Threats) analysis:
      </p>
      <Card
        className="p-0"
        style={{
          borderRadius: 25,
          border: 0,
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        }}
      >
        <Card.Body className="p-4">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="nav nav-tabs d-flex justify-content-center mb-4"
          >
            {swotData.map((swot, index) => (
              <Tab eventKey={index} key={index} title={swot.label}>
                {swot.description}
              </Tab>
            ))}
          </Tabs>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Swot;
