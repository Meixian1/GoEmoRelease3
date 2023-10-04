import React, { useState } from "react";
import TextAnalysis from "../TextAnalysis";

const TextEntry = () => {
  const [textEntered, setTextEntered] = useState(
    "Hate I love"
  );

  const handleInputChange = (e) => {
    setTextEntered(e.target.value);
  };
console.log({textEntered});
  return (
      <div>
        <form>
          <label>
            <h1 className="textEntryTitle1"> Wildcard: Write Freely!</h1> <br />
            <textarea
              className="area1"
              value={textEntered}
              onChange={handleInputChange}
            ></textarea>
          </label>{" "}
          <br></br>
          <button className="btn1">Submit</button>
        </form>
      </div>
    //   {/*<div>
    //     <h1 className="textDisplayTitle">Emotional Text Display</h1>
    //     <div className="textDisplay">
    //       <TextDisplay textEntered={textEntered} />
    //     </div>
    //   </div>
    //   <br></br>
    //   TextAnalysis Component
    //   {/* Pass textEntered as a prop to TextAnalysis */}
    //   {/* <div>
    //     <h1 className="textAnalysisTitle">Emotional Text Analyzer</h1> 
    //     <div className="textAnalysis">
    //     <TextAnalysis textEntered={textEntered} />
    //     </div>
    //   </div> */}
  );
};

export default TextEntry;
