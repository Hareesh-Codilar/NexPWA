import React, { Component } from 'react'

 class MainMenuHeader extends Component {
    render() {
        return (
          <div className="mainMenu-Header">
            <ul className="Menulist">
              <li
                className="ListItem level-2"
                onClick={this.fetchProductByCategory}
              >
                <span className="listspan">Men</span>
              </li>
              <li
                className="ListItem level-2"
                onClick={this.fetchProductByCategory}
              >
                <span className="listspan">Women</span>
              </li>
              <li
                className="ListItem level-2"
                onClick={this.fetchProductByCategory}
              >
                <span className="listspan">Accessories</span>
              </li>
              <li
                className="ListItem level-2"
                onClick={this.fetchProductByCategory}
              >
                <span className="listspan">Footwear</span>
              </li>
              <li
                className="ListItem level-2"
                onClick={this.fetchProductByCategory}
              >
                <span className="listspan">Trending</span>
              </li>
            </ul>
          </div>
        );
      }
}
export default MainMenuHeader