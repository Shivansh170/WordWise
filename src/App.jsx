import { useState } from "react";
import "./App.css";
import Wordbox from "./mycomponents/Wordbox";
import Hero from "./mycomponents/Hero";
import Navbar from "./mycomponents/Navbar";
import Footer from "./mycomponents/Footer";
function App() {
  const [word, setWord] = useState("hello");
  const [meaning, setMeaning] = useState({});

  const onHandleChange = (e) => {
    setWord(e.target.value);
  };

  const searchWord = () => {
    const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const getInfo = async () => {
      try {
        let response = await fetch(URL);
        let result = await response.json();
        setMeaning(result[0]);
        console.log(result[0]);
      } catch (error) {
        console.error("Error fetching word:", error);
      }
    };
    getInfo();
  };

  return (
    <>
      <div className="relative min-h-[100vh] bg-gray-100">
        <Navbar />
        <Wordbox
          word={word}
          onHandleChange={onHandleChange}
          searchWord={searchWord}
        />
        <h1 className="text-4xl font-bold my-8 text-center font-indie">
          Information Center
        </h1>
        <Hero meaning={meaning} />
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
