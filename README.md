# Google Apps Script Webapp Template for webpack 5

install `npm`, `yarn`, `clasp` and `jq` first.

run `yarn` to install the project depenencies.

login your google account by `clasp login`.

create a project
`yarn create`

make the first deployment by `yarn first-deploy`.
copy deployment Id and add to `.clasp.json` with the attribute name `deploymentId`.

`clasp open` to autherize the permissions for this webapp.
click the button `deploy` on the top-right of page . `deploy` > `new deployment` > click the `deploy` button > click `autherize` button > login google account > click `Advanced` > click `Go to Dist(unsafe)` > `allow` this web app to access your Google Account > `done`

`yarn deploy`

`yarn open` to show the result of web app. You will see a web page with title `You're a valid user`.

`clasp open --addon` to show the spreadsheet.

## troubleshooting

if you see `需要授權才能執行此動作。`, please autherize the permissions by `clasp open`
