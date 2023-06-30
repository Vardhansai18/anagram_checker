const btn_doc = document.querySelector( ".btn")


function Palidrome_check()
{
    let word1 = document.getElementById("input-text1").value;
    let word2 = document.getElementById("input-text2").value;
    let res_doc = document.querySelector( ".result" );

    let sortedStr1 = word1.split("").sort().join("");
    let sortedStr2 = word2.split("").sort().join("");
    if( sortedStr1 === sortedStr2 )
    {
        res_doc.innerHTML = "Anagram";
    }
    else{
        res_doc.innerHTML = "Not Anagram";
    }
}

btn_doc.addEventListener("click",Palidrome_check)