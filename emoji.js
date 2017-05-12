var emojiType = {
    init: function(){
        document.querySelector("#btn-replace-emoji").addEventListener("click", this.replaceEmoji.bind(this));
       
    },
    replaceEmoji : function(){
        var text = this.getElementById("emoji-type-text").value.toLowerCase();
        var options = document.getElementById("emoji-leng").selectedIndex;
        
        if (options == 1) {dictionary = dictionaryeng } else { dictionary = dictionarytr }   
        
        for (var key in dictionary) {
            text = text.replace(key, "<span class='emoji " + dictionary[key]  + "'></span>");
        }

        this.getElementById("emoji-type-result").innerHTML = "<fieldset><legend>Result</legend>"+text+"</fieldset>";
    },
    getElementById: function(elementId){
        return document.getElementById(elementId);
    }
};

emojiType.init();

