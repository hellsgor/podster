export function debounce(callee, timeoutMs = 300) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callee(...args);
    }, timeoutMs);
  };
}
