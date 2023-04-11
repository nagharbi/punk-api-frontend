import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Row from "react-bootstrap/Row";
import BeerCard from "../components/BeerCard";
import { getAllBeer, getBeersByFilters } from "../services/service";
import Filter from "../components/Filter";

export default function Home() {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [enableFilter, setEnableFilter] = useState(false);

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

  async function load(numPage) {
    const data = await getAllBeer(numPage);
    console.log(data);
    setHasMoreData(data.length > 1);
    setBeers((prevBeers) => [...prevBeers, ...data]);
  }

  const handleOnSearch = async (filters) => {
    setEnableFilter(false);
    const filterBeers = await getBeersByFilters(filters);
    setBeers(filterBeers);
    for (const [key, value] of Object.entries(filters)) {
      if (value) {
        setEnableFilter(true);
      }
    }
  };

  const handleReset = async () => {
    const data = await getAllBeer(1);
    setBeers(data);
    setEnableFilter(false);
  };

  //ajouter un envenement au momement de scroll
  useEffect(() => {
    if (!hasMoreData || enableFilter === true) {
      return;
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMoreData, enableFilter]);

  useEffect(() => {
    load(page);
  }, [page]);

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-10">
            <h3>Filter</h3>
            <Filter search={handleOnSearch} reset={handleReset} />
          </div>
        </div>
        <Row xs={1} md={3} className="g-4">
          {beers.map((value, index) => (
            <BeerCard key={index} beer={value} />
          ))}
        </Row>
      </div>
    </>
  );
}
