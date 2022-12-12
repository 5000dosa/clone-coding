(function(undefined) {

var imageCount=0;
function loadImage(url,angles,steps,offsetX){
    imageCount++;
    var i=new Image();
    i.onload=function(){
        imageCount--;
        i.offsetX=offsetX?((i.height/angles)>>>2):0;
    }
    i.src=url;
    if(typeof angles!="undefinde" && typeof steps!="undefined"){
        i.angles=angles;
        i.steps=steps;
    }
    return i;
}
function load(img,callback){
    if(img,comlete)callback();
    else img.addEventListener('load',callback,false);
}

var level = {
    floor:{
        prefix:"dttool/output/1/",
        map:[
            [   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,],
            [   0,   0, 756, 756, 756, 756, 756, 756,   0,   0,   0,],
            [   0, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756,],
            [   0, 756, 756, 756, 756, 756, 756, 756,1140, 756, 756,],
            [   0, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756,],
            [   0, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756,],
            [   0, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756,],
            [   0, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756,],
            [   0, 756, 756,1140, 756, 756, 756, 756, 756, 756, 756,],
            [   0, 756, 756, 660, 660, 372, 756, 756, 756, 756, 756,],
            [   0, 756, 756, 756, 756, 756, 756, 756, 756, 756, 756,],
            [   0, 756, 756,1908, 756, 756, 756, 756, 756, 756, 756,],
            [   0,   0, 756, 756, 756, 756, 756, 756,   0,   0,   0,],
            [   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,],
            [   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,],
        ],
        header:{
            372:false,
            660:false,
            756:false,
            1140:false,
            1908:false,
        }
    },
    wall:{
        prefix:"dttol/output/0/",
        map:[
            [   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,],
            [   0,   0, 948, 372, 372, 372, 948, 372,2100,   0,   0,],
            [   0, 948,1140,   0,   0,   0, 468,   0,2004, 372, 948,],
            [   0, 468,   0,   0,   0,   0,1524,   0,   0,   0, 468,],
            [   0, 468,   0,   0,   0,   0,1428,   0,   0,   0, 468,],
            [   0, 468,   0,   0,   0,   0, 468,   0,   0,   0, 468,],
            [   0, 468,   0,   0,   0,   0, 468,   0,   0,   0,1524,],
            [   0, 948, 372, 372, 372, 372,1140,   0,   0,   0,1428,],
            [   0, 468,   0,   0,   0,   0,   0,   0,   0,   0, 468,],
            [   0, 468,   0,   0,   0,   0,   0,   0,   0,   0, 468,],
            [   0, 468,   0,   0,   0,   0,   0,   0,   0,   0, 468,],
            [   0, 468,   0,   0,   0,   0,   0,   0,   0,   0, 468,],
            [   0,2004,2100,   0,   0,   0,   0,   0, 948, 372,2004,],
            [   0,   0,2004, 372, 372, 372, 372, 372,1140,   0,   0,],
            [   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,],
        ],
        header:{
            276:{orientation:8, main_index:5, sub_index:2, direction:1, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,]},
            372:{orientation:2, main_index:5, sub_index:0, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,]},
            468:{orientation:1, main_index:5, sub_index:0, direction:1, walk:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,]},
            564:{orientation:2, main_index:5, sub_index:0, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,]},
            660:{orientation:2, main_index:5, sub_index:0, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,]},
            756:{orientation:1, main_index:5, sub_index:0, direction:1, walk:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,]},
            852:{orientation:1, main_index:5, sub_index:0, direction:1, walk:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,]},
            948:{orientation:3, main_index:5, sub_index:0, direction:3, walk:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,]},
            1044:{orientation:4, main_index:5, sub_index:0, direction:3, walk:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,]},
            1140:{orientation:7, main_index:5, sub_index:0, direction:4, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            1236:{orientation:9, main_index:5, sub_index:0, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,]},
            1332:{orientation:9, main_index:5, sub_index:1, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,]},
            1428:{orientation:8, main_index:5, sub_index:0, direction:1, walk:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]},
            1524:{orientation:8, main_index:5, sub_index:1, direction:1, walk:[0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,]},
            1620:{orientation:9, main_index:5, sub_index:0, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,]},
            1716:{orientation:9, main_index:5, sub_index:1, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,]},
            1812:{orientation:8, main_index:5, sub_index:1, direction:1, walk:[0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,]},
            1908:{orientation:8, main_index:5, sub_index:0, direction:1, walk:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]},
            2004:{orientation:6, main_index:5, sub_index:0, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,]},
            2100:{orientation:5, main_index:5, sub_index:0, direction:1, walk:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            2196:{orientation:6, main_index:5, sub_index:0, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,]},
            2292:{orientation:5, main_index:5, sub_index:0, direction:1, walk:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            2388:{orientation:2, main_index:5, sub_index:0, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,]},
            2484:{orientation:1, main_index:5, sub_index:0, direction:1, walk:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,]},
            2580:{orientation:3, main_index:5, sub_index:0, direction:3, walk:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,]},
            2676:{orientation:4, main_index:5, sub_index:0, direction:3, walk:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,]},
            2772:{orientation:12, main_index:5, sub_index:0, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
        }
    },
    object:{
        prefix:"dttool/output/2/",
        map:[
            [   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,],
            [   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,],
            [   0,   0,   0,   0,5844,   0,   0,3828,   0,   0,   0,],
            [   0,   0,4212,4116,   0,   0,   0,3732,   0,   0,   0,],
            [   0,   0,   0,4404,1524,   0,   0,   0,   0,   0,   0,],
            [   0,   0,   0,4308,   0,   0,   0,   0,   0,   0,   0,],
            [   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,],
            [   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,],
            [   0,   0,5652, 372, 276,   0,   0,   0,   0,   0,   0,],
            [   0,   0,   0,   0,   0,   0,5748,   0,   0,   0,   0,],
            [   0,   0,   0,2676,2580,2484,   0,   0,   0,   0,   0,],
            [   0,   0,2868,   0,   0,   0,   0,   0,   0,   0,   0,],
            [   0,   0,   0,3444,   0,   0,   0,   0,   0,   0,   0,],
            [   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,],
            [   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,],
        ],
        header:{
            276:{orientation:2, main_index:9, sub_index:12, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,]},
            372:{orientation:2, main_index:9, sub_index:11, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,]},
            468:{orientation:12, main_index:50, sub_index:0, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,]},
            564:{orientation:12, main_index:9, sub_index:33, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,]},
            660:{orientation:1, main_index:9, sub_index:33, direction:1, walk:[1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,]},
            756:{orientation:7, main_index:9, sub_index:33, direction:4, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,]},
            852:{orientation:12, main_index:9, sub_index:32, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,]},
            948:{orientation:12, main_index:9, sub_index:31, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,]},
            1044:{orientation:1, main_index:9, sub_index:10, direction:1, walk:[0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            1140:{orientation:1, main_index:9, sub_index:9, direction:1, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            1236:{orientation:1, main_index:9, sub_index:8, direction:1, walk:[1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            1332:{orientation:12, main_index:9, sub_index:11, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,]},
            1428:{orientation:12, main_index:9, sub_index:10, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,]},
            1524:{orientation:12, main_index:9, sub_index:9, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]},
            1620:{orientation:12, main_index:9, sub_index:8, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]},
            1716:{orientation:12, main_index:9, sub_index:7, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,]},
            1812:{orientation:12, main_index:9, sub_index:6, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,]},
            1908:{orientation:12, main_index:9, sub_index:5, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,]},
            2004:{orientation:12, main_index:9, sub_index:4, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,]},
            2100:{orientation:12, main_index:9, sub_index:3, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,]},
            2196:{orientation:12, main_index:9, sub_index:2, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,]},
            2292:{orientation:12, main_index:9, sub_index:1, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,]},
            2388:{orientation:12, main_index:9, sub_index:0, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,]},
            2484:{orientation:2, main_index:9, sub_index:10, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]},
            2580:{orientation:2, main_index:9, sub_index:9, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,]},
            2676:{orientation:2, main_index:9, sub_index:8, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,]},
            2772:{orientation:2, main_index:9, sub_index:7, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,]},
            2868:{orientation:2, main_index:9, sub_index:6, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,]},
            2964:{orientation:1, main_index:9, sub_index:7, direction:1, walk:[0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,]},
            3060:{orientation:1, main_index:9, sub_index:6, direction:1, walk:[0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            3156:{orientation:2, main_index:9, sub_index:5, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,]},
            3252:{orientation:2, main_index:9, sub_index:4, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,]},
            3348:{orientation:1, main_index:9, sub_index:5, direction:1, walk:[0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            3444:{orientation:1, main_index:9, sub_index:4, direction:1, walk:[0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            3540:{orientation:12, main_index:9, sub_index:30, direction:3, walk:[0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,]},
            3636:{orientation:12, main_index:9, sub_index:29, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,]},
            3732:{orientation:1, main_index:9, sub_index:3, direction:1, walk:[0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            3828:{orientation:1, main_index:9, sub_index:2, direction:1, walk:[1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            3924:{orientation:2, main_index:9, sub_index:3, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,]},
            4020:{orientation:2, main_index:9, sub_index:2, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,]},
            4116:{orientation:2, main_index:9, sub_index:1, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,]},
            4212:{orientation:2, main_index:9, sub_index:0, direction:2, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,]},
            4308:{orientation:1, main_index:9, sub_index:1, direction:1, walk:[0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            4404:{orientation:1, main_index:9, sub_index:0, direction:1, walk:[1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            4500:{orientation:12, main_index:9, sub_index:28, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,]},
            4596:{orientation:12, main_index:9, sub_index:27, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,]},
            4692:{orientation:12, main_index:9, sub_index:24, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,]},
            4788:{orientation:12, main_index:9, sub_index:23, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,]},
            4884:{orientation:12, main_index:9, sub_index:22, direction:3, walk:[0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,]},
            4980:{orientation:12, main_index:9, sub_index:21, direction:3, walk:[0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,]},
            5076:{orientation:12, main_index:9, sub_index:20, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,]},
            5172:{orientation:12, main_index:9, sub_index:17, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            5268:{orientation:12, main_index:9, sub_index:18, direction:3, walk:[0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            5364:{orientation:12, main_index:9, sub_index:19, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,]},
            5460:{orientation:12, main_index:9, sub_index:16, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,]},
            5556:{orientation:12, main_index:9, sub_index:15, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,]},
            5652:{orientation:12, main_index:9, sub_index:13, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,]},
            5748:{orientation:12, main_index:9, sub_index:12, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,]},
            5844:{orientation:12, main_index:9, sub_index:14, direction:3, walk:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,]},
        }
    }
};
for(var l in level){
    levelp[l].tiles={};
    for(i in level[l].header) if(! level[l].tiles[i]) level[l].tiles[i]=loadImage(level[l].prefix+i+".png");
}

