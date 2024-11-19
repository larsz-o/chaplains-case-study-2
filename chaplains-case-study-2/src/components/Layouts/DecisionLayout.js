import { useState } from "react";
import MainText from "./MainText";
import Toolbar from "./Toolbar";
import partA from "../Data/partA";
import swal from 'sweetalert'
import { Dialog, DialogContent } from '@mui/material';
import Body from './HTMLRender';

const DecisionLayout = (props) => {
  const [decisionStarted, startDecision] = useState(true);
  const [selected, updateSelected] = useState([]);
  const [feedback, updateFeedback] = useState([]);
  const [decisionData] = useState(partA)
  const [index,updateIndex] = useState(1);
  const [decisionEnded, endDecision] = useState(false)
  const [showAdvance, setAdvance] = useState(false)
  const [input, setInput] = useState([])
  const [open, setOpen] = useState(false)

  // when hitting submit, add open text entry to local storage to save for later
    function handleInput(text){
     let data = input;
     localStorage.setItem(text, data);
     swal({
      title: `Keep these feelings in mind as you progress through the scenario.`,
      text: `Your response: ${data}`,
    }).then(() => {
      advance();
    });
    
    
    }
 

  function advance() {

    setAdvance(false)
    // if we have data, add it here.
    // we need to get the object back, so search for it here.
    if(decisionData[index].end) {
      console.log("end")
      updateFeedback([])
      startDecision(false)
      endDecision(true)
      updateIndex(1)
      updateSelected([])
    } else {
      for (let i = 0; i < selected.length; i++) {
        if (selected[i].conditions){
          let condition = selected[i].conditions;
          let nextIndex = (parseInt(index) + 1).toString();
          updateFeedback([])
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
    setAdvance(true)
    updateFeedback(feedbackDisplay)
   
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
     {/* <audio controls autoPlay src="https://chaplaincy-innovation-lab-lessons.s3.amazonaws.com/2025-01/flying-military-jets-27631.mp3">
      </audio>  */}
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
            {decisionData[index].type === "choice" ? (<div>
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
            )}</div>):(<div>{decisionData[index].type === "open" ? (<div className="decision-area flex-box">
            {decisionData[index].options.map((option, i) => {
              return (
                <div
                  key={i}
                  className="flex-column flex-end input-area"
                >
                  <p className="answer-select">{option.text}</p>
                  <input type="text" onChange={e => setInput(e.target.value)}/>
                  <div className="flex-box flex-end">
            <button className="button button-small"  onClick={e => handleInput(option.text)}>submit</button>
            </div>
                </div>
              );
            })}
            </div>):(  <div className="flex-box flex-end">
                {" "}
                <button
                  className="button button-small"
                  onClick={() => advance()}
                >
                  next
                </button>
              </div>)}
           
     
            </div>)}
           
            
          </div>
        )}
      </div>
      {decisionData[index].popUp !== undefined &&  <div className="flex-box flex-between nav-buttons">
             <button onClick={()=>setOpen(true)}><img  className="animate-float icon" src="https://chaplaincy-innovation-lab-lessons.s3.amazonaws.com/organizational/post-it.svg"  alt="learn more"/></button>
                
                <Dialog className="dialog-pop" open={open} onClose={()=>setOpen(false)}>
    
                    <DialogContent>
                        <div className="dialog-body">
                        <Body text={decisionData[index].popUpContent} />
                            </div>
                            <div className="flex-box flex-end ">
                            <button onClick={()=>setOpen(false)} className="button">close</button>
                            </div>
                     
                    </DialogContent>
                </Dialog>
                </div>}

      {!decisionStarted && decisionEnded &&(
        <div>
        
          <div className="flex-box flex-center">
            <div className="col-sm-12 col-lg-10 col-md-10">
       
              <div className="decision-feedback">
            <p>This was a complex situation, which may have raised a number of questions for you as you nagivated through it. Consider the following questions as you reflect on your interactions with Sergeant Ruiz.</p>
            <ul><li>What went well in this situation? What tactics did the chaplain use to engage Sergeant Ruiz effectively?</li>
              <li>What role did the Chain of Command play in relation to this situation?</li>
              <li>When does a responsibility for care end, and what boundaries for care exist?</li>
              <li>What responsibility does the chaplain have to care for the alleged perpetrator?</li>
              </ul>
            
              </div>
            </div>
          </div>
      
          <Toolbar activeScene={props.activeScene} updateLayoutNumber={props.updateLayoutNumber} lesson={props.lesson} updateScene={props.updateScene}/>
        </div>
      )}
    </div>
  );
};
export default DecisionLayout;

 


    
  

