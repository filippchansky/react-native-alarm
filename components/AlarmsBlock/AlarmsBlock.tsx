import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import * as Notifications from "expo-notifications";


interface AlarmsBlockProps {}

const AlarmsBlock: React.FC<AlarmsBlockProps> = ({}) => {
  useEffect(() => {}, []);

  const handleClick = async () => {
    const handleNotification = async () => {
      return {
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
        fullScreenAction: true,
      };
    };
  
    Notifications.setNotificationHandler({ handleNotification });
  
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Look at that notification",
        body: "I'm so proud of myself!",
        priority: "HIGH",
        sound: false
      },
      trigger: null,
    });
  };


  return (
    <View>
      <Button title="click" onPress={handleClick} />
    </View>
  );
};
export default AlarmsBlock;
