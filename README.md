WHEN FIRST INSTALLED

- Run "npm install"
- Advised to use ESLint extension, ESLint file included

RUN EVERYTIME BEFORE CODING:

-- PARCEL --
parcel index.html

-- SASS --
npm run scssToCss

-- JSX --
npx babel --watch dev_src --out-dir src --presets react-app/prod

NEW REACT COMPONENTS:

- Place in dev_src/component
- Component names in PascalCase

NEW HTML FILES:

- Place at root
- lowercase and whitespace => "-" (dash)

NEW SCSS FILES:

- Place in sass
- lowercase and whitespace => "_" (underscore)
- Do not create CSS files, only SCSS

NEW JS FILES:

- Place in dev_src/scripts
- Names in camelCase

BEFORE SENDING TO PRODUCTION

- Change React scripts react.development.js => react.production.js