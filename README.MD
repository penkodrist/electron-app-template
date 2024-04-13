# Basically an Electron app template 
You can use it for writing Electron apps, cause setting up the electron from scratch is such a doodeedoo thing

# How to use
It has no `node_modules`, so to begin using it you need to type `npm install`.
After installing all dependencies, type `npm run start` in console to launch the Electron app.

# Patch Notes
1.0.2:
- Disabled the ability to go fullscreen HTML. To re-enable the feature, delete or change the `fullscreenable` and `fullscreen` to `true` in `index.js` in window's options.
- Fixed the window controls blur, also redrawn the icons.
