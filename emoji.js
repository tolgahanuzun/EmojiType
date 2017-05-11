var dictionary = {
  'bulut':'emoji2601',
  'kardan adam':'emoji26c4',
  'at':'emoji1f434',
  'ağaç':'emoji1f332',
  'limon':'emoji1f34b',
  'şemsiye':'emoji1f302',
  'ay':'emoji1f31',
  'saat':'emoji231a',
  'lale':'emoji1f337',
  'gül':'emoji1f339',
  'mantar':'emoji1f344',
  'fındık':'emoji1f330',
  'kiraz':'emoji1f352',
  'elma':'emoji1f34e',
  'çilek':'emoji1f353',
  'karpuz':'emoji1f349',
  'göz':'emoji1f440',
  'kulak':'emoji1f442',
  'burun':'emoji1f443',
  'gelin':'emoji1f470',
  'yılan':'emoji1f40d',
  'arı':'emoji1f41d',
  'ev':'emoji1f3e0',
  'kep':'emoji1f393',
  'telefon':'emoji1f4f1',
  'top':'emoji26bd',
  'araba':'emoji1f697',
  'et':'emoji1f357',
  'bira':'emoji1f37a',
  'artı':'emoji2795'
};

var emojiType = {
    init: function(){
        document.querySelector("#btn-replace-emoji").addEventListener("click", this.replaceEmoji.bind(this));
    },
    replaceEmoji : function(){
        var text = this.getElementById("emoji-type-text").value;
        
        for (var key in dictionary) {
            text = text.replace(key, "<span class='emoji " + dictionary[key] + "' title='" + key + "'></span>");
        }

        this.getElementById("emoji-type-result").innerHTML = text;
    },
    getElementById: function(elementId){
        return document.getElementById(elementId);
    }
};

emojiType.init();
