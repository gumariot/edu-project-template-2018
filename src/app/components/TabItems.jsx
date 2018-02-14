import React, { Component, PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configure from './store';

class TabItems extends Component {
    constructor(props) {
      super(props);
      this.state = {
        episode : props.crtEpisode,
      };
    }

    deleteEpisode(id){
      fetch('/api/episodes/'+id, {
        method: 'DELETE',
      }).then(result => {
        result.json().then((res) => {
          this.props.removeEpisode(res.message.data);
        })
      })
    }

    render() {
        return(
          <tbody>
            <tr key={this.state.episode.id}>
              <td>{this.state.episode.id}</td>
              <td>{this.state.episode.name}</td>
              <td>{this.state.episode.code}</td>
              <td>{this.state.episode.score}</td>
              <td>
                <button style={{marginLeft:'8px'}} className="btn btn-primary" onClick={() => {this.deleteEpisode(this.state.episode.id)}} >-</button>
                <button style={{marginLeft:'8px'}} className="btn btn-primary" onClick={() => {this.deleteEpisode(this.state.episode.id)}} >-></button>
              </td>
            </tr>
          </tbody>
        );
    }
};

export default TabItems;
