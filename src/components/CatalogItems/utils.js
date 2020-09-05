// TODO: rename this
export const getDictionary = list => {
  var map = {};
  for (var i = 0; i < list.length; ++i) {
    var category = list[i].category;
    if (!map[category]) 
      map[category] = [];
    map[category].push(list[i]);
  }
  return map;
};

// TODO: this can go to generic utils
// TODO: rename this to getLookup
export const getLookUp = list => {
  if (!list) return undefined;

  var map = {};
  for (var i = 0; i < list.length; ++i) {
    var id = list[i].id;
    map[id] = list[i]; 
  }
  return map;
};
