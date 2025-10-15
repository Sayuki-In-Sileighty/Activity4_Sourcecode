import { useState } from "react";
import "./ProfileCard.css";

export default function ProfileCardActivity() {
  const [favorite, setFavorite] = useState(false);
  const [name, setName] = useState("Student Name");
  const [hovered, setHovered] = useState(false);

  const handleContextMenu = (e) => {
    e.preventDefault();
    alert("Custom right-click menu!");
  };

  return (
    // Always visible AE86 background
    <div className="app-container ae86-active">
      <div
        className={`profile-card ${hovered ? "hovered" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onDoubleClick={() => setFavorite(!favorite)}
        onContextMenu={handleContextMenu}
      >
        <h2 className={favorite ? "show-ae86" : ""}>
          {name}
        </h2>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => (e.target.style.background = "#fff3b0")}
          onBlur={(e) => (e.target.style.background = "white")}
        />

        <p>👉 Hover, double-click, focus input, or right-click me!</p>
      </div>
    </div>
  );
}