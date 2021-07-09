# Reactstrap confirm

[![Build Status](https://travis-ci.org/algm/reactstrap-confirm.svg?branch=master)](https://travis-ci.org/algm/reactstrap-confirm)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/f8a7f7a13a2b4d71ba3d49c2631162a9)](https://www.codacy.com/gh/algm/reactstrap-confirm/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=algm/reactstrap-confirm&amp;utm_campaign=Badge_Grade)
[![npm version](https://badge.fury.io/js/reactstrap-confirm.svg)](https://badge.fury.io/js/reactstrap-confirm)

An easy to use promise based confirm dialog for reactstrap.

The objective of this package is to offer a simple and easy way for developers to show confirm dialogs within their apps without having to worry about states or having to repeat the same components in many places.

Demo: https://algm.github.io/reactstrap-confirm

## Installation

Simply use npm

```bash
npm i --save reactstrap-confirm
```

You can use yarn as well

```bash
yarn add reactstrap-confirm
```

## Dependencies

You must manually install react, react-dom and reactstrap in your project in order for this module to work correctly.

## Usage

Simply, import the module and call it as a function anywhere in your code.

```javascript
import confirm from "reactstrap-confirm";

// ...code

let result = await confirm(); //will display a confirmation dialog with default settings

console.log(result); //if the user confirmed, the result value will be true, false otherwhise
```

You can also pass options to the confirm function:

```javascript
confirm({
    title: (
        <>
            Content can have <strong>JSX</strong>!
        </>
    ),
    message: "This is a custom message",
    confirmText: "Custom confirm message",
    confirmColor: "primary",
    cancelColor: "link text-danger"
});
```

The above example will render a customized dialog.

### Available options

| Option           | Effect                                                                                                        | Default value |
| ---------------- | ------------------------------------------------------------------------------------------------------------- | ------------- |
| message          | Sets the message body of the confirmation dialog                                                              | Are you sure? |
| title            | Sets the title of the dialog window                                                                           | Warning!      |
| confirmText      | Sets the text of the confirm button                                                                           | Ok            |
| cancelText       | Sets the text of the cancel button                                                                            | Cancel        |
| confirmColor     | Sets the color class of the confirm button (see reactstrap docs)                                              | primary       |
| cancelColor      | Sets the color class of the cancel button (see reactstrap docs)                                               | _empty_       |
| size             | Sets the size property for the modal component (see reactstrap docs)                                          | _empty_       |
| buttonsComponent | Can receive a component for rendering the buttons. The component will receive the onClose function as a prop. | _empty_       |
