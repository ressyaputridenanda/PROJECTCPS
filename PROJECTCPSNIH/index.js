function bookButton1() {
  var element = document.getElementById("target-element1");
  element.classList.toggle("style1");
}
function bookButton2() {
  var element = document.getElementById("target-element2");
  element.classList.toggle("style1");
}
// https://{server_address}/external/api/get?token={token}&{pin}

const api_url = "https://sgp1.blynk.cloud/external/api/get?token=uqJr2R2aicmoHXrKA3TObMkxhASam6cO&v0&v1&v3&v4";
// masukan 
setInterval(() => {
fetch(api_url)
  .then((hasil) => hasil.json())
  .then((res) => {
    var field = JSON.stringify(res.v0);
    var field1 = JSON.stringify(res.v1);
    var field2 = JSON.stringify(res.v3);
    var field3 = JSON.stringify(res.v4);
    var obj = JSON.parse(field);
    var obj1 = JSON.parse(field1);
    var obj2 = JSON.parse(field2);
    var obj3 = JSON.parse(field3);

    // console.log(obj);
    // console.log(obj1);
    // console.log(obj2);
    document.getElementById("v0").innerHTML = obj; 
    document.getElementById("v1").innerHTML = obj1;
    document.getElementById("v3").innerHTML = obj2;
    document.getElementById("v4").innerHTML = obj3;
    /*
     * v0 = data ultrasonic
     * v1 = data pir
     * v3 = data jam
     * v4 = data menit
     */
    if (obj1 == 0) {
      document.getElementById("v1").innerHTML = "No motion";
    } else if (obj1 == 1) {
      document.getElementById("v1").innerHTML = "Motion Detected";
      }
  });
}, 1000);