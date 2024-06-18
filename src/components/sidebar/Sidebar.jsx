import React, { useContext, useState } from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'
import { Contex } from '../../contex/Contex'

const Sidebar = () => {

    const [extended,setExtended]=useState(false)

    const {OnSent,prePromt,setRecentpromt,newChat,SidebarColor,RecentColor,
        handleMouseEnter,handleMouseLeave,RecentEntery,NewChat,theme} =useContext(Contex)

    const loadPromt =async (promt)=>{
        setRecentpromt(promt)
         await OnSent(promt)
         console.log('clicked');
    }



    const handleMenu =()=>{
        setExtended(!extended)
    }
  return (
    <div className='sidebar' style={SidebarColor} >
        <div className="top">
         {theme ?   <img className='menu' onClick={handleMenu} src= {assets.darkMenu}  alt="" /> : <img className='menu' onClick={handleMenu} src={assets.menu_icon}/>}

<div className="new-chat" onClick={()=>newChat()}  style={NewChat}>
    <img src={assets.plus_icon} alt="" />
  {extended ?  <p>new chat</p> : null }
    </div>
    {extended
    ? 
    <div className="recent" style={RecentColor}>
        <p className="recent-title">
            Recent
        </p>
        {prePromt.map((item,index)=>{
            return (
            <div key={index} onClick={()=>loadPromt(item)} className='recent-entry' style={RecentEntery(index)} onMouseEnter={()=>handleMouseEnter(index)}  onMouseLeave={handleMouseLeave}>
               {theme ? <img src={assets.darkmsg} alt="" /> : <img src={assets.message_icon} alt="" /> }
                <p>{item.slice(0,18)}...</p>

            </div>
            )
        })}
        <div className="recent-entry" style={RecentEntery(11)} onMouseEnter={()=>handleMouseEnter(11)} onMouseLeave={handleMouseLeave} >
          {theme ?   <img src={assets.darkmsg} alt="" /> : <img src={assets.message_icon} alt="" /> }
            <p >what is react...</p>
        </div>

</div>
: null }
        </div>

        <div className="bottom">
            <div className="bottom-item recent-entry" style={RecentEntery(12)} onMouseEnter={()=>handleMouseEnter(12)} onMouseLeave={handleMouseLeave} >
              {theme ?  <img src={assets.darkQuestion} alt="" /> :  <img src={assets.question_icon} alt="" /> }
             {extended ? <p>Help</p> : null}   
            </div>
            <div className="bottom-item recent-entry" style={RecentEntery(3)} onMouseEnter={()=>handleMouseEnter(3)} onMouseLeave={handleMouseLeave} >
             {theme ?   <img src={assets.darkactivity} alt="" /> : <img src={assets.history_icon} alt="" /> }
             {extended ?  <p>Activity</p> : null}  
            </div>
            <div className="bottom-item recent-entry" style={RecentEntery(4)} onMouseEnter={()=>handleMouseEnter(4)} onMouseLeave={handleMouseLeave} >
            {theme ? <img src={assets.darkSetting} alt="" /> :    <img src={assets.setting_icon} alt="" />}
              {extended ? <p>Setting</p> : null }  
            </div>



        </div>
      
    </div>
  )
}

export default Sidebar