var floor=document.getElementById("floor").getContext("2d");
floor.w=floor.canvas.width;
floor.h=floor.canvas.height;
var tw=160, th=tw/2, s=tw*0.705, a=Mata.PI/4, visible=7, asin=acos=Mate.sin(a);

var barrelSprite=loadImage("sprite/barrel64.png");
var coinSprite=loadImage("sprite/coins10.png");
var potionSprite=loadImage("sprite/potions.png");

function isWayWall(x,y){
    var block_x = Math.floor(x/s),
        block_y = Math.floor(y/s),
        ix = Math.floor((x&s)/(x/5)),
        iy = 4-Math.floor((y&s)/(s/5)),
        w_inx = iy*5+ix, h, idx;
    for(var l in level){
        if(level[l].map[block_y] && (idx=level[l].map[block_y][block_x]) && (h=level[l].header[idx])){
            if(h.walk[w_inx]==1) return false;
            else if(h.orientation==3){
                for(var idx in level.wall.header){
                    var tb=level.wall.header[idx];
                    if(tb.main_index==h.main_index && tb.sub_index==h.sub_index && tb.orientation==4 && h.walk[w_inx]==1){
                        return false;
                    }
                }
            }
        }
    }
    return true;
}



function getFloorTile(x,y) {
    if(!level.floor.map[y]) return null;
    if(!level.floor.map[y][x]) return null;
    f = level.floor.map[y][x];
    return level.floor.tiles[f];
}

var monsterMap={
    SK: {
        A1:loadImage("monsters/SK/A1/map.png",8,16,true),
        NU:loadImage("monsters/SK/NU/map.png",8,8,true),
        WL:loadImage("monsters/SK/WL/map.png",8,8,true),
        DD:loadImage("monsters/SK/DD/map.png",8,1),
        attack0ffset:10,
    },
    FS: {
        A1:loadImage("monsters/SK/A1/map.png",8,17,true),
        NU:loadImage("monsters/SK/NU/map.png",8,12,true),
        WL:loadImage("monsters/SK/WL/map.png",8,14,true),
        DD:loadImage("monsters/SK/DD/map.png",8,1),
    },
    SI: {
        A1:loadImage("monsters/SK/A1/map.png",8,16,true),
        NU:loadImage("monsters/SK/NU/map.png",8,8,true),
        WL:loadImage("monsters/SK/WL/map.png",8,9,true),
        DD:loadImage("monsters/SK/DD/map.png",8,1),
    },
    BA: {
        A1:loadImage("monsters/SK/A1/map.png",16,9,true),
        NU:loadImage("monsters/SK/NU/map.png",16,8,true),
        WL:loadImage("monsters/SK/WL/map.png",16,8,true),
    }
};

})
