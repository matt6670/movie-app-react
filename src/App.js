import React from 'react';
import './App.css';
import Title from './components/Title';
import Info from './components/Info';
 class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        selectedMovie : null
        };
    }

   componentDidMount() {
     this.getMovieData();
   }

   getMovieData = () => {
    fetch("http://www.omdbapi.com/?apikey=6c1505c1&t=Harry+Potter&y=2000")
      .then(response => response.json())
      .then(result => this.setState(
            {
              selectedMovie: result
            },
          () => console.log("setState Completed", this.state.selectedMovie)
        )
      );
   };
   
  render() {
      const { selectedMovie } = this.state;
      if (!selectedMovie) {                                        
        return <div>Hold tight while movie are being fetched...</div>; 
      }  else {
        return (
        <div className="App">
          <Title title={this.state.selectedMovie.Title}/>
          <Info rating={this.state.selectedMovie.imdbRating} release_year={this.state.selectedMovie.Year}/>
        </div>
        )
      }
  }
}
export default App;