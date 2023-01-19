// import { useDispatch } from "react-redux"

export const Forms=()=>{
    // const dispatch=useDispatch();
    const addImage=(event)=>{
    //  dispatch();
        const Image=event.tergat.file[0];
    }
const addNews=()=>{
    
}

return<>
 <div class="container-fluid pt-4 px-4">
                <div class="row g-4">
         <div class="col-sm-12 col-xl-6">
                  <form 
                //   onSubmit={addImage}
                  >     
                        <div class="bg-light rounded h-100 p-4">
                            <h6 class="mb-4">Gallery Updates</h6>
                            <div class="mb-3">
                                <label for="formFile" class="form-label">Add Image</label>
                                <input class="form-control"onChange={addImage} type="file" id="formFile"/>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingPassword"
                                    placeholder="News Heading"/>
                                <label for="floatingPassword">Caption</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingPassword"
                                    placeholder="News Heading"/>
                                <label for="floatingPassword">Category</label>
                            </div>
                            <button type="submit" class="btn btn-primary">upload</button>
                          </div></form>
                    </div>
                    <div class="col-sm-12 col-xl-6">
                        <form 
                        // onSubmit={addNews}
                        >
                        <div class="bg-light rounded h-100 p-4">
                            <h6 class="mb-4">News Updates</h6>
                            
                            <div class="form-floating mb-3">
                                <input type="text"  class="form-control" id="floatingPassword"
                                    placeholder="News Heading"/>
                                <label for="floatingPassword">News Heading</label>
                            </div>
                           
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="News Updates"
                                    id="floatingTextarea" style={{height: "150px"}}></textarea>
                                <label for="floatingTextarea">Full News</label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">upload</button>
                        </form>
                    </div>
                     </div> 
                     </div>
</>
}