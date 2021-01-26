import React from "react";

export interface Text {
  Text: string;
}

export default function DataLoader(props: Text): JSX.Element {
  return (
    <div className="flexRow dataLoader">
      <p>{props.Text}</p>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
