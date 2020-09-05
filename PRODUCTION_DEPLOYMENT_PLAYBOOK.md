This is a NextJS based app and the below is the sequence of steps for deployments

## WIP
- this is yarn based
- check previous tags and increase the number correspondingly
	- `git tag`
- tag and deploy the nextjs app
	- `git tag -a v1.6.6 -m "version 1.6.6"; git push origin --tags`
- change the file .env.production
	- NEXT_PUBLIC_CONFIG_VAR=test to NEXT_PUBLIC_CONFIG_VAR=production
web ui is deployed in with

npm run deploy:prod

check to logs here to confirm deployment

https://console.firebase.google.com/u/1/project/amana-ai-recommendations/functions/logs?search=&&severity=DEBUG

roll back the below

change the file .env.production NEXT_PUBLIC_CONFIG_VAR=production to NEXT_PUBLIC_CONFIG_VAR=test

firebase.json hosting key "site": "amana-ai-recommendations" to "site": "amana-recommendations-test"

git checkout .

If required update the typeform redirect url

Just check the typeform redirect url just to be on safe side

## Firebase Project settings
- add a project, select google analytics
- authentication
	- Sign-in providers - email, phone
	- Authorized domains
		- localhost
		- viluvainc.com
		- test.viluvainc.com
- database
	- start a database in india(asia-south)
	- add rules
- storage
	- start a storage in india(asia-south)
	- add rules
- dynamic links
	- setup it up 
