import { useState } from "react";
import "./Drawer.css";

const Drawer = ({ mode, item, onClose, onSave }) => {
  const [title, setTitle] = useState(item ? item.title : "");
  const [color, setColor] = useState(item ? item.color : "#000000");

  const handleSave = () => {
    onSave({ id: item?.id, title, color });
  };

  return (
    <div className="kzui-drawer">
      <div className="kzui-drawer__content">
        <div className="kzui-drawer__title">
          <label className="kzui-drawer__title-label">Name</label>
          <input
            className="kzui-drawer__title-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="kzui-drawer__color-container">
          <p className="kzui-drawer__color-value-title">Value</p>
          <div className="kzui-drawer__color">
            <label className="kzui-drawer__color-label">Color</label>
            <div className="kzui-color__value">
              <input
                className="kzui-drawer__color-input"
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
              <p className="kzui-color__color">{color}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="kzui-drawer__actions">
        <button className="kzui-drawer__btn-close" onClick={onClose}>
          Close
        </button>
        <button className="kzui-drawer__btn-save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Drawer;
