function password(site) {
    if (Array.isArray(site) || typeof site !== 'object') {
        return "invalid";
    } else if (Object.keys(site).length !== 3 || (site.birthYear.toString().length !== 4)) {
        return "invalid";
    }
    else {
        const mySiteName = site.siteName;
        const capStr = mySiteName.charAt(0).toUpperCase() + mySiteName.slice(1);
        const password = capStr + '#' + site.name + '@' + site.birthYear;
        return password;
    }
}
// console.log(password({name: 'rahat', birthYear: 10033, siteName: 'facebook'}));
