import React, {Component} from 'react';

/*
const SearchBar = ()=>{
  return <input />;
};
*/

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: 'nepal'
    };
  }

  render() {
    return (
      <div>
        <input value={this.state.term} onChange={event => this.setState({term: event.target.value})}/>
        value of the input {this.state.term}
      </div>
    );
  }

};

//value of the input {this.state.term}  this will come below the <input> element to see the two way data binding


export default SearchBar;
