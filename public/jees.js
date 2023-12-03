const api_url =
  "https://api.thingspeak.com/channels/2364389/feeds.json?api_key=YKH27L7VNEJ44F08&results=1";

setInterval(() => {
  fetch(api_url)
    .then((hasil) => hasil.json())
    .then((res) => {
      var field = JSON.stringify(res.feeds[0]);
      var obj = JSON.parse(field);
      document.getElementsById("field-1").innerHTML = obj.field1;
      document.getElementsById("field-2").innerHTML = obj.field2;
      document.getElementsById("field-3").innerHTML = obj.field3;
      document.getElementsById("field-4").innerHTML = obj.field4;
      document.getElementsById("field-5").innerHTML = obj.field5;
    });
}, 1000);