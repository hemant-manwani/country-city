export const timeout = ms => new Promise(res => setTimeout(res, ms));

export const makeChild = value => ({
  id: value.ID,
  name: value.LocaName || value['Location Name'],
});

export const aggregateUnits = units => units
  .reduce((acc, value, index) => {
    if (value.ChildOf) {
      const parents = value.ChildOf[0].Parent;
      parents.forEach((parent) => {
        if (!acc[parent]) {
          acc[parent] = { childrens: [makeChild(value)] };
        } else {
          acc[parent].childrens
            ? acc[parent].childrens.push(makeChild(value))
            : (acc[parent] = { childrens: [makeChild(value)] });
        }
      });
    }
    if (!acc[value.ID]) {
      acc[value.ID] = {};
    }
    acc[value.ID].name = value.LocaName || value['Location Name'];
    acc[value.ID].hasParent = !!value.ChildOf;
    return acc;
  }, {});
