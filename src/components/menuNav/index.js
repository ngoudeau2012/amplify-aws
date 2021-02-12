import React from "react"
import "./style.css"

function MenuNav(){
    
return(
  <div className="sticky">
     <nav className="level is-mobile menuNav">
  <div className="level-item has-text-centered">
    <div>
      <a className="category selected">Ramen</a>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <a className="category" href="#appetizer">Appetizers</a>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <a className="category" href="#rice_bowls">Rice Bowls</a>
    </div>
  </div>
  <div className="level-item has-text-centered">
    <div>
      <a className="category" href="#combos">Combos</a>
    </div>
  </div>
</nav>
</div>
)
}

export default MenuNav
