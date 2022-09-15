import React from 'react';
import CollectionCard from '../CollectionCard'

const RebelList = ({ rebelListData }) => {
  return (
    <div className="punkList">
      {rebelListData.map(rebel => (
        <div>
          <CollectionCard
            key={rebel.token_id}
            id={rebel.token_id}
            name={rebel.name}
            traits={rebel.traits}
            image={rebel.image_original_url}
          />
        </div>
      ))}
    </div>
  );
};

export default RebelList;
