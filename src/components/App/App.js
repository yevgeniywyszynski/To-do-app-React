import React from 'react';
import styles from './App.scss';
import PropTypes from 'prop-types';
import List from '../List/ListContainer.js';
import Search from  '../Search/SearchContainer';

class App extends React.Component {

  render() {
    const title = this.props.title;
    const subtitle = this.props.subtitle;
    const lists = this.props.lists;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search></Search>
        {lists.map(listData => (
          <List key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }
}

export default App;

