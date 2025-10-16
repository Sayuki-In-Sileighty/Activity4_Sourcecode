import { useState } from "react";
import "./ProfileCard.css";

export default function ProfileCardActivity() {
  const [favorite, setFavorite] = useState(false);
  const [name, setName] = useState("Student Name");
  const [hovered, setHovered] = useState(false);
  const [image, setImage] = useState(null); // 👈 store uploaded image

  const handleContextMenu = (e) => {
    e.preventDefault();
    alert("Custom right-click menu!");
  };

  // When user selects a file
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // show preview
    }
  };

  // Remove the uploaded image
  const handleRemoveImage = () => {
    setImage(null);
  };

  return (
    <div className="app-container ae86-active">
      <div className="profile-wrapper">
        {/* 🖼️ Show uploaded image if exists */}
        {image && (
          <div className="profile-image-container">
            <img src={image} alt="Profile" className="profile-image" />
          </div>
        )}

        {/* 🪪 Profile Card */}
        <div
          className={`profile-card ${hovered ? "hovered" : ""}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onDoubleClick={() => setFavorite(!favorite)}
          onContextMenu={handleContextMenu}
        >
          <h2 className={favorite ? "show-ae86" : ""}>{name}</h2>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => (e.target.style.background = "#fff3b0")}
            onBlur={(e) => (e.target.style.background = "white")}
          />

          <p>👉 Hover, double-click to view favorite icon, focus input, or right-click me!</p>

          {/* 🧷 Upload Button */}
          {!image ? (
            <label className="toggle-btn upload-btn">
              Upload Profile
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </label>
          ) : (
            <button className="toggle-btn" onClick={handleRemoveImage}>
              Remove Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
