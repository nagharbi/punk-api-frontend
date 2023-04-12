import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Row from "react-bootstrap/Row";
import BeerCard from "../components/BeerCard";
import { getAllBeer, getBeersByFilters } from "../services/service";
import Filter from "../components/Filter";
import Spinner from "../components/Spinner";
import Sort from "../components/Sort";
import { orderBy } from "../utils/utils";

export default function Home() {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [enableFilter, setEnableFilter] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }

    setPage((prevPage) => prevPage + 1);
  };

  const handleOnSearch = async (filters) => {
    setLoading(true);
    setEnableFilter(false);
    const filterBeers = await getBeersByFilters(filters);
    setBeers(filterBeers);
    for (const [key, value] of Object.entries(filters)) {
      if (value) {
        setEnableFilter(true);
      }
    }
    setLoading(false);
  };

  const handleOnReset = async () => {
    setLoading(true);
    const data = await getAllBeer(1);
    setBeers(data);
    setEnableFilter(false);
    setLoading(false);
  };

  const handleOnSort = (key, value) => {
    const beersSort = orderBy([...beers], key, value);
    setBeers(beersSort);
  };

  async function load(numPage) {
    setLoading(true);
    const data = await getAllBeer(numPage);
    console.log(data);
    setHasMoreData(data.length > 1);
    setBeers((prevBeers) => [...prevBeers, ...data]);
    setLoading(false);
  }

  // Ajouter un evenement au momement de scroll
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
            <h4>Filter</h4>
            <Filter onSearch={handleOnSearch} onReset={handleOnReset} />
          </div>
          <div className="col-md-2">
            <h4>Order by</h4>
            <Sort onSort={handleOnSort} />
          </div>
        </div>
        {loading === true ? (
          <Spinner />
        ) : (
          <Row xs={1} md={3} className="g-4">
            {beers.map((value, index) => (
              <BeerCard key={index} beer={value} />
            ))}
          </Row>
        )}
      </div>
    </>
  );
}
