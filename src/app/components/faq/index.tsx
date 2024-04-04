"use client";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQ } from '@fortawesome/free-solid-svg-icons';

const Faq = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ maxWidth: "500px", width: "100%",marginTop:"10px"}}>
            <div>
            <h2
            style={{
                height:"40px",
                width:"100%",
                textAlign:"center",
                fontSize:"20px",
                fontWeight:"bold"
            }}
            >Frequently asked questions</h2>
            </div>
            <div style={{ display: "flex", width:"100%", alignItems: "center", backgroundColor: "lightgrey", padding: "20px", borderRadius: "10px", marginBottom: "20px", height: "100px" }}>
            <FontAwesomeIcon icon={faQ} style={{ marginRight: "10px" }} size="2x" />
              <div style={{
                alignContent:"center"
              }}>
                <h3>Question 1</h3>
                <p>Answer to question 1.</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", backgroundColor: "lightgrey", padding: "20px", borderRadius: "10px", marginBottom: "20px", width: "100%", height: "100px" }}>
            <FontAwesomeIcon icon={faQ} style={{ marginRight: "10px" }} size="2x" />
              <div style={{
                alignContent:"center"
              }}>
                <h3>Question 2</h3>
                <p>Answer to question 2.</p>
              </div>
            </div>
            {/* Add more FAQ items here */}
          </div>
        </div>
      );
  };
  
export default Faq;
