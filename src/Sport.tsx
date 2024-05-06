import React from "react";
interface TaskProp {
    title: string;
  }
class Sport extends React.Component<TaskProp> {
    render() {
      return <div className="mx-auto w-64">{this.props.title} </div>;
    }
  }
export default Sport;