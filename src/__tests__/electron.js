/*
   Copyright 2022 Marc Nuri San Felix

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

const mockBrowserWindowInstance = () => {
  const instance = {
    addBrowserView: jest.fn(),
    destroy: jest.fn(),
    getContentBounds: jest.fn(() => ({})),
    listeners: {},
    loadURL: jest.fn(),
    on: jest.fn((eventName, func) => {
      instance.listeners[eventName] = func;
    }),
    removeBrowserView: jest.fn(),
    removeMenu: jest.fn(),
    setAutoResize: jest.fn(),
    setBounds: jest.fn(),
    setBrowserView: jest.fn(),
    webContents: {
      destroy: jest.fn(),
      loadURL: jest.fn(),
      on: jest.fn(),
      openDevTools: jest.fn(),
      send: jest.fn()
    }
  };
  return instance;
};

module.exports = {mockBrowserWindowInstance};