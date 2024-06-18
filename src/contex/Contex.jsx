import { createContext, useState } from "react";
import run from "../config/Gemini";



export const Contex =createContext()

const ContexProvider =(props)=>{

    
    const [input,setInput]=useState('')
    const[recentpromt,setRecentpromt]=useState('')
    const[prePromt,setPrepromt]=useState([])
    const[showresult,setShowresult]=useState(false)
    const[loading,setLoading]=useState(false)
    const[resultData,setResultData]=useState('')
    const[theme,SetTheme]=useState(false)
    const[ishovered,setIshovered]=useState(null)


    const mainColor = {
     backgroundColor :theme ? 'rgb(19,19,20)': 'white',
     color: theme ? ' white' : ' black'
   }
   const SidebarColor={
       backgroundColor: theme ? 'rgb(30,31,32)' : null,
    //    color: 'white : black'   ,
     
   }
   const RecentColor ={
    color: theme ? 'white': null,
    backgr :theme ? 'rgb(66,66,66)' : null,
  
   }

   const NewChat ={
    backgroundColor :theme ? 'rgb(66,66,66)' :null,
    color :theme ? 'white' : null
   }

   const RecentEntery =(index)=>({
    color: theme ? 'white': null,
    backgroundColor :theme ? 'rgb(30,31,32)' :null,
    ...(ishovered === index &&{
        backgroundColor:' rgb(66,66,66)',
        color:'white'
       }),
    //    rgb(40,37,35)

   })

   const RecentSetting ={
    color: theme ? 'white': null,
    backgroundColor :theme ? '' :null,
    ...(ishovered  &&{
        backgroundColor:' rgb(40,37,35)',
        color:'white',
       }),

   }

   const TextColor ={
    color :theme ? 'white': null
   }


   const handleMouseEnter =(index)=>{

    if(theme===true){
        setIshovered(index)
    }
  

    

   }
   const handleMouseLeave =()=>{
    setIshovered(false)
   }

   const handletheme =()=>{
  SetTheme(!theme)
   }



    const delayPara=(index,nextword)=>{
        setTimeout(()=>{
            setResultData(prev=>prev+nextword)
        },75*index)

    }

    const newChat=()=>{
        setShowresult(false)
        setLoading(false)
    }


    


    const OnSent =async (promt)=>{
        setResultData('')
        setLoading(true)
        setShowresult(true)
        let responsenew ;
        if(promt !== undefined){
            responsenew = await run(promt)
            setRecentpromt(promt)
        }
        else {
            setPrepromt(prev=>[...prev,input])
            setRecentpromt(input)
            responsenew = await run(input)
        }
    //     setRecentpromt(input)
    //     setPrepromt(prev=>[...prev,input])
    //  const response = await  run(input)
     let responseArry =responsenew.split('**')
     let newresponse='' ;
     for(let i=0; i<responseArry.length; i++){
        if(i ===0 || i%2 !==1){
            newresponse+= responseArry[i]
        }
        else{
            newresponse +='<b>'+ responseArry[i]+ '</b>';
        }
     }
     let updatedNewresponse =newresponse.split('*').join('</br>')
    //  setResultData(updatedNewresponse)
     let updatedNewresponseArray = updatedNewresponse.split(" ");
     for(let i=0; i< updatedNewresponseArray.length;i++)
        {
        const nextword = updatedNewresponseArray[i];
        delayPara(i,nextword+" ")
     }


     setLoading(false)
     setInput('')

    }

    // OnSent('what is react')

    const contexvalue ={
        prePromt,
        setPrepromt,
        OnSent,
        setRecentpromt,
        recentpromt,
        showresult,
        loading,
        resultData,
        input,
        setInput,
        newChat,
        handletheme,
        theme,
        mainColor,
        SidebarColor,
        RecentColor,
        handleMouseEnter,
        handleMouseLeave,
        RecentEntery,
        RecentSetting,
        NewChat,
        TextColor


    }

    return (
        <Contex.Provider value={contexvalue}>
{props.children}
        </Contex.Provider>
    )
}

export default ContexProvider;
