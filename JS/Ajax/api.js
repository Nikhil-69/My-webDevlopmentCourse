// // JSON TO STRING
// {
//     const response = `{"ticker":{"base":"BTC","target":"USD","price":"38161.06513260","volume":"19299.59382704","change":"-45.23697814"},"timestamp":1643543342,"success":true,"error":""}`;
//     const data = JSON.parse(response);
//     console.log(data);
// }

// // Older way of sending request
// {
//     const request = new XMLHttpRequest();
//     request.open("GET", "https://api.cryptonator.com/api/ticker/btc-usd");
//     request.send();

//     request.onload = function ()
//     {
//         const res = request.response;
//         const data2 = JSON.parse(res);
//         console.log(data2);

//     };

//     request.onerror = function ()
//     {
//         console.log("Error");
//     };
// }

// //Good way of sending request using fetch
// {
//     fetch("https://api.cryptonator.com/api/ticker/btc-usd")
//         .then((response) =>
//         {
//             return response.json();
//         })
//         .then((data) =>
//         {
//             console.log(data);
//         })
//         .catch((err) =>
//         {
//             console.log("error");
//         });
// }

//  //asychronous request using fetch and async await
// {
//     async function getData ()
//     {
//         const response = await fetch("https://api.cryptonator.com/api/ticker/btc-usd");
//         const data = await response.json();
//         console.log(data);
//     };
//     getData();
//  }

// //  api call for axios
// {
//     axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
//         .then((response) =>
//         {
//             console.log(response.data);
//         })

//    async function getData ()
//     {
//         const response = await axios.get("https://api.cryptonator.com/api/ticker/btc-usd");
//         console.log(response.data);
//     };
//     getData()
//         ;
//     // Async await

//     const getData = async () =>
//     {
//         const response = await axios.get("https://api.cryptonator.com/api/ticker/btc-usd");
//         console.log(response.data);
//     };

//     getData();
// }
