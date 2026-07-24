# Mini Message Board

A compact Express application where visitors can read community messages, open an individual message, and submit a new post. Messages are persisted in PostgreSQL and rendered on the server with EJS.

## Demo

![Message board walkthrough](./docs/demo/demo.gif)

> No public deployment is currently available.

## Screenshots

| Message feed | New message |
| --- | --- |
| ![Message feed with seeded and newly submitted posts](./docs/screenshots/message-feed.png) | ![New message form](./docs/screenshots/new-message.png) |

| Server-side validation | Successful submission |
| --- | --- |
| ![Validation feedback with the submitted author retained](./docs/screenshots/validation.png) | ![Message feed after creating a post](./docs/screenshots/message-posted.png) |

![Individual message detail](./docs/screenshots/message-detail.png)

## Features

- Chronological message feed
- Individual message detail pages
- New-message form with server-side validation
- Persistent PostgreSQL storage
- Parameterized database queries
- Responsive server-rendered interface

## Tech Stack

- Node.js and Express
- PostgreSQL with `pg`
- EJS templates
- express-validator
- CSS

## Local Setup

```bash
git clone https://github.com/mohamedmosilhy/Mini-Message-Board.git
cd Mini-Message-Board
npm install
```

Create a PostgreSQL database and a `.env` file:

```env
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/mini_message_board
PORT=3000
```

Populate the database and start the server:

```bash
node db/populatedb.js
node app/index.js
```

Then open [http://localhost:3000](http://localhost:3000).

## Project Structure

```text
app/            Express entry point
controllers/    Message retrieval and form handling
routers/        Application routes
db/             Pool, queries, and seed script
views/          EJS pages
public/         Stylesheets and assets
```

## Current Status

The feed, message-detail, submission, and validation flows are working with persistent PostgreSQL data. The walkthrough was captured from a seeded local database and includes the complete message-creation flow.
