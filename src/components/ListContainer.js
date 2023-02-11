import React, { useState } from "react";
import { nanoid } from "nanoid";

const ListContainer = () => {
  const [fav, setFav] = useState("");
  const [favList, setFavList] = useState([]);
  const [editFavItem, setEditFavItem] = useState({});

  const handleChange = (event) => {
    setFav(event.target.value);
  };

  const add = () => {
    setFavList((prevState) => {
      const newFav = {
        id: nanoid(),
        title: fav,
      };

      return [...prevState, newFav];
    });
    setFav("");
  };

  const deleteFav = (favId) => {
    setFavList((prevState) => {
      return prevState.filter((favItem) => favItem.id !== favId);
    });
  };

  const handleEditChange = (event) => {
    setEditFavItem((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  };

  // [{id: 1, title: 'One' } , id: 2, title: 'Three'}] --> Todo List
  // {id: 2, title: 'Three'} --> Edited/Updated Todo Item
  // newTodoList.splice(editedFavItemIndex, 1, editFavItem);

  const onUpdate = () => {
    // favList -> original list of todos
    // the updated/edited fav item
    console.log("Update Function Called!");

    const editedFavItemIndex = favList.findIndex(
      (favItem) => favItem.id === editFavItem.id
    );

    const newFavList = [...favList];

    newFavList.splice(editedFavItemIndex, 1, editFavItem);

    setFavList(newFavList);
    setEditFavItem({});
  };

  return (
    <div className="App">
      <input type="text" onChange={handleChange} value={fav} />
      <button onClick={add}>Add</button>
      <div className="todolist">
        {favList?.map((favItem) => {
          return (
            <div key={favItem.id} className="favItem">
              {editFavItem.id === favItem.id ? (
                <input value={editFavItem.title} onChange={handleEditChange} />
              ) : (
                <p>{favItem.title}</p>
              )}
              <div>
                <button onClick={() => deleteFav(favItem.id)}>Delete</button>
                <button
                  onClick={() => {
                    // When in Update State -> call onUpdate()
                    // else call setEditFavItem(favItem);

                    if (editFavItem.id === favItem.id) {
                      onUpdate();
                    } else {
                      setEditFavItem(favItem);
                    }
                  }}
                >
                  {editFavItem.id === favItem.id ? "Update" : "Edit"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListContainer;
