function Jan_3(hidarite){
    //グーが0
    //チョキが1
    //パーが2
    let migite = Math.floor(Math.random()*3);
    let img = document.getElementById("kekka");
    let katimake = document.getElementById("resule");

    if(hidarite === 0){
        if(migite === 0){
            img.src = "./gallery/Jan_gu.jpg";
            katimake.innerHTML = "あいこ";
        }else if(migite === 1){
            img.src = "./gallery/Jan_tyo.jpg";
            katimake.innerHTML = "勝ち";
        }else if(migite === 2){
            img.src = "./gallery/Jan_par.jpg";
            katimake.innerHTML = "負け";
        }
    }else if(hidarite === 1){
        if(migite === 0){
            img.src = "./gallery/Jan_gu.jpg";
            katimake.innerHTML = "負け";
        }else if(migite === 1){
            img.src = "./gallery/Jan_tyo.jpg";
            katimake.innerHTML = "あいこ";
        }else if(migite === 2){
            img.src = "./gallery/Jan_par.jpg";
            katimake.innerHTML = "勝ち";
        }
    }else if(hidarite === 2){
        if(migite === 0){
            img.src = "./gallery/Jan_gu.jpg";
            katimake.innerHTML = "勝ち";
        }else if(migite === 1){
            img.src = "./gallery/Jan_tyo.jpg";
            katimake.innerHTML = "負け";
        }else if(migite === 2){
            img.src = "./gallery/Jan_par.jpg";
            katimake.innerHTML = "あいこ";
        }
    }

}