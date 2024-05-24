import React from "react";

const DeleteSkillButton = ({ onDelete }) => {
  const handleClick = () => {
    const isConfirmed = window.confirm("Are you sure you want to delete?");
    if (isConfirmed) {
      onDelete();
      alert("Skill deleted successfully!");
    }
  };

  return (
    <button className="delete-btn" onClick={handleClick}>Delete</button>
  );
};

export default DeleteSkillButton;
