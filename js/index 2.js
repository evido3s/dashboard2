$(function(){
    var Height=$("body").height();
    var bheight=Height-70;
    $(".contain").css("height",bheight+"px");

    var bottomrightulHeight=$(".bottom .right .bottomright ul").height();
    $(".bottom .right .bottomright ul").css("line-height",bottomrightulHeight+'px');

    //首页；
      //=============调用：(假数据)=============
       //图表：(首页)
          var zhuX=[1,2,3,4,5,6,7]; var zhuY=[50,39,40,49,59,60,77];
          var zhu2X=['1月','2月','3月','4月','5月','6月'];var zhu2Y1=[50,39,40,49,59,60];var zhu2Y2=[20,30,20,29,59,70];
          var zheX=['0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00',"10:00",'0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00',"10:00",'0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00',"10:00",'0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00',"10:00",'0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00',"10:00",'0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00',"10:00",'0:00','1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00',"10:00",'11:00','12:00'];
          var zheY1=[10, 12, 21, 54, 260, 830, 710,710,10, 12, 21,30,9, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 1320, 1132, 601, 234, 120, 90, 20];
          var zheY2=[1,2,3,2,3,4,2,1,0,2,1,2,3,2,3,4,2,1,0,2,1,2,3,2,3,4,2,1,0,2,1,2,3,2,3,4,2,1,0,2,1,2,3,2,3,4,2,1,0,2,1,2,3,2,3,4,2,1,0,2,1,2,3,2,3,4,2,1,0,2,4,5];
          var zheY3=[1320, 1132, 601, 234, 120, 90, 20,710,10, 12, 21,10, 12, 21, 54,, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,30,9];

          zhu(zhuX,zhuY);
          zhu2(zhu2X,zhu2Y1,zhu2Y2);
          zhe('接通率(%)',zheX,zheY1);
          //折线图(lunbo+选项卡):
              // lunbo
              var num=0;
              function lunbo(){
                  var length=$(".button1 li").length;
                  num++;
                  if(num>=length){num=0;}
                  if(num==1){
                      zhe('掉话率(%)',zheX,zheY2);
                  }else if(num==2){
                      zhe('流量(G)',zheX,zheY3);
                  }else{
                      zhe('接通率(%)',zheX,zheY1);
                  }

                  $(".button1 li").removeClass('active').eq(num).addClass("active");
              }
              var t=setInterval(lunbo,5000);
              //选项卡：
              $(".button1 li").click(function(){
                  var index=$(this).index(".button1 li");
                  $(".button1 li").removeClass("active");
                  $(".button1 li").eq(index).addClass("active");
                  if(index==1){
                      zhe('掉话率(%)',zheX,zheY2);
                  }else if(index==2){
                      zhe('流量(G)',zheX,zheY3);
                  }else{
                      zhe('接通率(%)',zheX,zheY1);
                  }

              });
              //鼠标停留停止轮播：
              $("#chart3").mouseover(function(){
                  clearInterval(t);
              }).mouseout(function(){
                  t=setInterval(lunbo,5000);
              });
          // createcharts.map();
       //图表：(具体场景)
          var JTzhuXdata=['第一周','第二周','第三周','第四周','第五周','第六周','第七周']; var JTzhuYdata1=[10,20,30,50,20,70,80];var JTzhuYdata2=[10,20,30,50,20,70,80];
          var JTzhe1Ydata1=[10, 12, 21, 54, 260, 830, 710,710,10, 12, 21,30,9, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 1320, 1132, 601, 234, 120, 90, 20];
          var JTzhe1Ydata2=[10, 12, 21, 54, 260, 830, 710,10, 12, 1320, 1132, 601, 234, 120, 90, 20, 710,10, 12, 21,30,9, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,30,9];
          var JTzhe1Ydata3=[1320, 1132, 601, 234, 120, 90, 20,710,10, 12, 21,10, 12, 21, 54,, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,30,9];
          var JTzhe1Ydata4=[567, 40, 888, 234, 120, 90, 20,54, 260, 12, 21,10, 12, 21, 54,, 880, 710,10, 12, 21,21, 54, 260, 54, 260, 830, 710,54, 260, 830, 710,10, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,30,9];

          var JTzhe2Ydata1=[10, 12, 21, 54, 260, 830, 710,710,10, 12, 21,30,9, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 1320, 1132, 601, 234, 120, 90, 20];
          var JTzhe2Ydata2=[10, 12, 21, 54, 260, 830, 710,10, 12, 1320, 1132, 601, 234, 120, 90, 20, 710,10, 12, 21,30,9, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,30,9];
          var JTzhe2Ydata3=[1320, 1132, 601, 234, 120, 90, 20,710,10, 12, 21,10, 12, 21, 54,, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,30,9];
          var JTzhe2Ydata4=[ 12, 21,30, 234, 120, 90, 1132, 601, 234, 120, 90,260, 830, 710, 54,, 830, 710,10, 12, 10, 12, 21, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,30,9];

          var JTzhe3Ydata1=[10, 12, 21, 54, 260, 830, 710,710,10, 12, 21,30,9, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 1320, 1132, 601, 234, 120, 90, 20];
          var JTzhe3Ydata2=[10, 12, 21, 54, 260, 830, 710,10, 12, 1320, 1132, 601, 234, 120, 90, 20, 710,10, 12, 21,30,9, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,30,9];
          var JTzhe3Ydata3=[1320, 1132, 601, 234, 120, 90, 20,710,10, 12, 21,10, 12, 21, 54,, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,10, 12, 21, 54, 260, 830, 710,10, 12, 21,30,9];

          JTzhu(JTzhuXdata,JTzhuYdata1,JTzhuYdata2);
          JTzhe1('下载速率',zheX,JTzhe1Ydata1);
          JTzhe2('接通率(%)',zheX,JTzhe2Ydata1);
          JTzhe3('接通率(%)',zheX,JTzhe3Ydata1);


          $(".button3 li").click(function(){
                var index=$(this).index(".button3 li");
                $(".button3 li").removeClass("active");
                $(".button3 li").eq(index).addClass("active");
                if(index==1){
                    JTzhe2('掉话率(%)',zheX,JTzhe2Ydata2);
                }else if(index==2){
                    JTzhe2('话务量',zheX,JTzhe2Ydata3);
                }else if(index==3){
                    JTzhe2('流量(G)',zheX,JTzhe2Ydata4);
                }else{
                    JTzhe2('接通率(%)',zheX,JTzhe2Ydata1);
                }
          });
    //4G-KPI 折线图(lunbo+选项卡):
            // lunbo
            var num1=0;
            function lunbo1(){
                var length=$(".button4 li").length;
                num1++;
                if(num1>=length){num1=0;}
                if(num1==1){
                    JTzhe3('掉话率(%)',zheX,JTzhe3Ydata2);
                }else if(num1==2){
                    JTzhe3('PRB利用率(%)',zheX,JTzhe3Ydata3);
                }else{
                    JTzhe3('接通率(%)',zheX,JTzhe3Ydata1);
                }

                $(".button4 li").removeClass('active').eq(num1).addClass("active");
            }
            var t1=setInterval(lunbo1,5000);
            //选项卡：
            $(".button4 li").click(function(){
                var index=$(this).index(".button4 li");
                $(".button4 li").removeClass("active");
                $(".button4 li").eq(index).addClass("active");
                if(index==1){
                          JTzhe3('掉话率(%)',zheX,JTzhe3Ydata2);
                }else if(index==2){
                          JTzhe3('PRB利用率(%)',zheX,JTzhe3Ydata3);
                }else{
                          JTzhe3('接通率(%)',zheX,JTzhe3Ydata1);
                }

            });
            //鼠标停留停止轮播：
            $("#chart7").mouseover(function(){
                clearInterval(t1);
            }).mouseout(function(){
                t1=setInterval(lunbo1,5000);
            });
    //4G-KQI 折线图(lunbo+选项卡):
    // lunbo
            var num2=0;
            function lunbo2(){
                var length=$(".button2 li").length;
                num2++;
                if(num2>=length){num2=0;}
                if(num2==1){
                    JTzhe1('TCP时延',zheX,JTzhe1Ydata2);
                }else if(num2==2){
                    JTzhe1('TCP丢包率',zheX,JTzhe1Ydata3);
                }else if(num2==3){
                    JTzhe1('终端RTT',zheX,JTzhe1Ydata4);
                }else{
                    JTzhe1('下载速率',zheX,JTzhe1Ydata1);
                }

                $(".button2 li").removeClass('active').eq(num2).addClass("active");
            }
            var t2=setInterval(lunbo2,5000);
            //选项卡：
            $(".button2 li").click(function(){
                var index=$(this).index(".button2 li");
                $(".button2 li").removeClass("active");
                $(".button2 li").eq(index).addClass("active");
                if(index==1){
                    JTzhe1('TCP时延',zheX,JTzhe1Ydata2);
                }else if(index==2){
                    JTzhe1('TCP丢包率',zheX,JTzhe1Ydata3);
                }else if(index==3){
                    JTzhe1('终端RTT',zheX,JTzhe1Ydata4);
                }else{
                    JTzhe1('下载速率',zheX,JTzhe1Ydata1);
                }

            });
            //鼠标停留停止轮播：
            $("#chart5").mouseover(function(){
                clearInterval(t2);
            }).mouseout(function(){
                t2=setInterval(lunbo2,5000);
            });
    //模糊搜索：
       //      var datas =[{"id":"1","text":"中国石油天然气股份有限公司"},
       //          {"id":"2","text":"中国建筑股份有限公司"},
                // {"id":"3","text":"中国移动有限公司"},
                // {"id":"4","text":"中国工商银行股份有限公司"},
                // {"id":"5","text":"中国铁建股份有限公司"},
                // {"id":"6","text":"中国中铁股份有限公司"},
                // {"id":"7","text":"上海汽车集团股份有限公司"},
                // {"id":"8","text":"中国建设银行股份有限公司"},
                // {"id":"9","text":"中国农业银行股份有限公司"},
                // {"id":"10","text":"	中国人寿保险股份有限公司"},
                // {"id":"11","text":"中国银行股份有限公司"},
                // {"id":"12","text":"中国平安保险(集团)股份有限公司"},
                // {"id":"13","text":"中国交通建设股份有限公司"},
                // {"id":"14","text":"	中国电信股份有限公司"},
                // {"id":"15","text":"中国人民保险集团股份有限公司"},
                // {"id":"16","text":"	中国联合网络通信股份有限公司"},
                // {"id":"17","text":"	中国神华能源股份有限公司"},
                // {"id":"18","text":"	中国海洋石油有限公司"},
                // {"id":"19","text":"中国冶金科工股份有限公司"},
                // {"id":"20","text":"	联想集团有限公司"}
                // ];
            // $.selectSuggest('testInput',datas);
  //=============图表===============================
  //首页
      //柱状图：
          function zhu(Xdata,Ydata){
              createcharts.chart1(Xdata,Ydata);
          }
      //横向柱状图：
          function zhu2(Xdata,Ydata1,Ydata2){
             createcharts.chart2(Xdata,Ydata1,Ydata2);
          }
      //折线图：
          function zhe(name,Xdata,Ydata1) {
              createcharts.chart3(name,Xdata,Ydata1);
          }

  //具体场景：
      //右上 柱状图：
         function JTzhu(Xdata,Ydata1,Ydata2){
             createcharts.chart4(Xdata,Ydata1,Ydata2);
         }
      //右上 折线图：
         function JTzhe1(name,Xdata,Ydata1){
             createcharts.chart5(name,Xdata,Ydata1);
         }
      //左下 折线图：
        function JTzhe2(Xdata,Ydata1,Ydata2,Ydata3,Ydata4){
            createcharts.chart6(Xdata,Ydata1,Ydata2,Ydata3,Ydata4);
        }
    //左中 折线图：
        function JTzhe3(Xdata,Ydata1,Ydata2,Ydata3){
            createcharts.chart7(Xdata,Ydata1,Ydata2,Ydata3);
        }
    //=============index4.html==================
    //趋势图
    var qushiX=['0%','5%','15%','25%','35%','45%','60%','75%','90%','100%']
    var qushiY=[10,20,30,40,30,60,60,80,90,20]
    createcharts.chart8(qushiX,qushiY,qushiY);
  //==========index3/index4 滑动==============
    var cishu=$(".huadong ul").length/6;
    var hdnum=0;
    function aaa(){
        hdnum++;
        if(hdnum>=cishu){
            $('.huadong').css({'top':-(cishu-1)*150+'px','transition':'top 0.5s'})
        }else{
            $('.huadong').css({'top':-hdnum*150+'px','transition':'top 0.5s'})
        }
    }
    setInterval(aaa,3000);
});