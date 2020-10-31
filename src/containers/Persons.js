import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

class Persons extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.personAddedHandler} />
        {this.props.persons.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.personDeletedHandler(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    persons: state.persons.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    personAddedHandler: (name, age) =>
      dispatch({ type: actionTypes.ADD, personData: { name: name, age: age } }),
    personDeletedHandler: (id) =>
      dispatch({ type: actionTypes.DELETE, resultElId: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
