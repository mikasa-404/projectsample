import React from 'react';
import "./App.css";

function App() {
  const [data, setData] = React.useState([]);
  const [name, setName] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, name]);
    setName("");
  };
//sort map
const sortMap=(map)=>{
  const sortedMap = Object.keys(map).sort((a, b) => map[b] - map[a]);
  return sortedMap;
}
  const getMap = (array) => {
    const frequencyMap = array.reduce((map, item) => {
      map[item] = map[item] ? map[item] + 1 : 1;
      return map;
    }, {});
    return sortMap(frequencyMap);
  };
  

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter names..." />
      <button type="submit" id="btn">Submit</button>
      </form>

      <div className='items-container'>
        {data.map((item, index) => (
          <div>{item}</div>
        ))}   
      </div>
      
      <h1>
        Result with highest frequency first
      </h1>
      <div className='result-container'>
      {
        getMap(data).map((item, index) => (
          <li key={index}>{item}</li>
        ))
      }   
      </div>
      

      

    </div>
  );
}

export default App;
