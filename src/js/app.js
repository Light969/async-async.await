import GameSavingLoader from './GameSavingLoader.js';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    const object = JSON.parse(saving);
    Object.getPrototypeOf(object);
  } catch (error) {
    throw (new Error(error));
  }
})();

// GameSavingLoader.load().then((saving) => {
//   const object = JSON.parse(saving);
//   Object.getPrototypeOf(object);
// }, (error) => {
//   throw (new Error(error));
// });
