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

- Place in src folder
- Component names in PascalCase

NEW HTML FILES:

- Place at .
- Lowercase and whitespace => "-" (dash)

NEW SCSS FILES:

- Place in sass
- Lowercase and whitespace => "_" (underscore)
- Do not create CSS files, only SCSS

NEW JS FILES:

- Place in scripts
- Names in camelCase
