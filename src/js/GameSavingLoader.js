import json from './parser.js';
import read from './reader.js';

export default class GameSavingLoader {
  static async load() {
    const response = await read();
    const jsonResponse = await json(response);
    return jsonResponse;
  }
}

// export default class GameSavingLoader {
//   static load() {
//     return read().then((response) => json(response));
//   }
// }
