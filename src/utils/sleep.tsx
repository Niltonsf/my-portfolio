// eslint-disable-next-line import/no-anonymous-default-export
export default async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
