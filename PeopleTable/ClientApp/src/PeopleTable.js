import { extend } from 'jquery';
import React from 'react';
import PersonRow from './PersonRow';
import PersonForm from './PersonForm'

class PeopleTable extends React.Component {

    state = {
        person: { firstName: '', lastName: '', age: '' },
        people: []
    }

    onFirstNameChange = e => {
        this.setState({ person: { ...this.state.person, firstName: e.target.value } });
    }
    onLastNameChange = e => {
        this.setState({ person: { ...this.state.person, lastName: e.target.value } });
        console.log(this.person)
    }
    onAgeChange = e => {
        this.setState({ person: { ...this.state.person, age: e.target.value } });
    }
    onAddClick = () => {
        console.log(this.people)
        const { person, people } = this.state;
        const peoplecopy = [...people, person];
        this.setState({ people: peoplecopy, person: { firstName: '', lastName: '', age: '' } });
    }
    onClearClick = () => {
        this.setState({ people: [] });
    }

    generateTable = () => {
        if (this.state.people.length == 0) {
            return < h2> No people yet - be the first to add!</h2 >
        }
        else {
            return (
            <table className="table table-hover table-bordered table-striped">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.people.map((p, idx) => <PersonRow person={p} key={idx} />)}
                </tbody>
            </table>
        )}
    }

    render() {
        return (
            <div className="container mt-5">
                <PersonForm
                    onFirstNameChange={this.onFirstNameChange}
                    onLastNameChange={this.onLastNameChange}
                    onAgeChange={this.onAgeChange}
                    onAddClick={this.onAddClick}
                    onClearClick={this.onClearClick}
                    person={this.state.person} />
                {this.generateTable()}
            </div>
        );
    }
}
export default PeopleTable;