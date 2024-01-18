import React, { useEffect, useState } from "react";
import { getAllUsers } from "../service/Service";

import { deleteAUser } from "../service/Service";

import Form from "./Form";

function Desktop() {
  const [user, setUser] = useState([]);

  const fetchAllUsers = async () => {
    await getAllUsers().then((users) => {
      setUser(users);
    });
  };

  const handlerClicked = (e, myUser) => {
    if (window.confirm(`Are you want to delete ${myUser.name}?`) == true) {
      deleteAUser(myUser.id);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, [user]);

  
  return (
    <div className="desktop">
      <div className="userList">
        <ul>
          {user.map((_user) => (
            <li key={_user.id}>
              <div className="cards">
                <span>
                  <span><img src={_user.photo} style={{width: '75%', borderRadius: '5px'}} /></span>
                  <br/>
                  <h3 style={{marginTop: '10px'}}>{_user.name}</h3>
                  <mark>{_user.email}</mark>
                  <br />
                  <span>{_user.mobile}</span>
                  <br />
                  <span>{_user.language[0]}</span>
                </span>                
                <span>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle btn-sm"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Details
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-item"
                          href="javascipt:void()"
                          onClick={(event) => handlerClicked(event, _user)}
                        >
                          Delete entry
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item"
                          href="javascipt:void()"
                        >
                          View details
                        </a>
                      </li>
                    </ul>
                  </div>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Form></Form>
    </div>
  );
}

export default Desktop;
