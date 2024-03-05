import axios from "axios";
//@ts-ignore
import Chat from "chatui";
import React, {
  ReactElement,
  useCallback,
  // useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { getMsgType } from "../../utils/getMsgType";
// import ChatMessageItem from "../chat-message-item";
// import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import RenderVoiceRecorder from "../recorder/RenderVoiceRecorder";

const ChatUiWindow: React.FC = () => {


  const [divHeight, setDivHeight] = useState<any>("91%");

  const updateDivHeight = () => {
    const newHeight =
      window.innerHeight - 60;
    setDivHeight(newHeight);
  };

  useEffect(() => {
    updateDivHeight();
    window.addEventListener("resize", updateDivHeight);
    return () => {
      window.removeEventListener("resize", updateDivHeight);
    };
  }, []);




  const handleSend = useCallback(
    async (type: string, msg: any) => {
      if (msg.length === 0) {
        toast.error('please enter text');
        return;
      }

      if (type === "text" && msg.trim()) {

      }
    },
    []
  );
  // const normalizeMsgs = useMemo(
  //   () =>
  //     context?.messages?.map((msg: any) => ({
  //       type: getMsgType(msg),
  //       content: { text: msg?.text, data: { ...msg } },
  //       position: msg?.position ?? "right",
  //       messageId: msg?.messageId,
  //     })),
  //   [context?.messages]
  // );

  // const msgToRender = useMemo(() => {
  //   return context?.isMsgReceiving
  //     ? [
  //         ...normalizeMsgs,
  //         {
  //           type: "loader",
  //           position: "left",
  //           botUuid: "1",
  //         },
  //       ]
  //     : normalizeMsgs;
  // }, [context?.isMsgReceiving, normalizeMsgs]);


  const onRefresh = () => {
    if (window.confirm('Do you want to refresh the page')) {
      window.location.reload()
    }
  }

  return (
    <>
      {/* sidebar backdrop div */}
      {/* <div
        style={{
          background: "rgba(0, 0, 0, 0.6)" ,
          position:  "absolute" ,
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          zIndex:   0,
        }}
      ></div> */}
      <div
        style={{
          position: "fixed",
          height: divHeight,
          width: "100%",
          bottom: 0,
          top: "63px",
          borderTopRightRadius: "20px",
          borderTopLeftRadius: "20px",
          textAlign: "center",
        }}
      >
        <Chat
          btnColor="green"
          background="white"
          navbar={{
            leftContent: {
              icon: 'restart',
              title: 'Restart',
              onClick: () => { onRefresh() },

            },
          }}
          // disableSend={context?.loading}
          //@ts-ignore
          // messages={msgToRender}
          voiceToText={RenderVoiceRecorder}
          //@ts-ignore
          // renderMessageContent={(props): ReactElement => (
          //   <ChatMessageItem
          //     key={props}
          //     message={props}
          //     currentUser={context?.currentUser}
          //     onSend={handleSend}
          //   />
          // )}
          // onSend={handleSend}
          locale="en-US"
          placeholder={'Type your issue or use mic to speak about your issue'}
          userName={'faisal'}
        />
      </div>
    </>
  );
};

export default ChatUiWindow;
