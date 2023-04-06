import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Row from "react-bootstrap/Row";
import BeerCard from "../components/BeerCard";
import { getAllBeer } from "../services/service";
import { NavLink } from "react-router-dom";

export default function Home() {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);
  //ajouter un envenement au momement de scroll
  useEffect(() => {
    if (!hasMoreData) {
      return;
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMoreData]);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }

    console.log("Fetch more list items!");
    setPage((prevPage) => prevPage + 1);
  }

  useEffect(() => {
    async function load(numPage) {
      const data = await getAllBeer(numPage);
      console.log(data);
      setHasMoreData(data.length > 1);
      setBeers((prevBeers) => [...prevBeers, ...data]);
    }
    load(page);
  }, [page]);

  return (
    <>
      <Header />
      <div className="container mt-4">
        <Row xs={1} md={3} className="g-4">
          {beers.map((value, index) => (
            <NavLink
              key={index}
              className="text-decoration-none link-dark"
              to={"/beer/" + value.id}
            >
              <BeerCard beer={value} />
            </NavLink>
          ))}
        </Row>
      </div>
    </>
  );
}
