import React from 'react';

class PersonForm extends React.Component {

    render() {
        return (
        <div className="row jumbotron">
            <div className="col-md-3">
                <input type="text" className="form-control" value={this.props.person.firstName} onChange={this.props.onFirstNameChange} placeholder="First Name"/>
            </div>
            <div className="col-md-3">
                <input type="text" className="form-control" value={this.props.person.lastName} onChange={this.props.onLastNameChange} placeholder="Last Name"/>
            </div>
            <div className="col-md-3">
                <input type="text" className="form-control" value={this.props.person.age} onChange={this.props.onAgeChange} placeholder="Age"/>
            </div>
            <div className="col-md-1">
                <button className="btn btn-primary" onClick={this.props.onAddClick}>Add</button>
            </div>
            <div className="col-md-2">
                <button className="btn btn-danger" onClick={this.props.onClearClick}>Clear All</button>
            </div>
        </div>
    )}

}
export default PersonForm;