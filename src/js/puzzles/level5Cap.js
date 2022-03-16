const code = `<div>
  <div class="foo">
    <p class="one"></p>
  </div>
  <div class="foo">
    <p class="two"></p>
  </div>
</div>`;

export default {
  code,
  goal: [false, false, true, false, false, false, false, false],
  hint1: 'Try something that select a subclass from a class',
  hint2: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors',
  solution: '.foo .one'
};
