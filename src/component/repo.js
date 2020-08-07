import React from 'react'
import {GithubConsumer} from '../context/context';
import {FaArrowRight} from 'react-icons/fa';

export default function repo(){
       return (
            <GithubConsumer>
                {value =>{
                    let {dataInformatin,languages} = value;
                    if(dataInformatin.length === 0){
                        return(
                            <div>
                                <h1>No Repos</h1>
                            </div>
                        )
                    }
                    return(
                        <div className="container">
                            <div className="row py-5">
                            <h2>Repository :</h2>
                            {languages.map(repo =>{
                            return(
                                <div key={repo.id} className="col-12 p-0">
                                    <div className="repo-url">
                                        <a href={`https://github.com/${repo.full_name}`} target="blank" >{repo.full_name}</a>
                                        <a href={`https://github.com/${repo.full_name}`} target="blank" ><FaArrowRight className="fa" /></a>
                                     </div>
                                </div>
                                  )
                                })}
                            </div>
                        </div>
                    )
                }}
            </GithubConsumer>
        )}

        