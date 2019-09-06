
#Expense List App

**LINK - https://pleo-meets-arshad.herokuapp.com**

A full stack javascript web app with following features -


####  Features
1. **User can list expenses**
  
   - User can change the number of items per page which brings a good user experience. On changing the per-page value the old items are loaded from cache which makes the loading lightning fast

   - Pagination which not only takes you back to the next/prev pages but also provide you the info of total no of pages, and the current page. It also updates the title of page accordingly.

2. **User can add a comment on an expense**
   - User can add comment of max 300 words
   - Before adding comment, the comment is trimmed down and new comment submission only takes place when there is an actual comment
   - User get notified when the comments are saved
   - User can't spam changes, proper measures(on the UI side) are taken to avoid new comment request before the old one gets completed.
3. **User can filter on expenses (client side filters)**
   - User can filter expenses that are on the page by `email`, `merchant`, `name`, `amount`, and `comment` 
   - User can also pass string query like `> 4000 USD` which lists expenses with more than `4000 USD` bill. Supported queries are - `> <amount> <currency>`, `< <amount> <currency>`, and `= <amount> <currency>`. **Only the integer part is considered for simplicity sake**
4. **User can add a receipt image on an expense**
   - User can add any kind of image format
   - User can right away see the preview of the image
   - Images with any aspect ration can be previewed with their original aspect ration
   - User can aslo delete the receipt image
   - User get notified when the changes in image receipts are made
   - If user uploads a photo and then deletes it and then again upload the same photo then there wont be any change to consider as there is not change in receipt. Adding/deleting image doens't make any change if the final image is same as the old one
5. **Multiple language support**
    - User can switch the language to `FR` from the default language `EN`
    - App also support `localDirSubpaths` but that is dislabled by default for the simplicity sake
  
6.  **Minimalistic and Responsive Web Design**
    - The webapp layout will change as per screen size
    - Simple animations and effects are added to make an actions more natural
7. **Keyboard accessibility and semantic markup**
   - User can use keyboard to navigate throught the app
   - Declarative routing sometimes doesn't not focus the right element when a new page is loaded. See [#24](https://github.com/arshdkhn1/pleo-frontend-challenge/issues/24). 
   - Semantic markup rules are respected



## Stack  

#### Frontend -
1. **Typescript** - static typing
1. **React.js/Next.js** - SSR and declarative routing 
2. **Apollo Boost** - provides apollo client with caching, queries and mutations, error handling
3. **Styled Components** - scoped styling without js goodness
4. **react-i18l** - for localization

### Backend -
1. **Next.js** - handles page routes and ssr
2. **Express** - custom server for handling graphql and localization
3. **Apollo-server** - server side implemention of graphql


### How long did it take? Which part was the hardest to implement? 
It took me a good 40hrs, to not only set up the backend, frontend but also making design decisions. There wasn't anything that I haven't done before but like every project that I make I have tried to make this one as beautiful as possible not only desgn wise but code wise as well.

I had a lot of hiccups while handling the types with typescript. This is the first time I am using typescript so it really took away few hours debugging things and researching. 

The image upload part is done by sending base64 data to server via graphql. I chose this way over uploading image to CDN(like cloudinary), or local server ussing multer/fileUpload, because I just wanted to do things the graphql way. I am aware there is one more way to upload image using graphql, i.e., the Multipart spec way but that landed me in trouble with Apollo-Boost as apollo-boost probably doesn't automatically supports a few things(see [#14](https://github.com/arshdkhn1/pleo-frontend-challenge/issues/14)).Uploading over cdn or private server is simple but again I just didn't want to do any rest api dependent thing.

One more thing that brought me a little trouble is the localizaiton. I have turned off the `localeSubDir` part which allows to have different language version of sites at a same time with a just a different path. I had a little trouble detecting the languages. Right now you can switch into different locales by clicking on locale buttons in the Header. I think the localization part can be improved a little more, I ll try to look into it in the mean time.

**Note:** The `Link` and `Router` elements from `i18n` are same as Next's `Link` and `Router`,  they are just wrapper to support different locale subpath navigation. I havn't switched to orignal Next's Link and Router yet but I ll do it trying the locale subpath one more time.  It doesn't bring any difference IMHO at this moment, I hope you guys wont mind it.

[Here](https://github.com/arshdkhn1/pleo-frontend-challenge/issues?utf8=%E2%9C%93&q=is%3Aissue) are few more issues that I faced while developing this app.

### What functionalities are you most proud of?
I am very proud of the overall minimalistic web design and how fast the app is,without any stutter and proper animations/loaders to give user a great user experiece. I have taken care of lots of minute details to make the overall webapp feel more user friendly.
