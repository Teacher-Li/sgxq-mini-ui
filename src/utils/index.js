export const scrollIntoView = (el, offset = -65) => {
  let a = document.createElement('a');
  a.style.position = 'absolute';
  a.style.top = `${ offset }px`;
  a.style.left = '0px';
  el.appendChild(a);

  a.scrollIntoView({ behavior: 'smooth' })
  el.removeChild(a);
}