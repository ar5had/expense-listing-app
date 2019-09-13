# Expense List App

**Link -** https://pleo-meets-arshad.herokuapp.com

## Setup

1. `npm install`
2. `npm run dev`

To build - `npm run build`.

See [open issues](https://github.com/arshdkhn1/pleo-frontend-challenge/issues) for the warnings that you get in the dev environment.

## Description

A full-stack javascript web app with following features -

#### Features

1. **User can list expenses**

   - User can change the number of items per page which brings a good user experience.

   - Pagination which not only takes you back to the next/prev pages but also provides you with the info of total no of pages, and the current page. It also updates the title of the page accordingly.

2. **User can add a comment on an expense**

   - User can add a comment of max 300 words.
   - The user gets notified when the comments are saved.
   - User can't spam changes, proper measures(on the UI side) are taken to avoid new comment request before the old one gets completed.
   - Errors are shown on the UI side if any.

3. **User can filter on expenses (client-side filters)**

   - User can filter expenses that are **loaded on the page** by `email`, `merchant`, `name`, `amount`, and `comment`.
   - User can also pass string query like `> 4000 USD` which lists expenses with more than `4000 USD` bill. Supported queries are - `> <amount> <currency>`, `< <amount> <currency>`, and `= <amount> <currency>`.
   - Search/filtering will be done against only currently loaded items(that's what I think a client-side filter is, I may be wrong). If page has 10 expense items, then search filter will filter expenses from thoses 10 loaded items only. User can change no of items on the page using the items-per-page dropdown to search over a bigger set of expense items.

4. **User can add a receipt image on an expense**

   - User can add any kind of image format.
   - User can right away see the preview of the image.
   - Images with any aspect ratio can be previewed with their original aspect ratio.
   - User can also delete the receipt image.
   - The user gets notified when the changes in image receipts are made.
   - Errors are shown on the UI side if any.

5. **Changable items/expenses per page count**

   - User can change items per page to `5 or 10 or 25 or 50 or 100`. You can manually pass the `limit` value to change `items per page` as per your wish.

6. **Multiple language support**

   - User can switch the language to `FR` from the default language `EN`.
   - App also supports `localDirSubpaths` which is disabled right now for simplicity sake. It allows you to have different language version of your app by adding language parameter to the url(just like pleo.io).

7. **Minimalistic and Responsive Web Design**

   - The web app layout supports every screen size.
   - Simple animations and effects are added to make actions more natural.

8. **Keyboard accessibility and semantic markup**

   - User can use the keyboard to navigate through the app. Just use `tab` and `shift + tab` and you can do everything on the app.
   - I have taken care of all the focus related problems in the app, that comes with declarative routing. One example of such problem is sometimes the expected element is not focussed when a new page is loaded. See [#24](https://github.com/arshdkhn1/pleo-frontend-challenge/issues/24).
   - Semantic markup is used.

9. **Typescript**

   - Even though this was the first time I used typescript, I have typed everything and you won't find any use of `any` keyword except the right places.

10. **GraphQL**

    - Single api endpoint.
    - Caching.
    - GraphQL simplifies the data fetching and allows the client to fetch desired data from the endpoint thus eliminating the need of Redux or any other state management library if the state is not too complex.
    - I have made many redux [apps](https://github.com/search?q=user%3Aarshdkhn1+redux) and I personally don't like the boilerplate it comes with.

11. **Styled Components**
    - Scoped styling.
    - Vendor support.

## Stack

### Frontend -

1. **Typescript** - static typing
2. **React.js/Next.js** - SSR and routing
3. **Apollo Boost** - provides apollo client with caching, queries, mutations, and error handling
4. **Styled Components** - scoped styling with js goodness and vendor support
5. **react-i18next** - for localization

### Backend -

1. **Next.js** - handles page routes and SSR
2. **Express** - custom server for handling graphql and localization
3. **Apollo-server-express** - server-side implementation of graphql with express server
