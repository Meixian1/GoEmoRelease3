import React, { useEffect, useState } from "react";
import axios from "axios";

const TextAnalysis = ({ textEntered }) => {
  const [sentenceSentiment, setSentenceSentiment] = useState("");

  useEffect(() => {
    if (textEntered) {
      const options = {
        method: "GET",
        url: "https://twinword-sentiment-analysis.p.rapidapi.com/analyze/",
        params: {
          text: textEntered,
        },
        headers: {
          "X-RapidAPI-Key": "653a490034mshe9e183172034f8ep134075jsn8d07de363aa5",
          "X-RapidAPI-Host": "twinword-sentiment-analysis.p.rapidapi.com",
        },
      };

      axios(options)
        .then((response) => {
          const sentiment = response.data.type;
          setSentenceSentiment(sentiment);
        })
        .catch((error) => {
          console.error("Error fetching sentiment analysis:", error);
        });
    }
  }, [textEntered]);

  return (
    <div>
      <h1 className="textDisplayTitle">Emotional Text Analyzer</h1>
       <div className="textAnalysis">
        <p>{textEntered}</p>
        <TextAnalysis textEntered={textEntered} />
        </div>
      </div>
  );
};

export default TextAnalysis; 