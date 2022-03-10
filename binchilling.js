var para={
    graph:['早上好 #P',
'现在我有冰淇淋',
'我很喜欢冰淇淋',
'但是',
'#S',
'比冰淇淋',
'#s',
'#S',
'我最喜欢',
'所以…现在是音乐时间',
'准备 1 2 3',
'#T以后',
'#S',
'#S',
'#S',
'不要忘记',
'不要错过',
'记得去#L看#S',
'因为非常好#E',
'#V非常好',
'差不多一样冰淇淋',
'再见']}


function binchilling(P,S,s,T,Stype,V,Place ) {
    var answer = ""
    var sentence=para['graph']
    var i
    for (i=0; i<sentence.length; i++){
        answer +=sentence[i]
        answer += "<br><br>"
    }
    answer = answer.replace(/#P/g, P)
    answer = answer.replace(/#S/g, S)
    answer = answer.replace(/#s/g, s)
    answer = answer.replace(/#T/g, T)
    answer = answer.replace(/#E/g, Stype)
    answer = answer.replace(/#V/g, V)
    answer = answer.replace(/#L/g, Place)
    return answer
}

function generate() {
    var text = document.getElementById("text")
    var P = document.getElementById("who").value
    var S = document.getElementById("what").value
    var s = document.getElementById("what").value.substr(0,(S.length-1))
    var T = document.getElementById("when").value
    var Place = document.getElementById("where").value
    var Stype = document.getElementById("how").value
    var V = document.getElementById("howhow").value

    if (P.length === 0) { P='中国'}
    if (S.length === 0) { S='速度与激情9'}
    if (s.length === 0) { s='速度与激情'}
    if (T.length === 0) { T='两个礼拜'}
    if (Place.length === 0) { Place='电影院'}
    if (Stype.length === 0) { Stype='电影'}
    if (V.length === 0) { V='动作'} 
while (text.hasChildNodes()) {
            text.removeChild(text.firstChild)
        }
    var t = document.createElement("p")
    t.innerHTML = binchilling(P,S,s,T,Stype,V,Place )
    document.getElementById("text").appendChild(t)
    
}