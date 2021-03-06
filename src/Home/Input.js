import React from "react";
import { GithubConsumer } from "../context/context";
import { Link } from "react-router-dom";
export default function input() {
  return (
    <GithubConsumer>
      {(value) => {
        let { handelChange, handelSubmit, handelSearch } = value;
        return (
          <div className="container pt-5 pb-4">
            <form className="search-component" onSubmit={handelSearch}>
              <div className="input-group">
                <input
                  onChange={handelChange}
                  type="text"
                  className="form-control search"
                  placeholder="Github Username"
                  aria-label="Github Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              <Link to={`repo`} className="btn-search" onClick={handelSubmit}>
                Seacrh
              </Link>
            </form>
          </div>
        );
      }}
    </GithubConsumer>
  );
}
