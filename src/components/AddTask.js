import React, { Component } from 'react';

class AddTask extends Component {

    state = {
        text: '',
        checked: false,




    }


    render() {
        return (
            <div>
                <h1>To do App</h1>
                <form>
                    <div className="form_field">
                        <input type="text" placeholder="Input task name" value={this.state.text} />
                        <input type="checkbox" ckecked={this.state.checked} id="important" />
                        <label htmlFor="important">Important</label>
                    </div>

                    <div className="form_field">
                        <label htmlFor="dueDate" >Due date:</label>
                        <input type="date" id="dueDate" value="1982-06-30" min="2019-09-01" max="2019-09-30" />
                    </div>
                </form>
            </div>
        );
    }

}



export default AddTask;