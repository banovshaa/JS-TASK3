let btn = document.getElementById("btn");
let mebleg = document.getElementById("mebleg");
let muddet = document.getElementById("muddet");
let faiz = document.getElementById("faiz");
let cem = document.getElementById("cem");
let ayliq = document.getElementById("ayliq");
function calculate() {
  let faizValue = faiz.value.trim();
  let meblegValue = mebleg.value.trim();
  if (
    faizValue.length === 0 ||
    meblegValue.length === 0 ||
    muddet.value === ""
  ) {
    alert("Bos qoymaq olmaz");
  } else if (!isNaN(Number(faizValue)) && !isNaN(Number(meblegValue))) {
    let sum =
      Number(meblegValue) + (Number(faizValue) * Number(meblegValue)) / 100;
    document.getElementById("cem").innerHTML = sum;
    document.getElementById("ayliq").innerHTML = (sum / muddet.value).toFixed(
      2
    );
  } else {
    alert("Duzgun deyer daxil edin");
  }
}
btn.onclick = calculate;
