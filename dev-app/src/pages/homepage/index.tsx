import React from 'react';
import './index.tsx.css';
import Map from './map.png';

interface Props {
    data?: string
}

const data = [
  {
    name: 'Massachusetts Behavioral Health Partnership',
    type: 'Health Care and Social Assistance',
  },
  {
    name: 'United States Monorail Corp',
    type: 'Manufacturing',
  },
  {
    name: 'Massachusetts Professional Licensing',
    type: 'Public Administration',
  },
  {
    name: 'Mass Commonwealth Insurance',
    type: 'Public Administration',
  },
  {
    name: 'E G Leon & Co',
    type: 'Construction',
  },
  {
    name: 'Elephant Walk South End',
    type: 'Accommodation and Food Services',
  },
  {
    name: 'Zeybekoglu & Associates',
    type: 'Professional, Scientific, and Technical Services',
  },
  {
    name: 'Ming\'s Supermarket',
    type: 'Retail Trade',
  },
  {
    name: 'C Mart of Herald St',
    type: 'Retail Trade',
  },
  {
    name: 'Connelly Partners',
    type: 'Professional, Scientific, and Technical Services',
  },
  {
    name: 'Asian American Civic Association',
    type: 'Manufacturing',
  },
  {
    name: 'Flour Bakery',
    type: 'Manufacturing',
  },
];

class Homepage extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <span className="span">Homepage</span>
        <div className="block1"> <img src={Map} className="image" />
          <span className="overview">List Overview</span>
          {data.map((item) =>
            <div className="list" key="item.id">
              <div className="name">{item.name}</div>
              <div className="type">{item.type}</div>
            </div>,
          )}</div>
      </div>
    );
  }
}

export {Homepage};
