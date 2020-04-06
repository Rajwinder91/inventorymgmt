import React, { Component } from 'react';
import ami from '../../images/ami.jpg';
import kuljit from '../../images/kuljit.jpg';
import mehul from '../../images/mehul.jpg';
import loveleen from '../../images/loveleen.jpg';
import mandeep from '../../images/mandeep.jpg';
import krishana from '../../images/krishana.jpg';
import manjinder from '../../images/manjinder.jpg';
import pawan from '../../images/pawan.jpg';
import raj from '../../images/rajwinder.jpg';


class team extends Component {

    // Start Render Function
    render() {       
      return ( 
        <div class="container-fluid  pt-5 mt-3">
            <div class="row">
                <div class="col-md-12">               
                    <div class="text-center"><h3 class="text-primary">Meet our team</h3></div>
                    <br></br><br></br><br></br><br></br>
                    <div class="web_team">
                        <h3 class="text-orange   text-center">Web Team</h3>
                        <br></br>
                        <div class="row">
                            <div class="col-md-4">
                                <img className=" img-circle sizeimg " src={raj} alt="rajwinder"/>
                                <figcaption class="figure-caption text-center text-primary"><h4>Rajwinder Kaur(Team Lead)</h4></figcaption>
                            </div> 
                            <div class="col-md-4">   
                                <img className="  img-circle sizeimg " src={kuljit} alt="kuljit"/>
                                <figcaption class="figure-caption text-center text-primary"><h4>Kuljit kaur</h4></figcaption>
                            </div>
                            <div class="col-md-4">    
                                <img className="  img-circle sizeimg" src={manjinder} alt="manjinder"/>
                                <figcaption class="figure-caption text-center text-primary"><h4>Manjinder Kaur</h4></figcaption>
                            </div>
                        </div>   
                    </div>   
                    <br></br><br></br><br></br>
                    <br></br><br></br><br></br>  
                    <div class="app_team">
                        <h3 class="text-orange text-center">App Team</h3>
                        <br></br>
                        <div class="row">
                            <div class="col-md-4">
                                <img className=" img-circle sizeimg " src={krishana} alt="krishna"/>
                                <figcaption class="figure-caption text-center text-primary"><h4>krishna Panchal(Team Lead)</h4></figcaption>
                            </div> 
                            <div class="col-md-4">
                                <img className="  img-circle sizeimg " src={mandeep} alt="mandeep"/>
                                <figcaption class="figure-caption text-center text-primary"><h4>Mandeep Kaur</h4></figcaption>
                            </div>
                            <div class="col-md-4">  
                                <img className="  img-circle sizeimg" src={pawan} alt="pawan"/>
                                <figcaption class="figure-caption text-center text-primary"><h4>Pawandeep Kaur</h4></figcaption>
                            </div>
                        </div>   
                    </div>                   
                    <br></br><br></br><br></br>
                    <br></br><br></br><br></br>
                    <div class="back_end_team">
                        <h3 class="text-orange text-center">Back-End Team</h3>
                        <br></br>
                        <div class="row">
                            <div class="col-md-4">
                                <img className=" img-circle sizeimg " src={mehul} alt="mehul"/>
                                <figcaption class="figure-caption text-center text-primary"><h4>Mehul Bhavsar(Team Leader)</h4></figcaption>
                            </div> 
                            <div class="col-md-4">  
                                <img className="  img-circle sizeimg " src={ami} alt="ami"/>
                                <figcaption class="figure-caption text-center text-primary"><h4>Ami Dave</h4></figcaption>
                            </div>
                            <div class="col-md-4">  
                                <img className="  img-circle sizeimg" src={loveleen} alt="loveleen"/>
                                <figcaption class="figure-caption text-center text-primary"><h4>Loveleen Kaur</h4></figcaption>
                            </div>
                        </div>                         
                    </div>        
                </div>
            </div> 
        </div>          
      );
    }
    // End Render Function
  }

  export default team; 
