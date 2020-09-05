# BECHO SSP WEB CLIENT

This is becho seller side platform(ssp) web client, built with
- material ui
- react
- nextjs
- firebase auth
- firebase firestore
- vercel

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## NOTES
Level 1 core elements
- users
- stores
- catalogItems
- menus
- orders

Level 2 core elements
- buyers
- payments

Level 3 core elements
- Reports

Unit
- Numbers
- Grams
- KiliGrams

Others
- 10 options for the purchase orde
- Store has both 
- Menu has them as defaults 
- Stores has delivery or pick up options
- Store has timings 

Notes:
- all the timezones in moment are "Asia/Kolkata"

Order workflow
- status(used for tracking timeline)
	- checked out
	- placed
	- confirmed
	- ready to pickup
	- picked up/deilivered
- paymentStatus
	- paid
	- not paid
- paymentStatusTime
- modificationStatus - payment timeline
	- not modified
	- modified
- modificationStatusTime
- cancelStatus
	- active
	- cancelled
- cancelStatusMessage
	- canceledBySeller
	- canceledByBuyer
- cancelStatusTime
- canceledBy

```sh
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"longDynamicLink":"https://viluvainc.page.link/?link=https://viluvainc.com/placeorders/7hBvyotPJDbgtbn6WUiJ&st=sdas&sd=sadas&si=https://firebasestorage.googleapis.com/v0/b/playground-d4e7b.appspot.com/o/menuOne.jpeg?alt=media"}' \
  https://firebasedynamiclinks.googleapis.com/v1/shortLinks\?key\=AIzaSyApGoaZVtoVTYnftHSbT9l7nDmDVUYJYpU

curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"longDynamicLink":"https://viluvainc.page.link/?link=https://viluvainc.com/placeorders/7hBvyotPJDbgtbn6WUiJ&st=sdas&sd=sadas&si=https://firebasestorage.googleapis.com/v0/b/playground-d4e7b.appspot.com/o/2020-07-10%2014.43.19.jpeg?alt=media"}' \
  https://firebasedynamiclinks.googleapis.com/v1/shortLinks\?key\=AIzaSyApGoaZVtoVTYnftHSbT9l7nDmDVUYJYpU

# sending whatsapp message
curl --header "Content-Type: application/json" \
        --request POST \
        --data '{"phoneNumber": "13095331606", "message": "Bye Bye Matrix"}' \
        http://13.126.118.173:5000/sendMessage
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployed on Vercel

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
