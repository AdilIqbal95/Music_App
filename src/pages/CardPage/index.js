import React from "react";
import { Card } from "../../components";
import data from "../../data";
import { useParams, useHistory } from "react-router-dom";

function CardPage() {
  let { id } = useParams();
  const history = useHistory();
  const prevAlbum = () => history.push(`/albums/${Number(id) - 1}`);
  const nextAlbum = () => history.push(`/albums/${Number(id) + 1}`);

  return (
    <main style={{ display: "flex", justifyContent: "center" }}>
      { id > 1 && <button
        onClick={prevAlbum}
        style={{ height: "48px", width: "48px", marginTop: "48px" }}
      >
        {"<"}
      </button>}
      <Card data={data[id - 1]} />
      { id < data.length && <button 
        onClick={nextAlbum}
        style={{ height: "48px", width: "48px", marginTop: "48px" }}>
        {">"}
      </button>}
    </main>
  );
}

export default CardPage;
