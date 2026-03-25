import { CoreEditorApp, addEditorPlugins, PresetLibraryPlugin, defaultPresets } from 'https://dist.pixotronics.com/webgi/runtime/bundle-0.9.20.mjs';

// Check the Documentation and Manual Here: https://webgi.xyz/docs
// Note: when in production, use links to assets on your server, defaultPresets are provided for demo purposes.

async function initialize() {
  const editor = new CoreEditorApp({
    canvas: document.getElementById('mcanvas'),
  });

  editor.scene.activeCamera.userData.minNearPlane = 0.2;

  console.log(editor.defaultModes);

  // remove extras tab
  editor.defaultModes = editor.defaultModes.filter((m) => m.title !== 'Extras');

  // add default editor plugins
  await addEditorPlugins(editor, {
    caching: true,
    ground: true,
    bloom: true,
    depthTonemap: true,
    enableDrop: true,
    importPopup: true,
    debug: false,
  });

  // load some presets
  console.log(defaultPresets);

  // For an example, keep only first 2 presets
  // Here presets can be removed or custom presets can be added.
  // Note: when in production, use links to assets on your server, defaultPresets are provided for demo purposes.
  const presets = { ...defaultPresets };
  for (const i of [...Object.keys(presets)]) {
    presets[i] = presets[i].slice(0, 2);
  }

  const presetLib = editor.getPlugin(PresetLibraryPlugin);
  await presetLib.loadPresetGroups(presets);

  // Load an environment Map
  await editor.setEnvironmentMap('https://dist.pixotronics.com/webgi/assets/hdr/gem_2.hdr');

  // setup editor ui
  await editor.setupUi();
}

initialize();
