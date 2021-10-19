import shortid from 'shortid';

// selectors
export const getCardsForColumn = ({cards, searchString}, columnId) => cards.filter(card => card.columnId == columnId && new RegExp(searchString, 'i').test(card.title));

// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');
export const MOVE_CARD = createActionName('MOVE_CARD');

// action creators
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });
export const createAction_moveCard = payload => ({ payload: { ...payload }, type: MOVE_CARD });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, action.payload];
    case MOVE_CARD: {
      const { id, src, dest } = action.payload;
      const targetCard = statePart.filter(card => card.id == id)[0];
      console.log(action.payload);
      console.log(id);
      const targetColumnCards = statePart.filter(card => card.columnId == dest.columnId).sort((a, b) => a.index - b.index);
      console.log(targetColumnCards.map(card => `${card.index}, title: ${card.title}`));
      if(dest.columnId == src.columnId){
        targetColumnCards.splice(src.index, 1);
        targetColumnCards.splice(dest.index, 0, targetCard);
        console.log('targetColumnCards', targetColumnCards);
      } else {
        return statePart;
      }
      return statePart.map(card => {
        const targetColumnIndex = targetColumnCards.indexOf(card);
      
        if(targetColumnIndex > -1 && card.index != targetColumnIndex){
          console.log(targetColumnIndex, card);
          console.log({...card, index: targetColumnIndex});
          return {...card, index: targetColumnIndex};
        } else {
          return card;
        }
      });
    } 
    default:
      return statePart;
  }
}
/*
0 1 2 3
3 0 1 2
v v v v
0 1 2 3
*/