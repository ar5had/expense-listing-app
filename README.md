# Front-end challenge
Implement an expenses list fetching all expenses from the provided API. Allow the user to add notes and upload receipt pictures to each expense.

## Functional requirements
- [x] User can list expenses
- [x] User can add a comment on an expense
- [ ] User can filter on expenses (client side filters)
- [x] User can add a receipt image on an expense

## General requirements
A single page application using a modern JS library/framework including:
- [x] A visually pleasing experience, you don’t have to be a designer but you must have put an effort into making this look good
- [x] A "componentized" approach, split your code into small building blocks, showcase your clean architecture skills.
- [x] CSS can be written using PostCSS, SASS, LESS or similar higher-level language
- [x] The use of any libraries or frameworks as long as you can explain to us why you chose them.
- [ ] A brief description of your project. How long did it take? Which part was the hardest to implement? What functionalities are you most proud of?

## Nice to have
Want to go the extra mile? Here's few suggestion of things we'd like to see (or go crazy and implement what you think will impress us).
- [ ] Responsive design
- [x] Implement with a state management library (Redux, Mobx, VueX, ...)
- [x] Implement solution in TypeScript
- [ ] Localization: support for multiple languages (English, French, ...)

## What we're looking for
- Using high-quality existing libraries or small amounts of custom code. 
- Production grade code (clean, maintainable, reusable code)
- Showing your work through your commit history
- Polish and visual creativity
- Pride in craftsmanship

## API

Note:

> The API store the changes in memory, restarting the API server will wipe all changes.

## Run the API
In the `/api` folder run:
```sh
npm install
npm start
```

API is now running at `http://localhost:3000`

## Expenses API

### Listing expenses

```
GET /expenses
```

#### Query parameters:
- `limit`: number of expenses to fetch.
- `offset`: number of expenses to skip, for pagination.

Example:

```
GET /expenses?limit=25&offset=25
```
This query gets the second page of 25 expenses.

#### Updating an expense
```
POST /expenses/:id
```
#### Path parameters:
- `id`: The id of the expense to update

#### Body parameters:
- `comment`: The comment to set on an expense


### Uploading a receipt to an expense
```
POST /expenses/:id/receipts
```
#### Form parameters:
- `receipt`: The file to add to the expense
