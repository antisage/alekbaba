import React from 'react'
import CollapsibleButton from '../small/CollapsibleButton';


const Scoreboard = () => {
    return (
        <div>
          <style dangerouslySetInnerHTML={{__html: "\n        body {\n    margin: 0;\n    background: black;\n    color: white;\n    font-family: roboto, arial, sans-serif;\n  }\n\n\n#s {\n  text-align: center; \n  vertical-align: middle;\n  color: red;\n}\n\n#d {\n  text-align: center; \n  vertical-align: middle;\n  color: green;\n}\n\n#i {\n  text-align: center; \n  vertical-align: middle;\n  color: blue;\n}\n\n#title {\n  display: flex;\n  justify-content:center;\n  font-size: 3vw;\n  padding: 2vw;\n}\n\n#names {\n  display: flex;\n  justify-content: center;\n}\n\n.name {\n  font-size: 5vw;\n  padding: 0vw 8.5vw; \n}\n\n#score-container {\n  display: flex;\n  justify-content: center;\n}\n\n.score {\n  /*font-size: 40px;*/\n  font-size: 16vw;\n  padding: 0vw 9.2vw;\n}\n\n.score-2 {\n  /*font-size: 40px;*/\n  font-size: 1vw;\n  padding: 0vw 32.5vw;\n}\n\n /* Style the button that is used to open and close the collapsible content */\n .collapsible {\n  background-color: rgb(0, 0, 0);\n  color: rgb(180, 180, 180);\n  cursor: pointer;\n  padding: 18px;\n  width: 100%;\n  border: none;\n  text-align: center;\n  outline: none;\n  font-size: 15px;\n}\n\n.collapsible-2 {\n  background-color: rgb(0, 0, 0);\n  color: rgb(180, 180, 180);\n  cursor: pointer;\n  padding: 18px;\n  width: 100%;\n  /*border: none;*/\n  text-align: center;\n  outline: none;\n  font-size: 1.2vw;\n}\n\n/* Style the collapsible content. Note: hidden by default */\n.content {\n  padding: 0 18px;\n     overflow: hidden;\n} \n\n/* Style the collapsible content. Note: hidden by default */\n.content-2 {\n   } \n\n.comp-row-g {\n  flex: 50%\n  padding: 3vw;\n  color: green;\n}\n\n.off-center {\n  text-align: center;\n}\n\n.comp-col {\n  float : left;\n  width: 50%\n  padding: 10px;\n}\n.comp-row {\n  text-align: center;\n  padding-top: .3vw;\n  padding-bottom: 1.1vw;\n}\n        \n        \n        " }} />
          <title>Best Human: Season 2</title>
          <div id="title">Best Human Competition: Season 2</div>
          <div id="names">
            <div className="name">Alek</div>
            <div className="name">Long</div>
          </div>
          <div id="score-container">
            <div id="alek-score" className="score">2</div>
            <div id="long-score" className="score">4</div>
          </div>
          <div id="upcoming-comp">
            <CollapsibleButton title="Ruleset">
                <div className="content">
                    <p className="off-center">First to 20 points wins, loser must wear a t-shirt of the winner's design whenever they have any planned event together</p>
                </div>
            </CollapsibleButton>
          </div>
          <div id="upcoming-comp">
          <CollapsibleButton title="Completed Competitions">
            <div className="content">
              <div className="comp-row">
                04/09/22 - Disc Golf: LONG WINS - +15 to +31 (Oof)
              </div>
              <div className="comp-row">
                04/09/22 - Spinning Playground Rotator: LONG WINS - 21 to 15 rotations
              </div>
              <div className="comp-row">
                07/10/22 - Ping Pong: LONG WINS - 2-0
              </div>
              <div className="comp-row">
                07/10/22 - Connect Four: ALEK WINS - 2-0
              </div>
              <div className="comp-row">
                08/13/22 - Tiny Ping Pong: ALEK WINS - 2-1
              </div>
              <div className="comp-row">
                08/20/22 - Billiards: LONG WINS
              </div>
            </div> 
            </CollapsibleButton>
          </div>
        </div>
      );
}

export default Scoreboard