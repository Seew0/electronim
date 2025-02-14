/*
   Copyright 2019 Marc Nuri San Felix

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */
describe('Entrypoint test suite', () => {
  let app;
  let main;
  beforeEach(() => {
    jest.resetModules();
    jest.mock('electron', () => require('../__tests__').mockElectronInstance());
    jest.mock('../main', () => ({
      init: jest.fn()
    }));
    app = require('electron').app;
    main = require('../main');
  });
  test('App initialization', () => {
    // Given
    // When
    require('../index');
    // Then
    expect(app.name).toBe('ElectronIM');
    expect(app.on).toHaveBeenCalledTimes(2);
    expect(app.on). toHaveBeenCalledWith('ready', main.init);
  });
  test('Adds event listener to register app keyboard shortcuts on every webContents', () => {
    // Given
    // When
    require('../index');
    // Then
    expect(app.on).toHaveBeenCalledTimes(2);
    expect(app.on)
      .toHaveBeenCalledWith('web-contents-created', require('../browser-window').registerAppShortcuts);
  });
});
