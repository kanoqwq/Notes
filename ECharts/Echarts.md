# Echarts 在Vue中的简单使用

## 🎉 简介

> Echarts是百度整出来的一个开源的数据可视化工具，现已加入Apache基金会全家桶（雾
> 官网：[echarts.apache.org](https://echarts.apache.org)

## 🏡 安装

可以通过yarn等包管理器安装Echarts

```bash
yarn add echarts -w
```

## 🎁 在Vue项目中引入

**需要注意的是，V5版本以后引入Echarts的方式改变了，具体方式如下：**

```javascript
import * as echarts from "echarts";//全局引入
// 按需引入
//import * as echarts from 'echarts/lib/echarts';

```

**V5版本以前引入方式如下：**

```javascript
import echarts from "echarts";
```

## 🎨 绘制图表

在绘制图表之前，我们需要了解Echarts编写图表的三大步骤：

1. 指定一个HTML盒子，用于展示图表，**一定要指定宽高**，不然后面图表不显示在那找半天原因（（
2. 使用ref或者选择器获取DOM节点，使用`echarts.init()`进行初始化
3. 使用`mychart.setOption(options)`进行图表的详细配置，`options`是配置对象

**具体代码如下：**

```html
<template>
	<div class="charts" ref="charts"></div>
</template>
<script>
    let mychart = echarts.init(this.$refs.charts);
    mychart.setOption({
        title: {
            text: '数据可视化',
            subtext: 'echarts的基本使用',
            textStyle: {
                color: '#66ccff'
            },
            left: 'center'
        },
        xAxis: {
            data: ['唱', '跳', 'rap', '篮球']
        },
        yAxis: {
            axisLine: {
                show: true
            },
            axisTick: {
                show: true
            }
        },
        series: [
            {
                type: 'bar',
                data: [1, 2, 3, 4],
                color: 'pink',
            }
        ]
    });
</script>
```

**参数解释：**

* `title`：图表的标题
* `text`：主标题
* `textStyle`：主标题的颜色，为一个对象
* `left`：标题相对于左边的位置
* `xAxis` 和 `yAxis`
* `data`：数据，一般为数组
* `series`：系列的设置(绘制什么样类型的图表，数据的展示在这里设置)
* `axisTick`：显示y\x轴的刻度
* `axisLine`：显示轴线
* `type: 'bar'`：图表类型的设置{line是折线图，pie是饼图，bar是柱状图}

*还有很多有意思的配置项，详细的话还是参考官方文档吧（（*

**绘制出来的图长这样：**

![](https://kanokano.cn/wp-content/uploads/2022/11/下载.png)

再画个饼图吧~

```javascript
mychart.setOption({
      title: {
        text: "Video Ads",
        subtext: "300",
        left: "center",
        top: "center",
      },
      tooltip: {
        trigger: "item",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: true,
            position: "outside",
          },
          labelLine: {
            show: true,
          },
          data: [
            { value: 1048, name: "Search" },
            { value: 735, name: "Direct" },
            { value: 580, name: "Email" },
            { value: 484, name: "Union Ads" },
            { value: 300, name: "Video Ads" },
          ],
        },
      ],
    });
	//绑定事件
    mychart.on("mouseover", function (params) {
      const { name, value } = params.data;
      this.setOption({
        title: {
            text:name,
            subtext:value
        },
      });
    });
```

**你猜的没错，图表确实也可以绑定事件，当鼠标每次划过的时候就可以再圆心展示选中的标题**

效果图：

![](https://kanokano.cn/wp-content/uploads/2022/11/下载-1.png)

当然还有其他样式的图，甚至可以画出一整个地球出来Σ(っ °Д °;)っ

[Examples - Apache ECharts](https://echarts.apache.org/examples/zh/editor.html?c=globe-echarts-gl-hello-world&gl=1)