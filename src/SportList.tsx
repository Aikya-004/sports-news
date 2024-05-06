import React from "react";
import Sport from "./Sport"
interface Props {
}

interface SportItem {
  title: string
}
interface State {
  sports: SportItem[];
}
class SportList extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = {
        sports: [{ title: "Pay rent" }, { title: "Submit assignment" }],
      };
    }
    render() {
      return (
        <>
          {this.state.sports.map((sport) => (
            <Sport title={sport.title} />
          ))}
        </>
      );
    }
  }
export default SportList;