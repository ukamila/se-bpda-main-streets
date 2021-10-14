import React from 'react';

interface Props {
    data?: string
}

class Homepage extends React.Component<Props, {}> {
    render(){
        return <span className="span">Homepage</span>
    }
}

export {Homepage}