import Calc2 from "./calc2";
import { num } from "../index";
import { allCount } from "./form";
import { state } from "./form";

const But = () => {
  
    return (
      <div className="container" id={allCount}>
        <Calc2 num = {allCount} status = {state} add = {num(allCount)}/>
      </div>
        );
  };

  export default But;