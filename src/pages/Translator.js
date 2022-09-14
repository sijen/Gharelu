import translate from "translate";
import React, { useState, useEffect } from "react";

const Translator = (props) => {
  const [words, setWords] = useState();
  const [lang, setLang] = useState();
  // const list = nodeList;
  // document.body.innerHTML = document.body.innerHTML.replace("Home", "Hi");
  // useEffect(() => {}, [lang]); //this calls the below functionf
  function handelchange(e) {
    console.log("kajsdhaksjhd");
    const selectElement = document.querySelector("#select");
    const lang = e.target.value;
    // setLang(lang); //set this in parent or in context
    console.log(lang);
    Translation("hello", lang).then((res) => {
      setWords(res);
      console.log("words", words);
    });
    document.body.innerHTML = document.body.innerHTML.replace("Home", words);
  }
  return (
    <>
      <select name="choice" id="select" onChange={(e) => handelchange(e)}>
        <option value="DEFAULT" disabled>
          Choose a language ...
        </option>
        <option value="en">English</option>
        <option value="ne">Nepali</option>
      </select>
    </>
  );
};
const Translation = async (text, lang) => {
  translate.engine = "google"; // Or "yandex", "libre", "deepl"
  translate.key = process.env.GOOGLE_KEY;

  let t = await translate(text, lang);
  return t;
};

export default Translator;
