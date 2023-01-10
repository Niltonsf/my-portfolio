export const handleContainerStyle = (matches: any) => {
  const docs = Array.from(document.getElementsByClassName("container"));

  docs.forEach((element: any) => {
    element.style.cssText += matches
      ? "margin-right: 24px;"
      : "margin-right: auto;";
    element.style.cssText += matches
      ? "margin-left: 24px;"
      : "margin-left: auto;";
  });
};
