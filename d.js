const data = new Date();

let dia_m = data.getDate();
dia_m = dia_m < 10 ? "0" + dia_m : dia_m;
const s = dia_m+"/"+data.getMonth()+1+"/"+data.getFullYear();
