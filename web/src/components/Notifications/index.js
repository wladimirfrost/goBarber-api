import React from 'react';
import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList>
        <Scroll>
          <Notification unread>
            <p>new schedule</p>
            <time>2 days ago</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>new schedule</p>
            <time>2 days ago</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>new schedule</p>
            <time>2 days ago</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>new schedule</p>
            <time>2 days ago</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>new schedule</p>
            <time>2 days ago</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>new schedule</p>
            <time>2 days ago</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>new schedule</p>
            <time>2 days ago</time>
            <button type="button">Mark as read</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
