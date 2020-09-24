# azure-connection-parser

## What is it
Simple module to parse Azure Cosmos, SB, EH `Connection String` into set of parameters. 

For example: `Endpoint=sb://foo.servicebus.windows.net/;SharedAccessKeyName=ReadSharedAccessKey;SharedAccessKey=xmbhJlj7/W8t/avPwTev4JVzF4tdfhORdsJy8NcxtmA=`

## Install
```
# npm install azure-connection-parser
```

## Usage

### Parse params from ServiceBus Connection String:
```js
const azureConnectionParser = require('azure-connection-parser')

const params = azureConnectionParser('Endpoint=sb://foo.servicebus.windows.net/;SharedAccessKeyName=ReadSharedAccessKey;SharedAccessKey=xmbhJlj7/W8t/avPwTev4JVzF4tdfhORdsJy8NcxtmA=')
console.log(params)
```
will output:
```
{ 
  Endpoint: 'sb://foo.servicebus.windows.net/',
  SharedAccessKeyName: 'ReadSharedAccessKey',
  SharedAccessKey: 'xmbhJlj7/W8t/avPwTev4JVzF4tdfhORdsJy8NcxtmA='
}
```