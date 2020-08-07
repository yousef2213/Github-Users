import React from 'react';
import {GithubConsumer} from '../context/context';
import {GoRepoClone} from 'react-icons/go'
import {RiUserFollowLine} from 'react-icons/ri'
import {BsFillPersonPlusFill} from 'react-icons/bs'

// 
import InfoMe from './infome'
export default function Hero() {
    return (
        <GithubConsumer>
            {value =>{
                let {me} = value;
                return(
                    <div className="container">
                        <div className="row py-5">
                            <div className="col-sm-6 col-md-6 col-lg-3 col-6 mx-auto repos">
                                <div className="mb-2">
                                    <div className="d-flex justify-content-around">
                                        <BsFillPersonPlusFill className="align-self-center icon-followers" />
                                        <div>
                                            <h5>{me.followers || 55}</h5>
                                            <h4>Followers</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3 col-6 mx-auto repos">
                                <div className="mb-2">
                                    <div className="d-flex justify-content-around">
                                        <RiUserFollowLine className="align-self-center icon-following" />
                                        <div>
                                            <h5>{me.following || 4}</h5>
                                            <h4>Following</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3 col-6 mx-auto repos">
                                <div className="mb-2">
                                    <div className="d-flex justify-content-around">
                                        <GoRepoClone className="align-self-center icon-repo" />
                                        <div>
                                            <h5>{me.public_repos}</h5>
                                            <h4>Reops</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3 col-6 mx-auto repos">
                                <div className=" mb-2">
                                    <div className="d-flex justify-content-around">
                                        <GoRepoClone className="align-self-center icon-repo" />
                                        <div>
                                            <h5>{me.public_gists}</h5>
                                            <h4>Gists</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       <InfoMe />
                    </div>
                )
            }}
        </GithubConsumer>
    )
}

