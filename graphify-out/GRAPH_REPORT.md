# Graph Report - RocketRide  (2026-08-29)

## Corpus Check
- 20 files · ~7,722 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 140 nodes · 147 edges · 15 communities (11 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Demo UI Dev Dependencies
- Demo UI App Dependencies
- TypeScript Configuration
- Demo UI App Manifest
- Demo UI TS Compiler Options
- Test UI App Manifest
- Demo UI Package Info
- Test UI Package Info
- Demo UI Source Code
- Test UI Source Code
- Demo UI Build Config
- Test UI Build Config
- Demo UI Global Types
- Test UI Global Types

## God Nodes (most connected - your core abstractions)
1. `appManifest` - 12 edges
2. `appManifest` - 11 edges
3. `compilerOptions` - 9 edges
4. `compilerOptions` - 9 edges
5. `lib` - 4 edges
6. `scripts` - 4 edges
7. `lib` - 4 edges
8. `scripts` - 4 edges
9. `include` - 3 edges
10. `include` - 3 edges

## Surprising Connections (you probably didn't know these)
- `include` --extends--> `rsbuild.config.mts`  [EXTRACTED]
  apps/test-ui/tsconfig.json → apps/demoapp-ui/tsconfig.json
- `include` --extends--> `src`  [EXTRACTED]
  apps/test-ui/tsconfig.json → apps/demoapp-ui/tsconfig.json
- `lib` --extends--> `DOM`  [EXTRACTED]
  apps/test-ui/tsconfig.json → apps/demoapp-ui/tsconfig.json
- `lib` --extends--> `DOM.Iterable`  [EXTRACTED]
  apps/test-ui/tsconfig.json → apps/demoapp-ui/tsconfig.json
- `lib` --extends--> `ES2022`  [EXTRACTED]
  apps/test-ui/tsconfig.json → apps/demoapp-ui/tsconfig.json

## Import Cycles
- None detected.

## Communities (15 total, 4 thin omitted)

### Community 0 - "Demo UI Dev Dependencies"
Cohesion: 0.10
Nodes (26): devDependencies, @module-federation/rsbuild-plugin, react-refresh, @rsbuild/core, @rsbuild/plugin-react, @types/node, @types/react, @types/react-dom (+18 more)

### Community 1 - "Demo UI App Dependencies"
Cohesion: 0.13
Nodes (16): dependencies, react, react-dom, rocketride, shell, react, shell, dependencies (+8 more)

### Community 2 - "TypeScript Configuration"
Cohesion: 0.15
Nodes (12): include, compilerOptions, jsx, module, moduleResolution, noEmit, skipLibCheck, strict (+4 more)

### Community 3 - "Demo UI App Manifest"
Cohesion: 0.15
Nodes (13): appManifest, authenticated, categories, description, icon, id, mode, name (+5 more)

### Community 4 - "Demo UI TS Compiler Options"
Cohesion: 0.18
Nodes (13): compilerOptions, jsx, lib, module, moduleResolution, noEmit, skipLibCheck, strict (+5 more)

### Community 5 - "Test UI App Manifest"
Cohesion: 0.17
Nodes (12): appManifest, authenticated, description, icon, id, include, mode, name (+4 more)

### Community 6 - "Demo UI Package Info"
Cohesion: 0.20
Nodes (9): description, license, name, private, scripts, build, dev, typecheck (+1 more)

### Community 7 - "Test UI Package Info"
Cohesion: 0.20
Nodes (9): description, license, name, private, scripts, build, dev, typecheck (+1 more)

### Community 8 - "Demo UI Source Code"
Cohesion: 0.33
Nodes (3): App(), styles, descriptor

### Community 9 - "Test UI Source Code"
Cohesion: 0.33
Nodes (3): App(), styles, descriptor

## Knowledge Gaps
- **63 isolated node(s):** `jsx`, `module`, `moduleResolution`, `noEmit`, `skipLibCheck` (+58 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `appManifest` connect `Test UI App Manifest` to `Demo UI App Manifest`, `Test UI Package Info`?**
  _High betweenness centrality (0.115) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Demo UI Dev Dependencies` to `Test UI Package Info`?**
  _High betweenness centrality (0.102) - this node is a cross-community bridge._
- **Why does `appManifest` connect `Demo UI App Manifest` to `Demo UI Package Info`?**
  _High betweenness centrality (0.101) - this node is a cross-community bridge._
- **What connects `jsx`, `module`, `moduleResolution` to the rest of the system?**
  _63 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Demo UI Dev Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.09846153846153846 - nodes in this community are weakly interconnected._
- **Should `Demo UI App Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._