/*import React, { useState, useEffect } from "react";
import axios from "axios";
import { ReactMic } from "react-mic";
import Loader from "./Loader";
import "./App.css";
import { Link } from "react-router-dom";

function App({ fields: initialFields, setFields }) {
  const [record, setRecord] = useState(false);
  const [loading, setLoading] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [theme, setTheme] = useState("light");

  const [fields, setFieldsState] = useState({
    personalHistory: "",
    chiefComplaint: "",
    presentIllness: "",
    medicationHistory: "",
    pastHistory: "",
    familyHistory: "",
    requiredLabTestsAndProcedures: "",
  });

  useEffect(() => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    const startAudioContext = () => {
      if (audioContext.state === "suspended") {
        audioContext.resume().then(() => {
          console.log("AudioContext resumed");
        });
      }
    };

    document.addEventListener("click", startAudioContext);

    return () => {
      document.removeEventListener("click", startAudioContext);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const startRecording = () => {
    setRecord(true);
  };

  const stopRecording = () => {
    setRecord(false);
  };

  const onStop = async (recordedBlob) => {
    setLoading(true);

    const audioFile = new File([recordedBlob.blob], "temp.wav", {
      type: "audio/wav",
    });
    const formData = new FormData();
    formData.append("audio_data", audioFile);

    try {
      const response = await axios.post(
        "http://localhost:5000/transcribe",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const transcriptText = response.data.transcript;
      setTranscript(transcriptText);

      const fieldsResponse = await axios.post(
        "http://localhost:5000/extract_fields",
        { transcript: transcriptText }
      );
      setFields(fieldsResponse.data);
    } catch (error) {
      console.error("Error during transcription:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFieldsState((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleNewRecording = () => {
    setTranscript("");
    setFieldsState({
      personalHistory: "",
      chiefComplaint: "",
      presentIllness: "",
      medicationHistory: "",
      pastHistory: "",
      familyHistory: "",
      requiredLabTestsAndProcedures: "",
    });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      function() {
        console.log('Copying to clipboard was successful!');
        alert('Copied to clipboard!');
      },
      function(err) {
        console.error('Could not copy text: ', err);
      }
    );
  };

  return (
    <div className={`App ${theme}`}>
      <div className="sidebar">
        <h1>Medical Voice Transcription</h1>
        <div className="theme-toggle">
          <label className="toggle-switch">
            <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} />
            <span className="slider"></span>
          </label>
        </div>
        <div className="record-buttons">
          <button onClick={startRecording} disabled={record}>
            Start Recording
          </button>
          <button onClick={stopRecording} disabled={!record}>
            Stop Recording
          </button>
        </div>
        <div className="buttons-container">
          <button onClick={handleNewRecording}>New Recording</button>
          <Link to={`/case-analysis/${encodeURIComponent(transcript)}`}>
            <button disabled={!transcript}>Case Analysis</button>
          </Link>
        </div>
        <ReactMic
          record={record}
          className="sound-wave"
          onStop={onStop}
          strokeColor="#ff38bf"
          visualSetting="frequencyBars"
          backgroundColor="#FFFFFF"
        />
        {loading && (
          <div className="loader-container">
            <Loader />
          </div>
        )}
      </div>
      <div className="main-content">
        <div className="fields-section">
          <h2>Extracted Fields:</h2>
          {['personalHistory', 'chiefComplaint', 'presentIllness', 'medicationHistory', 'pastHistory', 'familyHistory', 'requiredLabTestsAndProcedures'].map(field => (
            <div className="field-container" key={field}>
              <label htmlFor={field}>{field.replace(/([A-Z])/g, ' $1').trim()}:</label>
              <div className="textarea-container">
                <textarea
                  name={field}
                  value={fields?.[field] || ""}
                  onChange={handleFieldChange}
                />
                <div className="copy-icon-container" onClick={() => copyToClipboard(fields?.[field])}>
                  <span className="copy-label">Copy</span>
                  <i className="fas fa-copy copy-icon"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
*/

