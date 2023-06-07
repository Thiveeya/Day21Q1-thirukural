
async function getdata(){
    try{
    let num=document.getElementById('numb').value;
    
        if(num<1 || num>1330){
            alert("Enter between 1 to 1330")
        }

    let res= await fetch(`https://api-thirukkural.vercel.app/api?num=${num}`);

    let ans=await res.json();
    console.log(ans);


document.querySelector('.tam1').value=`${ans.line1}\n${ans.line2}`;
document.querySelector('.tam2').value=ans.sect_tam;
document.querySelector('.tam3').value=ans.chapgrp_tam;
document.querySelector('.tam4').value=ans.chap_tam;
document.querySelector('.tam5').value=ans.tam_exp;

document.querySelector('.eng1').value=ans.sect_eng;
document.querySelector('.eng2').value=ans.chapgrp_eng;
document.querySelector('.eng3').value=ans.chap_eng;
document.querySelector('.eng4').value=ans.eng;
document.querySelector('.eng5').value=ans.eng_exp;

}

catch(error){
    console.log(error);
}


}getdata()