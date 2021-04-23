import './App.css';
import React from 'react';
import { Button } from '@material-ui/core';
import CheckboxesResources from './components/CheckboxesResources';
import CheckboxesCities from './components/CheckboxesCities';
import Typography from '@material-ui/core/Typography';

function App() {

  const [resources, setResources] = React.useState({
    oxygen: false,
    beds: false,
    ICU: false,
    plasma: false
  });

  const [cities, setCities] = React.useState({
    pune: false,
    nashik: false,
    mumbai: false,
    delhi: false,
    bengaluru: false,
    nagpur: false,
    lucknow: false,
    indore: false,
    hyderabad: false,
    chennai: false
  });

  const filter = (state) =>{
    let rawQueryString = '';
    Object.keys(state).map((key) => {
      if(state === resources){
        if(state[key]===true){
          rawQueryString = rawQueryString.concat(`${key}%20OR%20`);
        }
      }else{
        if(state[key]===true){
          rawQueryString = rawQueryString.concat(`${key}%20`);
        }
      }
      return 0;
    });

    if(state === resources){
      const filteredQueryString = rawQueryString.slice(0, -8);
      return filteredQueryString;
    }else{
      const filteredQueryString = rawQueryString.slice(0, -3);
      return filteredQueryString;
    }
  }

  const getResourcesString = () =>{
    return filter(resources);
  }

  const getCitiesString = () =>{
    return filter(cities);
  }

  const onClickHandle = () =>{
    const resourcesString = getResourcesString();
    const citiesString = getCitiesString();
    if(resourcesString.length === 0){
      alert("Please Select A Resource First!");
    }else if(citiesString.length === 0){
      alert("Please Select A City First!");
    }else{
      alert("These resources 𝗮𝗿𝗲 𝗻𝗼𝘁 verified by the software or the developer(s) of this software. 𝗣𝗹𝗲𝗮𝘀𝗲 𝗯𝗲𝘄𝗮𝗿𝗲 𝗼𝗳 𝘀𝗰𝗮𝗺𝘀!");
      const twitterQueryString = `https://twitter.com/search?q=verified%20${citiesString}(${resourcesString})%20-need%20-needed%20-required&src=typed_query&f=live`;
      window.open(`${twitterQueryString}`, "_blank");
    }
  }

  return (
    <div className="App">
      <Typography variant="h2" color="primary">
        Get Covid Resources From Twitter
      </Typography>
      <div style={{marginTop: '2rem'}}>
      <Typography variant="h4" color="secondary">
        Resources
      </Typography>
      <CheckboxesResources state={resources} setState={setResources}/>
      </div>
      <div style={{marginTop: '2rem'}}>
      <Typography variant="h4" color="secondary">
        City
      </Typography>
      <CheckboxesCities state={cities} setState={setCities}/>
      </div>
      <div style={{marginTop: '2rem'}}>
      <Button variant="contained" color="primary" onClick={onClickHandle}>
        Go To Resources
      </Button>
      </div>
    </div>
  );
}

export default App;
