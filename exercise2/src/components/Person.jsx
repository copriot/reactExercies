import React, { useEffect, useState } from "react";
import UserCard from "./userCard";

function Person() {
  const [page, setPage] = useState(1);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${page}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [page]);

  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-center align-items-center mt-5 gap-5">
        <p>Sayfa:{page}</p>
        <button className="btn btn-primary" onClick={() => setPage(page + 1)}>
          Sayfa Değiştir
        </button>
        {/* apiden henügz cevap gelmediyse ekrana loading bas */}
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5">
        {userData === null ? (
          <p>Loading...</p>
        ) : (
          <UserCard userData={userData} />
        )}
      </div>
    </div>
  );
}

export default Person;
