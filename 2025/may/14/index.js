const searchHandler = async () => {
  await fetch('https://jsonplaceholder.typicode.com/todos/1');
};

function debounce(fn, delay) {
  let timeoutId;
  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(fn, delay);
  };
}

const debouncedFn = debounce(searchHandler, 1000);
document.getElementById('search').addEventListener('keyup', debouncedFn);

const handleScroll = () => {
  console.log('Scroll Y:', window.scrollY);
};

window.addEventListener('scroll', throttle(handleScroll, 2000));

function throttle(fn, delay) {
  let last = 0;

  return () => {
    const now = Date.now();

    if (now - last >= delay) {
      fn();
      last = now;
    }
  };
}
