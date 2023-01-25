import React from 'react'
import { useSelector } from 'react-redux';
import "./news1.css";


export default function News() {
  const {newsList} = useSelector(state=>state.news.value);
  return (
    <section id="why-us" className="why-us mt-5">
    <div className="container">

      <div className="section-title mt-5">
        <h1> <span>Latest News</span></h1>
      </div>

      <div className="row mt-5">
      {newsList.map((news,index)=><div key={index} className="col-lg-4">
          <div className="box">
          <div className='d-flex justify-content-between'>
          <span className='float-left'>0{index+1}</span>
            <span className='float-right'>{news.date}</span>

          </div>
            <h4>{news.headline}</h4>
            <p className='text-break'>{news.fullnews}</p>
          </div>
        </div>)}
        
{/* 
        <div className="col-lg-4 mt-4 mt-lg-0">
          <div className="box">
            <span>02</span>
            <h4>Repellat Nihil</h4>
            <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
          </div>
        </div>

        <div className="col-lg-4 mt-4 mt-lg-0">
          <div className="box">
            <span>03</span>
            <h4> Ad ad velit qui</h4>
            <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
          </div>
        </div> */}

      </div>

    </div>
  </section>
  )
}
