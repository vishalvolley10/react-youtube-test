// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import YouTube from 'react-youtube';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

// const App=()=> {
//   const opts = {
//     height: '390',
//     width: '640',
//     playerVars: { // https://developers.google.com/youtube/player_parameters
//       autoplay: 1
//     }
//   };
  
//   const click=()=>{
//     alert("test");
//   }

//   return (
//     <div className="App">
//       <YouTube
//         videoId="2g811Eo7K8U"
//         opts={opts}
//         autoplay="0" 
//       />
//       <br/>
//       <br/>
//       {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}
//       {/* <iframe src="//www.youtube.com/embed/FKWwdQu6_ok?enablejsapi=1" frameborder="0" allowfullscreen id="video"></iframe> */}
//     </div>
//   );
  
  
// }

// export default App;


import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './Home';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Home} exact/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;
