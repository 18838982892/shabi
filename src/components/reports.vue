<template>
    <div>
        <div ref="chart" style="width:700px;height:376px">


        </div>
    </div>
</template>

<script>
import {reports} from "../request/reports/reports"
export default {
    props: {

    },
    data() {
        return {
           option:{
　　          title: {
            text: '堆叠区域图'
            },
            tooltip: {
            trigger: 'axis',
            axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {},
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: []
        }
    ],
    yAxis: [],
    series: []
　　    }
        };
    },
    methods: {},
    components: {},
    mounted() {
        let myChart = this.$echarts.init(this.$refs.chart);
        reports().then((res)=>{
            console.log(res);
            this.option.legend = res.data.legend
            this.option.yAxis = res.data.yAxis
            this.option.series = res.data.series
            this.option.xAxis[0].data = res.data.xAxis[0].data
            myChart.setOption(this.option);
        })
    },
};
</script>

<style scoped lang="less">

</style>
