import React from 'react';
import logo from './logo.svg';
import './App.css';
import ActorList from "./components/ActorList.js";
import Info from "./components/Info.js";
import ReactDOM from 'react-dom';

// http://www.omdbapi.com/?i=tt3896198&apikey=6c1505c1
// example api call
//http://www.omdbapi.com/?apikey=6c1505c1&t=Harry+Potter&y=2000

// let state = {
//     title:"not yet set",
//     rating:null
//}

// console.log(state.title);

// function setState(newState){
//   state.title = newState.title;
//   state.rating = newState.rating;
// }

async function getInfo(){
  return await fetch("http://www.omdbapi.com/?apikey=6c1505c1&t=Harry+Potter&y=2000").
  then(response => response.json())
  .then(result => {
    // console.log(result);
    let newState = {
      title:result.Title,
      rating:result.imdbRating
    }
    //setState(newState);
    console.log(newState)
    return newState;
  });
}

async function getInfo_1(){
  let movieInfo = await fetch("http://www.omdbapi.com/?apikey=6c1505c1&t=Harry+Potter&y=2000")
  movieInfo.json()
  
  //return await fetch("http://www.omdbapi.com/?apikey=6c1505c1&t=Harry+Potter&y=2000").
  then(response => response.json())
  .then(result => {
    // console.log(result);
    let newState = {
      title:result.Title,
      rating:result.imdbRating
    }
    //setState(newState);
    console.log(newState)
    return newState;
  });
}



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: getInfo().title,
      rating: "rating not yet set"
    }
  } 

  render () {
    //getInfo();
    console.log(this.state.title);
    return (
      <div className="App">
        <Info infoTitle = {this.state.title} />
        <ActorList />
      </div>
    );
  }
}

export default App;
