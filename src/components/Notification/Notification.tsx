import { IconButton, Snackbar } from "@material-ui/core";
import * as React from "react";

type Notification = {
  show: boolean;
  text: string;
};
type Prop = {
  notification: Notification;
  setNotification: (notification: Notification) => void;
};

const Notification = ({ notification, setNotification }: Prop) => {
  //   React.useEffect(() => {
  //     setNotification({
  //       show: props.show,
  //       text: props.text,
  //     });
  //   }, [props.show]);

  return (
    <div className="notification">
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={notification.show}
        autoHideDuration={3000}
        onClose={() => {
          setNotification({ show: false, text: "" });
        }}
        message={<span id="message-id">{notification.text}</span>}
        action={[
          <IconButton
            key="close"
            arial-label="Close"
            color="inherit"
            onClick={() => setNotification({ show: false, text: "" })}
          >
            x
          </IconButton>,
        ]}
      />
    </div>
  );
};

export default Notification;
