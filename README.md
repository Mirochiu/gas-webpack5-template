# Google Apps Script Webapp Template for webpack 5

## prerequiremnt

install `npm` and `jq` first.

install `pnpm` with ``npm install -g pnpm`.

## init and first-deploy

1. run `pnpm install` to install the project depenencies.

2. login your google account by `pnpm run login`.

3. create a project `pnpm run create`

4. make the first deployment by `pnpm first-deploy`.

   use `pnpm exec clasp open` to autherize the permissions for this webapp.

   click the button `deploy` on the top-right of page . `deploy` > `new deployment` > click the `deploy` button > click `autherize` button > login google account > click `Advanced` > click `Go to Dist(unsafe)` > `allow` this web app to access your Google Account > `done` > copy the deploy id like `AKfy....`

   Copy deployment Id and add to `.clasp.json` with the attribute name `deploymentId`.

   After that, use `pnpm run open` to open your webapp on AppScript.
   You will see a web page with title `You're a valid user`.

## re-deploy

1. `pnpm run deploy`

   The output looks like below.

   ```bash
   ...
   Pushed 3 files.
   Created version 3.
   - AKf... @3.
   ```

2. `pnpm run open`

   To open your webapp on AppScript.

## other

`pnpm exec clasp open --addon` to show the spreadsheet.

## troubleshooting

if you see `需要授權才能執行此動作。`, please autherize the permissions by `pnpm exec clasp open`

## Appendix: pnpm commands

- `npm install` → `pnpm install`
- `npm i <pkg>` → `pnpm add <pkg>`
- `npm run <cmd>` → `pnpm run <cmd>`
- `npx clasp` → `pnpm exec clasp`
