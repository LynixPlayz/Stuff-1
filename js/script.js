const banned_ips = [];
let ip = '';
function json(url) {
    return fetch(url).then(res => res.json());
  }
  
  let apiKey = 'e0dc95dfed13ca1dcc7d5f6649cb24ac0c9ae5c1a5e30cf6023f7b18';
  json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
    console.log(data.ip);
    ip = data.ip;
    console.log(data.city);
    console.log(data.country_code);
    // so many more properties
  });

function addIp() {
    banned_ips.push(ip);
    console.log(ip);
    if (banned_ips.includes(ip))
    {
        window.location.href = "404.html";
        console.log("dang bro");
    }
}

function alocalStorage() {
    for (var i = 0; i < localStorage.length; i++){
        console.log(localStorage.getItem(localStorage.key(i)));
    }
}

function save() {
    navigator.bluetooth.requestDevice({
        filters: [{
            services: ['battery_service']
        }]
    }).then(device => {
        console.log('Got device:', device.name);
        console.log('id:', device.id);
    });
    document.getElementById("button").innerHTML = device.name;
}