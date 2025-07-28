const fs = require('fs');
const packageData = JSON.parse(fs.readFileSync('package.json'));
const prebuilds = fs.readdirSync('prebuilds');

const optionalDependencies = packageData.optionalDependencies = {};
for (const prebuild of prebuilds) {
  optionalDependencies[`${packageData.name}-${prebuild}`] = packageData.version;
}
console.log(JSON.stringify(optionalDependencies, null, 2));

fs.writeFileSync('package.json', JSON.stringify(packageData, null, 2));
