import React from 'react';
import styles from './Home.scss';
import PropTypes from 'prop-types';
import List from '../List/ListContainer.js';
import Search from  '../Search/SearchContainer';
import {DragDropContext} from 'react-beautiful-dnd';

class Home extends React.Component {

  render() {
    const title = this.props.title;
    const subtitle = this.props.subtitle;
    const lists = this.props.lists;
    const moveCard = this.props.moveCard;
    const moveCardHandler = result => {
      if(
        result.destination
        &&
        (
          result.destination.index != result.source.index
          ||
          result.destination.droppableId != result.source.droppableId
        )
      ){
        moveCard({
          id: result.draggableId,
          dest: {
            index: result.destination.index,
            columnId: result.destination.droppableId,
          },
          src: {
            index: result.source.index,
            columnId: result.source.droppableId,
          },
        });
      }
    };
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <Search/>
        <DragDropContext onDragEnd={moveCardHandler}>
          {lists.map(listData => (
            <List key={listData.id} {...listData} />
          ))}
        </DragDropContext>
      </main>
    );
  }
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    moveCard: PropTypes.func,
  }
}

export default Home;