/*
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}

export default function App() {
  return <Greeting name="world" />
}*/


import React, { useState, useEffect } from "react";
import axios from "axios";
import { ReactMic } from "react-mic";
import Loader from "./Loader";
import "./App.css";
import { Link } from "react-router-dom";

function App({ fields, setFields }) {
  const [record, setRecord] = useState(false);
  const [loading, setLoading] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    const startAudioContext = () => {
      if (audioContext.state === "suspended") {
        audioContext.resume().then(() => {
          console.log("AudioContext resumed");
        });
      }
    };

    document.addEventListener("click", startAudioContext);

    return () => {
      document.removeEventListener("click", startAudioContext);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const startRecording = () => {
    setRecord(true);
  };

  const stopRecording = () => {
    setRecord(false);
  };

  const onStop = async (recordedBlob) => {
    setLoading(true);

    const audioFile = new File([recordedBlob.blob], "temp.wav", {
      type: "audio/wav",
    });
    const formData = new FormData();
    formData.append("audio_data", audioFile);

    try {
      const response = await axios.post(
        "http://localhost:5000/transcribe",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const transcriptText = response.data.transcript;
      setTranscript(transcriptText);

      const fieldsResponse = await axios.post(
        "http://localhost:5000/extract_fields",
        { transcript: transcriptText }
      );
      setFields(fieldsResponse.data);
    } catch (error) {
      console.error("Error during transcription:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  const handleNewRecording = () => {
    setTranscript("");
    setFields({
      personalHistory: "",
      chiefComplaint: "",
      presentIllness: "",
      medicationHistory: "",
      pastHistory: "",
      familyHistory: "",
      requiredLabTestsAndProcedures: "",
    });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      function() {
        console.log('Copying to clipboard was successful!');
        alert('Copied to clipboard!');
      },
      function(err) {
        console.error('Could not copy text: ', err);
      }
    );
  };

  return (
    <div className={`App ${theme}`}>
      <div className="sidebar">
        <h1>Medical Voice Transcription</h1>
        <div className="theme-toggle">
          <label className="toggle-switch">
            <input type="checkbox" checked={theme === "dark"} onChange={toggleTheme} />
            <span className="slider"></span>
          </label>
        </div>
        <div className="record-buttons">
          <button onClick={startRecording} disabled={record}>
            Start Recording
          </button>
          <button onClick={stopRecording} disabled={!record}>
            Stop Recording
          </button>
        </div>
        <div className="buttons-container">
          <button onClick={handleNewRecording}>New Recording</button>
          <Link to={`/case-analysis/${encodeURIComponent(transcript)}`}>
            <button disabled={!transcript}>Case Analysis</button>
          </Link>
        </div>
        <ReactMic
          record={record}
          className="sound-wave"
          onStop={onStop}
          strokeColor="#ff38bf"
          visualSetting="frequencyBars"
          backgroundColor="#FFFFFF"
        />
        {loading && (
          <div className="loader-container">
            <Loader />
          </div>
        )}
      </div>
      <div className="main-content">
        <div className="fields-section">
          <h2>Extracted Fields:</h2>
          {['personalHistory', 'chiefComplaint', 'presentIllness', 'medicationHistory', 'pastHistory', 'familyHistory', 'requiredLabTestsAndProcedures'].map(field => (
            <div className="field-container" key={field}>
              <label htmlFor={field}>{field.replace(/([A-Z])/g, ' $1').trim()}:</label>
              <div className="textarea-container">
                <textarea
                  name={field}
                  value={fields[field]}
                  onChange={handleFieldChange}
                />
                <div className="copy-icon-container" onClick={() => copyToClipboard(fields[field])}>
                  <span className="copy-label">Copy</span>
                  <i className="fas fa-copy copy-icon"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
