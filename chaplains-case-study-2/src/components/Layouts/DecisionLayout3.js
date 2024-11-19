import { useEffect, useState } from "react";
import MainText from "./MainText";
import Toolbar from "./Toolbar";
import jamesDecisionData from '../Data/jamesDecisionData';



const DecisionLayoutB = (props) => {
  const [decisionStarted, startDecision] = useState(false);
  const [selected, updateSelected] = useState([]);
  const [feedback, updateFeedback] = useState([]);
  const [decisionData] = useState(jamesDecisionData)
  const [index,updateIndex] = useState(1);
  const [decisionEnded, endDecision] = useState(false)
  const [showAdvance, setAdvance] = useState(false)

  useEffect(() => {
  
  
  },[])
 

  function advance() {
    setAdvance(false)
    // if we have data, add it here.
    // we need to get the object back, so search for it here.
    for (let i = 0; i < selected.length; i++) {
      let condition = selected[i].conditions;
      let nextIndex = (parseInt(index) + 1).toString();
      console.log("condition type = " + condition.type);
      updateFeedback([])
      // if we have no conditions, just add to the index and move our data to redux
      if (condition.type !== "end") {
        updateIndex(nextIndex)
      } else {
        updateFeedback([])
        startDecision(false)
        endDecision(true)
        updateIndex(1)
        updateSelected([])
        }
      }
    }
 
 
  function handleChange (event, option){
    let feedbackDisplay = [];
    if (option.feedback.length > 0) {
      feedbackDisplay.push(option.feedback);
    }
    let selected = [
      {
        text: event.target.value,
        conditions: option.conditions,
        feedback: option.feedback,
      },
    ];
    updateSelected(selected)
    updateFeedback(feedbackDisplay)
    setAdvance(true)
   
  };

  function handleMultipleChange(event, option){
    let choices = selected;
    let feedbackDisplay = feedback;
    if (option.feedback.length > 0) {
      feedbackDisplay.push(option.feedback);
    }
    choices.push({
      text: event.target.value,
      conditions: option.conditions,
      feedback: option.feedback,
    });
    updateSelected(selected)
    updateFeedback(feedbackDisplay)
  };


  return (
    <div className="layout-page">
          <div className="flex-box flex-end">
 
 <audio controls autoPlay src="https://chaplaincy-innovation-lab-lessons.s3.amazonaws.com/nonreligious/324992__alexschmidtmeister__high_school_germany_indoor_ambience_before_class.wav">
 </audio>
 </div>
      <div className="flex-box flex-center">
        <div className="column-lg-10 column-md-12 column-sm-12">
          {props.activeScene.title !== null && (
            <h2>
              <span className="title">{props.activeScene.title}</span>
            </h2>
          )}
        </div>
      </div>
      {!decisionStarted && !decisionEnded && (
        <div>
        
          <div className="flex-box flex-center">
            <div className="column-lg-10 column-md-12 column-sm-12 text-spotlight text-blue">
              {props.activeScene.text.map((text, i) => {
                return <MainText className={`none`} text={text} key={i} />;
              })}
            </div>
        
            <div className="column-lg-10 column-md-12 column-sm-12">
              {props.activeScene.images && (
                <div className="flex-box flex-center image-div">
                  {props.activeScene.images.map((image, j) => {
                    <img src={image.image} key={j} alt={image.alt}/>;
                  })}
                </div>
              )}
            </div>
          </div>
          <div className="flex-box flex-center nav-buttons">
         
            <button className="button" onClick={() => startDecision(true)}>
              Start
            </button>
          </div>
        </div>
      )}
      <div className="flex-box flex-center">
        {decisionStarted && (
          <div className="column-lg-10 column-md-12 column-sm-12 text-spotlight text-blue">
            <MainText
              className={`none`}
              text={decisionData[index].question}
            />
              <div className="padding-sm">
             <p>Select the option below that you think is best:</p>
            </div>
            <div className="decision-area flex-box">
              {decisionData[index].options.map((option, i) => {
                return (
                  <div
                    key={i}
                    className="column-lg-4 column-md-4 column-sm-4"
                  >
                    <div className="answer-select">
                      {decisionData[index].multipleSelect && (
                        <input
                          type="checkbox"
                          value={option.text}
                          onChange={(event) =>
                            handleMultipleChange(event, option)
                          }
                          checked={selected.find(
                            (element) => element.text === option.text
                          )}
                        />
                      )}
                      {!decisionData[index].multipleSelect && (
                        <input
                          type="radio"
                          id={option.text}
                          name="choice"
                          value={option.text}
                          onChange={(event) =>
                            handleChange(event, option)
                          }
                          checked={selected.find(
                            (element) => element.text === option.text
                          )}
                        />
                      )}
                      <label className="label" htmlFor={option.text}>
                        {option.text}
                      </label>
                    </div>
                  </div>
                );
              })}
              <div className="feedback-div">
                {feedback.length > 0 && <h3>Feedback:</h3>}
                {feedback.map((feedback, i) => {
                  return (
                    <p key={i} className="true feedback">
                      {feedback}
                    </p>
                  );
                })}
              </div>
            </div>
            {selected.length !== 0 && showAdvance && (
              <div className="flex-box flex-end">
                {" "}
                <button
                  className="button button-small"
                  onClick={() => advance()}
                >
                  next
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {!decisionStarted && decisionEnded &&(
        <div>
        
          <div className="flex-box flex-center">
            <div className="col-sm-12 col-lg-10 col-md-10">
       
              <div className="decision-feedback">
            <p>Reflect on the choices you made in this situation. Remember the three tips for effectively working with non-religious people:</p>
            <ul>
              <li>Explain your role as a member of a care team.</li>
              <li>Be present and practice active listening.</li>
              <li>Practice non-judgemental thinking and openness.</li>
            </ul>
            <p>What went well in this situation? What tactics did the chaplain use to engage the person effectively?</p><p>What went poorly in this situation? What did the chaplain do that could have alienated the person?</p>
              </div>
            </div>
          </div>
      
          <Toolbar activeScene={props.activeScene} updateLayoutNumber={props.updateLayoutNumber} lesson={props.lesson} updateScene={props.updateScene}/>
        </div>
      )}
    </div>
  );
};
export default DecisionLayoutB;

 


    
  

