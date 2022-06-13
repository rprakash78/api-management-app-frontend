import "../App.css";

const Call = async () => {
  <h1 id='response'></h1>
    try {
      let res = await fetch("http://localhost:8000/perform", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-api-key": 'testt_nboqp4p'
        },
      });
      let result = await res.json();
      if(result) {
       return (
           <h1>{{result}}</h1>
       ) 
    } 
    } catch(err) {
      console.log(err)
    }
  }

export default Call;
