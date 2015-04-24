
$( document ).ready(function() {
  // Handler for .ready() called.

    var pathArray = [];
    pathArray["s3r3"] = ["s2r3","s2r2","s3r2"];
    pathArray["s2r3"] = ["s3r3","s2r2","s3r2"];
    pathArray["s2r2"] = ["s2r3","s3r3","s3r2"];
    pathArray["s3r2"] = ["s2r3","s3r3","s2r2"];

    pathArray["s4r3"] =["s4r2","s5r2","s5r3","s6r3"];
    pathArray["s4r2"] =["s4r3","s5r2","s5r3","s6r3"];
    pathArray["s5r2"] =["s4r3","s4r2","s5r3","s6r3"];
    pathArray["s5r3"] =["s4r3","s4r2","s5r2","s6r3"];
    pathArray["s6r3"] =["s4r3","s4r2","s5r2","s5r3"]; 

    pathArray["s4r4"] =["s5r4","s5r5","s6r5"];
    pathArray["s5r4"] =["s5r5","s6r5","s4r4"];
    pathArray["s5r5"] =["s5r4","s6r5","s4r4"];
    pathArray["s6r5"] =["s5r4","s5r5","s4r4"];

    pathArray["s3r4"] =["s2r4","s2r5"];
    pathArray["s2r4"] =["s2r5","s3r4"];
    pathArray["s2r5"] =["s2r4","s3r4"];

    $(".block a").css("display", "none");
    $("#s3r3 a").css("display", "block");
    $("#s4r3 a").css("display", "block");
    $("#s3r4 a").css("display", "block");
    $("#s4r4 a").css("display", "block");

    $(".block").click(function() {
        onToggleOff($(this));
        if($(this).hasClass( "selected" )){
            check($(this));
        } else {
            show($(this));
        }
        
    });
    /*
    $(".block").hover(function() {
        onToggleOff($(this));
        if($(this).hasClass( "selected" )){
            check($(this));
        } else {
            show($(this));
        }
    });
    */

    function show(item){
        //console.log("show " + item.attr("id"));
        if(item.attr("id") == "s3r3"){
            showPathA(true);
        }
        if(item.attr("id") == "s4r3"){
            showPathB(true);
        }

        if(item.attr("id") == "s4r4"){
            showPathC(true);
        }

        if(item.attr("id") == "s3r4"){
            showPathD(true);
        }
        item.addClass("selected");
    }

    function check(item){
        //console.log("check " + item.attr("id"));
        // deselector
        if(item.attr("id") == "s3r3"){
            showPathA(false);
        }

        if(item.attr("id") == "s4r3"){
            showPathB(false);
        }

        if(item.attr("id") == "s4r4"){
            showPathC(false);
        }

        if(item.attr("id") == "s3r4"){
            showPathD(false);
        }
        item.removeClass("selected");
    }

    function decorateBlock(blockName, bgImage){
        $(blockName).css("background-image", "url(" + bgImage + ")");
        $(blockName + ' a').css("display", "block");
    }

    function cleanBlock(blockName){
        $(blockName).css("background-image", "");
        $(blockName + ' a').css("display", "none");
    }
    
    function showPathA (b){
        if(b){
            //turns them on
            decorateBlock("#s2r2", "images/MenuWithGrid-09.png");
            decorateBlock("#s3r3", "images/MenuWithGrid-17a.png");
            decorateBlock("#s2r3", "images/MenuWithGrid-24.png");
            decorateBlock("#s3r2", "images/MenuWithGrid-10acopy.png");
            decorateBlock("#s1r3", "images/MenuWithGrid-15.png");
            decorateBlock("#s2r1", "images/MenuWithGrid-02.png");
            decorateBlock("#s4r2", "images/MALE11.png");
            currentPath = "a";
            $("#s4r2 a").css("display","none");


        } else {
            // turns them off
            cleanBlock("#s2r2");
            decorateBlock("#s3r3", "images/MenuWithGrid-17.png");
            cleanBlock("#s2r3");
            cleanBlock("#s3r2");
            cleanBlock("#s1r3");
            cleanBlock("#s2r1");
            cleanBlock("#s4r2");
            currentPath = null;

        }
    }
    
    function showPathB (b){
        if(b){
            decorateBlock("#s4r3", "images/MenuWithGrid-18a.png");
            decorateBlock("#s5r3", "images/MenuWithGrid-19a.png");
            decorateBlock("#s6r3", "images/MenuWithGrid-20.png");
            decorateBlock("#s4r2", "images/MenuWithGrid4-11copy.png");
            decorateBlock("#s5r2", "images/MenuWithGrid-12.png");
            decorateBlock("#s7r3", "images/MenuWithGrid-21.png");
            decorateBlock("#s6r2", "images/MenuWithGrid-13.png");
            decorateBlock("#s4r1", "images/MenuWithGrid-04.png");
            decorateBlock("#s5r4", "images/MALE26.png");
            currentPath = "a";
            $("#s5r4 a").css("display","none");

        } else {
            decorateBlock("#s4r3", "images/MenuWithGrid-18.png");
            cleanBlock("#s5r3");
            cleanBlock("#s6r3");
            cleanBlock("#s4r2");
            cleanBlock("#s5r2");
            cleanBlock("#s7r3");
            cleanBlock("#s6r2");
            cleanBlock("#s4r1");
            cleanBlock("#s5r4");
            currentPath = null;

        }
    }

    function showPathC (b){
        if(b){
            decorateBlock("#s4r4", "images/MenuWithGrid-25a.png");
            decorateBlock("#s5r5", "images/MenuWithGrid-33.png");
            decorateBlock("#s5r4", "images/MenuWithGrid3-26acopy.png");
            decorateBlock("#s6r5", "images/MenuWithGrid-34.png");
            decorateBlock("#s6r4", "images/MenuWithGrid-27copy.png");
            decorateBlock("#s7r5", "images/MenuWithGrid-35.png");
            decorateBlock("#s5r6", "images/MenuWithGrid-40.png");
            
            
        } else {

            decorateBlock("#s4r4", "images/MenuWithGrid-25.png");
            cleanBlock("#s5r5");
            cleanBlock("#s5r4");
            cleanBlock("#s6r5");
            cleanBlock("#s6r4");
            cleanBlock("#s7r5");
            cleanBlock("#s5r6");
            
        }
    }
    
    function showPathD (b){
        if(b){
            decorateBlock("#s3r4", "images/MenuWithGrid-24.png");
            decorateBlock("#s1r5", "images/MenuWithGrid-29.png");
            decorateBlock("#s2r4", "images/MenuWithGrid-23a.png");
            decorateBlock("#s2r3", "images/MWG10.png");
            decorateBlock("#s2r5", "images/MenuWithGrid-30.png");
            decorateBlock("#s3r5", "images/MenuWithGrid-31a.png");
            currentPath = "a";
            $("#s2r3 a").css("display","none");
           
            

        }else {
            decorateBlock("#s3r4", "images/MenuWithGrid-24.png");
            cleanBlock("#s1r5");
            cleanBlock("#s2r4");
            cleanBlock("#s2r3");
            cleanBlock("#s2r5");
            cleanBlock("#s3r5");
            currentPath = null;
           
            
        }
    }
    
    function onToggleOff(onHoverDiv){
        // any other block that has a selected class other than selectedDiv
        var selectedDiv = $(".block.selected");
        var selectedDivID = selectedDiv.attr('id');
        var onHoverDivID = onHoverDiv.attr("id");
        var hideAll = false;

        // if the selected item is not the one being evaluated
        if(selectedDivID != onHoverDivID){
            hideAll = true;
        }
     
        // check to see if the one being evaluted is a part of the path
        // TODO: 
        console.log("checking for " + selectedDivID);  // s2r3
        var arrayToCheck = pathArray[onHoverDivID]; 

        if (jQuery.inArray(("s2r3"),arrayToCheck) !== -1) {
            console.log(onHoverDivID + " here");
            showPathA(true);
        }
        /*var arrayToCheck = pathBArray[selectedDiv.attr("id")];
        console.log(arrayToCheck);
        var hideAll = true;
        if (jQuery.inArray(("s4r2"),arrayToCheck)&&(("s5r2"),arrayToCheck)&&(("s5r3"),arrayToCheck)&&(("s6r3"),arrayToCheck) !== -1) {
            console.log("here");
            hideAll = false;
            showPathA(true);
        }else{
            console.log("there");
            hideAll = true;
        }
        var arrayToCheck = pathDArray[selectedDiv.attr("id")];
        console.log(arrayToCheck);
        var hideAll = true;
        if (jQuery.inArray(("s2r4"),arrayToCheck)&&(("s2r5"),arrayToCheck) !== -1) {
            console.log("here");
            hideAll = false;
            showPathA(true);
        }else{
            console.log("there");
            hideAll = true;
        }
        var arrayToCheck = pathCArray[selectedDiv.attr("id")];
        console.log(arrayToCheck);
        var hideAll = true;
        if (jQuery.inArray(("s5r4"),arrayToCheck)&&(("s5r5"),arrayToCheck)&&(("s6r5"),arrayToCheck) !== -1) {
            console.log("here");
            hideAll = false;
            showPathA(true);
        }else{
            console.log("there");
            hideAll = true;
        }
        
        */

        // TODO: if in arrayToCheck, hideAll = false
        if(currentPath === "a"){
            $("#s4r2 a").css ("display", "none");
        }
        if(currentPath === "a"){
            $("#s4r5 a").css ("display", "none");
        }
        if(currentPath === "a"){
            $("#s2r3 a").css ("display", "none");
        }

        if(hideAll){
            // ??
            showPathA(false);
            showPathB(false);
            showPathC(false);
            showPathD(false);

            $(selectedDiv).removeClass("selected");
        }
    }
});  

