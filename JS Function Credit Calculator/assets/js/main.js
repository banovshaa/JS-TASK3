let mebleg=document.getElementById('mebleg');
let faiz=document.getElementById('faiz');
let muddet=document.getElementById('muddet');
let btn=document.getElementById('btn');
let cem=document.getElementById('cem');
let ay=document.getElementById('ay');
function Calculate(){
    let fvalue=faiz.value.trim();
    let mvalue=mebleg.value.trim();
    if(fvalue.length===0||mvalue.length===0||muddet.value==='def'){
        alert('Zəhmət Olmasa Bütün Xanaları Doldurun');
    }else if (!isNaN(Number(mvalue))&&!isNaN(Number(fvalue))&&mvalue>=0&&fvalue>=0) {
        let sum=Number(mvalue) +(Number(mvalue)*Number(fvalue)/100);
        cem.innerHTML=` ${sum} AZN`
        ay.innerHTML=` ${(sum/muddet.value).toFixed(2)} AZN`
    }else{alert('Düzgün Dəyərlər Daxil Edin');}
}