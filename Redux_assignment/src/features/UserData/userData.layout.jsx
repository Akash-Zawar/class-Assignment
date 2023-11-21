import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "./userData.slice";
import { BallTriangle } from "react-loader-spinner";
import { Link } from "react-router-dom";

const UserData = () => {
  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  console.log(userData);
  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);
  return (
    <>
      <h1 style={{ fontFamily: "sans-serif" }}>
        User Data{" "}
        {userData.isLoading && (
          <BallTriangle
            height={50}
            width={50}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        )}
      </h1>

      <div>
        {Array.isArray(userData.data) &&
          userData.data.map((user) => {
            return (
              <div key={user.id}>
                <h3 style={{ fontFamily: "sans-serif" }}>
                  <Link to={`/${user.id}`}>
                    {user.id}. {user.name}
                  </Link>
                </h3>

                <div
                  style={{
                    marginLeft: 35,
                    fontSize: 12,
                    fontFamily: "sans-serif",
                  }}>
                  <p>Username:- {user.username}</p>
                  <p>Email ID:- {user.email}</p>
                  <p>Phone No.:- {user.phone}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default UserData;
