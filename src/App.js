import React, {Component} from "react"
import product from "./assets/intensity.png"

export default class flavo extends Component{

  state = {
    count: 0,
  }

  render(){
    return(
      <>
      <header>
        <input placeholder="flavo" type="search"  />
      </header>
      <main>
        <figure>
          <img src={product} alt="Um sachê escrito intensity no topo, com mãos vermelhas na embalagem e um fundo branco com plantas espinhosas. Na parte inferior está escrito flavo" />
        </figure>
        <section>
          <div>
            <h2>INTENSITY</h2>
            <p>$15</p>
          </div>
          <h4>WHAT'S INSIDE</h4>
          <p>Chill, oregano, safran, paprika</p>
          <h4>WHY WE LOVE IT</h4>
          <p>This one will add a little savoury flavour to any food and turn any meal to a cullinary masterpiece.</p>
        </section>
        <section>
          <form>
            <input id="BAG" type="radio" name="bag" />
            <label for="BAG">BAG (75g)</label>
            <input id="JAR" type="radio" name="JAR" />
            <label for="JAR">JAR (150g)</label>
          </form>
          <div>
            <button>-</button>
            <p>{this.state.count}</p>
            <button>+</button>
          </div>
          <button>ADD TO CART</button>
        </section>
      </main>
      </>
    )
  }
}