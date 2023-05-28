import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import china from '../geo/china.json';

export const Chart7 = () => {
    const divRef = useRef(null);
    useEffect(() => {
      var myChart = echarts.init(divRef.current);
    // @ts-ignore    
    }, []);


  return (
    <div className="年龄段-图1">7
      <div ref={divRef} className="chart"/>
    </div>
  );
};