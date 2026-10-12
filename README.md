# Compendlore Addon SDK

## English

Public contracts and developer-facing APIs used to build Compendlore addons. The SDK is extracted
from stable CMS extension points and versioned independently from the CMS implementation.

The repository contains signatures and documentation only. Core internals, privileged database
access, signing material, and deployment credentials are intentionally excluded.

### Commands

- `npm run pretty`: format the repository;
- `npm run lint`: check code and documentation;
- `npm run typecheck`: verify TypeScript contracts;
- `npm run test`: build and test the public packages;
- `npm run ci`: run every repository quality gate.

## Français

Contrats publics et API destinés aux développeurs d’addons Compendlore. Le SDK est extrait des
points d’extension stables du CMS et possède un versionnement indépendant de l’implémentation.

Le dépôt contient uniquement les signatures et leur documentation. Les composants internes du Core,
les accès privilégiés à la base, les éléments de signature et les identifiants de déploiement en
sont exclus.
