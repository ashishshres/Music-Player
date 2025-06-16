import { useEffect, useState } from 'react'
import './App.css'
import AlertBox from './Alert'

function App() {
const [tracks, settracks] = useState([])
const [userinput, setuserinput] = useState("")
const [isLoading, setisLoading] = useState(false)


const getTracks = async ()=>{
  setisLoading(true)
 let data= await fetch(`https://v1.nocodeapi.com/dharmendrawd/spotify/VashNOTgtKSzVSai/search?q=${userinput}&type=track`)
 let convertedData = await data.json();
 console.log(convertedData.tracks.items);
 settracks(convertedData.tracks.items)
  setisLoading(false)

}




  return (
    <>
<AlertBox></AlertBox>
<nav className="navbar navbar-expand-lg navbar-dark w-100 bg-dark">
  <div className="container-fluid">

    <div className="w-100 d-flex" id="navbarSupportedContent">
    <a className="navbar-brand" href="#">MusicX</a>

      <div className="d-flex w-100" role="search">
        <input className="form-control me-2" placeholder="eg: dushman hereko here" value={userinput} onChange={(event)=>{setuserinput(event.target.value)}} type="search"  aria-label="Search"/>
        <button className="btn btn-outline-success"  onClick={getTracks} >Search</button>
      </div>
    </div>
  </div>
</nav>


      <div className="container">
<div className={`row py-2 text-center ${isLoading ? '' : 'd-none'}`}>

  <div className="col-12 loaderParent">
    <div className="capybaraloader">
  <div className="capybara">
    <div className="capyhead">
      <div className="capyear">
        <div className="capyear2"></div>
      </div>
      <div className="capyear"></div>
      <div className="capymouth">
        <div className="capylips"></div>
        <div className="capylips"></div>
      </div>
      <div className="capyeye"></div>
      <div className="capyeye"></div>
    </div>
    <div className="capyleg"></div>
    <div className="capyleg2"></div>
    <div className="capyleg2"></div>
    <div className="capy"></div>
<p className='loadingText'>  Loading...</p>
  </div>
  <div className="loader">
    <div className="loaderline"></div>
  </div>
</div>

  </div>
</div>

        <div className="row">
          {
  tracks.map((track, index) => {
    return (
      <div key={track.id} className="col-12 col-md-6 col-lg-3  py-2">
        <div className="card">
          <img src={track.album.images[1].url} className="card-img-top" alt={track.title} />
          <div className="card-body">
            <h5 className="card-title">{track.name}</h5>
            <p className="card-text">
              {track.album.artists[0].name}
            </p>
            <p className="card-text"><b>Release Date: </b>
              {track.album.release_date}
            </p>
            <audio src={track.preview_url} controls className='w-100'></audio>
          </div>
        </div>
      </div>
    );
  })
}

        </div>
      </div>
    </>
  )
}

export default App
