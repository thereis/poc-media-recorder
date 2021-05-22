import React from "react";

/**
 * Components
 */
import AudioRecorder from "../src/components/AudioRecorder";
import AudioPlayer from "../src/components/AudioPlayer";

interface IOnFinish {
  id: string;
  audio: Blob;
}

interface IMessage {
  id: string;
  audio: Blob;
}

const Index: React.FC = () => {
  const [messages, setMessages] = React.useState<IMessage[]>([]);

  const onFinish = ({ id, audio }: IOnFinish) => {
    setMessages((prevMessages) => [...prevMessages, { id, audio }]);
  };

  return (
    <div className="">
      <div className="sm:w-full md:w-11/12 h-96 md:mx-auto flex flex-col">
        <div className="bg-gray-600 p-2 flex-1 flex flex-col gap-5">
          {messages &&
            messages.map(({ id, audio }) => (
              <AudioPlayer key={id} audio={audio} />
            ))}
        </div>

        <div className="border p-3 flex gap-5">
          <input
            type="text"
            className="w-full border p-2 rounded-lg bg-gray-50"
            maxLength={200}
            placeholder="Share your thoughts!"
          />

          <AudioRecorder onFinish={onFinish} />
        </div>
      </div>
    </div>
  );
};

export default Index;
