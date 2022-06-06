// var os = require('os');
// console.log("Platform: " + os.platform());
// console.log("Architecture: " + os.arch());
// console.log("HostName: " + os.hostname());
// console.log("HostName: " + os.networkInterfaces())
const os = require('os');

// const networkInterfaces = os.networkInterfaces();
// const ip = networkInterfaces['eth0'][0]['address']
const getNetworkInterfaces = () =>{
    const list = [];
    const ilist = [];
    const interfaces = os.networkInterfaces();
    for (let iface in interfaces) {
      for (let i in interfaces[iface]) {
        const f = interfaces[iface][i];
        if (f.internal) {
          ilist.push({ f,iface });
        } else{
          list.push({ f,iface });
        }
      }
    }
    return list.length > 0 ? list : ilist;
  }

console.log(getNetworkInterfaces());