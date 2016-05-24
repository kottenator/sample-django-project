# Sample Django Project

Discover different ways of static files handling.

## Installation & Development

```sh
git clone ...
virtualenv -p python3 venv
. venv/bin/activate
pip install -r requirements.txt
npm install
```

## Run

```sh
./manage.py runserver
```

## Develop

```sh
# CommonJS bundle: one-time compilation
npm run common-bundle
# CommonJS bundle: watch for changes & auto rebuild
npm run watch-common-bundle
# ES6 bundle: one-time compilation
npm run es6-bundle
# ES6 bundle: watch for changes & auto rebuild
npm run watch-es6-bundle
```
