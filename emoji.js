var dictionary = {};

dictionary['bulut'] = '<span class="emoji emoji2601" title="bulut"></span>'
dictionary['kardan adam'] = '<span class="emoji emoji26c4" title="kardan adam"></span>'
dictionary['at'] = '<span class="emoji emoji1f434" title="at"></span>'
dictionary['ağaç'] = '<span class="emoji emoji1f332" title="ağaç"></span>'
dictionary['limon'] = '<span class="emoji emoji1f34b" title="limon"></span>'
dictionary['şemsiye'] = '<span class="emoji emoji1f302" title="şemsiye"></span>'
dictionary['ay'] = '<span class="emoji emoji1f315" title="ay"></span>'
dictionary['saat'] = '<span class="emoji emoji231a" title="saat"></span>'
dictionary['lale'] = '<span class="emoji emoji1f337" title="lale"></span>'
dictionary['gül'] = '<span class="emoji emoji1f339" title="gül"></span>'
dictionary['mantar'] = '<span class="emoji emoji1f344" title="mantar"></span>'
dictionary['fındık'] = '<span class="emoji emoji1f330" title="fındık"></span>'
dictionary['kiraz'] = '<span class="emoji emoji1f352" title="kiraz"></span>'
dictionary['elma'] = '<span class="emoji emoji1f34e" title="elma"></span>'
dictionary['çilek'] = '<span class="emoji emoji1f353" title="çilek"></span>'
dictionary['karpuz'] = '<span class="emoji emoji1f349" title="karpuz"></span>'
dictionary['göz'] = '<span class="emoji emoji1f440" title="göz"></span>'
dictionary['kulak'] = '<span class="emoji emoji1f442" title="kulak"></span>'
dictionary['burun'] = '<span class="emoji emoji1f443" title="burun"></span>'
dictionary['gelin'] = '<span class="emoji emoji1f470" title="gelin"></span>'
dictionary['yılan'] = '<span class="emoji emoji1f40d" title="yılan"></span>'
dictionary['arı'] = '<span class="emoji emoji1f41d" title="arı"></span>'
dictionary['ev'] = '<span class="emoji emoji1f3e0" title="ev"></span>'
dictionary['kep'] = '<span class="emoji emoji1f393" title="kep"></span>'
dictionary['telefon'] = '<span class="emoji emoji1f4f1" title="telefon"></span>'
dictionary['top'] = '<span class="emoji emoji26bd" title="top"></span>'
dictionary['araba'] = '<span class="emoji emoji1f697" title="araba"></span>'
dictionary['et'] = '<span class="emoji emoji1f357" title="et"></span>'
dictionary['bira'] = '<span class="emoji emoji1f37a" title="bira"></span>'
dictionary['artı'] = '<span class="emoji emoji2795" title="artı"></span>'


function change() {
var x = document.getElementById("changetext").value;

var value = ''
for(var key in dictionary) {
   x = x.split(key).join(dictionary[key])
}
document.getElementById("return").innerHTML = x;
}