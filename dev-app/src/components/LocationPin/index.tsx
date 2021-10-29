import React, {FC} from 'react';
import {Icon} from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';

interface Props {
  lat: String;
  lng: String;
  text: String;
}

const LocationPin: FC<Props> = ({lat, lng, text}) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

export {LocationPin};
