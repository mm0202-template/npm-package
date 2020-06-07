# template_npm-package
 
# setup
## tune package.json
`npm init` & merge to template

## secrets for CI
- NPM_TOKEN
- SLACK_WEBHOOK_URL

# publish
`npm version ...` => publish by github workflow

## `npm version` options
check by `npm version -h`

# unpublish
`npm unpublish [<@scope>/]<pkg>[@<version>]` in 72 hours
