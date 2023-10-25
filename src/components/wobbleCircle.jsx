import {useState, useEffect} from 'react';

// let deviceWidth = window.innerWidth, deviceHeight = window.innerHeight;
let max = 25, min = 15

function WobbleCircle() {



      const [borderPt, setborderPt] = useState([0,0,0,0]);
//       const [mouseCoordinates, setMouseCoordinates] = useState({x:0, y:0});
//       const mouseMoveHandler = (event) => {
//         setMouseCoordinates({
//     x:event.clientX,
//     y:event.clientY
//     });
// }

      useEffect(() => {
        const interval = setInterval(() => {
            // window.addEventListener('mousemove', mouseMoveHandler);

            setborderPt(mathRandom(0.5, 0.5))
        }, 2000);
        return () => {
          clearInterval(interval);
        //   window.removeEventListener('mousemove', mouseMoveHandler);
        };
      }, []);

  
   
    let borderRadius = `${borderPt[0]}rem ${borderPt[1]}rem ${borderPt[2]}rem ${borderPt[3]}rem `;

    return (
      <div className="wobble" 
      style={{borderRadius: borderRadius}}
      >
       

      </div>
    );
  }
  

  function mathRandom(coordX, coordY){
    // coordX = coordX/deviceWidth;
    // coordY = coordY/deviceHeight;
    if (coordX < 0.50 && coordY < 0.5){                 //1st quad
        return [0.5 * Math.floor(Math.random() * (max - min) + min), Math.floor(Math.random() * (max - min) + min), 0.5 * Math.floor(Math.random() * (max - min) + min), 0.5 * Math.floor(Math.random() * (max - min) + min)] ;

    }  else if (coordX < 0.5 && coordY > 0.5){                 //3rd quad
        return [0.5 * Math.floor(Math.random() * (max - min) + min), 0.5 * Math.floor(Math.random() * (max - min) + min), Math.floor(Math.random() * (max - min) + min), 0.5 * Math.floor(Math.random() * (max - min) + min)] ;

    } else if (coordX > 0.5 && coordY < 0.5){              // 2nd quad
        return [ Math.floor(Math.random() * (max - min) + min), 0.5 * Math.floor(Math.random() * (max - min) + min), 0.5 * Math.floor(Math.random() * (max - min) + min), 0.5 * Math.floor(Math.random() * (max - min) + min)] ;
        
    } else if (coordX > 0.5 && coordY > 0.5){          //4th quad
        return [0.5 * Math.floor(Math.random() * (max - min) + min), 0.5 * Math.floor(Math.random() * (max - min) + min), 0.5 * Math.floor(Math.random() * (max - min) + min),  Math.floor(Math.random() * (max - min) + min)] ;
        
    } else{
        return [Math.floor(Math.random() * (max - min) + min), Math.floor(Math.random() * (max - min) + min), Math.floor(Math.random() * (max - min) + min), Math.floor(Math.random() * (max - min) + min)] ;

    }
   
    
  
  }
  
  
  export default WobbleCircle;
  