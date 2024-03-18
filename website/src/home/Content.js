import React from 'react'
import './content.css'
import { useEffect } from 'react'
export default function Content() {
    useEffect(()=>{
        window.addEventListener("scroll",reveal)
      },[])
      function reveal(){
        var reveals=document.querySelectorAll('.reveal');
        for(var i=0;i<reveals.length;i++)
        {
            var windowheight=window.innerHeight;
            var revealtop=reveals[i].getBoundingClientRect().top;
            var revealpoint=150;

            if(revealtop<windowheight-revealpoint){
                reveals[i].classList.add('active');
            }
            else{
                reveals[i].classList.remove('active');
            }
        }

      }
  return (
    <div className='main_content_bar'>
        <h1 className='heading1'>What would you like to learn today ?</h1>
        <div className='first_course reveal'>
            <div className="first_course_image"></div>
            <div className="first_course_details">Free Crypto Trading Series</div>
        </div>
        <div className='second_course reveal'>
            <div className="second_course_image"></div>
            <div className="second_course_details">Learn Crypto Trading From Scratch in 20 Days</div>
        </div>
        <div className='third_course reveal'>
            <div className="third_course_image"></div>
            <div className="third_course_details">Zero to Hero: Mastering SMC Advanced Trading Concepts</div>
        </div>
    </div>
  )
}
