import { useState } from "react";
import "./ColorSetting.css";
import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import ColorList from "../colorList/ColorList";
import Drawer from "../drawer/Drawer";
import { GoPlus } from "react-icons/go";

const ColorSetting = () => {
  const [Colors, setColors] = useState([
    { id: 1, title: "Red", color: "#ff0000" },
    { id: 2, title: "Green", color: "#00ff00" },
    { id: 3, title: "Blue", color: "#0000ff" },
  ]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [drawerMode, setDrawerMode] = useState(""); // "edit" or "add"

  // Handles editing an item
  const handleEdit = (item) => {
    setCurrentItem(item);
    setDrawerMode("edit");
    setDrawerOpen(true);
  };

  // Handles duplicating an item
  const handleDuplicate = (item) => {
    console.log("hello");
    const newItem = {
      ...item,
      id: Colors.length + 1,
      title: item.title + " (Copy)",
    };
    setColors([...Colors, newItem]);
  };

  // Handles deleting an item
  const handleDelete = (itemId) => {
    setColors(Colors.filter((item) => item.id !== itemId));
  };
  const handleSave = (item) => {
    if (drawerMode === "edit") {
      setColors(
        Colors.map((i) =>
          i.id === item.id ? { ...i, title: item.title, color: item.color } : i
        )
      );
    } else {
      setColors([...Colors, { id: Colors.length + 1, ...item }]);
    }
    setDrawerOpen(false);
  };

  // Handles adding a new item
  const handleAdd = () => {
    setDrawerMode("add");
    setDrawerOpen(true);
  };

  const getColorPos = (id) => Colors.findIndex((color) => color.id === id);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setColors((colors) => {
      const originalPos = getColorPos(active.id);
      const newPos = getColorPos(over.id);
      return arrayMove(colors, originalPos, newPos);
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div className="kzui-color-table">
      <div className="kzui-color-table__header">
        <div>Name</div>
        <div className="kzui-color-table__column ">Value</div>
      </div>

      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <SortableContext items={Colors} strategy={verticalListSortingStrategy}>
          {Colors.map((color) => (
            <ColorList
              key={color.id}
              id={color.id}
              title={color.title}
              color={color.color}
              onEdit={() => handleEdit(color)}
              onDuplicate={() => handleDuplicate(color)}
              onDelete={() => handleDelete(color.id)}
            />
          ))}
        </SortableContext>
      </DndContext>

      <button className="kzui-colorList__btn-add" onClick={handleAdd}>
        <GoPlus />
        Add Color
      </button>

      {drawerOpen && (
        <Drawer
          mode={drawerMode}
          item={currentItem}
          onClose={() => setDrawerOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default ColorSetting;
