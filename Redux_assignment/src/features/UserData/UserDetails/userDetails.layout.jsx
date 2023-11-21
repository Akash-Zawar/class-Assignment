import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getUserDetails } from "./userDetails.slice";

const UserDetails = () => {
  const { id } = useParams();
  const { data } = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetails({ id }));
  }, [id, dispatch]);
  console.log("data", data);
  console.log({ id });
  return (
    <div>
      <h2>User Details</h2>
      {data && (
        <div>
          <p>Name:- {data.name}</p>
          <p>Username:- {data.username}</p>
          <p>Email:- {data.email}</p>
          <p>Phone:- {data.phone}</p>
          <p>Website:- {data.website}</p>
          <p>
            Address:- {data.address.street}, {data.address.suite},
            {data.address.city} - {data.address.zipcode}
          </p>
          <p>
            Company:- {data.company.name}, {data.company.bs}
          </p>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
