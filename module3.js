let nft = []

function mintnf(name, eye_color, dress_name){
    mynft={
        "name":name,
        "eye_color":eye_color,
        "dress_name":dress_name,
    }

    nft.push(mynft);
}

function list_nft(){
    for(i=0; i<nft.length; i++){
        console.log("id: ", i+1);
        console.log("name: ", nft[i].name);
        console.log("eye-color: ", nft[i].eye_color);
        console.log("dress-name: ", nft[i].dress_name, "\n");
    }
}

function getTotalSupply(){
    console.log("Total nfts entered : ", nft.length);
}

mintnf("jitesh", "black", "coat-pant");
mintnf("jitesh1", "black1", "coat-pant1");
mintnf("jitesh2", "black2", "coat-pant2");
list_nft();
getTotalSupply();
