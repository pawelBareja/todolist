
import '../App.css';
import React, { Component } from 'react';
import TaskList from "./TaskList";


class App extends Component {

  state = {
    tasks: [{
      id: 0,
      text: 'zagrać wreszcie w Wiedźmina 3',
      date: '2018-02-15',
      important: true,
      active: true,
      finishDate: null
    },
    { id: 1, text: "zrobić dobry uczynej", date: '2020-11-12', important: false, active: true, finishDate: null },
    { id: 2, text: "pomalować dom po sylwestrze", date: '2019-09-11', important: false, active: true, finishDate: null },
    { id: 3, text: "schudnąć 30 kilogramów", date: '2019-05-20', important: true, active: true, finishDate: null },
    { id: 4, text: "sprzedać butelki po piwie (20 skrzynek)", date: '2020-11-12', important: false, active: true, finishDate: null },
    { id: 5, text: "jeszcze raz pomalować dom", date: '2019-09-11', important: false, active: true, finishDate: null },
    { id: 6, text: "fryzjer!!!", date: '2019-05-20', important: true, active: true, finishDate: null },
    { id: 7, text: "nie odbierać poleconego od komornika", date: '2020-11-12', important: false, active: true, finishDate: null },
    { id: 8, text: "kupić 2 butelki litrowe", date: '2019-09-11', important: false, active: true, finishDate: null },
    ]
  }

  render() {
    return (
      <div>
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;


