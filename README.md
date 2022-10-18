- [Demo](https://airtime-cash-podb.vercel.app/)
- [Decagon Repo](https://github.com/decadevs/live-project-frontend-pod-_b-1)

## PROJECT SCRIPTS

- Run `yarn start` to start app

## HELP ME
#### Git
- Run `git add .` to stage changes.
- Run `git commit` -m 'commit message'
- Run `git push origin nameOfBranch` to push to your current branch
- Run `git pull origin develop` to pull from `develop branch`

- Run `git config pull.rebase false` to resolve `You have divergent branches and need to specify how to reconcile them.`
## FOLDER STRUCTURE

```
├── public/
│   ├── favicon.io
│   ├── index.html
│   ├── manifest.json
├── src/
│   ├── __mock__/
│   │   ├── users.json
│   ├── __tests__/
│   │   ├── register.test.js
│   ├── apis/
│   │   ├── endpoints
│   │   ├── request
│   ├── assets/
│   │   ├── fonts
│   │   ├── icons
│   │   ├── images
│   ├── components/
│   │   ├── auth
│   │   │   ├── index.jsx
│   │   │   ├── style.scss
│   │   ├── common
│   │   │   ├── index.jsx
│   │   │   ├── style.scss
│   │   ├── logout
│   │   │   ├── index.jsx
│   │   │   ├── style.scss
│   │   ├── modal
│   │   │   ├── index.jsx
│   │   │   ├── style.scss
│   │   ├── nav
│   │   │   ├── index.jsx
│   │   │   ├── style.scss
│   │   ├── context
│   │   │   ├── index.jsx
│   ├── pages/
│   │   ├── forgotPassword
│   │   │   ├── index.jsx
│   │   │   ├── style.scss
│   │   ├── landingPage
│   │   │   ├── index.jsx
│   │   │   ├── style.scss
│   │   ├── login
│   │   │   ├── index.jsx
│   │   │   ├── style.scss
│   │   ├── notfond
│   │   │   ├── index.jsx
│   │   │   ├── style.scss
│   │   ├── signup
│   │   │   ├── index.jsx
│   │   │   ├── style.scss
│   │   ├── updateUser
│   │   │   ├── index.jsx
│   │   │   ├── style.scss
│   │   ├── utils
│   │   │   ├── index.jsx
│   ├── App.js
│   ├── index.js
│   ├── index.scss



```

## AIRTIME TO CASH REF DOCS
- [AIRTIME-TOCASH GIRA PROJECT URL](https://jira.decagonhq.dev/secure/RapidBoard.jspa?rapidView=176&projectKey=ATC2&view=planning&selectedIssue=ATC2-33&issueLimit=100)

- [AIRTIME-TOCASH PROJECT FIGMA URL](https://www.figma.com/file/qtiluzL9qRhyiMzVuPEwhV/Airtime-to-Cash-Design?node-id=0%3A1)
- [Airtime to cash PRD](https://docs.google.com/document/d/1XRH2oDxvHMMrMaVwqVRb3i1nseflHh7NZW3sHKenl04/edit)
## PRISMA DOCUMENTATION
- Run `npx prisma db push` to connet to online db
- Run `npx prisma migrate dev --name init` to migrate local db

