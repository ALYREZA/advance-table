import { useState, useEffect } from "react";
const EditableCell = ({
  value: initialValue,
  row: {
    index,
    original: { isEditing },
  },
  column: { id },
  updateMyData, // This is a custom function that we supplied to our table instance
}) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    updateMyData(index, id, value);
  };

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue, isEditing]);

  return isEditing ? (
    <input value={value} onChange={onChange} onBlur={onBlur} />
  ) : (
    value
  );
};

export default EditableCell;
