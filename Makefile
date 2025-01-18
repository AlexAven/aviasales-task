install:
	npm ci

dev:
	npx vite

build:
	npm run build

lint:
	npx eslint .

fix:
	npx eslint --fix