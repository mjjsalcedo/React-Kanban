export const ADD_CARD = 'ADD_CARD'
export const EDIT_CARD = 'EDIT_CARD'
export const DELETE_CARD = 'DELETE_CARD'
export const MOVE_CARD = 'MOVE_CARD'
export const TOGGLE_TODO = 'TOGGLE_TODO'


let id = 0;

export const addCard = (card) => {

  return (dispatch) => {
    /*addCardToDeck(card)*/
    (card)=> {
      id = ++id;
      return  {
      id: id,
      title: card.title,
      priority: card.priority,
      status: card.status,
      createdBy: card.createdBy,
      assignedTo: card.assignedTo
    }
    .then(cards => {
      console.log('moo',cards)
      dispatch({
        type: ADD_CARD,
        cards
      })
    });
    }

  }
};

export function editCard(card) {
  return { type: EDIT_CARD,
   card: card
 }
}

export function deleteCard(card) {
  return { type: DELETE_CARD,
   card: card
 }

}

/*export function moveCard(card) {
  return { type: MOVE_CARD,
           card: card
         }
}
*/
export function toggleTodo(id) {
  return { type: TOGGLE_TODO, id: id }
}



/*var addCardToDeck = (card) => new Promise ((resolve, reject) => {
  id = ++id;
  var newCard = {
      id: id,
      title: card.title,
      priority: card.priority,
      status: card.status,
      createdBy: card.createdBy,
      assignedTo: card.assignedTo
  }
  return newCard;
})
*/