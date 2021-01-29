import React from 'react';
import EmployeesList from './EmployeesList';
import Search from './Search';
import Filters from './Filters';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           employees:  [
            {
              name: "Beyonce Knowles",
              department: "Music",
              age: 39,
            },
            {
              name: "Ryan Reynolds",
              department: "Film",
              age: 44,
            },
            {
              name: "Anne Hathaway",
              department: "Film",
              age: 38,
            },
            {
              name: "Ki Hong Lee",
              department: "Film",
              age: 34,
            },
            {
              name: "David Beckham",
              department: "Sports",
              age: 45,
            },
            {
              name: "Camila Cabello",
              department: "Music",
              age: 23,
            },
            {
              name: "Serena Williams",
              department: "Sports",
              age: 39,
            },
          ]
        }
    }

    render () {
        return (
        <div>
           <h1 className="title">Employee List</h1> 
           <Filters />
           <Search />
           <EmployeesList employees={this.state.employees}/>
        </div>
        )
    }
}

export default App;