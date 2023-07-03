import React, { useEffect, useRef } from "react";

const ResizableTextarea = ({
  value,
  onChange,
  hideLink,
  hideDescription,
  ...rest
}) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [value, hideLink, hideDescription]);

  const handleChange = (e) => {
    onChange(e);
  };
  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={handleChange}
      {...rest}
    />
  );
};

export default ResizableTextarea;
