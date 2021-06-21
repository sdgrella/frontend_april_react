import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "../App.css";

function User() {
  const location = useLocation();
  const [user, setUser] = useState();
  const [arrayOfObjects, setArrayOfObjects] = useState([
    {
      first: "Jill",
      last: "Hill",
      id: "1",
    },
    {
      first: "Jack",
      last: "Hill",
      id: "2",
    },
    {
      first: "Bill",
      last: "Hill",
      id: "3",
    },
  ]);

  useEffect(() => {
    console.log(location.pathname.replace("/users/", ""));
    const userId = location.pathname.replace("/users/", "");

    // Mock code that's not fully written but is
    // illustrative of things you can do and you already
    // know how to write the missing code to get this working
    // getUser(userId)
    //   .then()
    //   .then((data = {
    //       setUser(data)
    // window.location.pathname = "/users/" + data.first;

    //   }));
  }, [location]);

  return (
    <>
      {arrayOfObjects.map((object) => {
        return (
          <Link
            to={{
              pathname: `/users/${object.id}`,
              state: { user: object },
            }}
          />
        );
        // return <Link to={`/users/${object.id}`}>{object.first}</Link>;
      })}

      {user && <div>{user.name}</div>}
    </>
  );
}

export default User;
