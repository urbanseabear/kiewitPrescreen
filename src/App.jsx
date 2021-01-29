import React from 'react';
import EmployeesList from './EmployeesList';
import Search from './Search';
import DeptFilter from './DeptFilter';
import AgeFilter from './AgeFilter';
import './styles.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           ageLow: 0,
           ageHi: 1000,
           search: '',
           dept: '',
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
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSearch(e) {
        e.preventDefault();
        this.setState({search: e.target.value});
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({dept: e.target.id});
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({[e.target.id]: parseInt(e.target.value)})
    }
    render () {
        return (
        <div className="grid-container">
           <h1 className="title">Employee List</h1> 
           <div className="filter-container">
           <Search handleSearch={this.handleSearch} search={this.state.search} />
           <AgeFilter handleChange={this.handleChange}/>
           <DeptFilter handleClick={this.handleClick}/>
           </div>
           <EmployeesList 
           employees={this.state.employees}
           search={this.state.search.length >= 1 ? this.state.search : null}
           dept={this.state.dept !== '' ? this.state.dept : null}
           ageLow={this.state.ageLow}
           ageHi={this.state.ageHi}
           />
        </div>
        )
    }
}

export default App;