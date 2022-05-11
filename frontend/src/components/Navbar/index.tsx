
import {ReactComponent as LittleCat} from 'assets/img/littleCat.svg';


function Navbar(){
  
    return(
      <header>
        <nav className = "container">
         <div className = "dsmovie-nav-content" >
            <h1>DSMovie</h1>
            <a href="https://https://github.com/digarfi">
                <div>
                    <LittleCat/>
                    <p>devsuperior</p>
                </div>
            </a>
         </div>
        </nav>
     </header>
   )
}
export default Navbar;