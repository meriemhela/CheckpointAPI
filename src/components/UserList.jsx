import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setListOfUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          listStyleType: "none",
          padding: 0,
          margin: 0,
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {listOfUser.map((user) => (
          <li
            key={user.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              width: "calc(50% - 20px)",
              borderRadius: "5px",
              boxSizing: "border-box",
            }}
          >
            <h2>{user.name}</h2>
            <p>
              <strong>
                <u>Username:</u>
              </strong>{" "}
              {user.username}
            </p>
            <p>
              <strong>
                <u>Email:</u>
              </strong>{" "}
              {user.email}
            </p>
            <p>
              <strong>
                <u>Phone:</u>
              </strong>{" "}
              {user.phone}
            </p>
            <p>
              <strong>
                <u>Website:</u>
              </strong>{" "}
              <a
                href={`http://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.website}
              </a>
            </p>
            <p>
              <strong>
                <u>Company:</u>
              </strong>{" "}
              {user.company.name}
            </p>
            <p>
              <strong>
                <u>Company Catch Phrase:</u>
              </strong>{" "}
              {user.company.catchPhrase}
            </p>
            <p>
              <strong>
                <u>Company BS:</u>
              </strong>{" "}
              {user.company.bs}
            </p>
            <h3>
              <u>Address</u>
            </h3>
            <ul>
              <li>
                <strong>Street:</strong> {user.address.street}
              </li>
              <li>
                <strong>Suite:</strong> {user.address.suite}
              </li>
              <li>
                <strong>City:</strong> {user.address.city}
              </li>
              <li>
                <strong>Zipcode:</strong> {user.address.zipcode}
              </li>
              <li>
                <strong>Geo Coordinates:</strong> Latitude{" "}
                {user.address.geo.lat}, Longitude {user.address.geo.lng}
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
