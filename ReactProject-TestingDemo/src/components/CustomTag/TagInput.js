import React, { useState } from "react";
import { Input, Tag } from "antd";

const TagInput = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }
    setInputValue("");
  };

  const handleTagClose = (removedTag) => {
    const updatedTags = tags.filter((tag) => tag !== removedTag);
    setTags(updatedTags);
  };

  return (
    <div className="tagInput">
      {tags.map((tag, index) => (
        <Tag
          className="tag"
          key={index}
          closable
          onClose={() => handleTagClose(tag)}
          bordered={false}
        >
          {tag}
        </Tag>
      ))}
      <Input
        className="input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onPressEnter={handleInputConfirm}
        onBlur={handleInputConfirm}
        bordered={false}
      />
    </div>
  );
};

export default TagInput;
