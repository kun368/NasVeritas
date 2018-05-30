'use strict';


class Topic {

  from = '';
  time = '';
  txHash = '';
  title = '';
  content = '';

  constructor(text) {
    if (!text) {
      return;
    }
    const o = JSON.parse(text);
    this.from = o.from;
    this.time = o.time;
    this.txHash = o.txHash;
    this.title = o.title;
    this.content = o.content;
  }

  toString() {
    return JSON.stringify(this);
  }
}

class Feed {

  from = '';
  time = '';
  txHash = '';
  topicHash = '';
  attitude = '';

  constructor(text) {
    if (!text) {
      return;
    }
    const o = JSON.parse(text);
    this.from = o.from;
    this.time = o.time;
    this.txHash = o.txHash;
    this.topicHash = o.topicHash;
    this.attitude = o.attitude;
  }

  toString() {
    return JSON.stringify(this);
  }
}


const NasVeritas = function () {
  LocalContractStorage.defineMapProperty(this, 'topicMap', {
    parse: function (text) {
      return new Topic(text);
    },
    stringify: function (o) {
      return o.toString();
    }
  });
  LocalContractStorage.defineMapProperty(this, 'topicList');
  LocalContractStorage.defineMapProperty(this, 'userOwnTopics');
  LocalContractStorage.defineMapProperty(this, 'topicFeeds');
  LocalContractStorage.defineMapProperty(this, 'userOwnFeeds');
};

NasVeritas.prototype = {
  init: function () {
  },

  _push: function (collectionName, key, value) {
    let item = this[collectionName].get(key);
    if (!item) {
      item = [];
    }
    item.push(value);
    this[collectionName].put(key, item);
  },

  _get: function (collectionName, key) {
    let item = this[collectionName].get(key);
    if (!item) {
      item = [];
    }
    return item;
  },

  postTopic: function (title, content) {
    const item = new Topic();
    item.from = Blockchain.transaction.from;
    item.txHash = Blockchain.transaction.hash;
    item.time = Blockchain.transaction.timestamp * 1000;
    item.title = title;
    item.content = content;
    this.topicMap.put(item.txHash, item);
    this._push("topicList", "arr", item);
    this._push("userOwnTopics", item.from, item);
    return item;
  },

  postFeed: function(topicHash, attitude) {
    const item = new Feed();
    item.from = Blockchain.transaction.from;
    item.txHash = Blockchain.transaction.hash;
    item.time = Blockchain.transaction.timestamp * 1000;
    item.topicHash = topicHash;
    item.attitude = attitude;
    this._push("topicFeeds", item.topicHash, item);
    this._push("userOwnFeeds", item.from, item);
    return item;
  },

  queryAllTopics: function () {
    return this._get("topicList", "arr");
  },

  queryUserTopics: function (from) {
    return this._get("userOwnTopics", from);
  },

  queryOneTopic: function (topicHash) {
    return {
      topic: this.topicMap.get(topicHash),
      feeds: this.queryTopicFeed(topicHash),
    }
  },

  queryTopicFeed: function (topicHash) {
    return this._get("topicFeeds", topicHash);
  },

  queryUserFeeds: function (from) {
    return this._get("userOwnFeeds", from);
  },

};
module.exports = NasVeritas;
