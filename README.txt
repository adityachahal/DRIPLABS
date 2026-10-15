DRIPLABS Unified Wellness Observatory — Orbit Fix

Contents:
  src/components/home/UnifiedWellnessObservatory.tsx
  public/images/unified-wellness/clinical-model.png

Install from the project root (C:\Projects\driplabs):
1. Unzip the package into the project root, allowing it to overwrite the component.
2. Confirm this file exists:
   public\images\unified-wellness\clinical-model.png
3. Confirm app/page.tsx imports and renders:
   import UnifiedWellnessObservatory from "@/components/home/UnifiedWellnessObservatory";
   <UnifiedWellnessObservatory />
4. Remove the old three components from the homepage render if they are still present:
   <WellnessGoalExplorer />
   <ProtocolObservatory />
   <DecodeVial />
5. Restart the dev server and refresh localhost:3000.

Behavior:
- Uses a dedicated model image as a separate foreground layer.
- Protocol cards orbit on an ellipse and remain upright (no upside-down card rotation).
- Rear cards dim and layer behind the model; the front card becomes clearer and brighter.
- Orbit uses unique protocols only. Skin & Beauty is intentionally exactly Radiance, Glamour and Restore.
- Hovering/focusing a card pauses movement; selecting it updates protocol details.
- The top family selection and lower protocol set stay synchronized.
