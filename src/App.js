import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useState } from 'react';
import Chart from './Chart';
function splitstring(temp) {
  var ans = [];
  var answer = [];
  var t = temp.split("\n");
  for(var i=0;i<t.length;i++){
    var v = t[i][t.length-1];
    var ss = "";
    if(v=='.' || v=='?' || v==',' || v=='/' || v==" "){
      ss = t[i].slice(0,t[i].length-2);
    }
    else{
      ss = t[i].slice(0,t[i].length-1);
    }
    ans.push(ss.split(" "));
  }
  var ans1 = [];
  for(var i=0;i<ans.length;i++){
    for(var j=0;j<ans[i].length;j++){
      if(ans[i][j].slice(-1)!='.' && ans[i][j].slice(-1)!=''){
    var ind = ans1.findIndex((e) => {return e===ans[i][j]});
    if(ind==-1){
      answer.push([ 1, ans[i][j]]);
      ans1.push(ans[i][j]);
    }
    else{
      answer[ind][0]++;
    }
  }
  }
  }
  answer.sort((a,b) => {return b[0]-a[0]});
console.log(answer);
  return answer;
}


function App() {
  const [data, setdata] = useState([]);
  const [frequency, setfrequency] = useState([]);
  const [elements, setelements] = useState([]);
  const submit = () => {
    axios.get('https://www.terriblytinytales.com/test.txt')
      .then((e) => {
        setdata(e.data);
        var temp = (splitstring(e.data));
        const c1=[], c2=[];
        console.log(temp.length );
        for(var i=0;i<20;i++){
          c1.push(temp[i][0]);
          c2.push(temp[i][1]);
        }

        setelements(c1);
        setfrequency(c2);

      })
      .catch((err) => console.log(err));
  }

  return (
    <div>


      {
        frequency.length > 0
          ? <Chart elements={elements} frequency={frequency} />
          : <button className=" ml-[47vw] mt-[47vh] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={submit}>
            Button
          </button>

      }
    </div>
  );
}

export default App;
