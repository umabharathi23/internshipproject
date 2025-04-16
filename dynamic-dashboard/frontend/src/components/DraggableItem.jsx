// DraggableItem.jsx
import { useDrag } from 'react-dnd';

const DraggableItem = ({ item }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ITEM', // Can be any string or identifier for your drag type
    item: { id: item.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        border: '1px solid black',
        padding: '10px',
        marginBottom: '10px',
        backgroundColor: 'white',
        cursor: 'move',
      }}
    >
      {item.name}
    </div>
  );
};

export default DraggableItem;
