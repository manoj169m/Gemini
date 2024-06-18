import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Contex } from '../../contex/Contex'

const Main = () => {

    const{OnSent,recentpromt,showresult,loading,resultData,setInput,input,
        theme,mainColor,handletheme,
        handleMouseEnter,handleMouseLeave,RecentEntery,NewChat,TextColor} =useContext(Contex);
    

    

  return (
    <div className='main' style={mainColor}>
        <div className="nav">
            <p>Gemini</p>
           <div> <button onClick={()=>handletheme()}>{theme ? <img src={assets.sun_png} alt="" /> : <img src={ assets.moon_png}/>}</button> <img src={assets.userkarl} alt="" /> </div>
        </div>
        <div className="main-container">

            {!showresult ?
            <>
            <div className="greet">
                <p><span>Hello, Mano.</span></p>
                <p>How Can i help you today</p>
            </div>
            <div className="cards">
                <div className="card" style={RecentEntery(5)} onMouseEnter={()=>handleMouseEnter(5)} onMouseLeave={handleMouseLeave} >

                <p style={TextColor}>A majestic waterfall cascading down a lush green mountainside, with a rainbow shimmering in the mist</p>
                <img src={assets.compass_icon} alt="" />
                </div>

                <div className="card" style={RecentEntery(6)} onMouseEnter={()=>handleMouseEnter(6)} onMouseLeave={handleMouseLeave}>

<p style={TextColor}>A griffin with the head of an eagle and the body of a lion, soaring through a starry night sky.</p>
<img src={assets.bulb_icon} alt="" />
</div>
<div className="card" style={RecentEntery(7)} onMouseEnter={()=>handleMouseEnter(7)} onMouseLeave={handleMouseLeave}>

<p style={TextColor}>The wind whispers secrets through the trees, of forgotten memories and hidden seas.</p>
<img src={assets.message_icon} alt="" />
</div>
<div className="card" style={RecentEntery(8)} onMouseEnter={()=>handleMouseEnter(8)} onMouseLeave={handleMouseLeave}>

<p style={TextColor}>The top 5 challenges facing artificial intelligence in 2024</p>
<img src={assets.code_icon} alt="" />
</div>
</div>
</>
:<div className='result'>
    <div className="result-title">
        <img src={assets.userkarl} alt="" />
        <p>{recentpromt}</p>
    </div>
    <div className="result-data">
        <img src={assets.gemini_icon} alt="" />
        {loading ?
         <div className='loader'>
            <hr />
            <hr />
            <hr />

         </div>
         
         : 

        <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
         }
      
    </div>

</div>
            }
           
            <div className="main-bottom">
                <div className="search-box"   style={NewChat}>
                    <input onChange={(e)=>setInput(e.target.value)}
                    style={TextColor}
                      value={input}  type="text" placeholder='Enter a Promt here' />
                    <div>
                      {theme ?  <img src={assets.darkgallery} alt="" />:  <img src={assets.gallery_icon} alt="" /> }
                      {theme ?  <img src={assets.darksend} alt="" /> :  <img src={assets.mic_icon} alt="" />}
                        {
                            input ?  <img onClick={()=>OnSent()} src={theme ? assets.darkmic : assets.send_icon} alt="" /> : null
                        }
                     
                    </div>

                </div>
                <p className="bottom-info">
                    This is a gemiini clone, developed by   <a target="_blank" href="https://www.linkedin.com/in/mano-bharathi-b-157982223/"><span >Mano Bharathi</span></a>
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default Main
