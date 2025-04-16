// DroppableArea.jsx
import { useDrop } from 'react-dnd';

const DroppableArea = ({ onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'ITEM', // The type you defined for your draggable items
    drop: (item) => onDrop(item), // Handle the drop logic
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        border: '2px dashed black',
        padding: '20px',
        minHeight: '200px',
        backgroundColor: isOver ? 'lightgray' : 'white',
      }}
    >
      Drop items here
    </div>
  );
};

export default DroppableArea;
