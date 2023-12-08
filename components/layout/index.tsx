'use client';

import React, { useState } from 'react';
import UsersChat from './users-chat';
import GroupsChat from './groups-chat';

export const ChatList = ({}) => {
  const [chatType, setChatType] = useState<'user' | 'group'>('user');

  return (
    <>
      {/* tab chat */}
      {/* <div className="mx-auto flex w-1/3 rounded-md border border-primary-400 bg-primary-400">
        <button
          onClick={() => setChatType('user')}
          className="w-1/2 rounded-l-md py-2 leading-3 hover:bg-primary-300"
        >
          user
        </button>
        <button
          onClick={() => setChatType('group')}
          className="w-1/2 rounded-r-md leading-3 hover:bg-primary-300"
        >
          group
        </button>
      </div> */}

      {chatType === 'user' ? (
        <>
          <UsersChat />
        </>
      ) : (
        <>
          <GroupsChat />
        </>
      )}
    </>
  );
};
