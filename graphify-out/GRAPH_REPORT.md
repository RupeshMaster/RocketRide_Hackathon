# Graph Report - RocketRide  (2026-08-27)

## Corpus Check
- Corpus is ~3,080 words - fits in a single context window. You may not need a graph.

## Summary
- 81 nodes · 77 edges · 9 communities (7 shown, 2 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Development Dependencies
- App Manifest Configuration
- TypeScript Configuration
- Core Dependencies
- Package Setup
- UI Source Code
- TypeScript Lib Settings
- RSBuild Config
- Global Type Definitions

## God Nodes (most connected - your core abstractions)
1. `appManifest` - 12 edges
2. `compilerOptions` - 9 edges
3. `scripts` - 4 edges
4. `lib` - 4 edges
5. `include` - 3 edges
6. `categories` - 2 edges
7. `include` - 2 edges
8. `react` - 2 edges
9. `react-dom` - 2 edges
10. `rocketride` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (9 total, 2 thin omitted)

### Community 0 - "Development Dependencies"
Cohesion: 0.12
Nodes (17): devDependencies, @module-federation/rsbuild-plugin, react-refresh, @rsbuild/core, @rsbuild/plugin-react, @types/node, @types/react, @types/react-dom (+9 more)

### Community 1 - "App Manifest Configuration"
Cohesion: 0.14
Nodes (14): appManifest, authenticated, categories, description, icon, id, include, mode (+6 more)

### Community 2 - "TypeScript Configuration"
Cohesion: 0.17
Nodes (11): compilerOptions, jsx, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 3 - "Core Dependencies"
Cohesion: 0.18
Nodes (9): dependencies, react, react-dom, rocketride, shell, react, react-dom, rocketride (+1 more)

### Community 4 - "Package Setup"
Cohesion: 0.20
Nodes (9): description, license, name, private, scripts, build, dev, typecheck (+1 more)

### Community 5 - "UI Source Code"
Cohesion: 0.29
Nodes (4): App(), Content(), styles, descriptor

### Community 6 - "TypeScript Lib Settings"
Cohesion: 0.50
Nodes (4): lib, DOM, DOM.Iterable, ES2022

## Knowledge Gaps
- **47 isolated node(s):** `name`, `version`, `private`, `description`, `license` (+42 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Development Dependencies` to `Package Setup`?**
  _High betweenness centrality (0.213) - this node is a cross-community bridge._
- **Why does `appManifest` connect `App Manifest Configuration` to `Package Setup`?**
  _High betweenness centrality (0.180) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Core Dependencies` to `Package Setup`?**
  _High betweenness centrality (0.141) - this node is a cross-community bridge._
- **What connects `name`, `version`, `private` to the rest of the system?**
  _47 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Development Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `App Manifest Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._