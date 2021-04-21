var test = require('tape')
var translate = require('./')

test('translate to designated language', async function(assert) {
    assert.deepEqual(await translate('word', 'ja'),{
        word: "word",
        text: "語",
        candidate: ["ワード","単語","語","言葉","語句","伝言","一言半句","口舌"]
    });
    assert.end()
})

test('designated target language', async function(assert) {
    assert.deepEqual(await translate('中文', 'ko', 'zh'), {
        word: "中文",
        text: "중국말",
        candidate: [
            "중국말","중국어"
        ]
    });
    assert.end()
})

test('auto translate to english', async function(assert) {
    assert.deepEqual(await translate('中文'), {
        word: '中文',
        text: 'Chinese',
        candidate: [
            'Chinese'
        ]
    });
    assert.end()
})

test('translate sentence', async function(assert) {
    assert.deepEqual(await translate('用 Google 翻译一下这条句子。'), { 
        word: '用 Google 翻译一下这条句子。',
        text: "Use Google to translate this sentence.",
        candidate:[
            "Use Google to translate this sentence.",
            "By Google translate this sentence."
        ]
    });
    assert.end()
})
