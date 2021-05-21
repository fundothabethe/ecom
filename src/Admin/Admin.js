import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import "../style/admin.css";
import { auth, db, storage } from "./firebase";
import { uid } from "uid";
import { useDispatch } from "react-redux";
import { user } from "./reducer";
import { Link, useHistory } from "react-router-dom";

function Admin() {
  //...

  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState();

  //...
  const dispatch = useDispatch();
  const history = useHistory();

  //...

  const submitHandler = (e) => {
    e.preventDefault();
    //..----------HORROR
    const uuid = uid();

    const fileRef = storage.child(uuid);
    fileRef
      .put(file)
      .then(() =>
        fileRef.getDownloadURL().then((url) =>
          db
            .collection("categories")
            .doc(uuid)
            .set({
              category: category,
              price: price,
              url: url,
              id: uuid,
            })
            .catch((err) => console.error(err))
        )
      )
      .catch((err) => console.log(err));

    e.target.reset();
  };
  //...

  const getList = (e) => <MenuItem value={e}>{e}</MenuItem>;
  //...

  return (
    <section className="admin">
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
                history.push("/admin");
              })
              .catch((err) => console.error(err))
          }
        >
          <Link to="/" className="link">
            LOGOUT
          </Link>
        </li>
      </ul>
      <form onSubmit={submitHandler} className="upload-section">
        <TextField
          onChange={(e) => setPrice(e.target.value)}
          className="input"
          id="standard-basic"
          label="Price"
        />
        <div className="list">
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select onChange={(e) => setCategory(e.target.value)} id="select">
            {getList("New")}
            {getList("Woman")}
            {getList("Man")}
            {getList("Shoes")}
            {getList("Kids")}
            {getList("Blazers")}
            {getList("Bags")}
          </Select>
        </div>
        <TextField
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
          type="file"
          className="input"
          id="standard-basic"
          label="Image"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </section>
  );
}

export default Admin;
