import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { getOneBeer } from "../services/service";
import Spinner from "../components/Spinner";

export default function Beer() {
  const param = useParams();
  const id = param.id;
  const [beer, setBeer] = useState(null);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const data = await getOneBeer(id);
    setBeer(data);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <Header />
      <div className="container mt-3">
        {id === "random" ? (
          <button onClick={load} type="button" className="btn btn-success mb-3">
            Refresh
          </button>
        ) : null}
        {loading === true ? (
          <Spinner />
        ) : (
          <div className="row">
            <div className="col-md-4 bg-light">
              <img
                src={beer?.image_url ?? "https://placehold.jp/250x250.png"}
                style={{
                  width: "40%",
                }}
              />
              <div className="beer-volume mt-4">
                <span>
                  <strong>Volume : </strong>
                </span>
                {`${beer?.volume.value} ${beer?.volume.unit}`}
              </div>
              <div>
                <span>
                  <strong>Food pairing: </strong>
                </span>
                <ul>
                  {beer?.food_pairing?.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span>
                  <strong>ABV: {beer?.abv}</strong>
                </span>
              </div>
              <div>
                <span>
                  <strong>EBC: {beer?.ebc}</strong>
                </span>
              </div>
              <div>
                <span>
                  <strong>IBU: {beer?.ibu}</strong>
                </span>
              </div>
              <div>
                <span>
                  <strong>SRM: {beer?.srm}</strong>
                </span>
              </div>
            </div>
            <div className="col-md-8">
              <h3 className="title">{beer?.name}</h3>
              <span>
                <strong>Description : </strong>
              </span>
              <p className="beer-description">{beer?.description}</p>
              <div className="beer-ingredients">
                <span>
                  <strong>Ingredients : </strong>
                </span>
                <ul>
                  <li>
                    Hops:
                    <ul>
                      {beer?.ingredients?.hops.map((hop, index) => (
                        <li key={index}>
                          {`${hop.name} (${hop.amount.value} ${hop.amount.unit})`}
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    Malt:
                    <ul>
                      {beer?.ingredients?.malt.map((malt, index) => (
                        <li key={index}>
                          {`${malt.name} (${malt.amount.value} ${malt.amount.unit})`}
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>{beer?.ingredients?.yeast}</li>
                </ul>
              </div>
              <div>
                <span>
                  <strong>Method : </strong>
                </span>
                <ul>
                  <li>
                    Fermentation: {beer?.method?.fermentation.temp.value}{" "}
                    {beer?.method?.fermentation.temp.unit}
                  </li>
                  <li>
                    Mash temp duration:
                    <ul>
                      {beer?.method?.mash_temp.map((value, index) => (
                        <li key={index}>
                          {value.duration} at {value.temp.value}{" "}
                          {value.temp.unit}
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>{beer?.method?.twist} </li>
                </ul>
              </div>
              <div>
                <span>
                  <strong>Tagline: </strong>
                </span>
                {beer?.tagline}
              </div>
              {beer?.ph && (
                <div>
                  <span>
                    <strong>PH: </strong>
                    {beer?.ph}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
