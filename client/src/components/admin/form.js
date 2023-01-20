import { useDispatch } from "react-redux";
import React, { useRef, useState } from "react";
import WebService from "../../web/webService";
import webApi from "../../web/webApi";
import { updateGallery } from "../../web/gallerySlice";
import { toast, ToastContainer } from "react-toastify";
export const Forms = () => {
  const dispatch = useDispatch();
  const [filename, setFilename] = useState("");
  const [category, setCategory] = useState("");
  const [caption, setCaption] = useState("");
  const [headline, setHeadline] = useState("");
  const [fullNews, setFullNews] = useState("");

  // save gallery function
  const addGallery = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("galleryImage", filename);
    formData.set("category", category);
    formData.set("caption", caption);

    try {
      let res = await WebService.postApi(webApi.ADD_GALLERY, formData);

      if (res.data.status) {
        dispatch(updateGallery(res.data.data));
        toast.success("Image uploaded successfully");
      }
    } catch (error) {
        console.log(error);
    }
  };
  const addNews = async (e) => {
    e.preventDefault();
    console.log(headline);
    console.log(fullNews);
    let formData = new FormData();
    formData.set("headline", headline);
    formData.set("fullnews", fullNews);
    console.log(formData);

    // try {
    //     let res = await WebService.postApi(webApi.ADD_NEWS, formData);
  
    //     if (res.data.status) {
    //       dispatch(updateGallery(res.data.data));
    //       toast.success("News uploaded successfully");
    //     }
    // } catch (error) {
    //       toast.error("Oops!.. something went wrong");
    //       console.log(error);
    //   }
  };
  return (
    <>
      <ToastContainer />
      <div class="container-fluid pt-4 px-4">
        <div class="row g-4">
          {/* Add gallery */}
          <div class="col-sm-12 col-xl-6">
            <div class="bg-light rounded h-100 p-4">
              <h6 class="mb-4">Gallery Updates</h6>
              <form>
                <div class="mb-3">
                  <label for="formFile" class="form-label">
                    Add Image
                  </label>
                  <input
                    class="form-control"
                    onChange={(event) => setFilename(event.target.files[0])}
                    type="file"
                    id="formFile"
                  />
                </div>
                <div class="form-floating mb-3">
                  <input
                    onChange={(e) => setCaption(e.target.value)}
                    type="text"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="News Heading"
                  />
                  <label for="floatingPassword">Caption</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    onChange={(e) => setCategory(e.target.value)}
                    type="text"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="News Heading"
                  />
                  <label for="floatingPassword">Category</label>
                </div>
                <button
                  type="submit"
                  onClick={addGallery}
                  class="btn btn-primary"
                >
                  upload
                </button>
              </form>
            </div>
          </div>
          {/* News Upload */}
          <div class="col-sm-12 col-xl-6">
            <form>
              <div class="bg-light rounded h-100 p-4">
                <h6 class="mb-4">News Updates</h6>

                <div class="form-floating mb-3">
                  <input
                    type="text"
                    onChange={(e) => setHeadline(e.target.value)}
                    class="form-control"
                    id="floatingPassword"
                    placeholder="News Heading"
                  />
                  <label for="floatingPassword">News Heading</label>
                </div>

                <div class="form-floating">
                  <textarea
                    onChange={(e) => setFullNews(e.target.value)}
                    class="form-control"
                    placeholder="News Updates"
                    id="floatingTextarea"
                    style={{ height: "150px" }}
                  ></textarea>
                  <label for="floatingTextarea">Full News</label>
                </div>
              </div>
              <button type="submit" onClick={addNews} class="btn btn-primary">
                upload
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
