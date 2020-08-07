import React from 'react';
import {GithubConsumer} from '../context/context';
import {GoLocation} from 'react-icons/go';

export default function InfoUsers(props) {
    let {info} = props;
    return (
        <GithubConsumer>
            {value =>{
                return(
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-6 col-lg-6 col-12 info-me px-5 py-3">
                                <div className="info d-flex">
                                    <img className="img-user" src={info.avatar_url} alt='yousef ayman' />
                                    <div>
                                        <h6>{info.name}</h6>
                                        <h5 className="text-muted">@{info.login}</h5>
                                    </div>
                                </div>
                                <div>
                                    <div className="d-flex info-location">
                                        <GoLocation className="icon-location" />
                                        <h6>{info.location}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }}
        </GithubConsumer>
    )
}

