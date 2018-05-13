// var servers = ["http://47.94.154.27:8080/", "http://47.94.154.27:8086/"];
// var servers = ["http://127.0.0.1:8080/", "http://127.0.0.1:8086/"];
var servers = ["http://127.0.0.1:8080/"];

function getServer() {
    return servers[Math.round(Math.random() * (servers.length - 1))]
}