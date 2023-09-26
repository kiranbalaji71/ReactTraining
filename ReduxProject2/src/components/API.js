import React from "react";
import useFetch from "./useFetch";
import { List } from "antd";

const API = () => {
  const [fetch] = useFetch(
    "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=1467466b0302a83cb434374488d240d6&hash=1a5212bd573534299dd0b6f16b8c4d30"
  );
  const data = (fetch.data && fetch.data.results) || [];

  const mavdata = data.map((character) => ({
    id: character.id,
    name: character.name,
    image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
    description: character.description,
  }));

  return (
    <div>
      <List
        style={{ width: 500, margin: "auto" }}
        pagination={{ pageSize: 3 }}
        dataSource={mavdata}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            extra={<img width={200} alt={item.name} src={item.image} />}
          >
            <List.Item.Meta title={item.name} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default API;
