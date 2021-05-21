import React, { useEffect, useState } from "react";
import "../style/content.css";
import { auth, db, storage } from "./firebase";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { user } from "./reducer";
import { Button } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Content() {
  //...
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([
    { category: "New" },
    { category: "Blazers" },
    { category: "Woman" },
    { category: "Bags" },
    { category: "Shoes" },
    { category: "Man" },
    { category: "Kids" },
  ]);
  //...
  const dispatch = useDispatch();
  const history = useHistory();

  //...

  useEffect(() => {
    db.collection("categories").onSnapshot(
      (e) => {
        setData(e?.docs.map((e) => e.data()));
      },
      (err) => {
        throw err;
      }
    );
  }, []);

  //...

  const ViewAll = ({ info }) => {
    const filt = data.filter((e) => e.category === info.category);

    return (
      <div className="row">
        {filt.length !== 0 ? <h2>{info.category}</h2> : ""}
        <span className="info">
          {filt.map((e) => (
            <div key={e.url} className="card">
              <img width="100" height="100" src={e.url} alt="" />
              <span className="btn-p">
                <span>{e.price}</span>
                <Button
                  onClick={() => {
                    db.collection("categories")
                      .doc(e.id)
                      .delete()
                      .then(() =>
                        storage
                          .child(e.id)
                          .delete()
                          .catch((err) => console.error(err))
                      )
                      .catch((err) => console.error(err));
                  }}
                >
                  <DeleteForeverIcon />
                </Button>
              </span>
            </div>
          ))}
        </span>
      </div>
    );
  };
  //...

  return (
    <div className="content">
      <ul className="nav">
        <li>
          <Link className="link" to="/content">
            Content
          </Link>
        </li>
        <li>
          <Link className="link" to="/admin">
            ADD
          </Link>
        </li>
        <li
          onClick={() =>
            auth
              .signOut()
              .then((e) => {
                dispatch(user());
                history.push("/");
              })
              .catch((err) => console.error(err))
          }
        >
          <Link to="" className="link">
            LOGOUT
          </Link>
        </li>
      </ul>
      <div className="category">
        {category.map((e) => (
          <ViewAll key={e.category} info={e} />
        ))}
      </div>
    </div>
  );
}

export default Content;
