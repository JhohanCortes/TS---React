import React from "react";

interface Props {
  subs: Array<{
    nick: string;
    subMonths: number;
    avatar: string;
    description?: string;
  }>;
}

const List: React.FC<Props> = ({ subs }: Props) => {
  return (
    <div>
      <ul>
        {subs.map((sub, index) => (
          <li key={index}>
            <h1>
              {sub.nick} (<small>{sub.subMonths}</small>)
            </h1>
            <img src={sub.avatar} alt={`${sub.nick}'s avatar`} />
            <p>{sub.description?.substring(0, 200)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
