const exec = (fn, a, b) => {
  return fn(a, b);
};

const somar = (x, y) => console.log(x + y);
const subtrair = (w, z) => console.log(w - z);

exec(somar, 56, 38);
exec(subtrair, 182, 27);

const cb = () => console.log("Exec...");
setInterval(cb, 1000);
