import React from "react";

import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../store/slices/UserSlice";

const Display = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.users);
//   console.log(data);

  function deleteHandler(id) {
    dispatch(removeUser(id));
  }
  return (
    <Wrapper>
      {data.map((user) => (
        <li key={user.id}>
          <p>{user.name}</p>

          <MdDeleteForever
            className="delete-icon"
            onClick={() => deleteHandler(user.id)}
          />
        </li>
      ))}
    </Wrapper>
  );
};

export default Display;

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;
