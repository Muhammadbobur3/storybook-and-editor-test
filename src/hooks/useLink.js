const useLink = (select) => {
  const attr = {
    href: "https://youtube.com",
    target: "_blank",
  };
  const style = {
    backgroundColor: "red",
    color: "yellow",
  };

  const selected = select.split(" ");
  console.log(selected);

  const result = {
    style: {},
  };
  selected.map((item) => {
    if (attr[item] === undefined) {
      if (style[item] === undefined) {
        return null;
      } else {
        result.style[item] = style[item];
      }
    } else {
      result[item] = attr[item];
    }
  });
  console.log(result);
  return result;
};

export default useLink;
