import React, { Component } from 'react';
class CreateCategory extends Component {
    render() {
      return (
       
          
          
        <div class="row">
                <h3 class="text-primary h3cate">Create Category</h3>
                <div className="col-md-12">
                    
            <div class="top_button">
                                    <div class="form-group">
                                        <input type="submit" class="btn_cate"  value="Cancel"/>
                            
                                    &nbsp;&nbsp;  <input type="submit" class="btn_cate"  value="Save"/>
                                    </div>
                                </div>
            </div>
        <div class="col-md-9">                    
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div class="create_cate">  
                <form method="post" name="register" >
                    <div class="row register-form">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control input-lg" required name="catename" placeholder="Category Name*"/>
                            </div>
                            
                            
                            <div class="form-group">
                                <input type="text" required name="Tags" class="form-control input-lg" placeholder="Tags"/>
                            </div>  
                                                             
                      </div>
                        <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control input-lg" name="cateSKU" required placeholder="SKU*"/>
                                    </div>
                         </div>
                      </div>
                </form>
            </div>
        </div>
    </div>   
    </div>       
);
}
}
  
  export default CreateCategory