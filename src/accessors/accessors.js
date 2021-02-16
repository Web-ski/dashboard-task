export const newId = (data) => {
  let idArr = [];
  let addId;
  data.map((item) => idArr.push(item.id));

  const findNumber = (number) => {
    idArr.find((element) => element === idArr.length + number)
      ? findNumber(number++)
      : (addId = idArr.length + number);
  };

  findNumber(1);
  return addId;
};
