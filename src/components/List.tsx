import React from "react";
import { Sub } from "../types";

interface Props {
  subs: Array<Sub>;
}

const List: React.FC<Props> = ({ subs }: Props) => {
  const renderList = (): JSX.Element[] => {
    return subs.map((sub, index) => (
      <li key={index}>
        <h1>
          {sub.nick} (<small>{sub.subMonths}</small>)
        </h1>
        <img src={sub.avatar} alt={`${sub.nick}'s avatar`} />
        <p>{sub.description?.substring(0, 200)}</p>
      </li>
    ));
  };

  return (
    <div>
      <ul>{renderList()}</ul>
    </div>
  );
};

export default List;
