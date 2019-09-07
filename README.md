#Expense List App

**LINK - https://pleo-meets-arshad.herokuapp.com**

A full-stack javascript web app with following features -

#### Features

1. **User can list expenses**

   - User can change the number of items per page which brings a good user experience. On changing the per-page value the old items are loaded from cache and only new items are loaded.

   - Pagination which not only takes you back to the next/prev pages but also provides you with the info of total no of pages, and the current page. It also updates the title of the page accordingly.

2. **User can add a comment on an expense**
   - User can add a comment of max 300 words.
   - The user gets notified when the comments are saved.
   - User can't spam changes, proper measures(on the UI side) are taken to avoid new comment request before the old one gets completed.
   - Errors are shown graphically if any
3. **User can filter on expenses (client-side filters)**
   - User can filter expenses that are **loaded on the page** by `email`, `merchant`, `name`, `amount`, and `comment`.
   - User can also pass string query like `> 4000 USD` which lists expenses with more than `4000 USD` bill. Supported queries are - `> <amount> <currency>`, `< <amount> <currency>`, and `= <amount> <currency>`. **Only the integer part is considered for simplicity sake.**
   - If page has 100 expense items, then search filter will filter expenses from thoses 100 loaded items only - **client side filter**. User can change no of items on the page using the items-per-page dropdown to search over a bigger set of expense items.
4. **User can add a receipt image on an expense**
   - User can add any kind of image format.
   - User can right away see the preview of the image.
   - Images with any aspect ration can be previewed with their original aspect ration.
   - User can also delete the receipt image.
   - The user gets notified when the changes in image receipts are made.
   - If the user uploads a photo and then deletes it and then again upload the same photo then there won't be any change to consider as there is no change in the receipt. Adding/deleting image doesn't make any change if the final image is the same as the old one.
   - Errors are shown graphically if any.
5. **Multiple language support**

   - User can switch the language to `FR` from the default language `EN`.
   - App also supports `localDirSubpaths` which is disabled right now for simplicity sake.

6. **Minimalistic and Responsive Web Design**
   - The web app layout supports every screen size.
   - Simple animations and effects are added to make actions more natural.
7. **Keyboard accessibility and semantic markup**
   - User can use the keyboard to navigate through the app.
   - Declarative routing sometimes doesn't focus the right element when a new page is loaded. See [#24](https://github.com/arshdkhn1/pleo-frontend-challenge/issues/24).
   - Semantic markup rules are respected.

## Stack

#### Frontend -

1. **Typescript** - static typing
2. **React.js/Next.js** - SSR and declarative routing
3. **Apollo Boost** - provides apollo client with caching, queries and mutations, error handling
4. **Styled Components** - scoped styling without js goodness
5. **react-i18l** - for localization

### Backend -

1. **Next.js** - handles page routes and SSR
2. **Express** - custom server for handling graphql and localization
3. **Apollo-server** - server-side implementation of graphql

### How long did it take? Which part was the hardest to implement?

It took me a good 40hrs, to not only set up the backend, frontend but also making design decisions. There wasn't anything that I haven't done before but like every project that I make I have tried to make this one as beautiful as possible not only design-wise but code-wise as well.

I had a lot of hiccups while handling the types with typescript. This is the first time I am using typescript so it took away a few hours debugging things and researching.

The image upload part is done by sending base64 data to server via graphql. I chose this way over uploading the image to CDN(like cloudinary), or local server using multer/fileUpload because I just wanted to do things the graphql way. I am aware there is one more way to upload the image using graphql, i.e., the Multipart spec way but that landed me in trouble with Apollo-Boost as apollo-boost probably doesn't automatically support a few things(see [#14](https://github.com/arshdkhn1/pleo-frontend-challenge/issues/14)). Uploading over CDN or private server is simple but again I just didn't want to do any rest API-ish thing.

One more thing that brought me a little trouble is the localization. I have turned off the `localeSubDir` part which allows having different language version of sites at the same time with a just a different path. I had a little trouble detecting the languages. Right now you can switch into different locales by clicking on locale buttons in the Header. I think the localization part can be improved a little more, I 'll try to look into it in the meantime.

**Note:** One thing that I should have sure worked more on, is the search filter. I should have added more graphical way of electing the filter type and search results accordingly. The amount is one of the most important filter in my opinion, so filtering expense equal-to/above/less than a particular amount would be super helpful. I haven't implemented the graphical part but amount filters with `> | < | =` operators are supported but you have to follow the `OPERATOR VALUE CURRENCY` format to filter expenses by the amount that way. It's taking too long to submit the project so I'll spare this feature for now. 😅

[Here](https://github.com/arshdkhn1/pleo-frontend-challenge/issues?utf8=%E2%9C%93&q=is%3Aissue) are a few more issues that I faced while developing this app.

### What functionalities are you most proud of?

I am very proud of the overall minimalistic web design and how fast the app is. Proper animations/loaders are there to give the user great user experience. I have taken care of lots of minute details to make the overall web app feel more user-friendly. On the code side, I have tried to write very clean and modular code.

I hope you guys will like the project 🙂
