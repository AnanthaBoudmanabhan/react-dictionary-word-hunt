import { Container, Switch, withStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Definitions from './components/definitions/Definitions';
import Header from './components/header/Header';

function App() {

  const [category, setCategory] = useState("en");
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [lightMode, setLightMode] = useState(false);

  const DarkMode = withStyles({
    switchBase: {
      color: grey[300],
      '&$checked': {
        color: grey[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  useEffect(() => {
    const dictionaryApi = async () => {
      try {
        const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
        setMeanings(data.data);
      }
      catch (err) {
        console.log(err);
      }
    };
    dictionaryApi();
  }, [word, category]);

  console.log(meanings);


  return (
    <div className="App" style={{ height: "100vh", backgroundColor: lightMode ? "#fff" : "#282c34", color: lightMode ? "black" : "#fff", transition: "all 0.5s linear" }}>
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh", justifyContent: "space-evenly" }}
      >
        <div style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}>
          <span>{lightMode ? "Dark" : "Light"} Mode</span>
          <DarkMode checked={lightMode} onChange={() => setLightMode((prevState) => !prevState)} />
        </div>
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          lightMode={lightMode}
        />
        {meanings && <Definitions
          word={word}
          meanings={meanings}
          category={category}
          lightMode={lightMode}
        />}
      </Container>
    </div>
  );
}

export default App;
