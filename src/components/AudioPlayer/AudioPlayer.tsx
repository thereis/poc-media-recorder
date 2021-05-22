import React from "react";

interface IProps {
  audio: Blob;
}

const AudioPlayer: React.FC<IProps> = ({ audio }) => {
  const ref = React.useRef<HTMLAudioElement>(null);

  React.useEffect(() => {
    if (ref && ref.current && audio) {
      ref.current.src = window.URL.createObjectURL(audio);
    }
  }, [ref, audio]);

  return <audio ref={ref} autoPlay={false} controls />;
};

export default AudioPlayer;
