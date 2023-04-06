import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Row from "react-bootstrap/Row";
import BeerCard from "../components/BeerCard";
import { getAllBeer } from "../services/service";

export default function Home() {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function load(numPage) {
      const data = await getAllBeer(numPage);
      console.log(data);
      setBeers(data);
    }
    load(page);
  }, [page]);

  return (
    <>
      <Header />
      <div className="container mt-4">
        <Row xs={1} md={3} className="g-4">
          {beers.map((value, index) => (
            <BeerCard key={index} beer={value} />
          ))}
        </Row>
      </div>
    </>
  );
}
