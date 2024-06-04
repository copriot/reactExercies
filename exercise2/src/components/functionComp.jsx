import { useEffect, useState } from "react";

const Paper = (props) => {
  const [page, setPage] = useState(0);
  useEffect(() => {
    console.log("Bileşen ekrana geldi");
    return () => {
      console.log("bileşenin ekrandan gitme olayı");
    };
  }, []);
  useEffect(() => {
    console.log("sayfa değiştirildi", page);
  }, [page]);
  return (
    <div className="d-flex justify-content-center align-ite-center mt-5 gap-5">
      <p>Sayfa:{page}</p>
      <button
        className="btn btn-primary"
        onClick={() => setPage(page + 1)}
      >
        Sayfa Değiştir
      </button>
    </div>
  );
};
export default Paper;
