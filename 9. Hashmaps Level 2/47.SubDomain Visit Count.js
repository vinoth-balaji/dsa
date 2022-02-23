var subdomainVisits = function (cpdomains) {
  let subdomains = {};
  let ans = [];

  for (let cp of cpdomains) {
    cp = cp.split(" ");
    let visit = +cp[0];
    let domains = cp[1].split(".");
    for (let i = 0; i < domains.length; i++) {
      let sub = domains.slice(i).join(".");
      if (subdomains.hasOwnProperty(sub)) {
        subdomains[sub] += visit;
      } else {
        subdomains[sub] = visit;
      }
    }
    // console.log(subdomains);
  }

  Object.entries(subdomains).forEach(([domain, count]) => {
    ans.push(count + " " + domain);
  });
  // console.log(subdomains);
  return ans;
};

let cpdomains = [
  "900 google.mail.com",
  "50 yahoo.com",
  "1 intel.mail.com",
  "5 wiki.org",
];
console.log(subdomainVisits(cpdomains));
