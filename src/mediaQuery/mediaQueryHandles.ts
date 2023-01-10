export const handleContainerStyle = (largeDevices: any, mediumDevices: any) => {
  const container = Array.from(document.getElementsByClassName("container"));
  const section = Array.from(document.getElementsByClassName("section"));
  const button = Array.from(document.getElementsByClassName("button"));
  const buttonIcon = Array.from(
    document.getElementsByClassName("button__icon")
  );

  container.forEach((element: any) => {
    element.style.cssText += largeDevices
      ? "margin-right: 24px;"
      : "margin-right: auto;";
    element.style.cssText += largeDevices
      ? "margin-left: 24px;"
      : "margin-left: auto;";
  });

  if (largeDevices) {
    button.forEach((but: any) => {
      but.style.cssText += largeDevices
        ? `padding: 1rem 1.7rem;`
        : `padding: 1.25rem 2rem;`;
    });

    buttonIcon.forEach((butIcon: any) => {
      butIcon.style.cssText += largeDevices
        ? `
      width: 20px;
      height: 20px;
      margin-left: var(--mb-0-5);
    `
        : `
      width: 24px;
      height: 24px;
      margin-left: var(--mb-0-5);`;
    });
  }

  if (mediumDevices) {
    section.forEach((section: any) => {
      section.style.cssText += largeDevices
        ? `
        padding: 2rem 0 4rem;
      `
        : `
        padding: 6rem 0 2rem;
        `;
    });
  }
};
