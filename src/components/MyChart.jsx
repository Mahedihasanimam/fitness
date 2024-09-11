import React, { PureComponent } from 'react';
import { ConfigProvider, Segmented } from 'antd';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: 'Page B',
    uv: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: 'Page C',
    uv: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: 'Page D',
    uv: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: 'Page E',
    uv: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: 'Page F',
    uv: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
];

const MyChart = () => {
  return (
   <div className='lg:w-3/5 w-full bg-[#252B3B] p-4 rounded-md'>
    <div className='lg:flex md:flex items-center justify-between'>
      <h3 className='text-4xl font-bold p-8'>projects Statics</h3>
   

  <ConfigProvider
  theme={
    {
      "components": {
       
        "Segmented": {
          "itemActiveBg": "rgba(128,124,124,0.15)",
          "itemColor": "rgba(155,152,152,0.65)",
          "itemHoverColor": "rgba(94,92,92,0.88)",
          "itemSelectedBg": "rgb(56,53,53)",
          "itemHoverBg": "rgba(172,159,159,0.06)",
          "colorText": "rgba(245,241,241,0.88)"
        }
      }
    }
  }
  
  >
       <Segmented  className='bg-[#1E222E] text-white'
    options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']}
    onChange={(value) => {
      console.log(value); 
    }}
  />
  </ConfigProvider>
    </div>
     <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer >
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#E6533C" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
   </div>
  );
};

export default MyChart;
