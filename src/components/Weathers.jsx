import React, { useEffect, useState } from "react";

import Card from "./common/Card";
import SearchBox from "./common/SearchBox";
import weatherService from "../services/weatherService";

function Weathers(props) {
  const [error, setError] = useState();
  const [city, setCity] = useState("Khulna");
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getCurrentWeather();
  }, [city]);

  async function getCurrentWeather() {
    try {
      const { data } = await weatherService.getCurrentWeather(city);

      setError(null);
      setDatas([...datas, data]);
    } catch (ex) {
      setError("Invalid City, e.g.: 'California' or 'Kolkata, India'");
    }
  }

  function getFormattedTemp(data) {
    return (
      <>
        <span className="text-danger font-weight-bold">
          {data.main.temp}
          <span>&deg;</span>
        </span>
      </>
    );
  }

  return (
    <>
      <SearchBox
        error={error}
        onSubmit={city => setCity(city)}
        placeholder="Type a valid city"
      />

      <div className="row">
        {datas.map((data) => {
          return (
            <div key={data.id + Math.random().toString()} className="col-3">
              <Card
                title={getFormattedTemp(data)}
                body={data && data.name}
                image={
                  datas[0] &&
                  `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                }
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Weathers;
