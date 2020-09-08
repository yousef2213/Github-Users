import React from "react";
import { GithubConsumer } from "../context/context";
import { GoLocation } from "react-icons/go";
import { MdWeb } from "react-icons/md";
export default function InfoMe() {
  return (
    <GithubConsumer>
      {(value) => {
        let { me } = value;
        return (
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-6 col-12 info-me px-5 py-3">
                <div className="info d-flex">
                  <img
                    className="img-me"
                    src={me.avatar_url}
                    alt="yousef ayman"
                  />
                  <div>
                    <h6>Yousef Ayman</h6>
                    <span className="text-muted">@{me.login}</span>
                  </div>
                </div>
                <div className="py-3">
                  <h6 className="pl-2 text-muted">Front-End Developer</h6>
                </div>
                <div>
                  <div className="d-flex info-location">
                    <GoLocation className="icon-location" />
                    <h6>Egypt</h6>
                  </div>
                  <div className="d-flex info-web">
                    <MdWeb className="icon-web" />
                    <a
                      className="link"
                      target="blank"
                      href="https://yousef-ayman.netlify.app/"
                    >
                      www.yousefayman.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </GithubConsumer>
  );
}
