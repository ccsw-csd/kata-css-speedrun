const code = `<div>
  <p class="foo unique"></p>
  <p class="foo"></p>
</div>`;

export default {
  code,
  goal: [false, true, false, false],
  hint1: 'Try something that select two classes',
  hint2: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors',
  solution: '.foo.unique'
};
