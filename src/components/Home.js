import React, { useEffect, useState ,useRef} from 'react'
import '../css/home.css'
import TableInfo from './TableInfo'
import Table from './Table'

import '../css/generator.css'


function Home() {
    const [tesla, setTesla] = useState(1.5);
    const [width, setWidth] = useState(200)
    const [height, setHeight] = useState(100);
    const [frequenz, setFrequenz]=useState(60)
    var [labx, setLabX]=useState([0])
    var [laby, setLabY]=useState([0])
    var [laby_90, setLabY_90]=useState([0])
    const [periode, setSetPeriode]=useState(1/frequenz)
  
   

   
   
    //transform: 'rotate(305deg)',
    const refBall =useRef(null)

   var trag_lis=[]

   useEffect(() => {


    let volt_list=[]
    let volt_list_90=[]
    let time=[]
    let starter=0
    let step=0.00027777777
    let period=1/frequenz

    while(starter<period){
        time= time.concat(starter)
        let omega=2*Math.PI*frequenz
        let sinTheata=Math.sin(omega*starter)
        let sinTheata_90=Math.sin(omega*starter +Math.PI/2)
        let Volt=sinTheata*omega*tesla*width/1000*height/1000
        let Volt_90=sinTheata_90*omega*tesla*width/1000*height/1000
        volt_list=volt_list.concat(parseFloat(Volt).toFixed(1))
        volt_list_90=volt_list_90.concat(parseFloat(Volt_90).toFixed(1))
        starter+=step
	}
  
    setLabY(volt_list)
    setLabX(time)
    setLabY_90(volt_list_90)
    setSetPeriode(1/frequenz)


       
       return () => {
        
       }
   }, [frequenz, width,height, tesla])


    useEffect(() => {
        

        
        return () => {
            
        }
    }, [])

  

    const ruf = (labx, laby,laby_90)=>{
       
        return (<Table labx={labx} laby={laby} laby_90={laby_90}/>)
    }
 
    return (
        <div className='home'>
            <div className='home-left'>
                <div className="home-left-bar-helper">
               
                    <div className="magnet_field" >
                        <div className="magnet_top" >
                        <h1>N</h1>
                        </div>
                        <span style={style.small_plate} ></span>
                        <span className={"lambee"} style={style.lambe}  style={{ ...style.lambe, animationDuration:`${1/periode}ms`}}></span>
                        <span style={style.plate_blue}></span>
                        <span style={style.plate_red}></span>
                        <div className="magnet_plate" style={{ ...style.magnet_plate, animationDuration:`${1/periode}ms`, width:`${width}px`,height:`${height}px`}}>
                        <span style={style.plate_axis}></span>
                        </div>
                        <div className="magnet_bottom" >
                        <h1>S</h1>
                        </div>
                    </div>
                    </div>
              
            

            </div>
            <div className='home-right'>
                <TableInfo frequenz={frequenz} setFrequenz={setFrequenz} setSetPeriode={setSetPeriode} setLabX={setLabX}setLabY={setLabY}  tesla={tesla} setTesla={setTesla} width={width} setWidth={setWidth} height={height} setHeight={setHeight} />

            </div>
            <div className='home-end'>
            {ruf(labx, laby,laby_90)}
                
            </div>
        </div>
    )
}



const style = {


        magnet_plate: {
          height: "100px",
          width: "150px",
          border: "1px solid red",
       
        },
        plate_axis: {
          position: "absolute",
          width: "400px",
          height: ".3px",
          backgroundColor: "#c8232c",
          left: "-50px",
          top: "50%"
        },
      
        plate_red: {
          position: "absolute",
          height: "2px",
          width: "100px",
          backgroundColor: "#c8232c",
          top: "225px",
          left: "380px"
        },
      
        plate_blue: {
            position: "absolute",
          height: "2px",
          width: "100px",
          backgroundColor: "#007aff",
          top: "235px",
          left: "380px"
        },
        small_plate: {
          position: "absolute",
          height: "13%",
          width: "30px",
          backgroundColor: "#c8232c",
          top: "200px",
          left: "350px"
        },
      
        
    
  



}



export default Home
