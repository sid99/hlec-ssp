const faker = require("faker");
const fs = require("fs");

function getRandomData() {
  const county = faker.address.county();
  const id = faker.random.uuid();

  return {
    id,
    name: county,
    MONDAY: true,
    TUESDAY: true,
    WEDNESDAY: true,
    THURSDAY: true,
    FRIDAY: true,
    SATURDAY: true,
    SUNDAY: true,
  };
}

function createData() {
  const foo = [...Array(20).keys()];
  const bar = [];
  foo.forEach(i => {
    const baz = getRandomData();
    bar.push(baz);
  });
  const data = JSON.stringify(bar);
  fs.writeFileSync("sample.json", data);
}

createData();
