import React from "react";

const Hero = (props) => {
  return (
    <>
      <div className="border-2 border-gray-100 min-h-[45vh] p-4 text-center text-lg bg-white lg:w-3/4 lg:mx-auto rounded-xl mt-10 lg:mt-10 font-sans">
        {props.meaning.word && (
          <div>
            <p className="text-gray-900">
              Word:{" "}
              <strong className="text-gray-600">{props.meaning.word}</strong>
            </p>
            <p className="text-gray-900">
              Phonetics:{" "}
              <strong className="text-gray-600">
                {props.meaning.phonetic}
              </strong>
            </p>

            {/* {props.meaning.phonetics && props.meaning.phonetics[0]?.audio && (
              <audio
                src={props.meaning.phonetics[0].audio}
                controls
                className=""
              ></audio>
            )} */}

            <div>
              <h3 className="text-gray-900">Parts of Speech & Definitions:</h3>
              {props.meaning.meanings?.map((item, index) => (
                <div key={index}>
                  <p className="text-gray-900">
                    ({item.partOfSpeech}):{" "}
                    <strong className="text-gray-600">
                      {item.definitions[0]?.definition}
                    </strong>
                  </p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-gray-900">Synonyms:</h3>
              {props.meaning.meanings?.map((item, index) => (
                <div key={index}>
                  {item.synonyms?.length > 0 ? (
                    item.synonyms.map((synonym, i) => (
                      <span key={i}>
                        <strong className="text-gray-600">{synonym}</strong>
                        {i !== item.synonyms.length - 1 ? ", " : ""}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-600">No synonyms available</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;
