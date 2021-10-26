import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';

class SearchResults extends React.Component {

  static propTypes = {
    cards: PropTypes.array,
    icon: PropTypes.string,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const {cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>Search Results
          <span className={styles.icon}><Icon name={settings.search.icon}/></span>
        </h3>
        <div className={styles.cards}>
          {cards.map(columnData => (
            <Card key={columnData.id} {...columnData} />
          ))}
        </div>
      </section>
    );
  }
}

export default SearchResults;
