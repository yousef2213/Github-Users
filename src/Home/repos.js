import React from 'react';
import {GithubConsumer} from '../context/context';
import {FaArrowRight} from 'react-icons/fa';

export default function Repos() {
    return (
        <GithubConsumer>
            {value =>{
                let {allRepos} = value;
                return(
                    <div className="container">
                        <div className="row py-5">
                            <h2>Repository :</h2>
                            {allRepos.map(repo =>{
                                return(
                                    <div key={repo.id} className="col-12 p-0">
                                        <div className="repo-url">
                                            <a href={`https://github.com/${repo.full_name}`} target="blank" >{repo.full_name}</a>
                                            <a href={`https://github.com/${repo.full_name}`} target="blank" ><FaArrowRight className="fa" /></a>
                                        </div>
                                    </div>
                                )
                            } )}
                        </div>
                    </div>
                )
            }}
        </GithubConsumer>
    )
}
