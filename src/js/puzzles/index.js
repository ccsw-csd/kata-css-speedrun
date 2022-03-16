import level0 from './level0.js';
import level0Cap from './level0Cap.js';
import level1 from './level1.js';
import level10 from './level10.js';
import level1Cap from './level1Cap.js';
import level1v2Cap from './level1v2Cap.js';
import level2 from './level2.js';
import level2Cap from './level2Cap.js';
import level3 from './level3.js';
import level3Cap from './level3Cap.js';
import level4 from './level4.js';
import level4Cap from './level4Cap.js';
import level5 from './level5.js';
import level5Cap from './level5Cap.js';
import level6 from './level6.js';
import level6Cap from './level6Cap.js';
import level7 from './level7.js';
import level8 from './level8.js';
import level9 from './level9.js';

export default [
  level0Cap,
  level1Cap,
  level1v2Cap,
  level3,
  level2Cap,
  level3Cap,
  level4Cap,
  level5Cap,
  level6Cap,
  level9,
  level0,
  level1,
  level2,
  level4,
  level5,
  level6,
  level7,
  level8,
  level10
].map(level => ({
  ...level,
  verificationCode: level.code
    .split('\n')
    .map((row, i) => row.replace('>', ` data-row="${i}">`))
    .join(' ')
}));
