import React from 'react'
 import "../assets/css/style.css"
import { FiSearch } from 'react-icons/fi'

import astronaute from "../assets/images/astronaute.JPG"
import team from "../assets/images/team.jpg"
import logo from "../assets/images/logo.png"
import user from "../assets/images/user.png"
import ligne from "../assets/images/ligne.png"


function Home() {

  return (

    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <a className="navbar-brand" href="#"><img src={logo} alt="" />  </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">


          <ul class="navbar-nav ">
            <li className="nav-item active">
              <a className="nav-link font-weight-bold" href="#">home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#">contact</a>
            </li>

            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#">blog</a>
            </li>
          </ul>
          <form className="form-inline mx-auto my-2">
            <div className="input-group"> <input type="text" className="form-control  bg-light" placeholder="Search" />
              <div class="input-group-append" > <button class="btn search-button bg-light" type="submit"> <FiSearch class="fa fa-search " /> </button>
              </div>
            </div>
          </form>


          <ul className="mt-3 pl-0">
            <button className="btn btn-outline-secondary my-2 my-sm-0 mr-3" type="submit">join us</button>
            <button className="btn btn-primary my-2 my-sm-0" type="submit">donate</button>
          </ul>
        </div>
      </nav>

      <div className='container-fluid' > <img className="img-ligne " src={ligne} alt="ligneDashed" />
        <div className='row  row-astronaute d-flex justify-content-end'>

          <div className='col-xs-4 col-sm-4  col-md-4 col-lg-4'><div className="content-title mt-4"><h2 className="text-center "> Latest news</h2><h3 className="text-center text-primary">Updates</h3> </div> </div>
          <div className='col-xs-4 col-sm-4  col-md-4 col-lg-4'> <img className="img-astronaute  " src={astronaute} alt="img_astronaute" />
          </div>
        </div>

      </div>

      <div className='container '>
        <div className='row'>
          <div className=' col-sm-12 col-md-6 col-lg-6'>  <img className='img-team mx-auto d-block  mb-3' src={team} alt="img_team" />    </div>
          <div className='col-sm-12 col-md-6 col-lg-6 my-auto'>
            <h3 className='title  mb-3'>Lorem Ipsum is simply dummy text of the printing.</h3>
            <p>lorem ipsum is simply dummy text of the printing and typesetting industry
              Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            <div class="media mb-3">
              <img src={user} class=" img-user d-block rounded-circle" alt="" />
              <div class="media-body font-weight-bold ml-3">
                Name here
                <div class="text-muted small ">20.12.2020</div>
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>

  )
}

export default Home
