import React from 'react';
import logo from './logo.svg';
import './App.css';
const apiKey = '9a7a7c50';
const apiUrl = 'http://www.omdbapi.com/';

function createQueryString(queryParam, apiKey)
{
  return [`s==${queryParam}`, `apikey=${apiKey}`].join('&');
}

async function fetchData(apiUrl, queryString) {
  const response = await fetch(encodeURI(apiUrl + "?"  + queryString));
  const responseBody = await response.json();
  return responseBody;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      totalCount: 0
    }
  }
   doSearch = async (searchVal)  => {
    const apiKey = '9a7a7c50';
    const apiUrl = 'http://www.omdbapi.com/';
    const responseBody = await fetchData(apiUrl, createQueryString(searchVal, apiKey));
    this.setState({
      movies: responseBody.Search,
      totalCount: responseBody.totalResults
    })
    console.log(this.state)
    
  }
  async componentDidMount() {
    this.doSearch('back to the future');
  }
  render () {
    return (
      <div className="App">
        <header>
        <NavBar onClick={this.doSearch}/>
        </header>
        <main>
        <MovieList movies={this.state.movies} />
        </main>
      </div>
    );
  }
}
function MovieList({movies}) {
return (<ul className='row justify-content-center card-group>'>{movies.map(movie => <MovieItem movie={movie}/>)}</ul>);
}
function MovieItem({movie}) {
  return (
    <div key={movie.imdbID} className="card col-md-3 mx-2 my-2 bg-light">
      <div className="card-header bg-transparent">
        <h5 className="card-title lead">{movie.Title}</h5>
      </div>
      <div className="card-body">
        <img src={movie.Poster} className="card-img-top" alt={movie.Title}/>
      </div>
      <div className="card-footer bg-transparent">
        <button className="btn btn-outline-primary">Check out</button> 
      </div>
  </div>
  );
}

function NavBar({onClick}) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <h1 className="navbar-brand">Navbar</h1>
      <button className="navbar-toggler" type="button" data-toggle="collapse" 
      data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" 
      aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <SearchBar onClick={onClick}/>
      </div>
    </nav>
  )
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: 'test'
    }
  }
  onChange = (e) => {
    this.setState({
      searchValue: e.target.value
    })
  }
  render() {
    return (
      <div className="form-inline ml-auto my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" onChange={this.onChange} value={this.state.searchValue} placeholder="Search"/>
        <button onClick={ () => this.props.onClick(this.state.searchValue)} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </div>
    )
  }
}
export default App;

