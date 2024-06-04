import React, { useRef, useState } from "react";

const RefTest = () => {
  const [query, setQuery] = useState("");
  const inputRef = useRef();
  const labelRef = useRef();
  console.log(inputRef);
  const handleClick = () => {
    if (inputRef.current.value === "") {
      inputRef.current.focus();
    }
    //aratılan içeriği state aktarma
    setQuery(inputRef.current.value);
    //label renk değiştirme
    labelRef.current.style.backgroundColor = "yellow";
  };
  return (
    <>
      <div className="container d-flex mt-5 gap-4 flex-column">
        <div className="d-flex">
          <input type="text" className="form-control" ref={inputRef} />
          <button className="btn btn-primary shadow" onClick={handleClick}>
            Ara
          </button>
        </div>
        <label className="mt-2" ref={labelRef}>
          Aratılan İçerik: {query}
        </label>
      </div>
    </>
  );
};

export default RefTest;
