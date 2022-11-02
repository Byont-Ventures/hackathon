# Github Workflows

We automatically run a Github Workflow on each commit based on the branch you push to.

- `main`: `.github/workflows/production.yml`
- all other branches: `.github/workflows/preview.yml`

The only differences between these workflows is the Vercel environment for deployment (`production` vs `preview`), and that the production `deploy`-job depends on the `test, format, lint`-job while the preview `deploy`-job doesn't, which speeds up PR pipelines.

## Deploying with Vercel

We use [Vercel](https://vercel.com/) for hosting the application. When using [Vercel for Github](https://vercel.com/docs/concepts/git/vercel-for-github), Vercel requires us to create a paid member per repository contributor. To circumvent this, we use a custom workflow (`.github/workflows/vercel.yml`) that uses the Vercel CLI to create builds based on a general user access token.

When forking this repository you might want to update the following workflow reference depending on your needs.

```yml
# .github/workflows/production.yml and # .github/workflows/preview.yml
deploy:
  needs: format-test-lint
  uses: Byont-Ventures/web3-template/.github/workflows/vercel.yml@main
  with:
    VERCEL_ENVIRONMENT: production
  secrets: inherit
```

The job requires the following [repository secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets):

- `VERCEL_TOKEN`, you can obtain this token by going to [`settings -> tokens`](https://vercel.com/account/tokens)
- `VERCEL_ORG_ID`, you can obtain this token by going to [`settings -> general`](https://vercel.com/account) ("Your ID" is on the bottom)
- `VERCEL_PROJECT_ID`, you can obtain this token by going to `project -> settings -> general` ("Project ID" is on the bottom)

Alternatively, you can remove the job above and set up Vercel using [Vercel for Github](https://vercel.com/docs/concepts/git/vercel-for-github) using the following button.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FByont-Ventures%2Fweb3-template)
