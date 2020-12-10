import React, { useState, useEffect } from "react";
import "./ProfileInfo.css";

const ProfileStatusHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const changeStatus = () => {
    setEditMode(!editMode);
    props.updateStatus(status);
  };
  return (
    <section>
      {editMode ? (
        <input
          autoFocus={true}
          onChange={(e) => setStatus(e.currentTarget.value)}
          onBlur={() => changeStatus()}
          type="text"
          value={status}
        />
      ) : (
        <span onDoubleClick={() => setEditMode(!editMode)}>
          {props.status || "no status"}
        </span>
      )}
    </section>
  );
};

export default ProfileStatusHooks;
