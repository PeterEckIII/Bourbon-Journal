export const getReactFiber = (el: any) => {
  const key = Object.keys(el).find((k) => {
    return (
      k.startsWith("__reactFiber$") || k.startsWith("__reactInternalInstance$")
    );
  });
  if (!key) {
    return;
  }
  return el[key];
};

export const getComponent = (fiber: any) => {
  let parentFiber = fiber.return;
  while (typeof parentFiber.type === "string") {
    parentFiber = parentFiber.return;
  }
  return parentFiber;
};
