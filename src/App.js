import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }
//use arrow function here so this remains property of App
  onSearchChange = (event) => {
    // need to use this
    this.setState({ searchfield: event.target.value })

  }

  render (){
    const filteredRobots = this.state.robots.filter(robot =>{
    return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
  })
  return(
    <div className='tc'>
      <h1>RoboFriends Contacts List</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <CardList robots={filteredRobots} />
    </div>
      );
}
}


export default App
