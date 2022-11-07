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


<Route path="read-russia" 
      element={ <Readpage 
      title="Russia pauses grain deal after Ukraine strikes warships in Crimea" 
      subtitle="Russia suspended its participation in the U.N.-brokered deal" 
      date="October 29, 2022"
      author="Mary Ilyushina"
      image="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/KNNJEFH4DFY3QFHPLNPWL7LFAE.jpg&w=916"
      paraone="Russia suspended its participation in the U.N.-brokered deal that allowed Ukraine to export its grain and other agricultural products from Black Sea ports after claiming that Kyiv used the corridor to attack Kremlin ships, reigniting concerns about global food insecurity."
      paratwo="The Russian military accused Ukrainian forces of using drones to attack “military and civilian” ships near Sevastopol in Crimea in the early hours of Saturday, claiming that the strikes were carried out “with the participation of British experts."
      parathree="The Russian Foreign Ministry said separately that because of the attack it would “no longer guarantee the safety of civilian dry cargo ships participating in the Black Sea Grain Initiative and will suspend its implementation from today for an indefinite period.”"
      parafour="Britain responded to the drone attacks accusation by saying that Russia was making “false claims of an epic scale.” Ukraine did not officially claim responsibility for the attacks."
      parafive="A video that emerged on Ukrainian Telegram channels on Saturday showed a naval drone targeting what appeared to be the Russian Admiral Makarov frigate. The Makarov had reportedly replaced the flagship of the Russian navy’s Black Sea fleet, Moskva, which sank in April after Ukrainian forces hit it with Neptune anti-ship missiles. The Washington Post was not able to independently verify the authenticity of this video."
      parasix="Moscow and Kyiv signed the grain deal in July, opening up Ukrainian Black Sea ports for exports, which had been halted after Russia invaded the country on Feb. 24."
      paraseven="As part of the deal, Ukrainian pilots guided ships through the port, which Ukraine mined earlier in the war to prevent Russia from capturing key ports like Odessa. The United States and Ukraine also accused the Russian navy of laying of mines near Ukrainian coast."
      paraeight="Then the ships were given safe passage by the Russian military to sail to Turkey, which organized teams with experts from all involved parties to inspect the vessels before they set off to their destinations. Ships going into Ukraine were also inspected for weapons, a condition Moscow set to ensure the grain corridor is not used to supply Western arms to Ukraine."
      paranine="“It is vital that all parties refrain from any action that would imperil the Black Sea Grain Initiative which is a critical humanitarian effort that is clearly having a positive impact on access to food for millions of people around the world,” Stéphane Dujarric, spokesman for U.N. Secretary General António Guterres, said in a statement."
      paranten="In a Saturday tweet, Ukrainian Foreign Minister Dmytro Kuleba said that Moscow was using a “false pretext” to stop Ukraine from exporting its grain and other agricultural products."
      />} />

<Route path="read-google" 
      element={ <Readpage 
      title="Inside Google’s new Halloween-themed playable Doodle" 
      subtitle="It’s a version of a 2018 Doodle called “The Great Ghoul Duel” that was one of Google’s most popular." 
      date="October 29, 2022"
      author="Shannon Liao"
      image="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/EKTPQI3ZQNEC7K5UB6DKDMDT5Y.jpg&w=1440"
      paraone="When people open Google.com, the tech company’s Doodle team has a few seconds to hook a visitor into engaging with their games, illustrations or historical facts. This Halloween, Google is inviting people to play an online multiplayer game akin to arcade and classic phone game “Snake.”"
      paratwo="Like “Snake,” the new Google Doodle lets players move across a map, amassing pixels that follow their character and grow longer. To join, anyone can click on the Doodle to form two teams of four players with other internet strangers and attempt to collect as many “spirit flames” as possible, using a mouse to move a little ghost around. As a twist, teams can steal flames from each other. After a two-minute time limit, the team with the most flames wins."
      parathree="It’s a version of a 2018 Doodle called “The Great Ghoul Duel” that was one of Google’s most popular. This time, Google has added new maps, new characters and a new power-up. Players can earn little hats for their characters as achievements, too. The original plan was to bring back the Google Doodle in 2021, but it ended up getting delayed for a year. Googlers cited issues supporting the amount of people it expected to visit the site and play its multiplayer game."
      parafour="“It was just making sure that the servers were going to be reliable enough to launch for the huge amount of interest,” said Jacob Howcroft, lead engineer on the Google Doodle, in an interview with The Washington Post."
      parafive=""
      parasix=""
      paraseven=""
      paraeight=""
      paranine=""
      paranten=""
      />} />
    </Routes>
    </div>

  );
}

export default App;
