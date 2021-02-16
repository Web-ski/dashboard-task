export const newId = (data) => {
  let idArr = [];
  let addId;
  data.map((item) => idArr.push(parseInt(item.id)));

  const findNumber = () => {
    addId = Math.max(...idArr) + 1;
  };

  findNumber();
  return addId;
};
