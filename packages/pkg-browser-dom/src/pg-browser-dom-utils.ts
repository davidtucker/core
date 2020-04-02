export const updateDom = (context: HTMLElement, name: string, value: any) => {
  const [uuid, expressionValue] = context[name];
  if (expressionValue === value) {
    return;
  }

  console.log('test log');

  const element = context.querySelector(uuid);
  if (element) {
    context.querySelector(uuid).textContent = value;
  }
};
