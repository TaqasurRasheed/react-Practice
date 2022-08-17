import React from "react";
//import React, { useEffect, useState } from "react";
import useFetch from "./useFetch";

const UseEffectApi = () => {
  // const [users, setUsers] = useState([]);
  //Below Statement thst id used with the help of custom hook //usefetch
  const [data] = useFetch("https://restcountries.com/v3.1/all");
  // function resolve(res) {
  //   console.log(res.json());
  // }

  // const resolve = (res) => {
  //   console.log(res.json());
  // };

  // function reject(error) {
  //   console.log(error);
  // }

  // const getUsers = async () => {
  //   //  async await
  //   const data = await fetch("https://api.github.com/users");
  //   setUsers(await data.json());
  // };
  // const getUsers = async () => {
  //   const data = await fetch("https://restcountries.com/v3.1/all");
  //   // const data = await response.json();
  //   // setUsers(await data.json());
  //   // console.log(data[0].name);
  //   setUsers(await data.json());
  // };
  // useEffect(() => {
  //   // promise then catch
  //   // fetch("https://api.github.com/users")
  //   //   .then((res) => {
  //   //     console.log(res.json());
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error);
  //   //   });

  //   //console.log("Junaid" ? "true cond" : "false cond ");

  //   getUsers();
  // }, []);

  return (
    <>
      <h2>Hi Taqasur its Users List</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>Official</th>
              <th>CApital</th>
              <th>currencies</th>
              <th>Region</th>
              <th>Population</th>
              <th>Area</th>
              <th>Translations</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((curElem, index) => {
                return (
                  <tr key={index}>
                    <td>{curElem.name.official}</td>
                    <td>{curElem.capital}</td>
                    <td>
                      <CurrencyComp currencies={curElem.currencies} />
                    </td>
                    <td>{curElem.region}</td>
                    <td>{curElem.population}</td>
                    <td>{curElem.area}</td>
                    <LanguageComp translations={curElem.translations} />
                    {/* <td>{curElem.translations.official}</td> */}
                    {/* <td>{curElem.name.official}</td>  */}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UseEffectApi;
// Another Component for checking cuurency if the country would available
const CurrencyComp = (props) => {
  return (
    <>
      {props.currencies ? (
        <>
          {Object.values(props.currencies).map((curr) => (
            <>
              <table>
                <thead></thead>
                <tbody>
                  <tr>
                    <td>{curr.symbol}</td>
                  </tr>
                </tbody>
              </table>
            </>
          ))}
        </>
      ) : null}
    </>
  );
};
// Another Component for checking cuurency if the country would available
const LanguageComp = (props) => {
  return (
    <>
      {props.translations ? (
        <>
          {Object.values(props.translations).map((trans) => (
            <>
              <tc>
                <td>{trans.official}</td>
              </tc>
            </>
          ))}
        </>
      ) : null}
    </>
  );
};
