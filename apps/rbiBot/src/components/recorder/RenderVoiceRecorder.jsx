import { useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import stop from '../../assets/icons/micStop.gif';
import start from '../../assets/icons/mic.svg';
import { Grid, CircularProgress, Backdrop } from '@material-ui/core';
import styles from './styles.module.css';
import toast from 'react-hot-toast';
// import { AppContext } from '../../context';

import axios from 'axios';

const RenderVoiceRecorder = ({ setInputMsg }) => {
  // const context = useContext(AppContext);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [apiCallStatus, setApiCallStatus] = useState('idle');

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          makeComputeAPICall(event.data);
        }
      };

      recorder.start();
      setMediaRecorder(recorder);
    } catch (error) {
      console.error(error);
      setApiCallStatus('error');
      toast.error(`${t('message.recorder_error')}`);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state === 'recording') {
      mediaRecorder.stop();
    }
  };

  useEffect(() => {
    return () => {
      if (mediaRecorder) {
        mediaRecorder.stop();
      }
    };
  }, [mediaRecorder]);

  const makeComputeAPICall = async (blob) => {
    try {
      setApiCallStatus('processing');
      console.log('base', blob);
      toast.success(`${t('message.recorder_wait')}`);

      const apiEndpoint = process.env.NEXT_PUBLIC_BASE_URL;

      const formData = new FormData();
      formData.append('file', blob, 'audio.wav');
      let base64 = await fetch(apiEndpoint + '/aitools/base64', {
        method: 'POST',
        body: formData,
      });

      base64 = await base64.text();
      const resp = await axios.post(
        apiEndpoint + '/prompt',
        {
          text: '',
          media: {
            category: 'base64audio',
            text: base64,
          },
          inputLanguage:  'en'
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'user-id': localStorage.getItem('userID'),
            'Conversation-id': ''
          },
        }
      );
      console.log(resp);
      if (resp.status === 201) {
        if (resp.data.text === '')
          throw new Error('Unexpected end of JSON input');
        setInputMsg(resp.data.text);
      } else {
        toast.error(`${t('message.recorder_error')}`);
        console.log(resp);
      }
      setApiCallStatus('idle');
    } catch (error) {
      console.error(error);
      setApiCallStatus('error');
      toast.error(`${t('message.recorder_error')}`);
    }
  };

  return (
    <div>
      {apiCallStatus === 'processing' && (
        <Backdrop open={true} style={{ zIndex: 999, color: '#fff' }}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <div>
        {mediaRecorder && mediaRecorder.state === 'recording' ? (
          <div className={styles.center}>
            <Image
              priority
              src={stop}
              height={20}
              width={20}
              alt="stopIcon"
              onClick={() => {
                stopRecording();
              }}
              style={{ cursor: 'pointer' }}
              layout="responsive"
            />
          </div>
        ) : (
          <div className={styles.center}>
            <Image
              priority
              height={40}
              width={40}
              src={start}
              alt="startIcon"
              onClick={() => startRecording()}
              style={{ cursor: 'pointer' }}
              layout="responsive"
            />
          </div>
        )}
      </div>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Grid container spacing={1}>
          <Grid
            item
            xs={4}
            sm={12}
            md={2}
            lg={2}
            xl={2}
            className={styles.flexEndStyle}></Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default RenderVoiceRecorder;
