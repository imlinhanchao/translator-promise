# Translate Node Module
A node module to translate. There is power by Google Translate.

## Installation
```bash
npm install translate-node
```

## Usage

```javascript
const translate = require('translate-node');
// async/await. The second parameter can be a language name (ISO 639-1)
const result = await translate('Hello world', 'ja');
console.log(result); 
// Output:
// {
//     word: 'Hello world', 
//     text: 'こんにちは世界', 
//     candidate: [ 'こんにちは世界', 'こんにちは' ] 
// }
 
// Promises with .then(). The third parameter is the source language.
translate('こんにちは世界', 'cn', 'ja').then(result => {
  console.log(result);  
  // Output:
  // { 
  //     word: 'こんにちは世界', 
  //     text: '你好，世界！', 
  //     candidate: [ '你好', '您好', '打招呼', '个招呼', '喂' ] 
  // }
});
```

## Parameters

```typescript
function translate(word: string, to: string, from: string): object
```

|parameter|description|
|--|--|
|word|The word want to translate.|
|to|The target language. Default is Chinese(`cn`). (Optional)|
|from|The source language. Default is recognized automatically(`auto`). (Optional)|

> Note: If there is no source language, the language will be recognized automatically. When there is about 33.3% Chinese, the source language will be changed to Chinese.

### Return Object
|key|description|
|--|--|
|word|The word want to translate.|
|text|The most match result.|
|candidate|Other translate result.|

## Language Code
You can check it in [here](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (ISO 639-1).

## Example

```javascript
translate('word', 'ja');

// {
//     "word": "word",
//     "text": "ワード",
//     "candidate": [
//         "ワード",
//         "単語",
//         "語",
//         "言葉",
//         "語句",
//         "伝言",
//         "一言半句",
//         "口舌"
//     ]
// }

translate('中文', 'ko', 'zh');

// {
//     "word": "中文",
//     "text": "중국어",
//     "candidate": [
//         "중국어"
//     ]
// }

translate('中文');

// {
//     "word": "中文",
//     "text": "Chinese",
//     "candidate": [
//         "Chinese"
//     ]
// }

translate('用 Google 翻译一下这条句子。');

// { 
//     word: '用 Google 翻译一下这条句子。',
//     text: 'Translate this sentence with Google.',
//     candidate:
//     [ 
//         'Translate this sentence with Google.',
//         'By Google translate this sentence.' 
//     ] 
// }
```