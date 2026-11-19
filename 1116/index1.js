const avatar = document.getElementById("avatar");
const avatarChoice = document.getElementById("avatarChoice");

const timeChoice = document.getElementById("timeChoice");
const sky = document.getElementById("sky");
const sun = document.getElementById("sun");


const weatherChoice = document.getElementById("weatherChoice");

const fieldChoice = document.getElementById("fieldChoice");
const ground = document.getElementById("ground");



function changeAvatar(){
    if(avatarChoice.value === "../assets/wolf.glb"){
        avatar.setAttribute("gltf-model",avatarChoice.value);
        avatar.setAttribute("scale","0.5 0.5 0.5");
        avatar.setAttribute(
            "avatar-motion",{
                walk:"Gallop",
                idle:"Idle"
            }
        )
    }

    if (avatarChoice.value === "../assets/robot.glb"){
        avatar.setAttribute("gltf-model",avatarChoice.value);
        avatar.setAttribute("scale","0.3 0.3 0.3");
        avatar.setAttribute(
            "avatar-motion",{
                walk:"Robot_Walking",
                idel:"Robot_Wave"
            }
        )
    }


    if (avatarChoice.value === "../assets/Horse.glb"){
        avatar.setAttribute("gltf-model",avatarChoice.value);
        avatar.setAttribute("scale","0.3 0.3 0.3");
        avatar.setAttribute(
            "avatar-motion",{
                walk:"Gallop",
                idel:"Horse_Wave"
            }
        )
    }



}

avatarChoice.addEventListener("change",changeAvatar);


function changeTime() {
    if (timeChoice.value === "morning") {
        sky.setAttribute("color", "#FFBFA3");
        sun.setAttribute("intensity", 0.7);
        sun.setAttribute("color", "#FFD6A5");
    }

    else if (timeChoice.value === "noon") {
        sky.setAttribute("color", "#87CEEB");
        sun.setAttribute("intensity", 1);
        sun.setAttribute("color", "#FFFFFF");
    }

    else if (timeChoice.value === "evening") {
        sky.setAttribute("color", "#FF7043");
        sun.setAttribute("intensity", 0.5);
        sun.setAttribute("color", "#FF9933");
    }

    else if (timeChoice.value === "night") {
        sky.setAttribute("color", "#10152F");
        sun.setAttribute("intensity", 0.15);
        sun.setAttribute("color", "#8090FF");
    }
}

timeChoice.addEventListener("change", changeTime);



function changeField() {

    if (fieldChoice.value === "grass") {
        ground.setAttribute("color", "darkseagreen");
        sky.setAttribute("color", "#87CEEB");
    }

    else if (fieldChoice.value === "snow") {
        ground.setAttribute("color", "white");
        sky.setAttribute("color", "#DDEEFF");
    }

    else if (fieldChoice.value === "desert") {
        ground.setAttribute("color", "#D2A05A");
        sky.setAttribute("color", "#FFD28A");
    }

    else if (fieldChoice.value === "volcano") {
        ground.setAttribute("color", "#393333");
        sky.setAttribute("color", "#686060");
    }
}

fieldChoice.addEventListener("change", changeField);