import React, { Component } from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends Component {
  constructor(props) {
  super(props);
   this.state = {
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
     searchWords: 'string'
   }
 }

//  function searchFunction() {
//  }

 render() {
   return (
     <div>
       <Input placeholder='Search Here' onChange={(e) => this.setState({searchWords: e.currentTarget.value})} />
       <h3>Results:</h3>
       {this.state.things.filter(thing => thing.includes(this.state.searchWords).map(filterThis => (
         <li>{filterThis}</li>
       )))}
     </div>
   )
 }
}

 
export default SearchIndex;