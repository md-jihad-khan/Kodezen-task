import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "./ColorList.css";
import { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdOutlineColorLens } from "react-icons/md";

const ColorList = ({ id, title, color, onEdit, onDuplicate, onDelete }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuOpen((prev) => !prev);

    // Attach click listener to document
    if (!menuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
  };

  // Handle click outside the menu
  const handleClickOutside = (event) => {
    // Check if the click is outside the menu and button
    if (!event.target.closest(".kzui-color-list__menu-container")) {
      setMenuOpen(false); // Close the menu
      document.removeEventListener("click", handleClickOutside); // Cleanup
    }
  };
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="kzui-color-list__row"
    >
      <div className="kzui-color-list__title">
        <MdOutlineColorLens className="kzui-color-list__icon" />
        {title}
      </div>

      <div className="kzui-color-list__valueitem">
        <div className="kzui-color-list__value">
          <span
            className="kzui-color-list__box"
            style={{ backgroundColor: color }}
          ></span>
          <p className="kzui-color-list__color">{color}</p>
        </div>

        {/* 3-dot menu */}
        <div className="kzui-color-list__menu-container">
          <button
            className="kzui-color-list__menu-button"
            onPointerDown={(e) => {
              e.preventDefault(); // Prevent default drag behavior
              toggleMenu(e);
            }}
          >
            <HiDotsHorizontal />
          </button>

          {menuOpen && (
            <ul className="kzui-color-list__menu">
              <li
                onPointerDown={(e) => {
                  e.preventDefault();
                  onEdit();
                }}
              >
                Edit
              </li>
              <li
                onPointerDown={(e) => {
                  e.preventDefault();
                  onDuplicate();
                }}
              >
                Duplicate
              </li>
              <li
                onPointerDown={(e) => {
                  e.preventDefault();
                  onDelete();
                }}
              >
                Delete
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorList;
