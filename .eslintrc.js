module.exports = {
  parser: "babel-eslint",
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  "plugins": [
    "react-hooks"
  ],
  {
    "rules": {
      "jsx-a11y/rule-name": 2,
      "react-hooks/rules-of-hooks": "error"
    }
  }
};
