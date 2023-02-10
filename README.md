# React DataGrid

## Installation

DataGrid requires [Node.js](https://nodejs.org/)  to run.

Install the dependencies 

```sh
npm install
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Overview

```jsx


const columns =  [
        { label: 'Name', key: 'name', type: 'string' },
        { label: 'Date', key: 'date', type: 'date' },
        { label: 'Category', key: 'category', type: 'string' },
        { label: 'Amount', key: 'amount', type: 'number' },
        { label: 'Created At', key: 'created_at', type: 'date' }
    ]

const data = [{
        id: 8,
        account_id: 5,
        item_id: 1,
        user_id: 1,
        name: "CREDIT CARD 3333 PAYMENT *//",
        type: special,
        date: "2022-09-02T00:00:00.000Z",
        category: "Payment",
        amount: 25,
        created_at": "2022-09-07T19:42:29.165Z"
    },{
        id: 2,
        account_id: 1,
        item_id: 1,
        user_id: 1,
        name: "Uber 063015 SF**POOL**",
        type: "special",
        date: "2022-09-02T00:00:00.000Z",
        category: "Travel",
        amount: 5.4,
        created_at: "2022-09-07T19:42:29.160Z"
    }];
    
    const title = { label: 'Name', key: 'name', type: 'string' };

    const subTitle = { label: 'Amount', key: 'amount', type: 'number' };

    const App = () => {
        <DataGrid data={data} columns={columns} title={title} subTitle={subTitle} />
    }
```