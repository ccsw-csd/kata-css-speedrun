const code = `<div>
  <p class="foo"></p>
  <p class="notfoo"></p>
  <p class="foo"></p>
  <p class="foo"></p>
  <p class="foonot"></p>
  <div class="foo"></div>
</div>`;

export default {
  code,
  goal: [false, true, false, true, true, false, false, false],
  hint1: 'Try something that select a container with a class',
  hint2: 'https://www.w3schools.com/cssref/sel_element_class.asp',
  solution: 'p.foo'
};
