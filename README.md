# Compendlore Addon SDK

## English

Public contracts and developer-facing APIs used to build Compendlore addons. The SDK is extracted
from stable CMS extension points and versioned independently from the CMS implementation.

Independent addon creators retain their rights in their addons. The draft SDK license permits use
for development and proposes a targeted permission for the SDK elements technically required in a
distributed addon; the precise boundary remains subject to legal review. It does not authorize
redistribution of the SDK as a standalone substitute or redistribution of the CMS.

The repository contains signatures and documentation only. Core internals, privileged database
access, signing material, and deployment credentials are intentionally excluded.

The SDK is proprietary source-available software, not software under an OSI-approved open-source
license. `CLA.md` is not active.

### Commands

- `npm run pretty`: format the repository;
- `npm run lint`: check code and documentation;
- `npm run typecheck`: verify TypeScript contracts;
- `npm run test`: build and test the public packages;
- `npm run ci`: run every repository quality gate.

## Français

Contrats publics et API destinés aux développeurs d’addons Compendlore. Le SDK est extrait des
points d’extension stables du CMS et possède un versionnement indépendant de l’implémentation.

Les créateurs d’addons indépendants conservent leurs droits sur leurs addons. Le projet de licence
du SDK autorise son utilisation pour le développement et propose une autorisation ciblée pour les
éléments du SDK techniquement nécessaires dans un addon distribué ; la frontière exacte reste
soumise à validation juridique. Il n’autorise pas la redistribution du SDK comme substitut autonome
ni la redistribution du CMS.

Le dépôt contient uniquement les signatures et leur documentation. Les composants internes du Core,
les accès privilégiés à la base, les éléments de signature et les identifiants de déploiement en
sont exclus.

Le SDK est un logiciel propriétaire à code source accessible, et non un logiciel sous licence open
source approuvée par l’OSI. `CLA.md` n’est pas actif.
