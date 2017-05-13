var emojiType = {
    init: function(){
        document.querySelector("#btn-replace-emoji").addEventListener("click", this.replaceEmoji.bind(this));
    },
    replaceEmoji : function(){
        var text = this.getElementById("emoji-type-text").value.toLowerCase();
        var options = document.getElementById("emoji-lang").selectedIndex;
        var dictionary = {};

        switch(options) {
            case 0:
                dictionary = dictionaryTr;
                break;
            case 1:
                dictionary = dictionaryEng;
                break;
            case 2:
                dictionary = dictionaryFr;
                break;
        }

        for (var key in dictionary) {
            text = text.replace(key, "<span class='emoji " + dictionary[key]  + "'></span>");
        }

        this.getElementById("emoji-type-result").innerHTML = "<fieldset><legend>Result</legend>" + text + "</fieldset>";
    },
    getElementById: function(elementId){
        return document.getElementById(elementId);
    }
};

emojiType.init();
