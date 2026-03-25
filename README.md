# WebGi Vanilla Starter

A vanilla JavaScript project using [WebGi](https://webgi.xyz) to render interactive 3D assets in the browser. Built on top of the WebGi CoreEditorApp, it provides a full 3D editor UI with drag-and-drop asset importing, environment maps, lighting presets, and post-processing effects (bloom, depth tonemapping).

## What It Does

- Loads a 3D scene in a `<canvas>` element using the WebGi runtime
- Enables drag-and-drop import of `.glb` / `.gltf` assets directly into the viewer
- Loads HDR environment lighting for realistic reflections
- Provides a built-in editor UI with camera controls, material editing, and preset lighting environments

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Serve the project locally (e.g. with [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code or `npx serve .`)
3. Open in browser and drag a `.glb` file onto the canvas to load a 3D model

---

## Getting 3D Assets

### Option 1 — Poly Haven (Free, Ready-to-Use)

[Poly Haven](https://polyhaven.com/models) provides free, CC0-licensed 3D assets ready for web use.

1. Browse to an asset on [polyhaven.com/models](https://polyhaven.com/models)
2. In the download section, set the format to **GLTF** (not Blend)
3. Choose your resolution (1K–4K) and download the `.zip`
4. Drag and drop the `.zip` directly into the WebGi viewer

### Option 2 — Custom Assets (Client Work)

For branded or product-specific assets, the standard production pipeline is:

1. **Model** — Build the 3D object in [Blender](https://www.blender.org/) (free) based on client references, CAD files, or product specs
2. **UV Unwrap** — Flatten the model's surface so textures apply correctly
3. **Texture** — Paint PBR materials using [Substance Painter](https://www.adobe.com/products/substance3d-painter.html) (paid) or [Quixel Mixer](https://quixel.com/mixer) (free). You'll need: BaseColor, Normal, Roughness, and Metalness maps
4. **Export** — In Blender: File → Export → glTF 2.0 (`.glb`) — single binary file with all textures packed in
5. **Import** — Drag the `.glb` into the WebGi viewer or load it via URL in `app.js`

> **Tip:** Keep polygon counts low for web performance. A typical product model should be under 100k triangles.

---

## Resources

- [WebGi Documentation](https://webgi.xyz/docs)
- [Poly Haven Models](https://polyhaven.com/models)
- [Blender](https://www.blender.org/)
- [glTF format overview](https://www.khronos.org/gltf/)
