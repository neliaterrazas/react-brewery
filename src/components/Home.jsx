// import React from 'react';
// import { Switch, Route, Link } from 'react-router-dom';
// import yellow from '../assets/imgs/top-pic.png';
// import gold from '../assets/imgs/true-gold.png';
// import moose from '../assets/imgs/antlers.png';
// import wolf from '../assets/imgs/wolf.jpg';
// import breakside from '../assets/imgs/breakside-name.png';
// import BeerImgComponent from './BeerImgComponent';
// import About from './About';
//
//
//
//
// function Home(){
//   return(
//     <div>
//     <style jsx>{`
//       .first-row {
//         display: flex;
//         flex-direction: row;
//         justify-content: space-around;
//         height: 90vh;
//       }
//       .first-row img {
//         width: 100%;
//       }
//        .up-top {
//          width: 33%;
//          z-index: 1;
//          top: 0px;
//          left: 0px;
//        }
//        .right {
//          width: 33%;
//          z-index: -1;
//        }
//        .moose {
//          width: 33%;
//          z-index: 1;
//        }
//        .wolf {
//          width: 100%;
//        }
//        .breakside {
//          display: flex;
//          flex-direction: row;
//          justify-content: space-between;
//        }
//        .logo {
//          width: 40%;
//        }
//        h1 {
//          text-align: center;
//        }
//        .dark-button {
//          background-color: black;
//          color: gold;
//        }
//        .spaced-out {
//          padding: 5em;
//        }
//      `}</style>
//         <div className="first-row"> {/*up top three photos*/}
//           <img className="up-top" src={yellow}/>
//           <img className="right" src={gold}/>
//           <img className="moose" src={moose}/>
//         </div> {/*photos end here*/}
//         <div className="breakside"> {/*wolf and description here*/}
//           <div>
//             <img className="wolf" src={wolf}/>
//           </div>
//           <div className="logo">
//             <img src={breakside}/>
//             <h1>BREAKSIDE PUSHES THE BOUNDARIES OF TECHNIQUE AND FLAVOR WHILE MAINTAINING A DELICIOUS PROFILE IN EVERYTHING IT CREATES</h1>
//             <div className="spaced-out">
//               <button className="dark-button"  type="button">LOCATIONS</button>
//               <button className ="dark-button"  type="button">BEERS</button>
//             </div>
//           </div>
//         </div> {/*wolf and description end*/}
//
//         <BeerImgComponent/>
//         <About/>
//     {/*initial div*/}</div>
//
//
//   );
// }
//
// export default Home;
