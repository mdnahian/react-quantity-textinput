# react-quantity-textinput

![Demo](https://github.com/mdnahian/react-quantity-textinput/blob/master/screenshot.png)


### Install
```shell
npm i react-quantity-textinput
```

### Usage
```javascript
import React, { Component } from 'react';

var Quantity = require('react-quantity-textinput');

module.exports = React.createClass({
	render: function () {
		return <Quantity />
	}
});
```

### Optional
```javascript
import React, { Component } from 'react';

var Quantity = require('react-quantity-textinput');

module.exports = React.createClass({
	render: function () {
		return <Quantity
			styleTextInput={{backgroundColor:'#ffffff'}}
			styleButton={{backgroundColor:'#000000'}}
			editable={false}
			stepsize={5}
			initialValue={5}
			min={5}
			max={100} />
	}
});
```
