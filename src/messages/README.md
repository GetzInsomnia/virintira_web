# Translation files

All translation strings are stored in JSON files named after the locale code.
Add new languages by creating a `<locale>.json` file with the same structure.
Messages are grouped by feature (e.g. `Navbar`, `Hero`). Components retrieve
them with `useTranslations('Feature')` and then `t('key')`.
