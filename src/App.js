import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots:users}));
}
//use arrow function here so this remains property of App
  onSearchChange = (event) => {
    // need to use this
    this.setState({ searchfield: event.target.value })

  }

  render (){
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
return(
    <div className='tc'>
      <h1 className='f1'>RoboFriends Contacts List</h1>
      <hr />
      <SearchBox searchChange={this.onSearchChange}/>
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
        );
            }
      }



export default App
