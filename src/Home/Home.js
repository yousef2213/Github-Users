import React from 'react';
import Navbar from './Navbar';
import Input from './Input';
import Hero from './Hero';
import Repos from './repos';
import Chart from '../component/Charts/chart';
import Chart_2 from '../component/Charts/Chart_2';
import {GithubConsumer} from '../context/context';


function Home() {
  return(
  <GithubConsumer>
    {value =>{
       let {allRepos} = value;
        let languages = allRepos.reduce((total,item) =>{
          const {language} = item;
          if(!language) return total;
          if(!total[language]){
              total[language] = {label:language,value:1};
          }else{
              total[language] = {...total[language],value:total[language].value + 1};
          }
          return total;
      },{});
      languages = Object.values(languages).sort((a,b) =>{
        return b.value - a.value
      }).splice(0, 5);
      return(
        <>
            <Navbar />
            <Input />
            <Hero />
            <div className="container">
              <div className="row my-3">
                <div className="col-sm-10 mt-3 col-md-10 col-lg-6 col-12 mx-auto">
                  <div>
                    <Chart data={languages} /> 
                  </div>
                </div>
                <div className="col-sm-10 mt-3 col-md-10 col-lg-6 col-12 mx-auto">
                  <div>
                    <Chart_2 data={languages} />
                  </div>
                </div>
              </div>
            </div>
            <Repos />
          </>
      )
    }}
  </GithubConsumer>
  )
}

export default Home;