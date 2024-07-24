import * as singleSpa from "single-spa";


export default function Root(props) {
  return <section>{props.name} is mounted!
  <button onClick={()=>{
    singleSpa.navigateToUrl("/app1");
  }}>go to app1</button>
  <button onClick={()=>{
    singleSpa.navigateToUrl("/app2");
  }}>go to app2</button>

  </section>;
}
