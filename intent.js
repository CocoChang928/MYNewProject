const { NlpManager } = require('node-nlp');
const manager = new NlpManager({ languages: ['zh'] });

//在NLP 模型中增加例句跟意圖
manager.addDocument('zh', '在台北市的法國餐廳', 'places.search');
manager.addDocument('zh', '您好，我想找附近的法國餐廳', 'places.search');
manager.addDocument('zh', '嗨，我要找餐廳', 'places.search');
manager.addDocument('zh', '有什麼餐廳', 'places.search');
manager.addDocument('zh', '找餐廳', 'places.search');
manager.addDocument('zh', '介紹餐廳', 'places.search');
manager.addDocument('zh', '附近的便利商店', 'places.search');
manager.addDocument('zh', '介紹提款機', 'places.search');
manager.addDocument('zh', '附近的提款機', 'places.search');
manager.addDocument('zh', '我要離開了', 'greetings.bye');
manager.addDocument('zh', '下次見', 'greetings.bye');
manager.addDocument('zh', '再見', 'greetings.bye');
manager.addDocument('zh', '你好', 'greetings.hello');
manager.addDocument('zh', '哈囉', 'greetings.hello');
manager.addDocument('zh', 'HI', 'greetings.hello');
manager.addDocument('zh', '嗨!', 'greetings.hello');
manager.addDocument('zh', '您好', 'greetings.hello');
manager.addDocument('zh', '能做什麼', 'greetings.intro');
manager.addDocument('zh', '你能幹嘛', 'greetings.intro');
manager.addDocument('zh', '介紹', 'greetings.intro');

// 將意圖轉換為文件訊息
manager.addAnswer('zh', 'places.search', '找地點');
manager.addAnswer('zh', 'places.search', '好的，我來找找看');
manager.addAnswer('zh', 'greetings.hello', '你好呀');
manager.addAnswer('zh', 'greetings.hello', '你好你好');
manager.addAnswer('zh', 'greetings.bye', 'see you soon!');
manager.addAnswer('zh', 'greetings.bye', '掰~');
manager.addAnswer('zh', 'greetings.bye', '小雞 掰~');
manager.addAnswer('zh', 'greetings.intro', '你覺得我能做什麼就做什麼');
manager.addAnswer('zh', 'greetings.intro', '需要跟你報告嗎?');
manager.addAnswer('zh', 'greetings.intro', '老闆您好，您要我做什麼我就做呀~~');

// Train and save the model.
(async () => {
    await manager.train();
    manager.save('trained_model/ex1-train-intents.nlp');
    const response = await manager.process('zh', '介紹附近有什麼提款機，謝謝');
    console.log(response);
    //console.log(JSON.stringify(response));
})();