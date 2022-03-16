const code = `<div>
  <p class="foo"></p>
</div>`;

export default {
  code,
  goal: [false, true, false],
  hint1: 'Try something that select classes',
  hint2: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors',
  solution: '.foo'
};
