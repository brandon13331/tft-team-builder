import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import bfs from './images/BFSword.png';
import gb from './images/GiantsBelt.png';
import nll from './images/NeedlesslyLargeRod.png';
import rb from './images/RecurveBow.png';
import sg from './images/SparringGloves.png';
import sp from './images/Spatula.png';
import totg from './images/TearOfTheGoddess.png';

class Item extends React.Component {

  render() {
    return (
      <button className="item">
      </button>
    );
  }
}

class ItemList extends React.Component {
  renderImage(i) {
    return <img src={i}
      onMouseEnter={function () { window.open() }}
      onMouseLeave={function () { window.close() }} />;

  }

  render() {
    const title = 'TFT Item Builder';

    return (
      <div>
        <h className="title">{title}</h>
        <div className="item-row">
          {this.renderImage(bfs)}</div>
        <div className="item-row">
          {this.renderImage(gb)}</div>
        <div className="item-row">
          {this.renderImage(nll)}</div>
        <div className="item-row">
          {this.renderImage(rb)}</div>
        <div className="item-row">
          {this.renderImage(sg)}</div>
        <div className="item-row">
          {this.renderImage(sp)}</div>
        <div className="item-row">
          {this.renderImage(totg)}
        </div>
      </div >

    );
  }
}

// ========================================

ReactDOM.render(
  <ItemList />,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
