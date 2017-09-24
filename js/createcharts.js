  var createcharts={};//创建函数对象
   //柱状图1的函数：
        createcharts.chart1=function(xx,Xdata,Ydata1,Ydata2){
        $(function(){
          var chart1= echarts.init(document.getElementById('chart1'));
          var option = {
              //backgroundColor:'rgba(178,220,245,0.4)',//背景色
              color: ['#3da5a1'],
              tooltip : {  //鼠标悬浮显示
                  trigger: 'axis',
                  axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  }
              },
              title: {
                  text:"Timing keep Trend",
                  textStyle: {
                      fontSize: 20,
                      fontWeight:'normal',
                      color:'#218be2',            //标题颜色
                  },
                  x:'center'

              },
              grid: {  //图表的位置
                  left: '2%',right:'8%',
                  bottom: '1%',top:'25%',
                  containLabel: true
              },
              legend: {  //图例：
                  x:'8%',
                  y:'6px',
                  data:['Team', 'Site'],
                  textStyle: {
                      color: '#000'
                  },
              },
              xAxis : [
                  {   splitLine:{show:false},
                      type : 'category',
                      name :xx,
                      data :Xdata,
                      axisTick: {
                          alignWithLabel: true
                      },
                      axisLabel: {
                          show: true,
                          textStyle: {
                              color: '#218be2'   //x轴字体颜色
                          },
                          // interval:0
                      },
                      axisLine:{
                          lineStyle:{
                              color:'#d5d5d5',   //x轴线颜色
                          }
                      },

                  }
              ],
              yAxis : [

                  {   splitLine:{show:true},  //去掉网格
                      type : 'value',
                      name : 'y',
                      axisLabel: {
                          show: true,
                          textStyle: {
                              color: '#218be2'
                          }
                      },
                      axisLine:{
                          lineStyle:{
                              color:'#d5d5d5',
                          }
                      }
                  }
              ],
              series : [
                  {
                      name:'Team',
                      type:'bar',
                      barWidth: '30%',
                      itemStyle:{
                          normal: {

                              color: function (params) {
                                  // build a color map as your need.
                                  var colorList = [
                                      '#90cdf0','#90cdf0','#90cdf0','#90cdf0','#90cdf0','#90cdf0','#90cdf0'
                                  ];
                                  return colorList[params.dataIndex]
                              }
                          }
                      },
                      data:Ydata1
                  },
                  {
                      name:'Site',
                      type:'bar',
                      barWidth: '30%',
                      itemStyle:{
                          normal: {

                              color: function (params) {
                                  // build a color map as your need.
                                  var colorList = [
                                      '#f3ce92','#f3ce92','#f3ce92','#f3ce92','#f3ce92','#f3ce92','#f3ce92','#f3ce92'
                                  ];
                                  return colorList[params.dataIndex]
                              }
                          }
                      },
                      data:Ydata2
                  }

              ]
          };
          chart1.setOption(option);
        });
       };
  //柱状图2的函数：
      createcharts.chart2=function(zhu2color,aa,Xdata,Ydata1){
          $(function(){
              var chart2= echarts.init(document.getElementById('chart2'));
              var option = {
                  //backgroundColor:'rgba(178,220,245,0.4)',//背景色
                  color: ['#3da5a1'],
                  tooltip : {  //鼠标悬浮显示
                      trigger: 'axis',
                      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                      }
                  },
                  title: {
                      text:"Monthly Quality&Safety Index",
                      textStyle: {
                          fontSize: 20,
                          fontWeight:'normal',
                          color:'#218be2',            //标题颜色
                      },
                      x:'center'

                  },
                  grid: {  //图表的位置
                      left: '2%',right:'8%',
                      bottom: '1%',top:'25%',
                      containLabel: true
                  },
                  xAxis : [
                      {   splitLine:{show:false},
                          type : 'category',
                          data :Xdata,
                          axisTick: {
                              alignWithLabel: true
                          },
                          axisLabel: {
                              show: true,
                              textStyle: {
                                  color: '#218be2'   //x轴字体颜色
                              },
                              // interval:0
                          },
                          axisLine:{
                              lineStyle:{
                                  color:'#d5d5d5',   //x轴线颜色
                              }
                          },

                      }
                  ],
                  yAxis : [

                      {   splitLine:{show:true},  //去掉网格
                          type : 'value',
                          name : 'y/%',
                          axisLabel: {
                              show: true,
                              textStyle: {
                                  color: '#218be2'
                              }
                          },
                          axisLine:{
                              lineStyle:{
                                  color:'#d5d5d5',
                              }
                          }
                      }
                  ],
                  series : [
                      {
                          name:aa,
                          type:'bar',
                          barWidth: '50%',
                          itemStyle:{
                              normal: {

                                  color: function (params) {
                                      // build a color map as your need.
                                      var colorList = zhu2color
                                      return colorList[params.dataIndex]
                                  }
                              }
                          },
                          data:Ydata1
                      }

                  ]
              };
              chart2.setOption(option);
          });
      };

  //折线图的函数：
  createcharts.chart3=function(zhecolor,aa,Xdata,Ydata1){
      $(function(){
          var chart3= echarts.init(document.getElementById('chart3'));
          var option = {
              //backgroundColor:'rgba(178,220,245,0.4)',//背景色
              color: ['#3da5a1'],
              tooltip : {  //鼠标悬浮显示
                  trigger: 'axis',
                  axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                      type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
                  }
              },
              title: {
                  text:"Weekly Report Submitted",
                  textStyle: {
                      fontSize: 20,
                      fontWeight:'normal',
                      color:'#218be2',            //标题颜色
                  },
                  x:'center'

              },
              grid: {  //图表的位置
                  left: '2%',right:'8%',
                  bottom: '1%',top:'25%',
                  containLabel: true
              },
              xAxis : [
                  {   splitLine:{show:true},
                      type : 'category',
                      data :Xdata,
                      axisTick: {
                          alignWithLabel: true
                      },
                      axisLabel: {
                          show: true,
                          textStyle: {
                              color: '#218be2'   //x轴字体颜色
                          },
                          // interval:0
                      },
                      axisLine:{
                          lineStyle:{
                              color:'#d5d5d5',   //x轴线颜色
                          }
                      },

                  }
              ],
              yAxis : [

                  {   splitLine:{show:true},
                      type : 'value',
                      name : 'y',
                      axisLabel: {
                          show: true,
                          textStyle: {
                              color: '#218be2'
                          }
                      },
                      axisLine:{
                          lineStyle:{
                              color:'#d5d5d5',
                          }
                      }
                  }
              ],
              series : [
                  {
                      name:aa,
                      type:'line',
                      barWidth: '50%',
                      itemStyle:{
                          normal: {
                              color:zhecolor
                          }
                      },
                      data:Ydata1
                  }

              ]
          };
          chart3.setOption(option);
      });
  };

