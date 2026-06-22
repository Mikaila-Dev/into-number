import { useEffect, useState } from "react";

export function TestComponents() {

    const [allNames, setAllNames] = useState("");
    const [output, setOutput] = useState([])
    const [result, setResult] = useState("");

  let names = [{
        alphabet: "a", inNumber: 1
    }, {
         alphabet: "b", inNumber: 2
    }, {
         alphabet: "c", inNumber: 3
    }, {
         alphabet: "d", inNumber: 4
    }, {
         alphabet: "e", inNumber: 5
    }, {
         alphabet: "f", inNumber: 6
    }, {
         alphabet: "g", inNumber: 7
    }, {
         alphabet: "h", inNumber: 8
    }, {
         alphabet: "i", inNumber: 9
    }, {
         alphabet: "j", inNumber: 10
    }, {
         alphabet: "k", inNumber: 11
    }, {
         alphabet: "l", inNumber: 12
    }, {
         alphabet: "m", inNumber: 13
    }, {
         alphabet: "n", inNumber: 14
    }, {
         alphabet: "o", inNumber: 15
    }, {
         alphabet: "p", inNumber: 16
    }, {
         alphabet: "q", inNumber: 17
    }, {
         alphabet: "r", inNumber: 18
    }, {
         alphabet: "s", inNumber: 19
    }, {
         alphabet: "t", inNumber: 20
    }, {
         alphabet: "u", inNumber: 21
    }, {
         alphabet: "v", inNumber: 22
    }, {
         alphabet: "w", inNumber: 23
    }, {
         alphabet: "x", inNumber: 24
    }, {
         alphabet: "y", inNumber: 25
    }, {
         alphabet: "z", inNumber: 26
    }];

     useEffect(() => {
     let nameHTML = [];
    const nameToMapping = output.map((nameFirst) => {
     const lower = nameFirst.toLowerCase();
    const nameMap = names.map((name) => {
     if(name.alphabet === lower){
        nameHTML += `${name.inNumber}${", "}` ; 
     }
   });
});
    setResult(nameHTML);
    setAllNames("");
},[output])
  function hello(){
     setOutput([...allNames]);
};
  return (
    <div className="main-container" >
      <div className="display-result">{result}</div>
      <input className="input-fiel" type="text" value={allNames} placeholder="Write..." onChange={(e) => setAllNames(e.target.value)}/><br />
      <button className="c-btn" onClick={hello}>Add</button>
    </div>
  );
}
