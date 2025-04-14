/* eslint-disable no-unused-vars */
import style from './main.module.css'
import {motion} from 'framer-motion'
import softwaremind from './assets/software_mind.png'
import dropdown from './assets/dropdown.png'
import clsx from 'clsx';
function Main()
{
return(
<nav>
<div className={style.nav}>

    <div className={style.logo_container}>
        <img className={style.logo} src={softwaremind} alt="" />
        <h1 className={style.softwaremind} >Software&nbsp;Mind</h1>
    </div>

    <div className={clsx(style.dropone,style.abouthover)}>
    <p className={style.hoverwhowe} >Who we are </p>
    <img className={style.dropdown} src={dropdown} alt="" />
    <div className={style.onlyhover} >
       <a href="">Our Company</a> 
       <a href="">Our Culture</a> 
       <a href="">Environmental,Social,Governance</a>
    </div>
    </div>

    <div className={style.what} >
        <p className={clsx(style.para_edit)} ><a className={style.whatewedo} href="">What we do</a></p>
    </div>

    <div className= {style.dropone}>
    <p>Services</p>
    <img className={clsx(style.dropdown,style.other)} src={dropdown} alt="" />
    </div>

    <div className={style.dropone}>
    <p>industries</p>
    <img className={style.dropdown} src={dropdown} alt="" />
    </div>

    <div className={style.case} >
        <p className={style.para_edit}><a className={style.whatewedo} href="">Case studies</a></p>
    </div>

    <div className={style.dropone}>
    <p>insights</p>
    <img className={style.dropdown} src={dropdown} alt="" />
    </div>

    <div  >
        <p className={style.para_edit} ><a className={style.whatewedo} href="">Careers</a></p>
    </div>

    <div className={style.contact}>
        <button className={style.contactus} >Contact us</button>
    </div>

    <div className={style.dropone}>
    <p>EN</p>
    <img className={style.dropdown} src={dropdown} alt="" />
    </div>


    
       
    
</div>



</nav>



);
    
}
export default Main