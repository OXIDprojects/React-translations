# React-translations
## oxhackathon19

![Alt text](out/pictures/screenshot.png?raw=true "React-Translations")

This module provides the possibility to change translations
in the shop using React and GraphQL. There are two query endpoints defined
and one mutation endpoint.

You can query the existing languages in the shop and then for each
language a list of translations. And you can send back a translation
that then will be set in the shop. There is also a mutation provided
to reset the translations changed through this API.

To use this module, the following prerequisites exist: Your shop
version must be at least 6.2. And you need the [graph-translations](https://github.com/OXIDprojects/GraphQL-translations)
module installed. 