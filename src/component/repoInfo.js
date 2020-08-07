import React from 'react';
import {GithubConsumer} from '../context/context';
import {GoRepoClone} from 'react-icons/go'
import {RiUserFollowLine} from 'react-icons/ri'
import {BsFillPersonPlusFill} from 'react-icons/bs'
import Repos from './repo'
import InfoUsers from './repoInfoUser'
import Chart from '../component/ChartUsers/Chart';
import Chart_2 from '../component/ChartUsers/Chart_2';
import {Link} from 'react-router-dom'

export default function Hero() {
    return (
        <GithubConsumer>
                {value =>{
                    let {dataInformatin,languages} = value;
                    
                
                let Userlanguages = languages.reduce((total,item) =>{
                    const {language} = item;
                    if(!language) return total;
                    if(!total[language]){
                        total[language] = {label:language,value:1};
                    }else{
                        total[language] = {...total[language],value:total[language].value + 1};
                    }
                    return total;
                },{});
                Userlanguages = Object.values(Userlanguages).sort((a,b) =>{
                return b.value - a.value
                }).splice(0, 5);


                if(dataInformatin.length === 0){
                    return(
                        <div className="container">
                            <div className="row py-5">
                                <div className="col-sm-6 col-md-6 col-lg-3 col-6 mx-auto info0">
                                    <Link to="/" className="btn btn-info">Back Home</Link>
                                </div>
                            </div>
                        </div>
                    )
                }
                return(
                    <>
                    <div className="container">
                        <div className="row py-5">
                            <div className="col-sm-6 col-md-6 col-lg-3 col-6 mx-auto repos">
                                <div className="mb-2">
                                    <div className="d-flex justify-content-around">
                                        <BsFillPersonPlusFill className="align-self-center icon-followers" />
                                        <div>
                                            <h5>{dataInformatin.followers || 55}</h5>
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
                                            <h5>{dataInformatin.following || 4}</h5>
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
                                            <h5>{dataInformatin.public_repos}</h5>
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
                                            <h5>{dataInformatin.public_gists}</h5>
                                            <h4>Gists</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <InfoUsers info={dataInformatin} />
                        <div className="container">
                            <div className="row my-3">
                                <div className="col-sm-10 mt-3 col-md-10 col-lg-6 col-12 mx-auto">
                                <div>
                                    <Chart data={Userlanguages} /> 
                                </div>
                                </div>
                                <div className="col-sm-10 mt-3 col-md-10 col-lg-6 col-12 mx-auto">
                                <div>
                                    <Chart_2 data={Userlanguages} />
                                </div>
                                </div>
                            </div>
                        </div>
                        <Repos />
                    </div>
                    </>
                )
            }}
        </GithubConsumer>
    )
}

