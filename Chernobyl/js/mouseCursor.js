var cursor = document.querySelector('#cursor');

var container = document.querySelector('#container');

    
    // Mouse Move
    function onMouseMove(e){
        cursor.style.display = 'block';
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
        cursor.style.transition = '0.15s ease';
    }

    // Mouse Enter
    function onMouseEnter(e){
        cursor.style.width = "80px";
        cursor.style.height = "80px";
        cursor.style.backgroundColor = "#000";
        // cursorBg.style.mixBlendMode = "difference";
        // cursorBg.style.zIndex = "-1";

        // if(e.currentTarget == logo){
            
        // }
        
    }

    // Mouse Leave
    function onMouseLeave(e){
        cursor.style.width = "10px";
        cursor.style.height = "10px";
        cursor.style.mixBlendMode = "none";
        cursor.style.zIndex = "999";
    }


    window.addEventListener('mousemove', onMouseMove);
    // cursorBg.addEventListener('mouseenter', onMouseEnter);
    // cursorBg.addEventListener('mouseleave', onMouseLeave);
    
    