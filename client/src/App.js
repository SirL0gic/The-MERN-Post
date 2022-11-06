//bsic react hooks
import React, { Component, useState, useEffect } from "react";

//importing navigation
import {Route, Routes } from "react-router-dom";

//importing pages
import HomePage from "./pages/Home";
import SportsPage from "./pages/Sports";
import Readpage from "./pages/Read";

function App() {

  // const [backendData, setBackendData] = useState([{}])
  // useEffect(() => {
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // }, [])
  
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={ <HomePage/> } />
      <Route path="sports" element={ <SportsPage/> } />
      <Route path="read-elon" 
      element={ <Readpage 
      title="Elon Musk’s planned Twitter layoffs are imminent" 
      subtitle="Tesla engineers were on-site Friday to evaluate the Twitter staff’s code, workers said, as anxiety built around Musk’s silence" 
      date="October 29, 2022"
      author="Gerrit De Vynck"
      image="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/WKECRV6SQ6EZHD4KAUXNIPE3VM.JPG&w=916"
      paraone="SAN FRANCISCO — Elon Musk’s plans to lay off large number of Twitter employees are getting underway, a course of action that could prompt fundamental changes in the way more than 200 million daily users experience the site."
      paratwo="Layoffs are expected to be broad, according to three people familiar with the discussions, who spoke on the condition of anonymity to describe private matters. One of the first targets is likely to be legal, trust, and safety, the organization that sets policy and oversees content moderation, one of the people said. Managers in information security and privacy also were among those drawing up lists Saturday of people to lay off, said a fourth person who spoke under the same conditions."
      parathree="Two of the people said that layoffs were likely to happen before Tuesday, Nov. 1, when employees are set to receive stock grants, cutting them off from compensation they had expected to receive."
      parafour="Musk’s new ownership is expected to bring sweeping changes to the social media company, which has long been regarded as an underperformer in Silicon Valley. Musk broke with previous management over the company’s approach to policing speech online. Though he is expected to ease its content moderation efforts, he indicated in a tweet Friday that he had yet to make changes to those policies. He also said he would not reinstate any banned accounts until he convened a new council on content moderation, tamping down speculation that former president Donald Trump, among others, would soon be allowed back on the site"
      parafive="For now, uncertainty inside the company is most evident around staff cuts and changes, as workers have waited for weeks to learn if they might still have a role at Twitter following Musk’s acquisition."
      parasix="Musk has a reputation as a fierce manager who is quick to replace underperformers and given at times to “rage firings.” But he also is revered for a unique ability to attract talent to companies engaged in potentially world-changing missions around climate change and space exploration, among others."
      paraseven="Throughout the weekend, Twitter employees waited anxiously for the next shoe to drop. In offices in San Francisco and New York, and on internal company messaging channels, they searched fruitlessly for news of who might be fired and how their jobs would change under Musk, according to interviews with employees who spoke on the condition of anonymity to discuss sensitive internal matters."
      paraeight="The company’s remaining senior leaders — four were unceremoniously fired late Thursday — huddled privately on Friday in offices with Musk’s team and didn’t emerge, the people said."
      paranine="In a highly unusual arrangement, engineers from Tesla were examining Twitter’s code as Musk sought input from technical experts he trusted. Musk attorney Alex Spiro was directing some aspects of the transition, including overseeing the company’s lobbyists, some of whom were told to stop holding events and sending letters to Capitol Hill."
      paranten="Musk acquired Twitter on Thursday after a months-long dispute that began when he took a large stake in the company in April. He accepted — then rejected — a seat on the board before finally striking a deal to buy the company for $44 billion. In July, Musk tried to back out of the deal, claiming Twitter had misrepresented the quantity of spam and bots on the site. Twitter then sued him for breach of contract. Rather than face trial, Musk finally executed the agreement."
      />} />
    </Routes>
    </div>

  );
}

export default App;
