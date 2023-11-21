import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getUserDetails } from "./userDetails.slice";

const UserDetails = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDetails({ id }));
  }, [id, dispatch]);
  console.log({ data });
  console.log({ id });
  return <div>userDetail</div>;
};

export default UserDetails;
