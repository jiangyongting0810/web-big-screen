import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import china from '../geo/china.json';
import { px } from '../shared/px';

export const Chart7 = () => {
    const divRef = useRef(null);
    useEffect(() => {
      var myChart = echarts.init(divRef.current);
    // @ts-ignore    
    myChart.setOption(createEchartsOptions({
        color:['#8D70F8', '#33A4FA'],
        yAxis:{show:false},
        xAxis:{show:false},
        legend:{show:false},
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['75%', '90%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderColor: '#0F113A',
              borderWidth: px(4)
            },
            label: {
              show: true,
              position: 'inside',
              textStyle:{
                color:'white',
                fontSize:px(20)
              },
              formatter(options){
                return options.value * 100 + '%';
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 0.8, name: '男性' },
              { value: 0.2, name: '女性' },
            ]
          }
        ]
      }
    ))
    }, []);


  return (
    <div className="年龄段-图1">
      <div className='chart'>
        <div ref={divRef} className="chart"/>
        <div className='text'>性别</div>
      </div>
      <div className='legend'>
        <span className='male' />男
        <span className='famale' />女
      </div>
    </div>
  );
};