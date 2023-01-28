const endDate = " 20 January 2023 12: 00 PM"
document.getElementById("endDate").innerText = endDate;
  const input = document.querySelectorAll("input")

// const clock =()=>{

// }
function clock(){
    const end = new Date(endDate)
    const now = new  Date()
    const diff = (end - now)/1000
    console.log(diff);
    //convert into days----------
    input[0].value = ( Math.floor(diff/ 3600 /24));
    //convert into hours-------------------
    input[1].value = (Math.floor(diff/3600)%24);
    //convert into minutes------------------
    input[2].value = (Math.floor(diff/60)%60);
    //convert into seconds--------------------
    input[3].value = (Math.floor(diff)%60);
}
//---------init call
clock()

//---------------for call in every seconds
setInterval(
    ()=>{
        clock()
    },1000
)
