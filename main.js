var max_width = screen.width;
var max_height = screen.height;

var vectors = new Array(16);



function activateMovement(icon, width, height, id) {
    var totalwidth = width;
    var totalheight = height;



    var height_aprox = 30.0;
    if (height + height_aprox > max_height) height_aprox = 50.0;


    var control = 0;
    var random = 0;
    setInterval(() => {

        if (control == 0)
            random = Math.floor(Math.random() * 11);
        control++;
        totalwidth -= 0.2;

        if (totalwidth < -400) totalwidth = max_width + 90;

        // col
        if (control > 150) {
            control = 0;
            random = 0;
        }
        if (random != 0) {
            if (random > 5) {
                totalheight -= 0.03;
            } else totalheight += 0.03;

            if (totalheight > height + height_aprox || totalheight < height - height_aprox) {
                control = 0;
                random = 0;
            }
        }
        vectors[id] = totalheight;
        if (control == 0) {
            for (var i = 0; i < vectors.length; i++) {
                var moment = vectors[i] + 15.0;
                if (vectors[id] > vectors[i] && vectors[id] < moment) {
                    control = 0;
                    random = 0;
                    break;
                }
            }
        }
        // 

        icon.style.transform = "translate(" + totalwidth + "px," + totalheight + "px)";


    }, 10);
}