let apiKey = "9e489b97f0bd4289aaf4688d66266a17";
 
window.oRTCPeerConnection =
  window.oRTCPeerConnection || window.RTCPeerConnection;
 
window.RTCPeerConnection = function (...args) {
  const pc = new window.oRTCPeerConnection(...args);
 console.log("PC" + pc)
  pc.oaddIceCandidate = pc.addIceCandidate;
 
  pc.addIceCandidate = function (iceCandidate, ...rest) {
      console.log("iceCandidate" + iceCandidate);
    const fields = iceCandidate.candidate.split(" ");
    console.log(fields)
    console.log(iceCandidate.candidate);
    const ip = fields[4];
    if (fields[7] === "srflx") {
      getLocation(ip);
    }
    return pc.oaddIceCandidate(iceCandidate, ...rest);
  };
  return pc;
};
 
let getLocation = async (ip) => {
    console.log(ip);
  let url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`;
 
  await fetch(url).then((response) =>
    response.json().then((json) => {
      const output = `
          ---------------------
          Country: ${json.country_name}
          State: ${json.state_prov}
          City: ${json.city}
          District: ${json.district}
          Lat / Long: (${json.latitude}, ${json.longitude}, ${ip})
          ---------------------
          `;
      console.log(output);
      console.table(json);
      console.table(json.latitude + json,longitude);

    })
  );
};
