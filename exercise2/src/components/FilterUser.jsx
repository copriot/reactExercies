import React, { useEffect, useRef, useState } from "react";
import Table from "./Table";

const FilterUser = () => {
  const [users, setUsers] = useState(null);
  const [filtredUsers, setFiltredUsers] = useState(null);

  const inputRef = useRef();
  //bileşen ekrana basılma anını izleme
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
      res.json().then((data) => {
        {
          setUsers(data);
          setFiltredUsers(data);
        }
      });
    });
  }, []);
  console.log(users);

  const handleSubmit = (e) => {
    e.preventDefault();
    //inputun değerine erişme
    const query = inputRef.current.value.toLowerCase();
    //arama terimiyle eşleşen kullanıcılar
    const filtred = users.filter((user) =>
      user.name.toLowerCase().includes(query),
    );

    setFiltredUsers(filtred);
  };
  return (
    <div className="container d-flex mt-5 gap-4 flex-column">
      <form className="d-flex gap-3" onClick={handleSubmit}>
        <input type="text" className="form-control" ref={inputRef} />
        <button className="btn btn-primary shadow">Ara</button>
      </form>
      {filtredUsers === null ? (
        <p>Tükleniyor...</p>
      ) : (
        <Table users={filtredUsers} />
      )}
    </div>
  );
};

export default FilterUser;
