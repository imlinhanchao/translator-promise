var test = require('tape')
var translate = require('./')

test('translate to designated language', async function(assert) {
    assert.deepEqual(await translate('word', 'ja'),{
        word: "word",
        text: "語",
        candidate: [
            "ワード",
            "単語",
            "語",
            "言葉",
            "語句",
            "伝言",
            "一言半句",
            "口舌",
            "一言"
        ]
    });
    assert.end()
})

test('designated target language', async function(assert) {
    assert.deepEqual(await translate('中文', 'ko', 'zh'), {
        word: "中文",
        text: "중국어",
        candidate: [
            "중국어"
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
        text: 'Translate this sentence with Google.',
        candidate:
        [ 
            'Translate this sentence with Google.',
            'By Google translate this sentence.' 
        ] 
    });
    assert.end()
})
