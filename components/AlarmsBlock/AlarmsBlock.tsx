import React, { useEffect, useRef, useState } from "react";
import { Button, Text, View } from "react-native";
import { Platform } from "react-native";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";

interface AlarmsBlockProps {}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldSetBadge: false,
    shouldPlaySound: false
  }),

});

const AlarmsBlock: React.FC<AlarmsBlockProps> = ({}) => {
  // const [tokenNotification, setTokenNotification] = useState<string | undefined>('')
  const [notification, setNotification] =
    useState<Notifications.Notification>();
  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();

  const handleClick = () => {
    schedulePushNotification();
    console.log();
    
  };

  useEffect(() => {
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log(notification);
        setNotification(notification);
      });
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
      }
      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, []);

  return (
    <View>
      <Button title="click" onPress={handleClick} />
    </View>
  );
};

async function schedulePushNotification() {
  // const {status} = await  Notifications.getPermissionsAsync()
  // console.log(status)
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: "Here is the notification body",
      data: { data: "goes here" },
      vibrate: [0, 20, 100, 150],
      color: 'red'
    },
    trigger: { seconds: 1 },
  });
}
export default AlarmsBlock;
