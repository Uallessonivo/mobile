import React from "react";
import { Message } from "../Message";
import { ScrollView } from "react-native";

import { styles } from "./styles";

type MessageProps = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  };
};

export function MessageList() {

  const message = {
    id: "1",
    text: "Hello, how are you?",
    user: {
      name: "John",
      avatar_url: "https://github.com/uallessonivo.png",
    },
  };

  
  return (
    <ScrollView
      keyboardShouldPersistTaps="never"
      contentContainerStyle={styles.content}
      style={styles.container}
    >
      <Message data={message} />
      <Message data={message} />
      <Message data={message} />
    </ScrollView>
  );
}
