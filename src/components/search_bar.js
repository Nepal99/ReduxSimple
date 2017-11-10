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
      <div className="serarch-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />

        <br/>value of the input: {this.state.term}<br/>
        {console.log(this.state)}
      </div>
    );
  }
  onInputChange(term){
      this.setState({term:term});
      this.props.onSearchTermChange(term);
  }

};

//value of the input {this.state.term}  this will come below the <input> element to see the two way data binding
//onChange={event => this.setState({term: event.target.value})} /> this will be below the onchange in the return

export default SearchBar;
