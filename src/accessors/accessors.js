export const newId = (data) => {
  console.log(data)
  let idArr = [0];
  let addId;
  data.map((item) => idArr.push(parseInt(item.id)));

  const findNumber = () => {
    addId = Math.max(...idArr) + 1;
  };

  findNumber();
  return addId;
};
