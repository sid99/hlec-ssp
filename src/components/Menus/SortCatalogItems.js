import React, {useState} from "react";
import {resetServerContext} from "react-beautiful-dnd";
import styled from "styled-components";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

import {DragAndDropContainer} from "./components";
import CatalogItem from "./CatalogItemTwo";

const grid = 8;
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const Quote = styled.div`
  width: 200px;
  border: 1px solid grey;
  margin-bottom: ${grid}px;
  background-color: lightblue;
  padding ${grid}px;
`;

function DraggableCatalogItem({item, index}) {
  return (
    <Draggable draggableId={item.id} index={index}>
      {provided => (
	<div
	  ref={provided.innerRef}
	  {...provided.draggableProps}
	  {...provided.dragHandleProps}
	>
	  <CatalogItem item={item} />
	</div>
      )}
    </Draggable>
  );
}

const CatalogItemsList = React.memo(function CatalogItemsList({items}) {
  return items.map((item, index) => (
    <DraggableCatalogItem item={item} index={index} key={item.id} />
  ));
});

const SortCatalogItems = ({catalogItemsByCategory}) => {
  const foo = catalogItemsByCategory["Vegetables"];
  const [state, setState] = useState({items: foo});

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const items = reorder(
      state.items,
      result.source.index,
      result.destination.index,
    );

    setState({items});
  }

  console.log(state.quotes);
  console.log(foo);

  return (
    <DragAndDropContainer>
      <DragDropContext onDragEnd={onDragEnd}>
	<Droppable droppableId="list">
	  {provided => (
	    <div ref={provided.innerRef} {...provided.droppableProps}>
	      <CatalogItemsList items={state.items} />
	      {provided.placeholder}
	    </div>
	  )}
	</Droppable>
      </DragDropContext>
    </DragAndDropContainer>
  );
};

resetServerContext();
export default SortCatalogItems;
